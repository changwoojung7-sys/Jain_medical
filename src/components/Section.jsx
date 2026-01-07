import React from "react";

export default function Section({ title, subtitle, children }) {
  return (
    <div className="container">
      <div className="section-title">
        <div>
          <h2>{title}</h2>
          {subtitle ? <p>{subtitle}</p> : null}
        </div>
      </div>
      {children}
    </div>
  );
}
