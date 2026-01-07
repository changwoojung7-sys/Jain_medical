import React from "react";
import Section from "../components/Section.jsx";
import CardGrid from "../components/CardGrid.jsx";

export default function Quality() {
  const items = [
    {
      title: "인증 및 허가 현황",
      bullets: ["ISO 인증(예시)", "식약처 품목 허가(예시)", "품질 관리 프로세스(예시)"],
      goal: "품질·안전성에 대한 신뢰 확보",
    },
    {
      title: "물류 / 배송 시스템",
      bullets: ["정확한 피킹/검수", "신속한 출고 프로세스", "안정적 재고 운영(예시)"],
      goal: "납품 안정성으로 고객의 불안 요소 해소",
    },
    {
      title: "거래 기준(예시)",
      bullets: ["요청 시 품목별 문서 제공", "문제 발생 시 대응 프로세스 안내"],
      goal: "공급 품질에 대한 기준을 명확히",
    },
  ];

  return (
    <Section
      title="품질 관리"
      subtitle="납품 품질과 공급 안정성은 의료 현장에서 가장 중요한 약속입니다."
    >
      <CardGrid items={items} />
    </Section>
  );
}
