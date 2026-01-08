import { useState } from "react";
import Section from "../components/Section";

import { products } from "../data/products";
import ProductDetail from "./ProductDetail";

export default function Products() {
  const [selected, setSelected] = useState(null);
  const groups = ["자인메디칼 프리미엄 3종 라인업"];

  // 🔵 상세 페이지
  if (selected) {
    return (
      <ProductDetail
        product={selected}
        onBack={() => setSelected(null)}
      />
    );
  }

  // 🔵 목록 페이지
  return (
    <Section
      title="제품 안내"
      subtitle="임상검사실 환경에 적합한 검사 장비 및 관련 제품을 제공합니다."
    >
      {groups.map((group) => (
        <section key={group} className="product-category">
          <h3>{group}</h3>

          {group === "자인메디칼 프리미엄 3종 라인업" && (
            <div style={{ marginBottom: '40px', maxWidth: '800px' }}>
              <p style={{ fontSize: '16px', lineHeight: '1.7', color: 'var(--text)' }}>
                수많은 소모품 중 무엇을 써야 할지 고민되시나요? <br />
                자인메디칼은 <strong style={{ color: '#5de1ff' }}>'현장에서 가장 잘 썰리는 칼날'</strong>을 찾는 임상병리사 선생님들의 마음을 먼저 생각합니다. <br />
                직접 사용해보고 검증한 Erma 사의 핵심 제품 3종으로 병리실의 업무 효율을 높여드리겠습니다.
              </p>
            </div>
          )}

          <div className="product-grid">
            {products
              .filter((p) => p.category === group)
              .map((p) => (
                <div
                  key={p.id}
                  className="product-card"
                  onClick={() => setSelected(p)}
                  style={{ cursor: "pointer", display: 'flex', flexDirection: 'column' }}
                >
                  <h4 style={{ fontSize: '18px', marginBottom: '8px', color: 'var(--brand2)' }}>{p.name}</h4>
                  <div style={{ fontSize: '14px', color: 'var(--muted)', marginBottom: '16px' }}>{p.summary}</div>

                  {p.description && (
                    <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#e2e8f0', marginBottom: '20px', flex: 1 }}>
                      {p.description}
                    </p>
                  )}

                  <img
                    src={p.image}
                    alt={p.name}
                    style={{ width: '100%', borderRadius: '12px', marginTop: 'auto', background: '#fff', padding: '10px' }}
                  />
                </div>
              ))}
          </div>
        </section>
      ))}
    </Section >
  );
}
