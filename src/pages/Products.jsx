import { useState } from "react";
import Section from "../components/Section";

import { products } from "../data/products";
import ProductDetail from "./ProductDetail";

export default function Products() {
  const [selected, setSelected] = useState(null);
  const groups = ["임상병리실 소모품"];

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

          <div className="product-grid">
            {products
              .filter((p) => p.category === group)
              .map((p) => (
                <div
                  key={p.id}
                  className="product-card"
                  onClick={() => setSelected(p)}
                  style={{ cursor: "pointer" }}
                >
                  <img src={p.image} alt={p.name} />
                  <h4>{p.name}</h4>
                  <p>{p.summary}</p>
                </div>
              ))}
          </div>
        </section>
      ))}


    </Section>
  );
}
