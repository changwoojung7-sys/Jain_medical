import React, { useState, useEffect } from "react";
import "./NoticeTicker.css";

export default function NoticeTicker({ initialData, onClick }) {
    const [latestNotice, setLatestNotice] = useState(null);

    useEffect(() => {
        // 1. Get merged data (LocalStorage + Initial)
        const storageKey = "board_notice";
        let items = initialData;
        const savedData = localStorage.getItem(storageKey);
        if (savedData) {
            items = JSON.parse(savedData);
        }

        if (!items || items.length === 0) return;

        // 2. Sort by ID descending
        const newest = items[0];

        // 3. Always show the latest notice (User request)
        setLatestNotice(newest);
    }, [initialData]);

    if (!latestNotice) return null;

    return (
        <div className="ticker-container" onClick={onClick}>
            <div className="ticker-label">📢 최신 공지</div>
            <div className="ticker-track">
                <div className="ticker-content">
                    <span className="ticker-date">[{latestNotice.date}]</span>
                    <span className="ticker-title">{latestNotice.title}</span>
                    <span className="ticker-text"> - {latestNotice.content.substring(0, 300)}...</span>
                </div>
            </div>
        </div>
    );
}
