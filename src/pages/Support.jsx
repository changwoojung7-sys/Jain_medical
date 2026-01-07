import React from "react";
import Section from "../components/Section.jsx";
import CardGrid from "../components/CardGrid.jsx";
import ContactCta from "../components/ContactCta.jsx";

export default function Support() {
  const items = [
    {
      title: "공지사항 / FAQ",
      bullets: ["배송/납기 관련", "견적/주문 절차", "교환/반품 기준(예시)"],
      goal: "반복 문의 감소, 고객 궁금증 해소",
    },
    {
      title: "자료실",
      bullets: ["제품 카탈로그 다운로드(예시)", "사용 설명서(예시)", "인증서/PDF(예시)"],
      goal: "전문 자료 제공으로 업무 편의성 강화",
    },

  ];

  return (
    <Section
      title="고객 지원"
      subtitle="문의부터 자료 확인까지, 필요한 정보를 빠르게 제공하겠습니다."
    >
      <CardGrid items={items} />
      <ContactCta />
    </Section>
  );
}
