import React from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Products from "./pages/Products.jsx";
import Quality from "./pages/Quality.jsx";
import Support from "./pages/Support.jsx";
import ProductDetail from "./pages/ProductDetail";
import NoticeTicker from "./components/NoticeTicker.jsx";
import { initialNotices } from "./data/boardData.js";


const routes = [
  { id: "home", label: "홈", component: <Home /> },
  { id: "about", label: "회사 소개", component: <About /> },
  { id: "products", label: "제품 안내", component: <Products /> },
  { id: "quality", label: "품질 관리", component: <Quality /> },
  { id: "support", label: "고객 지원", component: <Support /> },
];

export default function App() {
  const handleTickerClick = () => {
    const el = document.getElementById("support");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="app">
      <Header routes={routes} />
      <NoticeTicker initialData={initialNotices} onClick={handleTickerClick} />
      <main className="main">
        {routes.map((r) => (
          <section key={r.id} id={r.id} className="page-section">
            {r.component}
          </section>
        ))}
      </main>
      <Footer />
    </div>
  );
}


