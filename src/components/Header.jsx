import React from "react";
import { siteConfig } from "../config/siteConfig.js";

import logo from "../assets/logo.png";

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
          <img src={logo} alt="Jain Medical Logo" className="brand-logo" />
          <span>{siteConfig.companyName}</span>
        </a>

        <nav className="nav" aria-label="Main navigation">
          {routes
            .filter((r) => r.id !== "home" && r.id !== "support")
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
