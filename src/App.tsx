import { Routes, Route, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faPlug,
  faIndustry,
  faLocationDot,
  faStore,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

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

/* ---------------- HOME ---------------- */

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <main className="hero-bg" id="home">
        <section className="hero">

          <div
  className="hero-badge"
  onClick={() => {
    const el = document.getElementById("contact");
    el?.scrollIntoView({ behavior: "smooth" });
  }}
>
  <span className="dot" />
  All major platforms supported →
</div>


          <h1 className="hero-title">
            <span className="great">Great</span>{" "}
            <span className="vision">Vision</span>
          </h1>

          <p className="hero-desc">
            By Shivam Electricals, Paliganj, Patna
          </p>

          {/* ACTIONS */}
          <div className="hero-actions">
            <button
              className="btn primary"
              onClick={() => navigate("/store")}
            >
              <FontAwesomeIcon icon={faStore} /> Store
            </button>

            <button
  className="web-btn"
  onClick={() =>
    window.open(
      "https://www.google.com/search?q=shivamelectricals.shop",
      "_blank"
    )
  }
>
  <FontAwesomeIcon icon={faGlobe} /> Web
</button>

          </div>

          {/* MARQUEE */}
          <div className="marquee-card">
            <div className="marquee-track">
              <span><FontAwesomeIcon icon={faBolt} /> Affordable Price</span>
              <span><FontAwesomeIcon icon={faPlug} /> Available for Retailers</span>
              <span><FontAwesomeIcon icon={faIndustry} /> Dealership Available</span>
              <span><FontAwesomeIcon icon={faLocationDot} /> Trusted in Paliganj, Dulhin Bazar, Bikram, Sigori, Kinjer, Arwal</span>

              {/* duplicate for seamless loop */}
              <span><FontAwesomeIcon icon={faBolt} /> Fast Support & Service</span>
              <span><FontAwesomeIcon icon={faPlug} /> All Home Electrical Parts & Wires</span>
              <span><FontAwesomeIcon icon={faIndustry} /> Other Company Products Available</span>
              <span><FontAwesomeIcon icon={faLocationDot} /> Dealer of Goldmedal, Havells, Anchor, Malhotra, Durga, Classic, Kineto, Surya</span>
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

/* ---------------- APP ---------------- */

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
