let ctx;

const getCtx = () => {
  if (!ctx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return null;
    ctx = new AudioContextClass();
  }
  if (ctx.state === "suspended") {
    ctx.resume();
  }
  return ctx;
};

const tone = (freq, duration, type = "square", volume = 0.05) => {
  try {
    const audioCtx = getCtx();
    if (!audioCtx) return;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    gain.gain.value = volume;
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
    osc.stop(audioCtx.currentTime + duration);
  } catch (e) {
    // Audio not available or blocked: fail silently, never break the UI.
  }
};

export const playClick = () => tone(740, 0.07, "square", 0.09);
export const playPoke = () => tone(520, 0.1, "triangle", 0.11);
export const playBlip = () => tone(920, 0.05, "sine", 0.06);
export const playSend = () => tone(660, 0.11, "sawtooth", 0.08);

// Soothing generative background music, synthesized (no audio files, no
// licensing concerns): a slow, softly shifting chord pad underneath an
// occasional pentatonic melody note, with a light echo for warmth. Off by
// default, toggled by the user via MusicToggle in the nav.
let ambientState = null;

export const isAmbientPlaying = () => !!ambientState;

const PENTATONIC = [261.63, 293.66, 329.63, 392.0, 440.0, 523.25]; // C major pentatonic, C4-C5
const CHORDS = [
  [130.81, 164.81, 196.0],  // C major
  [110.0, 130.81, 164.81],  // A minor
  [87.31, 110.0, 130.81],   // F major
  [98.0, 123.47, 146.83],   // G major
];

export const startAmbient = () => {
  if (ambientState) return;
  const audioCtx = getCtx();
  if (!audioCtx) return;

  const master = audioCtx.createGain();
  master.gain.value = 0;
  master.connect(audioCtx.destination);
  master.gain.linearRampToValueAtTime(1, audioCtx.currentTime + 2.5);

  const filter = audioCtx.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.value = 2200;
  filter.connect(master);

  // Light echo so notes have some soft trailing warmth.
  const delay = audioCtx.createDelay(2.0);
  delay.delayTime.value = 0.55;
  const feedback = audioCtx.createGain();
  feedback.gain.value = 0.3;
  const delayFilter = audioCtx.createBiquadFilter();
  delayFilter.type = "lowpass";
  delayFilter.frequency.value = 1400;
  delay.connect(delayFilter);
  delayFilter.connect(feedback);
  feedback.connect(delay);
  delay.connect(filter);

  let chordIndex = 0;
  let currentChordVoices = [];

  const playChord = () => {
    const now = audioCtx.currentTime;
    currentChordVoices.forEach(({ osc, gain }) => {
      try {
        gain.gain.cancelScheduledValues(now);
        gain.gain.setValueAtTime(gain.gain.value, now);
        gain.gain.linearRampToValueAtTime(0, now + 1.5);
        osc.stop(now + 1.6);
      } catch (e) {
        // already stopped, ignore
      }
    });
    currentChordVoices = [];

    const chord = CHORDS[chordIndex % CHORDS.length];
    chordIndex += 1;

    chord.forEach((freq) => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = "sine";
      osc.frequency.value = freq;
      gain.gain.value = 0;
      osc.connect(gain);
      gain.connect(filter);
      gain.connect(delay);
      gain.gain.linearRampToValueAtTime(0.045, now + 3);
      osc.start(now);
      currentChordVoices.push({ osc, gain });
    });
  };

  const playMelodyNote = () => {
    const note = PENTATONIC[Math.floor(Math.random() * PENTATONIC.length)];
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = "triangle";
    osc.frequency.value = note;
    gain.gain.value = 0;
    osc.connect(gain);
    gain.connect(filter);
    gain.connect(delay);
    const now = audioCtx.currentTime;
    gain.gain.linearRampToValueAtTime(0.05, now + 0.35);
    gain.gain.linearRampToValueAtTime(0, now + 2.2);
    osc.start(now);
    osc.stop(now + 2.3);
  };

  playChord();
  const chordTimer = setInterval(playChord, 8000);
  const melodyTimer = setInterval(() => {
    if (Math.random() > 0.4) playMelodyNote();
  }, 1900);

  ambientState = {
    audioCtx,
    master,
    chordTimer,
    melodyTimer,
    stopVoices: () => {
      const now = audioCtx.currentTime;
      currentChordVoices.forEach(({ osc, gain }) => {
        try {
          gain.gain.cancelScheduledValues(now);
          gain.gain.setValueAtTime(gain.gain.value, now);
          gain.gain.linearRampToValueAtTime(0, now + 1);
          osc.stop(now + 1.1);
        } catch (e) {
          // already stopped, ignore
        }
      });
    },
  };
};

export const stopAmbient = () => {
  if (!ambientState) return;
  const { audioCtx, master, chordTimer, melodyTimer, stopVoices } = ambientState;
  clearInterval(chordTimer);
  clearInterval(melodyTimer);
  stopVoices();
  const now = audioCtx.currentTime;
  master.gain.cancelScheduledValues(now);
  master.gain.setValueAtTime(master.gain.value, now);
  master.gain.linearRampToValueAtTime(0, now + 1);
  ambientState = null;
};
