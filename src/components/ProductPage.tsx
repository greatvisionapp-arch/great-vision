import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faTools } from "@fortawesome/free-solid-svg-icons";

import "../css/product.css";

const ProductPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <main className="view-product-page">
      <div className="view-product-card" style={{ textAlign: "center" }}>

        <button className="back-btn" onClick={() => navigate(-1)}>
          <FontAwesomeIcon icon={faArrowLeft} /> Back
        </button>

        <div style={{ marginTop: "40px" }}>
          <FontAwesomeIcon
            icon={faTools}
            size="3x"
            style={{ marginBottom: "20px", color: "#38bdf8" }}
          />

          <h1 style={{ fontSize: "32px", marginBottom: "12px" }}>
            Under Development
          </h1>

          <p style={{ opacity: 0.8 }}>
            This product page is currently under development.
            <br />
            Please check back later.
          </p>
        </div>

      </div>
    </main>
  );
};

export default ProductPage;
