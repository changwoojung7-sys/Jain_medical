import Section from "../components/Section.jsx";
import { siteConfig } from "../config/siteConfig.js";
import ceoImg from "../assets/about/ceo_lab.jpg";
import mapImg from "../assets/about/map_placeholder.jpg";

export default function About() {
  return (
    <>
      {/* 한눈에 보는 자인메디컬 */}
      <section className="about-overview">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h3 style={{ fontSize: '26px', marginBottom: '16px' }}>[한눈에 보는 자인메디컬: 10년의 신뢰, 전문성의 깊이]</h3>
          <p style={{ color: 'var(--muted)', fontSize: '17px', lineHeight: '1.6' }}>
            자인메디컬은 단순한 유통을 넘어, 병리 진단 현장의 효율과 정확성을 높이는 <strong style={{ color: '#5de1ff' }}>'임상 맞춤형 솔루션'</strong>을 공급합니다.
          </p>
        </div>

        <div className="overview-grid">
          {/* Card 1 */}
          <div className="overview-card">
            <div className="icon-wrapper">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#5de1ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
            <h4>현장 중심 공급</h4>
            <ul>
              <li>임상병리실 맞춤형 제품 구성</li>
              <li>필요 품목 원스톱 제안</li>
            </ul>
            <div className="goal">목표: 구매 신속성 지원</div>
          </div>

          {/* Card 2 */}
          <div className="overview-card">
            <div className="icon-wrapper">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#5de1ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                <path d="M9 12l2 2 4-4"></path>
              </svg>
            </div>
            <h4>품질과 안전</h4>
            <ul>
              <li>1인 책임 검수 및 직송</li>
              <li>납품 품질 기준 엄격 준수</li>
            </ul>
            <div className="goal">목표: 품질 리스크 최소화</div>
          </div>

          {/* Card 3 */}
          <div className="overview-card">
            <div className="icon-wrapper">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#5de1ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21h18"></path>
                <path d="M5 21V7l8-4 8 4v14"></path>
                <path d="M17 21v-8.5"></path>
              </svg>
            </div>
            <h4>안정적 인프라</h4>
            <ul>
              <li>전국 40여 개 의료기관 파트너십</li>
              <li>10년 이상의 전문 업력 보유</li>
            </ul>
            <div className="goal">목표: 지속 가능한 공급 역량 확보</div>
          </div>
        </div>
      </section>

      <Section
        title="회사 소개"
        subtitle="기본에 충실한 공급과 품질 관리로, 의료 현장의 신뢰를 쌓아갑니다."
      >
        {/* 소개 문구 */}
        <div style={{ textAlign: 'left', marginBottom: '20px', marginTop: '0px' }}>
          <p style={{ color: 'var(--muted)', lineHeight: '1.6' }}>
            "자인메디컬은 Erma 사의 공식 라인업 중 '고성능(R/HP-R)' 모델만을 엄선하여 취급하는 전문 업체입니다"
          </p>
        </div>

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
          <h3 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '24px' }}>[자인메디컬 & Erma: 신뢰와 기술의 동행]</h3>

          <div className="history-comparison-grid">
            {/* Header */}
            <div className="history-header">Erma Japan (since 1908)</div>
            <div className="history-header center">연도</div>
            <div className="history-header">자인메디컬 (since 2013)</div>

            {/* Row 1 (~ 2012) */}
            <div className="history-item left">
              <strong>100년 정밀 의료기기의 토대</strong>
              <p>일본 도쿄 Erma Inc. 설립 (1908)</p>
              <p>박절기(Microtome) 원천 기술 확보</p>
              <p>Patho Cutter 브랜드 글로벌 런칭</p>
            </div>
            <div className="history-year">~ 2012</div>
            <div className="history-item right">
              <strong>준비된 전문성</strong>
              <p>병리 조직 진단 분야 실무 경력 및 시장 분석</p>
              <p>프리미엄 소모품 공급망 확보 준비</p>
            </div>

            {/* Row 2 (2013) */}
            <div className="history-item left">
              <strong>핵심 라인업의 완성</strong>
              <p>고성능 R 시리즈 및 HP-R 공정 고도화</p>
              <p>나노 코팅 및 초정밀 연마 기술 표준화</p>
            </div>
            <div className="history-year">2013</div>
            <div className="history-item right">
              <strong>자인메디컬 설립 (4월 10일)</strong>
              <p>Erma 고성능 3종 라인업 집중 취급 결정</p>
            </div>

            {/* Row 3 (2015) */}
            <div className="history-item left">
              <strong>글로벌 파트너십 확장</strong>
              <p>전 세계 80여 개국 주요 의료기관 공급</p>
            </div>
            <div className="history-year">2015</div>
            <div className="history-item right">
              <strong>신뢰의 시작</strong>
              <p>주요 종합병원 납품 계약 체결</p>
            </div>

            {/* Row 4 (2018) */}
            <div className="history-item left">
              <p>글로벌 시장 점유율 지속 확대</p>
            </div>
            <div className="history-year">2018</div>
            <div className="history-item right">
              <strong>유통망 확대</strong>
              <p>진단검사 소모품 유통망 대폭 확장</p>
            </div>

            {/* Row 5 (2021) */}
            <div className="history-item left">
              <strong>기술 혁신 및 품질 표준화</strong>
              <p>ISO 품질 경영 인증 및 제조 공정 최적화</p>
            </div>
            <div className="history-year">2021</div>
            <div className="history-item right">
              <strong>품질 관리 시스템 고도화</strong>
              <p>물류 센터 확장 및 대표 전수 검수 시스템 도입</p>
            </div>

            {/* Row 6 (2024 ~) */}
            <div className="history-item left">
              <strong>미래 진단 환경 대응</strong>
              <p>차세대 병리 진단용 정밀 칼날 연구 개발</p>
              <p>고성능 모델(R, HP-R) 안정적 공급 유지</p>
            </div>
            <div className="history-year">2024 ~</div>
            <div className="history-item right">
              <strong>병리 진단의 핵심 파트너</strong>
              <p>현재 40여 개 주요 의료기관 파트너십 체결</p>
              <p>프리미엄 3종(22°, 35°, HP-R) 전문 공급 순항 중</p>
            </div>
          </div>
        </section>

        {/* 오시는 길 / 연락처 */}
        <section className="about-location">
          <a href={siteConfig.naverMapUrl} target="_blank" rel="noopener noreferrer" title="네이버 지도 열기">
            <img
              src={mapImg}
              alt="자인메디컬 위치"
              style={{ cursor: "pointer" }}
            />
          </a>

          <div className="card">
            <h3>오시는 길 / 연락처</h3>
            <ul>
              <li>{siteConfig.address}</li>
              <li>Tel: {siteConfig.phone}</li>
              <li>Mobile: {siteConfig.mobile}</li>

              <li>{siteConfig.email}</li>
              <li style={{ marginTop: '10px' }}>
                <a
                  href={siteConfig.naverMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    backgroundColor: '#03C75A',
                    color: 'white',
                    padding: '8px 16px',
                    borderRadius: '4px',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    fontSize: '0.9em'
                  }}
                >
                  네이버 길찾기
                </a>
              </li>
            </ul>
            <div style={{ marginTop: 20, fontSize: 14, color: "var(--muted)" }}>
              <div>운영시간: {siteConfig.businessHours}</div>
              <div style={{ marginTop: 6 }}>© 2026 {siteConfig.companyName}. All rights reserved.</div>
            </div>
          </div>
        </section>
      </Section>
    </>
  );
}
