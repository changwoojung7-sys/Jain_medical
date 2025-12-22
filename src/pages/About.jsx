import Section from "../components/Section.jsx";
import ceoImg from "../assets/about/ceo_lab.jpg";
import mapImg from "../assets/about/map_placeholder.jpg";

export default function About() {
  return (
    <Section
      title="회사 소개"
      subtitle="기본에 충실한 공급과 품질 관리로, 의료 현장의 신뢰를 쌓아갑니다."
    >

      {/* 인사말 & 경영 철학 */}
      <section className="about-greeting">
        <img src={ceoImg} alt="자인메디컬 현장" />

        <div className="card">
          <h3>인사말 & 경영 철학</h3>
          <p>
            자인메디컬은 의료 현장의 정확성과 안전을 최우선 가치로 삼고,
            검체 채취부터 진단 소모품까지 신뢰할 수 있는 공급을 이어오고 있습니다.
          </p>
          <p>
            단기적인 거래보다 현장에서 오래 함께할 수 있는
            파트너가 되겠습니다.
          </p>
          <strong>대표 윤석신</strong>
        </div>
      </section>

      {/* 연혁 및 조직 구성 */}
      <section className="about-history">
        <h3>연혁 및 조직 구성</h3>

        <ul className="timeline">
          <li><span>2020</span> 자인메디컬 설립</li>
          <li><span>2021</span> 병원·검사기관 납품 시작</li>
          <li><span>2022</span> 제품 라인업 확장</li>
          <li><span>2023</span> 물류·품질 관리 체계 고도화</li>
          <li><span>2024</span> 안정적 거래처 확대</li>
        </ul>

        <p className="goal">
          목표: 지속 가능한 공급 역량과 조직 전문성 확보
        </p>
      </section>

      {/* 오시는 길 / 연락처 */}
      <section className="about-location">
        <img src={mapImg} alt="자인메디컬 위치" />

        <div className="card">
          <h3>오시는 길 / 연락처</h3>
          <ul>
            <li>경기 구리시 우미내길 12-21</li>
            <li>02-454-9200</li>
            <li>contact@jainmedical.co.kr</li>
          </ul>
          <p>목표: 빠르고 정확한 커뮤니케이션 제공</p>
        </div>
      </section>

    </Section>
  );
}
