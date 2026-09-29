import React, { useEffect, useRef } from "react";

// Animated illustrations for the featured project cards.
// `active` turns true once the card is on screen (see Projects.jsx).
// Anyone with "reduce motion" switched on sees a still frame.

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Runs `frame(elapsedMs)` every animation frame while `active` is true.
const useFrameLoop = (active, frame) => {
  const frameRef = useRef(frame);
  frameRef.current = frame;

  useEffect(() => {
    if (!active || prefersReducedMotion()) return undefined;
    let raf;
    const start = performance.now();
    const loop = (now) => {
      frameRef.current(now - start, now);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [active]);
};

/* ---------- DiscoverIQ: a Neo4j-style force-directed graph ---------- */
// A small schema graph (query -> tables -> columns) laid out with a force
// simulation: nodes repel each other, relationships act as springs, and a
// gentle drift keeps it floating. Nodes can be dragged, as in Neo4j Browser.

const W = 300;
const H = 130;
const GRAPH_NODES = [
  { type: "query", r: 11 },
  { type: "table", r: 8.5 },
  { type: "table", r: 8.5 },
  { type: "table", r: 8.5 },
  { type: "column", r: 5.5 },
  { type: "column", r: 5.5 },
  { type: "column", r: 5.5 },
  { type: "column", r: 5.5 },
  { type: "column", r: 5.5 },
  { type: "column", r: 5.5 },
];
// [from, to, rest length]
const GRAPH_EDGES = [
  [0, 1, 52], [0, 2, 52], [0, 3, 52],
  [1, 2, 64], [2, 3, 64],
  [1, 4, 32], [1, 5, 32], [2, 6, 32], [3, 7, 32], [3, 8, 32], [3, 9, 32],
];

// Small seeded random so the starting layout is the same on every load.
const seeded = (seed) => () => {
  seed = (seed * 16807) % 2147483647;
  return (seed - 1) / 2147483646;
};

const stepSimulation = (nodes, t, dragged) => {
  // repulsion between every pair
  for (let i = 0; i < nodes.length; i += 1) {
    for (let j = i + 1; j < nodes.length; j += 1) {
      const a = nodes[i];
      const b = nodes[j];
      let dx = b.x - a.x;
      let dy = b.y - a.y;
      const d2 = Math.max(dx * dx + dy * dy, 25);
      const f = 520 / d2;
      const d = Math.sqrt(d2);
      dx /= d;
      dy /= d;
      a.vx -= dx * f; a.vy -= dy * f;
      b.vx += dx * f; b.vy += dy * f;
    }
  }
  // relationships pull like springs
  GRAPH_EDGES.forEach(([i, j, rest]) => {
    const a = nodes[i];
    const b = nodes[j];
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const d = Math.sqrt(dx * dx + dy * dy) || 1;
    const f = (d - rest) * 0.012;
    a.vx += (dx / d) * f; a.vy += (dy / d) * f;
    b.vx -= (dx / d) * f; b.vy -= (dy / d) * f;
  });
  nodes.forEach((n, i) => {
    // pull toward the centre (stronger vertically, since the card is wide)
    n.vx += (W / 2 - n.x) * 0.0016;
    n.vy += (H / 2 - n.y) * 0.006;
    // gentle drift so the graph never goes completely still
    if (t !== null) {
      n.vx += Math.sin(t / 1400 + i * 1.7) * 0.012;
      n.vy += Math.cos(t / 1700 + i * 2.3) * 0.012;
    }
    if (i === dragged) {
      n.vx = 0;
      n.vy = 0;
      return;
    }
    n.vx *= 0.86;
    n.vy *= 0.86;
    n.x = Math.min(W - n.r - 2, Math.max(n.r + 2, n.x + n.vx));
    n.y = Math.min(H - n.r - 2, Math.max(n.r + 2, n.y + n.vy));
  });
};

const initialGraph = () => {
  const rand = seeded(7);
  const nodes = GRAPH_NODES.map((n) => ({
    ...n,
    x: W / 2 + (rand() - 0.5) * 160,
    y: H / 2 + (rand() - 0.5) * 70,
    vx: 0,
    vy: 0,
  }));
  for (let k = 0; k < 400; k += 1) stepSimulation(nodes, null, -1); // settle before first paint
  return nodes;
};

// Line from the edge of one circle to the edge of the next, so arrows touch the node.
const edgeEnds = (a, b) => {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const d = Math.sqrt(dx * dx + dy * dy) || 1;
  return {
    x1: a.x + (dx / d) * a.r,
    y1: a.y + (dy / d) * a.r,
    x2: b.x - (dx / d) * (b.r + 3),
    y2: b.y - (dy / d) * (b.r + 3),
  };
};

const NODE_STYLE = {
  query: { fill: "currentColor", fillOpacity: 1 },
  table: { fill: "var(--accent)", fillOpacity: 1 },
  column: { fill: "currentColor", fillOpacity: 0.45 },
};

const GraphViz = ({ active }) => {
  const nodesRef = useRef(null);
  if (!nodesRef.current) nodesRef.current = initialGraph();
  const svgRef = useRef(null);
  const circleRefs = useRef([]);
  const edgeRefs = useRef([]);
  const dragRef = useRef(-1);

  useFrameLoop(active, (t) => {
    const nodes = nodesRef.current;
    stepSimulation(nodes, t, dragRef.current);
    nodes.forEach((n, i) => {
      const el = circleRefs.current[i];
      if (!el) return;
      el.setAttribute("cx", n.x.toFixed(2));
      el.setAttribute("cy", n.y.toFixed(2));
    });
    GRAPH_EDGES.forEach(([i, j], k) => {
      const el = edgeRefs.current[k];
      if (!el) return;
      const e = edgeEnds(nodes[i], nodes[j]);
      el.setAttribute("x1", e.x1.toFixed(2));
      el.setAttribute("y1", e.y1.toFixed(2));
      el.setAttribute("x2", e.x2.toFixed(2));
      el.setAttribute("y2", e.y2.toFixed(2));
    });
  });

  const toSvgPoint = (evt) => {
    const svg = svgRef.current;
    const ctm = svg && svg.getScreenCTM();
    if (!ctm) return null;
    const pt = svg.createSVGPoint();
    pt.x = evt.clientX;
    pt.y = evt.clientY;
    return pt.matrixTransform(ctm.inverse());
  };

  const onPointerDown = (i) => (evt) => {
    dragRef.current = i;
    evt.currentTarget.setPointerCapture(evt.pointerId);
  };
  const onPointerMove = (i) => (evt) => {
    if (dragRef.current !== i) return;
    const p = toSvgPoint(evt);
    if (!p) return;
    const n = nodesRef.current[i];
    n.x = Math.min(W - n.r - 2, Math.max(n.r + 2, p.x));
    n.y = Math.min(H - n.r - 2, Math.max(n.r + 2, p.y));
  };
  const onPointerUp = () => {
    dragRef.current = -1;
  };

  const nodes = nodesRef.current;
  return (
    <svg ref={svgRef} className="viz viz-graph" viewBox={`0 0 ${W} ${H}`} fill="none" aria-hidden="true">
      <defs>
        <marker id="neo-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M0 0 L10 5 L0 10 Z" fill="currentColor" fillOpacity=".6" />
        </marker>
      </defs>
      {GRAPH_EDGES.map(([i, j], k) => {
        const e = edgeEnds(nodes[i], nodes[j]);
        return (
          <line
            key={`${i}-${j}`}
            ref={(el) => (edgeRefs.current[k] = el)}
            {...e}
            stroke="currentColor"
            strokeOpacity=".45"
            strokeWidth="1.2"
            markerEnd="url(#neo-arrow)"
          />
        );
      })}
      {nodes.map((n, i) => (
        <circle
          key={i}
          ref={(el) => (circleRefs.current[i] = el)}
          className="neo-node"
          cx={n.x}
          cy={n.y}
          r={n.r}
          {...NODE_STYLE[n.type]}
          stroke="currentColor"
          strokeOpacity=".55"
          strokeWidth="1.2"
          onPointerDown={onPointerDown(i)}
          onPointerMove={onPointerMove(i)}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
        />
      ))}
    </svg>
  );
};

/* ---------- Eth Breakout: a live price line ---------- */

const POINTS = 26;
const STEP = 300 / (POINTS - 2); // one extra point waits off-screen on the right
const TICK_MS = 950;
const MID = 64;
const LIVE_X = 282;

const nextPrice = (last) => {
  let v = last + (Math.random() - 0.5) * 26 + (MID - last) * 0.08;
  if (Math.random() < 0.14) v += (Math.random() < 0.5 ? -1 : 1) * (14 + Math.random() * 14); // sharp move
  return Math.min(108, Math.max(14, v));
};

const seedSeries = () => {
  const out = [MID];
  for (let i = 1; i < POINTS; i += 1) out.push(nextPrice(out[i - 1]));
  return out;
};

const pathFor = (values, shift) =>
  values.map((v, i) => `${i ? "L" : "M"}${((i - shift) * STEP).toFixed(1)} ${v.toFixed(1)}`).join(" ");

const valueAt = (values, shift, x) => {
  const f = x / STEP + shift;
  const i = Math.min(values.length - 2, Math.max(0, Math.floor(f)));
  const k = f - i;
  return values[i] + (values[i + 1] - values[i]) * k;
};

const ChartViz = ({ active }) => {
  const series = useRef(null);
  if (!series.current) series.current = seedSeries();
  const avg = useRef(MID);
  const lastTick = useRef(0);
  const lineRef = useRef(null);
  const areaRef = useRef(null);
  const avgRef = useRef(null);
  const dotRef = useRef(null);

  useFrameLoop(active, (t) => {
    let shift = (t - lastTick.current) / TICK_MS;
    if (shift >= 1) {
      const s = series.current;
      s.shift();
      s.push(nextPrice(s[s.length - 1]));
      lastTick.current = t;
      shift = 0;
    }
    const s = series.current;
    const d = pathFor(s, shift);
    const liveY = valueAt(s, shift, LIVE_X);
    const mean = s.reduce((sum, v) => sum + v, 0) / s.length;
    avg.current += (mean - avg.current) * 0.04;

    lineRef.current?.setAttribute("d", d);
    areaRef.current?.setAttribute("d", `${d} L${(POINTS * STEP).toFixed(1)} 130 L${(-STEP).toFixed(1)} 130 Z`);
    avgRef.current?.setAttribute("y1", avg.current.toFixed(1));
    avgRef.current?.setAttribute("y2", avg.current.toFixed(1));
    dotRef.current?.setAttribute("cy", liveY.toFixed(1));
  });

  const d0 = pathFor(series.current, 0);
  return (
    <svg className="viz viz-chart" viewBox="0 0 300 130" fill="none" aria-hidden="true">
      <defs>
        <clipPath id="eth-live-clip">
          <rect x="0" y="0" width={LIVE_X} height="130" />
        </clipPath>
      </defs>
      <path d="M0 118 H300" stroke="currentColor" strokeOpacity=".2" />
      <g clipPath="url(#eth-live-clip)">
        <path ref={areaRef} d={`${d0} L${POINTS * STEP} 130 L${-STEP} 130 Z`} fill="currentColor" fillOpacity=".07" />
        <line ref={avgRef} x1="0" x2="300" y1={MID} y2={MID} stroke="currentColor" strokeDasharray="4 5" strokeOpacity=".4" />
        <path ref={lineRef} d={d0} stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </g>
      <circle ref={dotRef} cx={LIVE_X} cy={valueAt(series.current, 0, LIVE_X)} r="4.5" fill="currentColor" />
    </svg>
  );
};

/* ---------- MedCompanion: heartbeat (CSS-animated) ---------- */

const PulseViz = () => {
  const beat = "M0 70 H90 L105 40 L125 105 L145 25 L162 88 L175 70 H300";
  return (
    <svg className="viz viz-pulse" viewBox="0 0 300 130" fill="none" aria-hidden="true">
      <path className="v-draw" d={beat} pathLength="1" stroke="currentColor" strokeWidth="2" strokeOpacity=".35" />
      <path className="v-beat" d={beat} pathLength="1" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      <path className="v-cross" d="M250 28 v26 M237 41 h26" stroke="var(--accent)" strokeWidth="2.4" />
    </svg>
  );
};

const ProjectViz = ({ type, active }) => {
  if (type === "chart") return <ChartViz active={active} />;
  if (type === "graph") return <GraphViz active={active} />;
  return <PulseViz />;
};

export default ProjectViz;