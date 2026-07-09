import React, { useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaTimes, FaCheckCircle } from "react-icons/fa";
import DigitalAgencyImg from "../assets/DigitalAgency.png";
import ECommerceImg from "../assets/E-Commerce&Retail.png";
import EducationImg from "../assets/Education&eLearning.png";
import RealEstateImg from "../assets/Real-Estate&PropTech.png";
import AutomotiveImg from "../assets/Automotive&Logistics.png";
import SaaSImg from "../assets/SaaS&Platforms.png";
import HospitalityImg from "../assets/Hospitality&Travel.png";
import ManufacturingImg from "../assets/Manufacturing&Industry.png";
import MediaImg from "../assets/Media&Entertainment.png";
import NonprofitImg from "../assets/Nonprofit&PublicSector.png";
import HealthcareImg from "../assets/Professional Meeting Scene.png";
import FinanceImg from "../assets/Office Workspace with Team Collaboration.png";

const CardImg =
  "data:image/svg+xml,%3Csvg width='400' height='140' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%233F37C9;stop-opacity:0.1' /%3E%3Cstop offset='100%25' style='stop-color:%233F37C9;stop-opacity:0.3' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='140' fill='url(%23grad)'/%3E%3C/svg%3E";

// Simple explicit image map for cards
const imagesMap = {
  "digital agency": DigitalAgencyImg,
  "e-commerce & retail": ECommerceImg,
  "education & e-learning": EducationImg,
  "real estate & proptech": RealEstateImg,
  "automotive & logistics": AutomotiveImg,
  "saas & platforms": SaaSImg,
  "hospitality & travel": HospitalityImg,
  "manufacturing & industry": ManufacturingImg,
  "media & entertainment": MediaImg,
  "nonprofit & public sector": NonprofitImg,
  healthcare: HealthcareImg,
  "finance & banking": FinanceImg,
};

function IndustryCardsDetail({ selectedCard, onClose }) {
  const navigate = useNavigate();
  const scrollPositionRef = useRef(0);
  const hasRestoredRef = useRef(false);

  // Function to restore scroll position without blinking
  const restoreScrollPosition = useCallback(() => {
    const savedScrollY = scrollPositionRef.current;
    if (savedScrollY <= 0 || hasRestoredRef.current) return;
    hasRestoredRef.current = true;

    // CRITICAL: Set scroll position on documentElement BEFORE removing fixed
    // This prevents the visible jump/blink to top
    document.documentElement.style.scrollBehavior = 'auto';
    document.documentElement.scrollTop = savedScrollY;
    document.body.scrollTop = savedScrollY; // For older browsers

    // Now remove fixed positioning
    const topValue = document.body.style.top;
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.width = "";
    document.body.style.overflow = "";

    // Immediately set scroll position again after removing fixed
    window.scrollTo(0, savedScrollY);
    document.documentElement.scrollTop = savedScrollY;

    // Use requestAnimationFrame to ensure it happens before next paint
    requestAnimationFrame(() => {
      window.scrollTo(0, savedScrollY);
      document.documentElement.scrollTop = savedScrollY;
      
      // Handle Lenis if available
      const lenis = typeof window !== 'undefined' ? window.lenis : null;
      if (lenis && typeof lenis.scrollTo === 'function') {
        try {
          lenis.scrollTo(savedScrollY, { immediate: true, duration: 0 });
        } catch (e) {
          try {
            lenis.scrollTo(savedScrollY);
          } catch (err) {
            // Already set above
          }
        }
      }
      
      // Verify position after a short delay
      requestAnimationFrame(() => {
        const currentScroll = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
        if (Math.abs(currentScroll - savedScrollY) > 5) {
          window.scrollTo(0, savedScrollY);
          document.documentElement.scrollTop = savedScrollY;
        }
        // Restore smooth scrolling
        document.documentElement.style.scrollBehavior = '';
      });
    });
  }, []);

  // Custom close handler
  const handleClose = () => {
    onClose();
  };

  // Lock body scroll when panel is open and save scroll position
  useEffect(() => {
    if (selectedCard) {
      // Save current scroll position before locking
      const currentScrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
      scrollPositionRef.current = currentScrollY;
      hasRestoredRef.current = false; // Reset flag when opening panel
      
      document.body.style.position = "fixed";
      document.body.style.top = `-${currentScrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
    } else if (scrollPositionRef.current > 0 && !hasRestoredRef.current) {
      // Restore scroll immediately when panel closes
      // onAnimationComplete will also try, but this ensures it happens
      // Use a small delay to let the state update first
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (!hasRestoredRef.current) {
            restoreScrollPosition();
          }
        });
      });
    }

    return () => {
      // Cleanup on unmount
      if (!selectedCard) {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        document.body.style.overflow = "";
      }
    };
  }, [selectedCard, restoreScrollPosition]);

  const detailPanelVariants = {
    hidden: {
      x: "100%",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 35,
        mass: 0.8,
      },
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: {
        duration: 0.25,
        ease: "easeIn",
      },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  if (!selectedCard) return null;

  return (
    <AnimatePresence>
      {selectedCard && (
        <>
          {/* Overlay */}
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={handleClose}
            onWheel={(e) => e.stopPropagation()}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 9998,
              backdropFilter: "blur(4px)",
              pointerEvents: "auto",
            }}
          />

          {/* Detail Panel */}
          <motion.div
            variants={detailPanelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onAnimationComplete={(definition) => {
              // When exit animation completes, restore scroll
              // This ensures scroll is restored after panel fully exits
              if (definition === "exit") {
                restoreScrollPosition();
              }
            }}
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              width: "100%",
              maxWidth: "600px",
              height: "100vh",
              maxHeight: "100vh",
              backgroundColor: "#FFFFFF",
              zIndex: 9999,
              boxShadow: "-2px 0 16px rgba(0, 0, 0, 0.08)",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              pointerEvents: "auto",
            }}
            onClick={(e) => e.stopPropagation()}
            onWheel={(e) => e.stopPropagation()}
          >
            {/* Header - Fixed */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              style={{
                flexShrink: 0,
                backgroundColor: "#FFFFFF",
                borderBottom: "1px solid #E5E7EB",
                padding: "2rem 2.5rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                zIndex: 10,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ 
                    delay: 0.2, 
                    type: "spring",
                    stiffness: 200,
                    damping: 15
                  }}
                  whileHover={{ scale: 1.05 }}
                  style={{
                    width: 56,
                    height: 56,
                    background: "#03045E",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    flexShrink: 0,
                  }}
                >
                  {(() => {
                    const IconComponent = selectedCard.icon;
                    return IconComponent ? (
                      <IconComponent style={{ fontSize: "1.75rem" }} />
                    ) : null;
                  })()}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                >
                  <h2
                    style={{
                      margin: 0,
                      fontSize: "1.75rem",
                      fontWeight: 600,
                      color: "#1A1A1A",
                      lineHeight: 1.3,
                      letterSpacing: "-0.3px",
                    }}
                  >
                    {selectedCard.title}
                  </h2>
                  <p
                    style={{
                      margin: "0.375rem 0 0 0",
                      fontSize: "0.8125rem",
                      color: "#6B7280",
                      fontWeight: 400,
                      letterSpacing: "0.5px",
                      textTransform: "uppercase",
                    }}
                  >
                    Industry Solutions
                  </p>
                </motion.div>
              </div>
              <motion.button
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                whileHover={{
                  backgroundColor: "#F3F4F6",
                  rotate: 90,
                }}
                whileTap={{ scale: 0.95 }}
                onClick={handleClose}
                style={{
                  width: 44,
                  height: 44,
                  border: "none",
                  backgroundColor: "#F9FAFB",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "#374151",
                  transition: "all 0.2s ease",
                }}
              >
                <FaTimes size={16} />
              </motion.button>
            </motion.div>

            {/* Content - Scrollable */}
            <div
              style={{
                flex: "1 1 auto",
                overflowY: "auto",
                overflowX: "hidden",
                padding: "0",
                WebkitOverflowScrolling: "touch",
                minHeight: 0,
                overscrollBehavior: "contain",
                position: "relative",
              }}
              className="detail-panel-content"
            >
              {/* Hero Image Section */}
              <motion.div
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                style={{
                  width: "100%",
                  height: "240px",
                  overflow: "hidden",
                  position: "relative",
                  backgroundColor: "#F9FAFB",
                }}
              >
                <motion.img
                  src={imagesMap[selectedCard.title.toLowerCase()] || CardImg}
                  alt={selectedCard.title}
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </motion.div>

              {/* Content Wrapper */}
              <div style={{ padding: "2.5rem 2.5rem" }}>
                {/* Overview Section */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
                  style={{
                    marginBottom: "3rem",
                    paddingBottom: "2.5rem",
                    borderBottom: "1px solid #E5E7EB",
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      marginBottom: "1.75rem",
                    }}
                  >
                    <div
                      style={{
                        width: "3px",
                        height: "24px",
                        backgroundColor: "#03045E",
                      }}
                    />
                    <h3
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        color: "#03045E",
                        margin: 0,
                        textTransform: "uppercase",
                        letterSpacing: "1.5px",
                      }}
                    >
                      Overview
                    </h3>
                  </motion.div>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    style={{
                      fontSize: "1rem",
                      lineHeight: "1.75",
                      color: "#374151",
                      margin: 0,
                      fontWeight: 400,
                    }}
                  >
                    {selectedCard.detailedContent.overview}
                  </motion.p>
                </motion.div>

                {/* Key Features Section */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                  style={{ marginBottom: "3rem" }}
                >
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.4 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      marginBottom: "2rem",
                    }}
                  >
                    <div
                      style={{
                        width: "3px",
                        height: "24px",
                        backgroundColor: "#03045E",
                      }}
                    />
                    <h3
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        color: "#03045E",
                        margin: 0,
                        textTransform: "uppercase",
                        letterSpacing: "1.5px",
                      }}
                    >
                      Key Features
                    </h3>
                  </motion.div>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr",
                      gap: "0.75rem",
                    }}
                    className="features-grid"
                  >
                    {selectedCard.detailedContent.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ 
                          delay: 0.5 + idx * 0.06, 
                          duration: 0.4,
                          ease: "easeOut"
                        }}
                        whileHover={{ 
                          x: 8,
                          backgroundColor: "#F9FAFB",
                          transition: { duration: 0.2 }
                        }}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "1.25rem",
                          padding: "1.5rem 1.25rem",
                          backgroundColor: "#FFFFFF",
                          border: "1px solid #E5E7EB",
                          borderLeft: "3px solid #03045E",
                          transition: "all 0.2s ease",
                        }}
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ 
                            delay: 0.6 + idx * 0.06,
                            type: "spring",
                            stiffness: 200,
                            damping: 15
                          }}
                          style={{
                            width: "32px",
                            height: "32px",
                            minWidth: "32px",
                            backgroundColor: "#03045E",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#fff",
                            flexShrink: 0,
                          }}
                        >
                          <FaCheckCircle style={{ fontSize: "0.875rem" }} />
                        </motion.div>
                        <p
                          style={{
                            margin: 0,
                            fontSize: "0.9375rem",
                            lineHeight: "1.7",
                            color: "#1F2937",
                            fontWeight: 400,
                            flex: 1,
                          }}
                        >
                          {feature}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Key Benefits Section */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
                  style={{ marginBottom: "3rem" }}
                >
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.4 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      marginBottom: "2rem",
                    }}
                  >
                    <div
                      style={{
                        width: "3px",
                        height: "24px",
                        backgroundColor: "#03045E",
                      }}
                    />
                    <h3
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        color: "#03045E",
                        margin: 0,
                        textTransform: "uppercase",
                        letterSpacing: "1.5px",
                      }}
                    >
                      Key Benefits
                    </h3>
                  </motion.div>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(2, 1fr)",
                      gap: "0.75rem",
                    }}
                    className="benefits-grid"
                  >
                    {selectedCard.detailedContent.benefits.map((benefit, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                          delay: 0.6 + idx * 0.08, 
                          duration: 0.4,
                          ease: "easeOut"
                        }}
                        whileHover={{
                          y: -2,
                          borderColor: "#03045E",
                          backgroundColor: "#F9FAFB",
                          transition: { duration: 0.2 },
                        }}
                        style={{
                          padding: "1.5rem 1.25rem",
                          backgroundColor: "#FFFFFF",
                          border: "1px solid #E5E7EB",
                          borderLeft: "3px solid #03045E",
                          position: "relative",
                          transition: "all 0.2s ease",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "0.875rem",
                          }}
                        >
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ 
                              delay: 0.7 + idx * 0.08,
                              type: "spring",
                              stiffness: 200,
                              damping: 15
                            }}
                            style={{
                              width: "20px",
                              height: "20px",
                              minWidth: "20px",
                              backgroundColor: "#03045E",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              color: "#fff",
                              flexShrink: 0,
                              marginTop: "2px",
                            }}
                          >
                            <FaCheckCircle style={{ fontSize: "0.625rem" }} />
                          </motion.div>
                          <p
                            style={{
                              margin: 0,
                              fontSize: "0.875rem",
                              lineHeight: "1.6",
                              color: "#1F2937",
                              fontWeight: 500,
                              flex: 1,
                            }}
                          >
                            {benefit}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* CTA Button Section */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
                  style={{
                    paddingTop: "2rem",
                    borderTop: "1px solid #E5E7EB",
                  }}
                >
                  <motion.button
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7, duration: 0.4 }}
                    whileHover={{
                      backgroundColor: "#2E2A99",
                      scale: 1.01,
                      transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => {
                      onClose();
                      navigate("/contact");
                    }}
                    style={{
                      width: "100%",
                      padding: "1.125rem 2rem",
                      backgroundColor: "#03045E",
                      color: "#FFFFFF",
                      border: "none",
                      fontSize: "0.9375rem",
                      fontWeight: 600,
                      cursor: "pointer",
                      letterSpacing: "0.5px",
                      textTransform: "uppercase",
                      transition: "all 0.2s ease",
                    }}
                  >
                    Connect Us
                  </motion.button>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.4 }}
                    style={{
                      margin: "1rem 0 0 0",
                      fontSize: "0.75rem",
                      color: "#6B7280",
                      textAlign: "center",
                      fontWeight: 400,
                      letterSpacing: "0.3px",
                    }}
                  >
                    Get in touch with our team
                  </motion.p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <style>{`
            .detail-panel-content {
              -webkit-overflow-scrolling: touch;
              scroll-behavior: smooth;
              overflow-y: auto !important;
              overflow-x: hidden !important;
              pointer-events: auto !important;
              will-change: scroll-position;
            }
            
            .detail-panel-content::-webkit-scrollbar {
              width: 6px;
            }
            
            .detail-panel-content::-webkit-scrollbar-track {
              background: #F9FAFB;
            }
            
            .detail-panel-content::-webkit-scrollbar-thumb {
              background: #03045E;
            }
            
            .detail-panel-content::-webkit-scrollbar-thumb:hover {
              background: #2E2A99;
            }
            
            .features-grid > div {
              transition: all 0.2s ease;
            }
            
            .features-grid > div:hover {
              border-left-color: #2E2A99 !important;
            }
            
            .benefits-grid > div {
              transition: all 0.2s ease;
            }
            
            .benefits-grid > div:hover {
              border-left-color: #2E2A99 !important;
            }
            
            @media (max-width: 768px) {
              .benefits-grid {
                grid-template-columns: 1fr !important;
              }
              
              div[style*="maxWidth: \"600px\""] {
                max-width: 100% !important;
              }
              
              .detail-panel-content > div {
                padding: 2rem 1.5rem !important;
              }
            }
            
            @media (max-width: 640px) {
              .detail-panel-content > div {
                padding: 1.5rem 1.25rem !important;
              }
              
              .features-grid > div {
                padding: 1.25rem 1rem !important;
              }
              
              .benefits-grid > div {
                padding: 1.25rem 1rem !important;
              }
            }
          `}</style>
        </>
      )}
    </AnimatePresence>
  );
}

export default IndustryCardsDetail;

