import { useEffect, useState } from "react";

type Consent = "accepted" | "rejected" | null;

const STORAGE_KEY = "cookie_consent";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY) as Consent;
    if (!consent) setShow(true);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setShow(false);
    // analytics init yahin
  };

  const rejectCookies = () => {
    localStorage.setItem(STORAGE_KEY, "rejected");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="cookie-banner">
      <p>
        We use cookies to improve your experience.
        <a href="/privacy-policy" target="_blank" rel="noreferrer">
          {" "}
          Learn more
        </a>
      </p>

      <div className="cookie-actions">
        <button className="accept" onClick={acceptCookies}>
          Accept
        </button>
        <button className="reject" onClick={rejectCookies}>
          Reject
        </button>
      </div>
    </div>
  );
}
