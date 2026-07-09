import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaLightbulb,
  FaPalette,
  FaCode,
  FaChartLine,
  FaRobot,
  FaRocket,
} from "react-icons/fa";
import Solution01 from "../../assets/Solution01.png";
import Solution02 from "../../assets/Solution02.png";
import Solution03 from "../../assets/Solution03.png";

gsap.registerPlugin(ScrollTrigger);

// Image mapping for services
const serviceImagesMap = {
  "Strategy & Consulting": Solution01,
  "Design & Branding": Solution02,
  "Development & Tech": Solution03,
  "Digital Marketing": Solution01,
  "AI & Automation": Solution02,
  "Growth Acceleration": Solution03,
};

const ServiceSection = () => {
  const serviceRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const cardsPerPage = 3;

  const services = [
    {
      icon: FaLightbulb,
      title: "Strategy & Consulting",
      description:
        "Data-driven insights and actionable roadmaps that transform your business challenges into competitive advantages.",
      features: ["Market Analysis", "Business Modeling", "Growth Strategy"],
      color: "#3F37C9",
    },
    {
      icon: FaPalette,
      title: "Design & Branding",
      description:
        "Memorable brand experiences that resonate deeply with your audience and drive measurable engagement.",
      features: ["UI/UX Design", "Brand Identity", "Visual Systems"],
      color: "#1F271B",
    },
    {
      icon: FaCode,
      title: "Development & Tech",
      description:
        "Scalable, high-performance digital solutions built with cutting-edge technology and industry best practices.",
      features: ["Web & Mobile Apps", "Cloud Solutions", "API Integration"],
      color: "#3F37C9",
    },
    {
      icon: FaChartLine,
      title: "Digital Marketing",
      description:
        "Precision-targeted campaigns and performance optimization strategies that maximize ROI and amplify reach.",
      features: ["SEO & SEM", "Social Media", "Content Strategy"],
      color: "#1F271B",
    },
    {
      icon: FaRobot,
      title: "AI & Automation",
      description:
        "Intelligent automation and machine learning solutions that streamline operations and unlock new possibilities.",
      features: ["Process Automation", "AI Integration", "Smart Analytics"],
      color: "#3F37C9",
    },
    {
      icon: FaRocket,
      title: "Growth Acceleration",
      description:
        "Proven frameworks and optimization strategies with continuous performance tracking to scale faster.",
      features: ["Growth Hacking", "CRO", "Performance Analytics"],
      color: "#1F271B",
    },
  ];

  const totalPages = Math.ceil(services.length / cardsPerPage);

  useEffect(() => {
    if (serviceRef.current) {
      const heading = serviceRef.current.querySelector(".service-heading");
      const subtitle = serviceRef.current.querySelector(".service-subtitle");

      if (heading) {
        gsap.fromTo(
          heading,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: heading,
              start: "top 80%",
            },
          }
        );
      }

      if (subtitle) {
        gsap.fromTo(
          subtitle,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: subtitle,
              start: "top 80%",
            },
          }
        );
      }
    }
  }, []);

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setDirection(1);
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setDirection(-1);
      setCurrentPage((prev) => prev - 1);
    }
  };

  const getCurrentCards = () => {
    const start = currentPage * cardsPerPage;
    return services.slice(start, start + cardsPerPage);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div
      ref={serviceRef}
      style={{
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "5rem 2rem",
        backgroundColor: "#F8F9FA",
      }}
    >
      {/* Section Header */}
      <div style={{ marginBottom: "4rem", maxWidth: "700px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
          <div style={{ width: "50px", height: "2px", background: "#03045E" }} />
          <span
            style={{
              fontSize: "0.875rem",
              fontWeight: "700",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "#03045E",
            }}
          >
            OUR SERVICES
          </span>
        </div>
        <h2
          className="service-heading"
          style={{
            fontSize: "clamp(2rem, 4.5vw, 3rem)",
            color: "#0A0A0A",
            lineHeight: "1.15",
            fontWeight: "800",
            marginBottom: "1.5rem",
            letterSpacing: "-0.02em",
          }}
        >
          Solutions That Drive Real Results
        </h2>
        <p
          className="service-subtitle"
          style={{
            fontSize: "1.125rem",
            lineHeight: "1.75",
            color: "#555",
            fontWeight: "400",
          }}
        >
          From strategy to execution, we deliver end-to-end solutions designed
          to accelerate your growth and transform your business operations.
        </p>
      </div>

      {/* Cards Container */}
      <div style={{ overflow: "hidden", marginBottom: "4rem" }}>
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentPage}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "2rem",
              gridAutoRows: "1fr",
              marginBottom: "3rem",
            }}
            className="service-cards-grid"
          >
            {getCurrentCards().map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  style={{
                    padding: "2rem",
                    width: "100%",
                    backgroundColor: "#FFFFFF",
                    boxShadow: "0 6px 18px rgba(0,0,0,0.04)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.5rem",
                    height: "100%",
                    justifyContent: "space-between",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                  whileHover={{
                    y: -8,
                    boxShadow: "0 12px 28px rgba(0,0,0,0.12)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <motion.div
                      whileHover={{ rotate: 15, scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        width: 40,
                        height: 40,
                        background: service.color,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff",
                        fontSize: "1.25rem",
                      }}
                    >
                      <IconComponent />
                    </motion.div>
                    <h3
                      style={{
                        margin: 0,
                        fontSize: "1.15rem",
                        fontWeight: "700",
                        color: "#0A0A0A",
                      }}
                    >
                      {service.title}
                    </h3>
                  </div>

                  <motion.div
                    style={{ width: "100%", height: 140, overflow: "hidden" }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={serviceImagesMap[service.title]}
                      alt={service.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                  </motion.div>

                  <p
                    style={{
                      margin: 0,
                      color: "#666",
                      lineHeight: 1.6,
                      fontSize: "0.95rem",
                    }}
                  >
                    {service.description}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.5rem",
                    }}
                  >
                    {service.features.map((feature, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.05, backgroundColor: "#2E2A99" }}
                        transition={{ duration: 0.2 }}
                        style={{
                          backgroundColor: service.color,
                          color: "#fff",
                          padding: "0.35rem 0.65rem",
                          fontSize: "0.85rem",
                          fontWeight: "600",
                          cursor: "default",
                        }}
                      >
                        {feature}
                      </motion.span>
                    ))}
                  </div>

                  <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "auto" }}>
                    <motion.a
                      href="https://services.dreamlogicx.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                      style={{ cursor: "pointer", textDecoration: "none" }}
                    >
                      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                        <circle cx="22" cy="22" r="22" fill={service.color} />
                        <path
                          d="M18 15L25 22L18 29"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </motion.a>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        {/* Prev Button */}
        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: "#2E2A99" }}
          whileTap={{ scale: 0.95 }}
          onClick={handlePrev}
          disabled={currentPage === 0}
          style={{
            padding: "0.75rem 1.75rem",
            backgroundColor: "#03045E",
            border: "none",
            color: "#fff",
            cursor: currentPage === 0 ? "not-allowed" : "pointer",
            fontSize: "1rem",
            fontWeight: "600",
            boxShadow: "0 4px 12px rgba(3, 4, 94, 0.3)",
            opacity: currentPage === 0 ? 0.4 : 1,
            transition: "all 0.3s ease",
          }}
        >
          Prev
        </motion.button>

        {/* Progress Indicators */}
        <div
          style={{
            display: "flex",
            gap: "0.6rem",
            alignItems: "center",
          }}
        >
          {Array.from({ length: totalPages }).map((_, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                setDirection(idx > currentPage ? 1 : -1);
                setCurrentPage(idx);
              }}
              style={{
                width: currentPage === idx ? 36 : 10,
                height: 10,
                backgroundColor: currentPage === idx ? "#03045E" : "#D1D1D1",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>

        {/* Next Button */}
        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: "#2E2A99" }}
          whileTap={{ scale: 0.95 }}
          onClick={handleNext}
          disabled={currentPage === totalPages - 1}
          style={{
            padding: "0.75rem 1.75rem",
            backgroundColor: "#03045E",
            border: "none",
            color: "#fff",
            cursor: currentPage === totalPages - 1 ? "not-allowed" : "pointer",
            fontSize: "1rem",
            fontWeight: "600",
            boxShadow: "0 4px 12px rgba(3, 4, 94, 0.3)",
            opacity: currentPage === totalPages - 1 ? 0.4 : 1,
            transition: "all 0.3s ease",
          }}
        >
          Next
        </motion.button>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .service-cards-grid { 
            grid-template-columns: repeat(2, 1fr) !important; 
          }
        }
        @media (max-width: 640px) {
          .service-cards-grid { 
            grid-template-columns: 1fr !important; 
          }
        }
      `}</style>
    </div>
  );
};

export default ServiceSection;