import React, { useMemo, useState } from "react";
import { siteConfig } from "../config/siteConfig.js";

export default function ContactCta() {
  const [form, setForm] = useState({
    company: "",
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const mailto = useMemo(() => {
    const subject = `[${siteConfig.companyName}] 제품 문의/견적 요청`;
    const body =
`회사/기관: ${form.company}
담당자: ${form.name}
연락처: ${form.phone}
이메일: ${form.email}

문의 내용:
${form.message}
`;
    return `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [form]);

  return (
    <div className="card" style={{ marginTop: 12 }}>
      <div className="cta-bar" style={{ marginTop: 0, marginBottom: 14 }}>
        <div className="left">
          <strong>빠른 문의</strong>
          <div className="small">작성 후 “메일로 보내기”를 누르면 기본 메일앱으로 연결됩니다.</div>
        </div>
        <div className="right">
          <a className="btn primary" href={mailto}>메일로 보내기</a>
          <a className="btn" href={`tel:${siteConfig.phone.replaceAll("-", "")}`}>전화하기</a>
        </div>
      </div>

      <div className="grid" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
        <Field label="회사/기관명" value={form.company} onChange={(v)=>setForm({ ...form, company: v })} />
        <Field label="담당자명" value={form.name} onChange={(v)=>setForm({ ...form, name: v })} />
        <Field label="연락처" value={form.phone} onChange={(v)=>setForm({ ...form, phone: v })} placeholder="010-0000-0000" />
        <Field label="이메일" value={form.email} onChange={(v)=>setForm({ ...form, email: v })} placeholder="name@company.com" />
      </div>

      <div style={{ marginTop: 10 }}>
        <label className="muted" style={{ display: "block", fontSize: 13, color: "var(--muted)", marginBottom: 6 }}>
          문의 내용
        </label>
        <textarea
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          rows={6}
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
    </div>
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
