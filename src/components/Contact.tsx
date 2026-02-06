import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowRight, faStore } from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet-async";
import "./Contact.css";

export default function Contact() {
  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>Contact Us | Great Vision Electricals</title>
        <meta
          name="description"
          content="Contact Great Vision Electricals in Paliganj. WhatsApp, Instagram, Facebook, or visit our store for electrical products."
        />
        <link rel="canonical" href="https://shivamelectricals.shop/contact" />
      </Helmet>

      {/* ❌ NO INLINE BACKGROUND — CSS handles it */}
      <section className="contact">
        <div className="contact-box">
          <h2>Contact with us</h2>

          <a
            href="https://wa.me/918292890676"
            target="_blank"
            rel="noopener noreferrer"
            className="box whatsapp"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
            <span>WhatsApp</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </a>

          <a
            href="https://www.instagram.com/YOUR_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="box instagram"
          >
            <FontAwesomeIcon icon={faInstagram} />
            <span>Instagram</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </a>

          <a
            href="https://www.facebook.com/YOUR_PAGE"
            target="_blank"
            rel="noopener noreferrer"
            className="box facebook"
          >
            <FontAwesomeIcon icon={faFacebook} />
            <span>Facebook</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </a>

          <a
            href="https://maps.google.com/?q=Shivam+Electricals+Paliganj+Patna"
            target="_blank"
            rel="noopener noreferrer"
            className="box store"
          >
            <FontAwesomeIcon icon={faStore} />
            <span>Store Location</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>
      </section>
    </>
  );
}
