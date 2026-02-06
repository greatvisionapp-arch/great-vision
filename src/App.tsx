import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Screen from "./components/Screen";
import Features from "./components/Features";
import Community from "./components/Community";
import Question from "./components/Question";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Store from "./components/Store";
import ProductPage from "./components/ProductPage";
import CookieBanner from "./components/CookieBanner";

function Home() {
  return (
    <>
      <main className="hero-bg" id="home">
        <section className="hero">
          <div className="hero-badge">
            <span className="dot" />
            All major platforms supported →
          </div>

          <h1 className="hero-title">-Great Vision-</h1>
          <p className="hero-desc">
            By Shivam Electricals, Paliganj, Patna
          </p>

          <div className="hero-actions">
            <button className="btn primary">Download</button>
            <button className="web-btn">🌐 Web</button>
          </div>

          <div className="marquee-card">
            <div className="marquee-track">
              <span>⚡ Fast Installation</span>
              <span>🔌 Reliable Electrical Solutions</span>
              <span>🏭 Industrial & Home Projects</span>
              <span>📍 Trusted in Patna</span>
            </div>
          </div>
        </section>
      </main>

      <Screen />
      <Features />
      <section id="community"><Community /></section>
      <Question />
      <section id="contact"><Contact /></section>
    </>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <div className="header-divider" />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:slug" element={<ProductPage />} />
      </Routes>

      <footer id="footer">
        <Footer />
      </footer>

      <CookieBanner />
    </>
  );
}
