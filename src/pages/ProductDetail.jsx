import ContactCta from "../components/ContactCta";

export default function ProductDetail({ product, onBack }) {
  return (
    <section className="container page-section">
      <button className="btn" onClick={onBack}>← 목록으로</button>

      <img
        src={product.detailImage || product.image}
        alt={product.name}
        style={{
          width: "100%",
          maxHeight: "400px",
          objectFit: "contain",
          borderRadius: "12px",
          marginBottom: "24px",
          boxShadow: "0 8px 16px rgba(0,0,0,0.3)",
          background: "#1a1b26", // 배경색 추가 (투명 이미지 대비)
        }}
      />

      <h2>{product.name}</h2>
      <p style={{ fontSize: "1.1rem", color: "#a9b5d6", marginBottom: "20px" }}>{product.summary}</p>

      {product.detailDescription && (
        <div style={{ marginBottom: "30px", lineHeight: "1.8", wordBreak: "keep-all" }}>
          <p>{product.detailDescription}</p>
        </div>
      )}

      {product.features && (
        <>
          <h4>주요 특징</h4>
          <ul>
            {product.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </>
      )}

      {product.application && (
        <>
          <h4>적용 분야</h4>
          <p>{product.application}</p>
        </>
      )}

      <ContactCta />
    </section>
  );
}
