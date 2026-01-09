import React, { useMemo, useState } from "react";
import { siteConfig } from "../config/siteConfig.js";

export default function ContactCta() {
  const [form, setForm] = useState({
    company: "",
    name: "",
    phone: "",
    email: "",
    message: `* 납품일정 및 문의내용 :  2026-00-00 까지 아래 품목에 대한 견적 / 납품 의뢰 합니다.

* 품목 및 수량
--------------------------------------------------
 품목                    /    수량                   
--------------------------------------------------
Patho cutter R 22°    :           
Patho cutter R 35°    :          
Patho cutter HP-R 35° :        
--------------------------------------------------`,
  });

  const [isMailModalOpen, setIsMailModalOpen] = useState(false);
  const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false);

  const getMailLinks = () => {
    const subject = `[${siteConfig.companyName}] 제품 문의/견적 요청`;
    const body =
      `회사/기관: ${form.company}
담당자: ${form.name}
연락처: ${form.phone}
이메일: ${form.email}

문의 내용:
${form.message}
`;

    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);

    return {
      default: `mailto:${siteConfig.email}?subject=${encodedSubject}&body=${encodedBody}`,
      gmail: `https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.email}&su=${encodedSubject}&body=${encodedBody}`,
      naver: `https://mail.naver.com/write/popup?to=${siteConfig.email}&subject=${encodedSubject}&body=${encodedBody}`,
    };
  };

  const handleMailClick = (type) => {
    const links = getMailLinks();
    if (type === "default") {
      window.location.href = links.default;
    } else {
      window.open(links[type], "_blank");
    }
    setIsMailModalOpen(false);
  };

  return (
    <>
      <div className="card" style={{ marginTop: 12 }}>
        <div className="grid" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
          <Field label="회사/기관명" value={form.company} onChange={(v) => setForm({ ...form, company: v })} />
          <Field label="담당자명" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
          <Field label="연락처" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} placeholder="010-0000-0000" />
          <Field label="이메일" value={form.email} onChange={(v) => setForm({ ...form, email: v })} placeholder="name@company.com" />
        </div>

        <div style={{ marginTop: 10 }}>
          <label className="muted" style={{ display: "block", fontSize: 13, color: "var(--muted)", marginBottom: 6 }}>
            문의 내용
          </label>
          <textarea
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            rows={10}
            style={{
              width: "100%",
              borderRadius: 14,
              border: "1px solid var(--line)",
              background: "rgba(255,255,255,0.03)",
              color: "var(--text)",
              padding: 12,
              outline: "none",
              resize: "vertical",
            }}
            placeholder="예) 검체 채취용품 견적 요청 / 품목, 수량, 납품 일정 등을 적어주세요."
          />
        </div>

        <div className="cta-bar" style={{ marginTop: 24, marginBottom: 0 }}>
          <div className="left">
            <strong>빠른 문의</strong>
            <div className="small">작성 후 “메일로 보내기”를 누르면 기본 메일앱으로 연결됩니다.</div>
          </div>
          <div className="right">
            <button className="btn primary" onClick={() => setIsMailModalOpen(true)}>메일로 보내기</button>
            <button
              className="btn"
              onClick={() => setIsPhoneModalOpen(true)}
            >
              전화 문의
            </button>
          </div>
        </div>
      </div>

      {isMailModalOpen && (
        <div className="modal-overlay" onClick={() => setIsMailModalOpen(false)}>
          <div className="modal-content" style={{ background: "#1a1b26", padding: "24px", minWidth: "300px", maxWidth: "400px", display: "flex", flexDirection: "column", gap: "12px" }} onClick={(e) => e.stopPropagation()}>
            <h3 style={{ marginTop: 0 }}>메일 발송 방법 선택</h3>
            <button className="btn" onClick={() => handleMailClick("gmail")} style={{ background: "#EA4335", color: "white", border: "none" }}>구글(Gmail)</button>
            <button className="btn" onClick={() => handleMailClick("naver")} style={{ background: "#03C75A", color: "white", border: "none" }}>네이버 메일</button>
            <button className="btn" onClick={() => handleMailClick("default")}>기본 메일 앱</button>
            <button className="btn" onClick={() => setIsMailModalOpen(false)} style={{ marginTop: "12px", background: "transparent", border: "1px solid var(--line)" }}>취소</button>
          </div>
        </div>
      )}

      {isPhoneModalOpen && (
        <div className="modal-overlay" onClick={() => setIsPhoneModalOpen(false)}>
          <div className="modal-content" style={{ background: "#1a1b26", padding: "24px", minWidth: "300px", maxWidth: "400px", display: "flex", flexDirection: "column", gap: "16px" }} onClick={(e) => e.stopPropagation()}>
            <h3 style={{ marginTop: 0 }}>연락처 정보</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "16px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "8px" }}>
                <span style={{ color: "var(--muted)" }}>휴대전화</span>
                <a href={`tel:${siteConfig.mobile.replaceAll("-", "")}`} style={{ color: "var(--text)", textDecoration: "none", fontWeight: "bold" }}>{siteConfig.mobile}</a>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "8px" }}>
                <span style={{ color: "var(--muted)" }}>회사</span>
                <a href={`tel:${siteConfig.phone.replaceAll("-", "")}`} style={{ color: "var(--text)", textDecoration: "none", fontWeight: "bold" }}>{siteConfig.phone}</a>
              </div>

            </div>
            <button className="btn" onClick={() => setIsPhoneModalOpen(false)} style={{ marginTop: "8px", width: "100%" }}>닫기</button>
          </div>
        </div>
      )}
    </>
  );
}

function Field({ label, value, onChange, placeholder }) {
  return (
    <div style={{ marginTop: 10 }}>
      <label style={{ display: "block", fontSize: 13, color: "var(--muted)", marginBottom: 6 }}>
        {label}
      </label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        style={{
          width: "100%",
          borderRadius: 14,
          border: "1px solid var(--line)",
          background: "rgba(255,255,255,0.03)",
          color: "var(--text)",
          padding: 12,
          outline: "none",
        }}
      />
    </div>
  );
}
