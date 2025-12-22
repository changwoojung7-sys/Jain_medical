import React from "react";
import { siteConfig } from "../config/siteConfig.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div>
            <strong>{siteConfig.companyName}</strong> · 대표 {siteConfig.ceoName}
            <div style={{ marginTop: 6 }}>
              {siteConfig.address} · {siteConfig.phone} · {siteConfig.email}
            </div>
          </div>
          <div>
            <div>운영시간: {siteConfig.businessHours}</div>
            <div style={{ marginTop: 6 }}>© {new Date().getFullYear()} {siteConfig.companyName}. All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
