import React, { useState } from "react";
import Section from "../components/Section.jsx";
import ContactCta from "../components/ContactCta.jsx";
import SimpleBoard from "../components/SimpleBoard.jsx";
import AdminLogin from "../components/AdminLogin.jsx";
import { initialNotices, initialResources } from "../data/boardData.js";
import "./Support.css"; // We'll add some tab styles here

export default function Support() {
  const [activeTab, setActiveTab] = useState("notice");
  const [isAdmin, setIsAdmin] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);

  return (
    <Section
      title="고객 지원"
      subtitle="문의부터 자료 확인까지, 필요한 정보를 빠르게 제공하겠습니다."
    >
      <div className="support-actions" style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1rem' }}>
        {!isAdmin ? (
          <button
            onClick={() => setShowAdminLogin(true)}
            style={{ fontSize: '0.8rem', color: '#ccc', border: 'none', background: 'none', cursor: 'pointer' }}
          >
            ADMIN
          </button>
        ) : (
          <span style={{ fontSize: '0.8rem', color: 'green', fontWeight: 'bold' }}>관리자 모드 ON</span>
        )}
      </div>

      <div className="tabs">
        <button
          className={`tab ${activeTab === "notice" ? "active" : ""}`}
          onClick={() => setActiveTab("notice")}
        >
          공지사항 / FAQ
        </button>
        <button
          className={`tab ${activeTab === "resource" ? "active" : ""}`}
          onClick={() => setActiveTab("resource")}
        >
          자료실
        </button>
      </div>

      <div className="tab-content">
        {activeTab === "notice" && (
          <SimpleBoard
            category="notice"
            initialData={initialNotices}
            isAdmin={isAdmin}
          />
        )}
        {activeTab === "resource" && (
          <SimpleBoard
            category="resource"
            initialData={initialResources}
            isAdmin={isAdmin}
          />
        )}
      </div>

      <ContactCta />

      {showAdminLogin && (
        <AdminLogin
          onLogin={() => setIsAdmin(true)}
          onClose={() => setShowAdminLogin(false)}
        />
      )}
    </Section>
  );
}
