import React, { useState } from "react";
import "./AdminLogin.css"; // We will create this simple CSS or use inline styles for now

export default function AdminLogin({ onLogin, onClose }) {
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simple hardcoded password for demonstration "No DB" mode
        // In a real app, this should be an env var, but for a static site demo, this is fine.
        // User requested "DB 없이" (Without DB), so client-side check is the way.
        if (password === "tjrtls9200") {
            onLogin();
            onClose();
        } else {
            setError("비밀번호가 일치하지 않습니다.");
        }
    };

    return (
        <div className="admin-modal-overlay">
            <div className="admin-modal">
                <h3>관리자 모드 진입</h3>
                <p>글쓰기 및 삭제 권한을 얻으려면 비밀번호를 입력하세요.</p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="password"
                        placeholder="비밀번호 (admin1234)"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="admin-input"
                    />
                    {error && <p className="admin-error">{error}</p>}
                    <div className="admin-actions">
                        <button type="submit" className="btn-primary">확인</button>
                        <button type="button" onClick={onClose} className="btn-secondary">취소</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
