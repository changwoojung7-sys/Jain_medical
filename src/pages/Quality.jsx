import React from "react";
import Section from "../components/Section.jsx";
import pathoCutterR22Detail from "../assets/products/pathology/patho_cutter_r_22_detail.png";
import pathoCutterR35Detail from "../assets/products/pathology/patho_cutter_r_35_detail_v2.png";
import pathoCutterHpR35 from "../assets/products/pathology/patho_cutter_hp_r_35.png";

export default function Quality() {
  return (
    <Section
      title="품질 관리"
      subtitle="현장의 목소리에 귀 기울이는 1인 파트너, 자인메디칼"
    >
      <div className="quality-content" style={{ display: 'grid', gap: '60px' }}>

        {/* Section 1 */}
        <div className="quality-section">
          <h3 style={{ fontSize: '24px', marginBottom: '20px', borderLeft: '4px solid var(--brand)', paddingLeft: '16px' }}>
            [자인메디칼(JAIN MEDICAL) 제품 품질관리]
          </h3>
          <p style={{ marginBottom: '30px', color: 'var(--muted)', fontSize: '16px' }}>
            자인메디칼은 글로벌 병리 조직 검사의 기준이 되는 Erma 사의 제품 중, 정밀도와 내구성이 가장 뛰어난 '프리미엄 고성능(R & HP-R)' 라인업만을 전문적으로 공급합니다.
          </p>

          <h4 style={{ fontSize: '20px', marginBottom: '20px', color: 'var(--text)', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ width: '4px', height: '20px', background: 'var(--brand2)', display: 'inline-block', borderRadius: '2px' }}></span>
            고성능 라인업 품질 관리 (Premium Quality Control)
          </h4>
          <ul style={{ display: 'grid', gap: '20px', padding: 0, listStyle: 'none' }}>
            <li style={{ background: 'rgba(255,255,255,0.03)', padding: '20px', borderRadius: '16px', border: '1px solid var(--line)' }}>
              <strong style={{ display: 'block', marginBottom: '8px', fontSize: '18px', color: '#5de1ff' }}>초정밀 R-Edge 기술</strong>
              <span style={{ color: 'var(--muted)', lineHeight: '1.6' }}>특수 연마 공법이 적용된 R 시리즈는 일반 칼날 대비 마찰 저항이 현저히 낮아 조직의 압축 변형을 최소화합니다.</span>
            </li>
            <li style={{ background: 'rgba(255,255,255,0.03)', padding: '20px', borderRadius: '16px', border: '1px solid var(--line)' }}>
              <strong style={{ display: 'block', marginBottom: '8px', fontSize: '18px', color: '#5de1ff' }}>코팅 안정성</strong>
              <span style={{ color: 'var(--muted)', lineHeight: '1.6' }}>고성능 특수 코팅 처리를 통해 첫 번째 절편부터 마지막 50번째 절편까지 일관된 절삭 성능을 보장합니다.</span>
            </li>
            <li style={{ background: 'rgba(255,255,255,0.03)', padding: '20px', borderRadius: '16px', border: '1px solid var(--line)' }}>
              <strong style={{ display: 'block', marginBottom: '8px', fontSize: '18px', color: '#5de1ff' }}>1인 책임 검수</strong>
              <span style={{ color: 'var(--muted)', lineHeight: '1.6' }}>자인메디칼은 대표가 직접 제품의 로트(Lot) 번호와 패키징 상태를 전수 검사하여, 최상의 컨디션을 유지한 제품만을 직송합니다.</span>
            </li>
          </ul>
        </div>

        {/* Section 2 - Removed as per request */}
      </div>
    </Section>
  );
}
