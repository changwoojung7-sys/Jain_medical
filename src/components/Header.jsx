import React from "react";
import { siteConfig } from "../config/siteConfig.js";

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Header({ routes }) {
  return (
    <header className="header">
      <div className="container header-inner">
        <a className="brand" href="#home" onClick={(e) => { e.preventDefault(); scrollToId("home"); }}>
          <span className="brand-badge">J</span>
          <span>{siteConfig.companyName}</span>
        </a>

        <nav className="nav" aria-label="Main navigation">
          {routes
            .filter((r) => r.id !== "home")
            .map((r) => (
              <a
                key={r.id}
                href={`#${r.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId(r.id);
                }}
              >
                {r.label}
              </a>
            ))}
          <a
            className="cta"
            href="#support"
            onClick={(e) => {
              e.preventDefault();
              scrollToId("support");
            }}
          >
            문의하기
          </a>
        </nav>
      </div>
    </header>
  );
}
