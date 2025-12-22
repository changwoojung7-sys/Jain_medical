import React from "react";
import { siteConfig } from "../config/siteConfig.js";

import heroImg from "../assets/hero/hero_lab.jpg";

export default function Hero() {
  return (
    <section className="hero-visual">
      <img src={heroImg} alt="임상병리 진단 현장" className="hero-bg" />

      <div className="hero-overlay container">
        <div className="hero-text card">
          <h1>
            임상병리 현장을<br />
            가장 잘 아는 진단 소모품 <br />
            파트너
          </h1>

          <p>
            {siteConfig.companyName}은(는) 병원과 검사기관의 업무 흐름을 이해하고,<br />
            검체 채취용품부터 진단 시약까지
            정확하고 신속한 납품을 제공합니다.

            신뢰, 정직, 전문성을 바탕으로 현장에서 안심하고 선택할 수 있는 <br />
            공급사가 되겠습니다.
          </p>

          <div className="hero-actions">
            <a className="btn primary" href="#products">제품 보기</a>
            <a className="btn" href="#support">견적·문의</a>
            <a className="btn" href="#quality">품질·인증</a>
          </div>
        </div>

         <div className="card kpis">
          <div className="kpi">
            <div className="t">핵심 가치</div>
            <div className="v">신뢰 · 정직 · 전문성</div>
          </div>
          <div className="kpi">
            <div className="t">공급 역량</div>
            <div className="v">정확·신속 납품 프로세스</div>
          </div>
          <div className="kpi">
            <div className="t">파트너 대상</div>
            <div className="v">병원 · 검사기관 · 연구소</div>
          </div>
        </div>

      </div>
    </section>
  );
}

