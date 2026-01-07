import { useState } from "react";
import Section from "../components/Section.jsx";
import { siteConfig } from "../config/siteConfig.js";
import ceoImg from "../assets/about/ceo_lab.jpg";
import mapImg from "../assets/about/map_placeholder.jpg";

export default function About() {
  const [isMapOpen, setIsMapOpen] = useState(false);

  return (
    <Section
      title="회사 소개"
      subtitle="기본에 충실한 공급과 품질 관리로, 의료 현장의 신뢰를 쌓아갑니다."
    >

      {/* 인사말 & 경영 철학 */}
      <section className="about-greeting">
        <div className="greeting-image-wrapper">
          <img src={ceoImg} alt="자인메디컬 현장" />
        </div>

        <div className="card greeting-card">
          <div className="greeting-content">
            <h3>인사말 & 경영 철학</h3>
            <p>
              {siteConfig.companyName}은 진단검사실 현장에서 실제로 사용되는 가입자가
              어느 정도인지 확인하고 공급받을 수 있는지 잘 알고 있습니다.
            </p>
            <p>
              검사 결과를 신뢰하는 사람보다,
              그 장비를 받는 사람에게서 수리를 시작한다고 생각합니다.
            </p>
            <p>
              우리는 화려한 말보다
              뛰어난 품질, 약속된 납기, 그리고 권한을 갖고 있는 것을 우선합니다.
              현장에서 분리함 없이 사용할 수 있는 공급업체,
              바로 연결되는 파트너가 있습니다.
            </p>
            <p>
              작은 회사이지만,
              오래 함께 할 수 있는 공급업체를 위해 기본적으로 보호하고 있습니다.
            </p>
            <div className="signature">
              <strong>대표 {siteConfig.ceoName}</strong>
            </div>
          </div>
        </div>
      </section>

      {/* 연혁 및 조직 구성 */}
      <section className="about-history">
        <h3>연혁 및 조직 구성</h3>

        <ul className="timeline">

          <li><span>2013.04</span> 자인메디컬 설립 (4월 10일)</li>
          <li><span>2015</span> 주요 종합병원 납품 계약 체결</li>
          <li><span>2018</span> 진단검사 소모품 유통망 확장</li>
          <li><span>2021</span> 물류 센터 확장 및 품질 관리 시스템 도입</li>
          <li><span>2024</span> 현재 40여 개 주요 의료기관과 파트너십 체결 및 순항 중</li>
        </ul>

        <p className="goal">
          목표: 지속 가능한 공급 역량과 조직 전문성 확보
        </p>
      </section>

      {/* 오시는 길 / 연락처 */}
      <section className="about-location">
        <img
          src={mapImg}
          alt="자인메디컬 위치"
          onClick={() => setIsMapOpen(true)}
        />

        <div className="card">
          <h3>오시는 길 / 연락처</h3>
          <ul>
            <li>{siteConfig.address}</li>
            <li>Tel: {siteConfig.phone}</li>
            <li>Mobile: {siteConfig.mobile}</li>
            <li>Fax: {siteConfig.fax}</li>
            <li>{siteConfig.email}</li>
          </ul>
          <div style={{ marginTop: 20, fontSize: 14, color: "var(--muted)" }}>
            <div>운영시간: {siteConfig.businessHours}</div>
            <div style={{ marginTop: 6 }}>© 2026 {siteConfig.companyName}. All rights reserved.</div>
          </div>
        </div>
      </section>

      {isMapOpen && (
        <div className="modal-overlay" onClick={() => setIsMapOpen(false)}>
          <img src={mapImg} alt="지도 크게 보기" className="modal-content" />
        </div>
      )}

    </Section >
  );
}
