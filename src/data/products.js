import pathoCutterR22 from "../assets/products/pathology/patho_cutter_r_22.png";

import pathoCutterR35Detail from "../assets/products/pathology/patho_cutter_r_35_detail_v2.png";
import pathoCutterHpR35 from "../assets/products/pathology/patho_cutter_hp_r_35.png";

const sharedDetailDescription = "뛰어난 예리함을 실현하여 조직학적 절편, 장기 슬라이스, 세포 시료 등의 연조직 시료의 탁월한 절삭력으로 조직 손상을 최소화한 정확한 절편화를 실현합니다. 이 블레이드는 장기간 사용해도 선명도와 내구성을 유지하면서 특성이 지속되고 신뢰성이 높은 결과를 얻을 수 있으므로 정확한 현미경 검사가 가능합니다.";

export const products = [
  {
    id: "patho-cutter-r-22",
    category: "임상병리실 소모품",
    name: "파소 커터 R (22°)",
    image: pathoCutterR22,
    summary: "날카로운 예리함을 추구한 교체날",
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
    category: "임상병리실 소모품",
    name: "파소 커터 R (35°)",
    image: pathoCutterR35Detail,
    summary: "올마이티 교체 블레이드",
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
    category: "임상병리실 소모품",
    name: "파소 커터 HP-R (35°)",
    image: pathoCutterHpR35,
    summary: "높은 프로파일, 내구성, 날카로움 모두 가진 고품질 교체 블레이드",
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
