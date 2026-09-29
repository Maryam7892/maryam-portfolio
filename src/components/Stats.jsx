import React from "react";
import { STATS } from "../data";

const Stats = () => (
  <div className="stats">
    <div className="wrap">
      {STATS.map((s) => (
        <div className="stat" key={s.label.join(" ")}>
          <b>{s.value}</b>
          <span>
            {s.label[0]}
            <br />
            {s.label[1]}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export default Stats;
