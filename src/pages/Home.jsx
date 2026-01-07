import React from "react";
import Hero from "../components/Hero.jsx";
import Section from "../components/Section.jsx";
import CardGrid from "../components/CardGrid.jsx";

export default function Home() {
  const highlights = [
    {
      title: "현장 중심 공급",
      bullets: ["임상병리실 업무 흐름에 맞춘 제품 구성", "필요 품목을 빠르게 제안"],
      goal: "담당자의 검색/선정 시간을 줄이고 신속한 구매를 지원",
    },
    {
      title: "품질과 안전",
      bullets: ["인증/허가 기반 품목 안내", "납품 품질 기준 준수"],
      goal: "거래처의 품질 리스크를 최소화",
    },
    {
      title: "견적/문의의 단순화",
      bullets: ["카테고리 기반 탐색", "간편 문의 폼 + 이메일 연동"],
      goal: "문의 장벽을 낮춰 비즈니스 연결을 강화",
    },
  ];

  return (
    <>
      <Hero />
      <Section
        title="한눈에 보는 자인메디컬"
        subtitle="의료 진단 소모품 납품의 핵심은 정확성, 신뢰, 그리고 안정적인 공급입니다."
      >
        <CardGrid items={highlights} />
      </Section>
    </>
  );
}
