import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
  const handleClick = () => {
    const phone = "916260439411"; // +91 6260439411
    const message = encodeURIComponent(
      "Hi DreamLogicX team, I’d like to discuss a new project and how we can work together."
    );
    const whatsappUrl = `https://wa.me/${phone}?text=${message}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        aria-label="Chat with us on WhatsApp"
        style={{
          position: "fixed",
          right: "1.25rem",
          bottom: "1.25rem",
          width: "52px",
          height: "52px",
          borderRadius: "999px",
          border: "none",
          backgroundColor: "#25D366",
          color: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 8px 18px rgba(0,0,0,0.18)",
          cursor: "pointer",
          zIndex: 9999,
          transition: "transform 0.18s ease, box-shadow 0.18s ease, opacity 0.18s ease",
          opacity: 0.95,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-2px)";
          e.currentTarget.style.boxShadow = "0 10px 22px rgba(0,0,0,0.22)";
          e.currentTarget.style.opacity = "1";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 8px 18px rgba(0,0,0,0.18)";
          e.currentTarget.style.opacity = "0.95";
        }}
      >
        <FaWhatsapp size={24} />
      </button>

      <style>{`
        @media (max-width: 640px) {
          button[aria-label="Chat with us on WhatsApp"] {
            right: 0.9rem !important;
            bottom: 0.9rem !important;
            width: 48px !important;
            height: 48px !important;
          }
        }
      `}</style>
    </>
  );
}


