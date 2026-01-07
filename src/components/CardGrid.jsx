import React from "react";

export default function CardGrid({ items }) {
  return (
    <div className="grid">
      {items.map((it) => (
        <div className="item" key={it.title}>
          <h3>{it.title}</h3>
          {it.bullets?.length ? (
            <ul>
              {it.bullets.map((b) => <li key={b}>{b}</li>)}
            </ul>
          ) : null}
          {it.goal ? <div className="goal">목표: {it.goal}</div> : null}
        </div>
      ))}
    </div>
  );
}
