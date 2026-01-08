import pathoCutterR22Detail from "../assets/products/pathology/patho_cutter_r_22_detail.png";

import pathoCutterR35Detail from "../assets/products/pathology/patho_cutter_r_35_detail_v2.png";
import pathoCutterHpR35 from "../assets/products/pathology/patho_cutter_hp_r_35.png";

const sharedDetailDescription = "뛰어난 예리함을 실현하여 조직학적 절편, 장기 슬라이스, 세포 시료 등의 연조직 시료의 탁월한 절삭력으로 조직 손상을 최소화한 정확한 절편화를 실현합니다. 이 블레이드는 장기간 사용해도 선명도와 내구성을 유지하면서 특성이 지속되고 신뢰성이 높은 결과를 얻을 수 있으므로 정확한 현미경 검사가 가능합니다.";

export const products = [
  {
    id: "patho-cutter-r-22",
    category: "자인메디칼 프리미엄 3종 라인업",
    name: "Patho cutter R 22°",
    image: pathoCutterR22Detail,
    detailImage: pathoCutterR22Detail,
    summary: "날카로운 예리함을 추구한 교체날",
    description: "극도로 얇은 절편(Ultra-thin section)이 필요할 때 사용합니다. 저항이 매우 적어 미세 구조 관찰용 조직에 최적화되어 있습니다.",
    detailDescription: sharedDetailDescription,
    features: [
      "22° 칼날 각도",
      "50매입/1박스",
      "마이크로톰 전용 칼날",
      "ERMA 기술력의 정밀 절삭"
    ],
    application: "임상병리과, 조직검사실",
  },
  {
    id: "patho-cutter-r-35",
    category: "자인메디칼 프리미엄 3종 라인업",
    name: "Patho cutter R 35°",
    image: pathoCutterR35Detail,
    summary: "올마이티 교체 블레이드",
    description: "가장 선호도가 높은 표준 각도의 고성능 모델입니다. 부드러운 절삭력으로 특수 염색 및 면역 조직 화학 검사용 절편 제작에 추천합니다.",
    detailDescription: sharedDetailDescription,
    features: [
      "35° 칼날 각도",
      "50매입/1박스",
      "표준형 마이크로톰 칼날",
      "안정적인 절삭력"
    ],
    application: "임상병리과, 조직검사실",
  },
  {
    id: "patho-cutter-hp-r-35",
    category: "자인메디칼 프리미엄 3종 라인업",
    name: "Patho cutter HP-R 35°",
    image: pathoCutterHpR35,
    summary: "높은 프로파일, 내구성, 날카로움 모두 가진 고품질 교체 블레이드",
    description: "R 시리즈의 절삭력에 내구성을 더한 상위 모델입니다. 비교적 단단한 조직이나 연속 절편 제작 시에도 칼날 마모가 적어 경제적이고 효율적입니다.",
    detailDescription: sharedDetailDescription,
    features: [
      "35° 칼날 각도",
      "고성능 내구성",
      "특수 코팅 처리",
      "일관된 절편 품질"
    ],
    application: "임상병리과, 연구실",
  },
];
