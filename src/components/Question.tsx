import { useState } from "react";
import "./Question.css";

const faqs = [
  { q: "Is it really free?", a: "Yes, the service is completely free to use." },
  { q: "Does it work over the internet?", a: "Yes, it works over both local network and internet." },
  { q: "Is it secure?", a: "All data transfers are end-to-end encrypted." },
  { q: "Where do files go?", a: "Files are sent directly to the receiver, not stored anywhere." },
  { q: "Which platforms are supported?", a: "Windows, macOS, Linux, Android, and iOS." },
  { q: "Do I need to create an account?", a: "No signup or account is required." },
];

export default function Question() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="question-section">
      <h2 className="question-title">Frequently Asked Questions</h2>
      <p className="question-subtitle">
        Everything you need to know about LocalSend.
      </p>

      <div className="question-grid">
        {faqs.map((item, i) => (
          <div
            key={i}
            className={`question-item ${open === i ? "open" : ""}`}
          >
            <button
              className="question-btn"
              onClick={() => setOpen(open === i ? null : i)}
            >
              {item.q}
              <span className="arrow" />
            </button>

            <div className="question-answer">
              <p>{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
