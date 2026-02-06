import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./store.css";

type Product = {
  slug: string;
  name: string;
  stock: number;
  desc: string;
  price: string;
  rating: string;
  img: string;
};

const products: Product[] = [
  {
    slug: "switches",
    name: "Switches",
    stock: 24,
    desc: "High quality modular switches",
    price: "₹1,250",
    rating: "★★★★☆ (4.2)",
    img: "/images/switch.png",
  },
  {
    slug: "wires-cables",
    name: "Wires & Cables",
    stock: 18,
    desc: "Copper insulated wiring",
    price: "₹2,400",
    rating: "★★★★☆ (4.3)",
    img: "/images/wire.png",
  },
  {
    slug: "lights",
    name: "Lights",
    stock: 30,
    desc: "Energy efficient LED lights",
    price: "₹899",
    rating: "★★★★☆ (4.4)",
    img: "/images/light.png",
  },
  {
    slug: "mcb-db",
    name: "MCB / DB",
    stock: 12,
    desc: "Reliable circuit protection",
    price: "₹3,200",
    rating: "★★★★☆ (4.1)",
    img: "/images/mcb.png",
  },
  {
    slug: "fans",
    name: "Fans",
    stock: 10,
    desc: "High speed ceiling fans",
    price: "₹4,500",
    rating: "★★★★☆ (4.5)",
    img: "/images/fan.png",
  },
];

export default function Store() {
  const navigate = useNavigate();

  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>Our Store | Great Vision Electricals</title>
        <meta
          name="description"
          content="Explore switches, wires, lights, MCBs, fans and other electrical products at Great Vision Electricals store in Paliganj."
        />
        <link rel="canonical" href="https://shivamelectricals.shop/store" />
      </Helmet>

      {/* ✅ NO INLINE BACKGROUND — CSS CONTROLS LOOK */}
      <main className="store-page">
        <div className="store-heading">
          <span className="store-badge">
            Official <FontAwesomeIcon icon={faArrowRightLong} />
          </span>

          <h1 className="store-title">
            <span className="t-great">Great</span>{" "}
            <span className="t-vision">Vision</span>{" "}
            <span className="t-store">Store</span>
          </h1>

          <div className="store-box">
            <div className="store-marquee">
              <span>
                Premium Electrical Products & Services • Trusted Quality • Best Pricing •
              </span>
              <span>
                Premium Electrical Products & Services • Trusted Quality • Best Pricing •
              </span>
            </div>
          </div>

          <div className="store-card">
            <h3>Why Choose Us</h3>
            <p>
              Reliable electrical solutions, genuine products, and trusted service
              backed by experience.
            </p>
          </div>
        </div>

        <div className="store-bigbox">
          <h2 className="bigbox-title">Our Products</h2>

          <div className="product-grid">
            {products.map((p) => (
              <div className="product-card" key={p.slug}>
                <div className="product-image">
                  <img
                    src={p.img}
                    alt={p.name}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = "/favicon.png";
                    }}
                  />
                </div>

                <h4 className="product-name">{p.name}</h4>
                <p className="product-stock">Stock: {p.stock}</p>
                <p className="product-desc">{p.desc}</p>
                <p className="product-price">{p.price}</p>
                <p className="product-rating">{p.rating}</p>

                <button
                  className="product-btn"
                  onClick={() => navigate(`/product/${p.slug}`)}
                >
                  View Product
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
