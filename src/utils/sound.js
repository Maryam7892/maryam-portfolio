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
    // Audio not available or blocked; fail silently
  }
};

export const playClick = () => tone(740, 0.07, "square", 0.09);
export const playPoke = () => tone(520, 0.1, "triangle", 0.11);
export const playBlip = () => tone(920, 0.05, "sine", 0.06);
export const playSend = () => tone(660, 0.11, "sawtooth", 0.08);

// Chiptune-style background loop, synthesized (no audio files, no
// licensing concerns): a soft square-wave melody over a triangle-wave
// bassline, matching the site's pixel-game theme better than a plain
// ambient pad. Off by default, toggled by the user via MusicToggle in
// the nav.
let ambientState = null;

export const isAmbientPlaying = () => !!ambientState;

const SCALE = [261.63, 293.66, 329.63, 349.23, 392.0, 440.0, 493.88, 523.25]; // C major
const BASS = [130.81, 146.83, 164.81, 174.61]; // C3, D3, E3, F3
const MELODY_PATTERN = [0, 2, 4, 2, 5, 4, 2, 0, 3, 5, 7, 5, 4, 2, 1, 0];

export const startAmbient = () => {
  if (ambientState) return;
  const audioCtx = getCtx();
  if (!audioCtx) return;

  const master = audioCtx.createGain();
  master.gain.value = 0;
  master.connect(audioCtx.destination);
  master.gain.linearRampToValueAtTime(1, audioCtx.currentTime + 1.2);

  const filter = audioCtx.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.value = 3400;
  filter.connect(master);

  const stepTime = 0.22;
  let step = 0;

  const playLead = (freq) => {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = "square";
    osc.frequency.value = freq;
    gain.gain.value = 0;
    osc.connect(gain);
    gain.connect(filter);
    const now = audioCtx.currentTime;
    gain.gain.linearRampToValueAtTime(0.03, now + 0.015);
    gain.gain.linearRampToValueAtTime(0, now + stepTime * 0.85);
    osc.start(now);
    osc.stop(now + stepTime);
  };

  const playBass = (freq) => {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = "triangle";
    osc.frequency.value = freq;
    gain.gain.value = 0;
    osc.connect(gain);
    gain.connect(filter);
    const now = audioCtx.currentTime;
    gain.gain.linearRampToValueAtTime(0.05, now + 0.02);
    gain.gain.linearRampToValueAtTime(0, now + stepTime * 3.6);
    osc.start(now);
    osc.stop(now + stepTime * 4);
  };

  const tick = () => {
    const noteIndex = MELODY_PATTERN[step % MELODY_PATTERN.length];
    playLead(SCALE[noteIndex]);
    if (step % 4 === 0) {
      playBass(BASS[(step / 4) % BASS.length]);
    }
    step += 1;
  };

  tick();
  const timer = setInterval(tick, stepTime * 1000);

  ambientState = { audioCtx, master, timer };
};

export const stopAmbient = () => {
  if (!ambientState) return;
  const { audioCtx, master, timer } = ambientState;
  clearInterval(timer);
  const now = audioCtx.currentTime;
  master.gain.cancelScheduledValues(now);
  master.gain.setValueAtTime(master.gain.value, now);
  master.gain.linearRampToValueAtTime(0, now + 0.4);
  ambientState = null;
};
