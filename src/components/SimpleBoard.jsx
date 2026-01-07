import React, { useState, useEffect } from "react";
import "./SimpleBoard.css";

// Helper to get today's date in YYYY-MM-DD format
const getTodayDate = () => {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
};

export default function SimpleBoard({ category, initialData, isAdmin }) {
    // Key for local storage persistence (e.g., "board_notice", "board_resource")
    const storageKey = `board_${category}`;

    const [items, setItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [isWriting, setIsWriting] = useState(false);

    // Form state
    const [formTitle, setFormTitle] = useState("");
    const [formContent, setFormContent] = useState("");
    const [formFileUrl, setFormFileUrl] = useState("");

    useEffect(() => {
        // Load data from LocalStorage or fall back to initialData
        const savedData = localStorage.getItem(storageKey);
        if (savedData) {
            setItems(JSON.parse(savedData));
        } else {
            setItems(initialData);
        }
    }, [category, initialData, storageKey]);

    // Persist to local storage whenever items change
    const saveItems = (newItems) => {
        setItems(newItems);
        localStorage.setItem(storageKey, JSON.stringify(newItems));
    };

    const handleCreate = (e) => {
        e.preventDefault();
        if (!formTitle.trim() || !formContent.trim()) return;

        const newItem = {
            id: Date.now(), // Simple ID generation
            title: formTitle,
            date: getTodayDate(),
            author: "관리자",
            views: 0,
            content: formContent,
            fileUrl: formFileUrl.trim(),
        };

        const newItems = [newItem, ...items];
        saveItems(newItems);

        // Reset form
        setFormTitle("");
        setFormContent("");
        setFormFileUrl("");
        setIsWriting(false);
    };

    const handleDelete = (id) => {
        if (window.confirm("정말 삭제하시겠습니까?")) {
            const newItems = items.filter((item) => item.id !== id);
            saveItems(newItems);
            if (selectedItem && selectedItem.id === id) {
                setSelectedItem(null);
            }
        }
    };

    const handleView = (item) => {
        // Increment view count logic could go here, but omitted for simple static demo
        setSelectedItem(item);
    };

    return (
        <div className="board-container">
            {/* List View */}
            {!selectedItem && !isWriting && (
                <>
                    <div className="board-header">
                        <h3>{category === "notice" ? "공지사항" : "자료실"}</h3>
                        {isAdmin && (
                            <button className="btn-create" onClick={() => setIsWriting(true)}>
                                글쓰기
                            </button>
                        )}
                    </div>
                    <table className="board-table">
                        <thead>
                            <tr>
                                <th className="th-num">번호</th>
                                <th className="th-title">제목</th>
                                <th className="th-date">날짜</th>
                                <th className="th-views">조회수</th>
                                {isAdmin && <th className="th-action">관리</th>}
                            </tr>
                        </thead>
                        <tbody>
                            {items.length === 0 ? (
                                <tr>
                                    <td colSpan={isAdmin ? 5 : 4} className="text-center">게시물이 없습니다.</td>
                                </tr>
                            ) : (
                                items.map((item, index) => (
                                    <tr key={item.id}>
                                        <td>{items.length - index}</td>
                                        <td className="td-title" onClick={() => handleView(item)}>
                                            {category === "resource" && item.fileUrl && (
                                                <span className="file-icon">💾 </span>
                                            )}
                                            {item.title}
                                        </td>
                                        <td>{item.date}</td>
                                        <td>{item.views}</td>
                                        {isAdmin && (
                                            <td>
                                                <button className="btn-delete" onClick={() => handleDelete(item.id)}>삭제</button>
                                            </td>
                                        )}
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </>
            )}

            {/* Detail View */}
            {selectedItem && (
                <div className="board-detail">
                    <div className="detail-header">
                        <h4>{selectedItem.title}</h4>
                        <div className="meta">
                            <span>{selectedItem.date}</span> | <span>조회 {selectedItem.views}</span> | <span>{selectedItem.author}</span>
                        </div>
                    </div>
                    <div className="detail-content">
                        {selectedItem.content.split('\n').map((line, i) => (
                            <p key={i}>{line}</p>
                        ))}

                        {/* File Download Section */}
                        {selectedItem.fileUrl && (
                            <div className="file-download-box">
                                <p><strong>첨부파일:</strong></p>
                                <a href={selectedItem.fileUrl} target="_blank" rel="noopener noreferrer" className="btn-download">
                                    💾 다운로드 / 보러가기
                                </a>
                            </div>
                        )}
                    </div>
                    <div className="detail-actions">
                        <button className="btn-back" onClick={() => setSelectedItem(null)}>목록으로</button>
                        {isAdmin && (
                            <button className="btn-delete" onClick={() => handleDelete(selectedItem.id)}>
                                삭제
                            </button>
                        )}
                    </div>
                </div>
            )}

            {/* Write View */}
            {isWriting && (
                <div className="board-write">
                    <h4>새 게시물 작성</h4>
                    <form onSubmit={handleCreate}>
                        <div className="form-group">
                            <label>제목</label>
                            <input
                                type="text"
                                value={formTitle}
                                onChange={(e) => setFormTitle(e.target.value)}
                                required
                            />
                        </div>
                        {category === "resource" && (
                            <div className="form-group">
                                <label>첨부파일 링크 (구글 드라이브, Dropbox 등)</label>
                                <input
                                    type="url"
                                    value={formFileUrl}
                                    onChange={(e) => setFormFileUrl(e.target.value)}
                                    placeholder="https://drive.google.com/..."
                                />
                                <small style={{ color: '#718096', marginTop: '4px', display: 'block' }}>
                                    파일을 직접 올리는 것이 아닙니다. 구글 드라이브 등에 파일을 올리신 후 '공유 링크'를 복사해서 붙여넣으세요.
                                </small>
                            </div>
                        )}
                        <div className="form-group">
                            <label>내용</label>
                            <textarea
                                rows="10"
                                value={formContent}
                                onChange={(e) => setFormContent(e.target.value)}
                                required
                            ></textarea>
                        </div>
                        <div className="form-actions">
                            <button type="submit" className="btn-submit">등록</button>
                            <button type="button" className="btn-cancel" onClick={() => setIsWriting(false)}>취소</button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
}
