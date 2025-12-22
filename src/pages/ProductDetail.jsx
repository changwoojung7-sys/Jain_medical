import ContactCta from "../components/ContactCta";

export default function ProductDetail({ product, onBack }) {
  return (
    <section className="container page-section">
      <button className="btn" onClick={onBack}>← 목록으로</button>

      <img
        src={product.image}
        alt={product.name}
        className="product-detail-img"
      />

      <h2>{product.name}</h2>
      <p>{product.summary}</p>

      <h4>주요 특징</h4>
      <ul>
        {product.features.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>

      <h4>적용 분야</h4>
      <p>{product.application}</p>

      <ContactCta />
    </section>
  );
}
