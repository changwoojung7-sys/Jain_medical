import autoCbc from "../assets/products/hematology/auto_cbc.jpg";
import semiCbc from "../assets/products/hematology/semi_cbc.jpg";
import coag from "../assets/products/hematology/coagulation.jpg";
import chem from "../assets/products/lab/chemistry.jpg";
import elec from "../assets/products/lab/electrolyte.jpg";
import immuno from "../assets/products/lab/immunoassay.jpg";
import autoLab from "../assets/products/lab/automation.jpg";
import pathoCutters from "../assets/products/pathology/patho_cutters.png";

export const products = [
  {
    id: "auto-cbc",
    category: "혈액검사 제품",
    name: "자동 혈구 분석기",
    image: autoCbc,
    summary: "혈액 내 주요 성분을 자동으로 분석하는 장비",
    features: [
      "자동 샘플 분석",
      "신속하고 정확한 결과",
      "중소형 병원 및 검사실 적합",
    ],
    application: "병원, 임상검사실",
  },
  {
    id: "semi-cbc",
    category: "혈액검사 제품",
    name: "반자동 혈구 분석기",
    image: semiCbc,
    summary: "기본 혈액검사를 효율적으로 수행하는 장비",
    features: [
      "간편한 조작",
      "소규모 검사실 적합",
    ],
    application: "의원, 소규모 검사실",
  },
  {
    id: "coagulation",
    category: "혈액검사 제품",
    name: "혈액응고 분석기",
    image: coag,
    summary: "혈액응고 관련 항목 측정 장비",
    features: [
      "PT/APTT 측정",
      "응급 진단 지원",
    ],
    application: "병원, 응급실",
  },
  {
    id: "chemistry",
    category: "임상검사실 장비",
    name: "생화학 분석기",
    image: chem,
    summary: "다양한 생화학 항목을 자동 분석",
    features: [
      "다항목 분석",
      "안정적인 자동화 시스템",
    ],
    application: "병원, 종합검진센터",
  },
  {
    id: "electrolyte",
    category: "임상검사실 장비",
    name: "전해질 분석기",
    image: elec,
    summary: "전해질 항목을 신속하게 측정",
    features: [
      "Na/K/Cl 분석",
      "응급 환경 적합",
    ],
    application: "응급실, 검사실",
  },
  {
    id: "immuno",
    category: "임상검사실 장비",
    name: "면역 분석기",
    image: immuno,
    summary: "면역 반응 기반 검사 장비",
    features: [
      "면역 분석",
      "다양한 임상 적용",
    ],
    application: "병원, 연구실",
  },
  {
    id: "automation",
    category: "임상검사실 장비",
    name: "검사실 자동화 장비",
    image: autoLab,
    summary: "검사 흐름 자동화 장비",
    features: [
      "샘플 처리 자동화",
      "업무 효율 향상",
    ],
    application: "대형 검사실",
  },
  {
    id: "patho-cutter-r",
    category: "임상병리 제품",
    name: "Patho Cutter R",
    image: pathoCutters, // Using the single image for all products in this series for now, or specific if available
    summary: "35° 칼날 각도, 50매입, ERMA 마이크로톰 칼날",
    features: [
      "35° 칼날 각도",
      "50매입/1박스",
      "마이크로톰 전용 칼날",
      "ERMA 기술력의 정밀 절삭"
    ],
    application: "임상병리과, 조직검사실",
  },
  {
    id: "patho-cutter-ii",
    category: "임상병리 제품",
    name: "Patho Cutter II",
    image: pathoCutters,
    summary: "표준형 마이크로톰 칼날",
    features: [
      "표준형 칼날",
      "안정적인 절삭력",
      "50매입/1박스"
    ],
    application: "임상병리과, 조직검사실",
  },
  {
    id: "patho-cutter-hp",
    category: "임상병리 제품",
    name: "Patho Cutter HP",
    image: pathoCutters,
    summary: "고성능 마이크로톰 칼날",
    features: [
      "고성능 내구성",
      "특수 코팅 처리",
      "일관된 절편 품질"
    ],
    application: "임상병리과, 연구실",
  },
];
