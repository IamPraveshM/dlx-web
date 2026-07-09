import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  FaPalette,
  FaHeartbeat,
  FaUniversity,
  FaShoppingCart,
  FaGraduationCap,
  FaBuilding,
  FaTruck,
  FaCloud,
  FaUmbrellaBeach,
  FaIndustry,
  FaFilm,
  FaHandsHelping,
} from "react-icons/fa";

const industries = [
  {
    icon: FaHeartbeat,
    name: "Healthcare",
    desc: "Streamlining patient care and clinical workflows for better health outcomes",
  },
  {
    icon: FaUniversity,
    name: "Finance & Banking",
    desc: "Secure, compliant solutions for modern financial operations",
  },
  {
    icon: FaShoppingCart,
    name: "E-Commerce & Retail",
    desc: "Powering seamless shopping experiences and inventory management",
  },
  {
    icon: FaGraduationCap,
    name: "Education & e-Learning",
    desc: "Transforming learning with intelligent digital platforms",
  },
  {
    icon: FaBuilding,
    name: "Real Estate & PropTech",
    desc: "Smart property solutions for modern real estate challenges",
  },
  {
    icon: FaTruck,
    name: "Automotive & Logistics",
    desc: "Optimizing supply chains and fleet operations at scale",
  },
  {
    icon: FaCloud,
    name: "SaaS & Platforms",
    desc: "Building scalable cloud solutions that grow with you",
  },
  {
    icon: FaUmbrellaBeach,
    name: "Hospitality & Travel",
    desc: "Elevating guest experiences through digital innovation",
  },
  {
    icon: FaIndustry,
    name: "Manufacturing & Industry 4.0",
    desc: "Smart factory solutions for next-gen production",
  },
  {
    icon: FaFilm,
    name: "Media & Entertainment",
    desc: "Engaging audiences with cutting-edge digital experiences",
  },
  {
    icon: FaHandsHelping,
    name: "Nonprofit & Public Sector",
    desc: "Empowering missions with efficient digital tools",
  },
  {
    icon: FaPalette,
    name: "Beauty & Wellness",
    desc: "Personalized solutions for modern wellness brands",
  },
];

const MarqueeContent = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      whiteSpace: "nowrap",
      paddingRight: "2rem",
    }}
  >
    {industries.map((ind, i) => {
      const Icon = ind.icon;
      return (
        <div
          key={i}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingRight: "2rem",
            color: "white",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "baseline",
              gap: "0.8rem",
              marginRight: "0.6rem",
            }}
          >
            <div
              style={{
                margin: 0,
                color: "white",
                fontSize: "clamp(1rem, 3.2vw, 1.2rem)",
                fontWeight: 500,
                lineHeight: 1.1,
                whiteSpace: "nowrap",
              }}
            >
              {ind.name} -
            </div>
            <div
              style={{
                fontSize: "0.95rem",
                opacity: 0.9,
                whiteSpace: "nowrap",
              }}
            >
              {ind.desc}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0 1rem",
              color: "#03045E",
            }}
          >
            <Icon size={18} color="#03045E" />
          </div>
        </div>
      );
    })}
  </div>
);

function IndustryMarquee() {
  const marqueeRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    const content = contentRef.current;
    if (!marquee || !content) return;

    const contentWidth = content.offsetWidth;

    gsap.set(marquee, { x: 0 });

    const tween = gsap.to(marquee, {
      x: -contentWidth,
      duration: 35,
      ease: "none",
      repeat: -1,
    });

    // Pause on hover
    const handleMouseEnter = () => tween.pause();
    const handleMouseLeave = () => tween.resume();

    marquee.addEventListener("mouseenter", handleMouseEnter);
    marquee.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      marquee.removeEventListener("mouseenter", handleMouseEnter);
      marquee.removeEventListener("mouseleave", handleMouseLeave);
      tween.kill();
    };
  }, []);

  return (
    <div
      style={{
        overflow: "hidden",
        width: "100%",
        padding: "1.2rem 0",
        marginTop: "2rem",
        position: "relative",
        backgroundColor: "#242424",
      }}
    >
      {/* Left Fade */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "80px",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      {/* Right Fade */}
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: "80px",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      {/* Marquee Track */}
      <div
        ref={marqueeRef}
        style={{
          display: "flex",
          width: "fit-content",
          willChange: "transform",
        }}
      >
        <div ref={contentRef}>
          <MarqueeContent />
        </div>
        <div>
          <MarqueeContent />
        </div>
      </div>
    </div>
  );
}

export default IndustryMarquee;
