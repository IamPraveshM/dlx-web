import React, { useState, useEffect, useRef } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact01Img = "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80";
const Contact02Img = "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80";
const Contact03Img = "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80";

function Contact() {
  const heroRef = useRef(null);
  const formRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const images = [Contact01Img, Contact02Img, Contact03Img];

  const services = [
    'Web Development',
    'Mobile Applications',
    'UI/UX Design',
    'Brand Strategy',
    'Digital Marketing',
    'Consulting Services'
  ];

  useEffect(() => {
    // Hero animations
    if (heroRef.current) {
      const heading = heroRef.current.querySelector(".contact-hero-heading");
      if (heading) {
        const words = heading.textContent.split(" ");
        heading.innerHTML = words
          .map((word) => `<span class="hero-word">${word}</span>`)
          .join(" ");

        const wordSpans = heading.querySelectorAll(".hero-word");

        gsap.fromTo(
          wordSpans,
          { opacity: 0, y: 40, rotateX: -90 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.9,
            stagger: 0.06,
            ease: "power4.out",
            delay: 0.3,
          }
        );
      }

      const subtitle = heroRef.current.querySelector(".contact-hero-subtitle");
      if (subtitle) {
        gsap.fromTo(
          subtitle,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            delay: 0.8,
            ease: "power3.out",
          }
        );
      }
    }

    // Form animation
    if (formRef.current) {
      gsap.fromTo(
        formRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 1.2,
          ease: "power3.out",
        }
      );
    }

    // Image slider
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div style={{ backgroundColor: "#F8F9FA", minHeight: "100vh" }}>
      <style>{`
        .hero-word {
          display: inline-block;
          margin-right: 0.3em;
          transform-origin: center bottom;
          perspective: 1000px;
        }

        .slider-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          transition: opacity 1.2s ease;
        }

        .slider-image.active {
          opacity: 1;
        }

        .indicator {
          flex: 1;
          height: 2px;
          background: #E0E0E0;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: background 0.3s ease;
        }

        .indicator:hover {
          background: #D0D0D0;
        }

        .indicator::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #03045E;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 4s linear;
        }

        .indicator.active::after {
          transform: scaleX(1);
        }

        @media (max-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
          .image-wrapper {
            height: 450px !important;
          }
        }

        @media (max-width: 768px) {
          .contact-form-row {
            grid-template-columns: 1fr !important;
          }
          .image-wrapper {
            height: 400px !important;
          }
          .contact-footer {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 1.25rem !important;
          }
          .contact-submit-btn {
            width: 100% !important;
            justify-content: center !important;
          }
        }

        @media (max-width: 480px) {
          .contact-hero-heading {
            font-size: 1.75rem !important;
          }
          .image-wrapper {
            height: 320px !important;
          }
        }
      `}</style>

      {/* Hero Section */}
      <div
        ref={heroRef}
        style={{
          padding: "7rem 2rem 3rem",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <div style={{ marginBottom: "0.75rem" }}>
          <span
            style={{
              fontSize: "0.8125rem",
              fontWeight: "600",
              letterSpacing: "2.5px",
              textTransform: "uppercase",
              color: "#03045E",
              display: "inline-block",
            }}
          >
            Contact Us
          </span>
        </div>

        <h1
          className="contact-hero-heading"
          style={{
            fontSize: "clamp(1.875rem, 4.5vw, 2.75rem)",
            color: "#242424",
            lineHeight: "1.2",
            fontWeight: "700",
            marginBottom: "1.25rem",
            maxWidth: "800px",
          }}
        >
          Let's Build Something Great Together
        </h1>

        <p
          className="contact-hero-subtitle"
          style={{
            fontSize: "1.125rem",
            lineHeight: "1.75",
            color: "#666",
            maxWidth: "680px",
            marginBottom: "3.5rem",
          }}
        >
          Have a project in mind? We'd love to hear about it. Fill out the form and we'll respond within 24 hours.
        </p>
      </div>

      {/* Main Content Grid */}
      <div
        ref={formRef}
        style={{
          padding: "0 2rem 3.5rem",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <div
          className="contact-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.2fr",
            gap: "3.5rem",
          }}
        >
          {/* Left Column - Image & Info */}
          <div>
            {/* Image Slider */}
            <div
              className="image-wrapper"
              style={{
                position: "relative",
                width: "100%",
                height: "520px",
                overflow: "hidden",
                background: "#E5E5E5",
                borderRadius: "0",
                marginBottom: "1rem",
                boxShadow: "0 6px 24px rgba(0, 0, 0, 0.08)",
              }}
            >
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Office ${index + 1}`}
                  className={`slider-image ${index === currentImageIndex ? 'active' : ''}`}
                />
              ))}
            </div>

            {/* Indicators */}
            <div style={{ display: "flex", gap: "8px", marginBottom: "2.5rem" }}>
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>

            {/* Contact Info Cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div
                style={{
                  background: "#fff",
                  padding: "1.5rem",
                  borderRadius: "0",
                  border: "1px solid #E8E8E8",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#03045E";
                  e.currentTarget.style.transform = "translateX(4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#E8E8E8";
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                <div style={{ fontSize: "0.75rem", fontWeight: "600", letterSpacing: "1.5px", textTransform: "uppercase", color: "#999", marginBottom: "0.5rem" }}>
                  Email
                </div>
                <a
                  href="mailto:info@dreamlogicx.com"
                  style={{
                    fontSize: "0.9375rem",
                    color: "#242424",
                    textDecoration: "none",
                    fontWeight: "500",
                  }}
                >
                  info@dreamlogicx.com
                </a>
              </div>

              <div
                style={{
                  background: "#fff",
                  padding: "1.5rem",
                  borderRadius: "0",
                  border: "1px solid #E8E8E8",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#03045E";
                  e.currentTarget.style.transform = "translateX(4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#E8E8E8";
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                <div style={{ fontSize: "0.75rem", fontWeight: "600", letterSpacing: "1.5px", textTransform: "uppercase", color: "#999", marginBottom: "0.5rem" }}>
                  Phone
                </div>
                <a
                  href="tel:+916260439411"
                  style={{
                    fontSize: "0.9375rem",
                    color: "#242424",
                    textDecoration: "none",
                    fontWeight: "500",
                  }}
                >
                  +91 6260439411
                </a>
              </div>

              <div
                style={{
                  background: "#fff",
                  padding: "1.5rem",
                  borderRadius: "0",
                  border: "1px solid #E8E8E8",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#03045E";
                  e.currentTarget.style.transform = "translateX(4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#E8E8E8";
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                <div style={{ fontSize: "0.75rem", fontWeight: "600", letterSpacing: "1.5px", textTransform: "uppercase", color: "#999", marginBottom: "0.5rem" }}>
                  Location
                </div>
                <div style={{ fontSize: "0.9375rem", color: "#242424", fontWeight: "500" }}>
                  Sector 62, Noida, Uttar Pradesh – 201309
                </div>
              </div>

              {/* Social Links */}
              <div
                style={{
                  background: "#fff",
                  padding: "1.5rem",
                  borderRadius: "0",
                  border: "1px solid #E8E8E8",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#03045E";
                  e.currentTarget.style.transform = "translateX(4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#E8E8E8";
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                <div style={{ fontSize: "0.75rem", fontWeight: "600", letterSpacing: "1.5px", textTransform: "uppercase", color: "#999", marginBottom: "0.5rem" }}>
                  Social Media
                </div>
                <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                  <a href="https://www.facebook.com/dreamlogicxcom/" target="_blank" rel="noopener noreferrer" style={{ color: "#03045E", textDecoration: "none", fontWeight: 600 }}>Facebook</a>
                  <a href="https://www.youtube.com/@dreamlogic-X" target="_blank" rel="noopener noreferrer" style={{ color: "#03045E", textDecoration: "none", fontWeight: 600 }}>YouTube</a>
                  <a href="https://www.linkedin.com/company/dreamlogicx/" target="_blank" rel="noopener noreferrer" style={{ color: "#03045E", textDecoration: "none", fontWeight: 600 }}>LinkedIn</a>
                  <a href="https://www.instagram.com/dreamlogicxcom/" target="_blank" rel="noopener noreferrer" style={{ color: "#03045E", textDecoration: "none", fontWeight: 600 }}>Instagram</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div
            style={{
              background: "#fff",
              padding: "2.5rem",
              borderRadius: "6px",
              border: "1px solid #E8E8E8",
              boxShadow: "0 6px 24px rgba(0, 0, 0, 0.04)",
            }}
          >
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: "700",
                color: "#242424",
                marginBottom: "2rem",
              }}
            >
              Send us a message
            </h2>

            <div>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {/* Name Row */}
                <div
                  className="contact-form-row"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1rem",
                  }}
                >
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.8125rem",
                        fontWeight: "600",
                        color: focusedField === 'firstName' ? "#03045E" : "#242424",
                        marginBottom: "0.5rem",
                        transition: "color 0.2s ease",
                      }}
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('firstName')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="John"
                      style={{
                        width: "100%",
                        padding: "0.75rem",
                        fontSize: "0.9375rem",
                        color: "#242424",
                        background: "#F8F9FA",
                        border: `1px solid ${focusedField === 'firstName' ? '#03045E' : '#E8E8E8'}`,
                        borderRadius: "0",
                        fontFamily: "inherit",
                        transition: "all 0.2s ease",
                        outline: "none",
                      }}
                    />
                  </div>

                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.8125rem",
                        fontWeight: "600",
                        color: focusedField === 'lastName' ? "#03045E" : "#242424",
                        marginBottom: "0.5rem",
                        transition: "color 0.2s ease",
                      }}
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('lastName')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Doe"
                      style={{
                        width: "100%",
                        padding: "0.75rem",
                        fontSize: "0.9375rem",
                        color: "#242424",
                        background: "#F8F9FA",
                        border: `1px solid ${focusedField === 'lastName' ? '#03045E' : '#E8E8E8'}`,
                        borderRadius: "0",
                        fontFamily: "inherit",
                        transition: "all 0.2s ease",
                        outline: "none",
                      }}
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.8125rem",
                      fontWeight: "600",
                      color: focusedField === 'email' ? "#03045E" : "#242424",
                      marginBottom: "0.5rem",
                      transition: "color 0.2s ease",
                    }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="john@example.com"
                    style={{
                      width: "100%",
                      padding: "0.75rem",
                      fontSize: "0.9375rem",
                      color: "#242424",
                      background: "#F8F9FA",
                      border: `1px solid ${focusedField === 'email' ? '#03045E' : '#E8E8E8'}`,
                      borderRadius: "0",
                      fontFamily: "inherit",
                      transition: "all 0.2s ease",
                      outline: "none",
                    }}
                  />
                </div>

                {/* Service */}
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.8125rem",
                      fontWeight: "600",
                      color: focusedField === 'service' ? "#03045E" : "#242424",
                      marginBottom: "0.5rem",
                      transition: "color 0.2s ease",
                    }}
                  >
                    Service
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('service')}
                    onBlur={() => setFocusedField(null)}
                    style={{
                      width: "100%",
                      padding: "0.75rem",
                      fontSize: "0.9375rem",
                      color: "#242424",
                      background: "#F8F9FA",
                      border: `1px solid ${focusedField === 'service' ? '#03045E' : '#E8E8E8'}`,
                      borderRadius: "0",
                      fontFamily: "inherit",
                      transition: "all 0.2s ease",
                      outline: "none",
                      cursor: "pointer",
                    }}
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.8125rem",
                      fontWeight: "600",
                      color: focusedField === 'message' ? "#03045E" : "#242424",
                      marginBottom: "0.5rem",
                      transition: "color 0.2s ease",
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Tell us about your project..."
                    rows="5"
                    style={{
                      width: "100%",
                      padding: "0.75rem",
                      fontSize: "0.9375rem",
                      color: "#242424",
                      background: "#F8F9FA",
                      border: `1px solid ${focusedField === 'message' ? '#03045E' : '#E8E8E8'}`,
                      borderRadius: "4px",
                      fontFamily: "inherit",
                      transition: "all 0.2s ease",
                      outline: "none",
                      resize: "vertical",
                      lineHeight: "1.6",
                    }}
                  />
                </div>
              </div>

              {/* Footer */}
              <div
                className="contact-footer"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "2rem",
                  paddingTop: "2rem",
                  borderTop: "1px solid #E8E8E8",
                }}
              >
                <div style={{ flex: 1, maxWidth: "320px" }}>
                  <p
                    style={{
                      fontSize: "0.8125rem",
                      color: "#666",
                      marginBottom: "0.75rem",
                      lineHeight: "1.6",
                    }}
                  >
                    We'll get back to you within 24 hours.
                  </p>
                  <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
                    <div style={{ width: "6px", height: "6px", borderRadius: "0", background: "#28a745" }} />
                    <span style={{ fontSize: "0.75rem", color: "#28a745", fontWeight: "500" }}>
                      Usually responds in 2-3 hours
                    </span>
                  </div>
                </div>

                <motion.button
                  onClick={handleSubmit}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="contact-submit-btn"
                  style={{
                    padding: "0.875rem 2rem",
                    backgroundColor: isSubmitted ? "#28a745" : "#03045E",
                    color: "#fff",
                    border: "none",
                    borderRadius: "0",
                    fontSize: "0.9375rem",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitted) {
                      e.target.style.backgroundColor = "#03045E";
                      e.target.style.boxShadow = "0 6px 20px rgba(3, 4, 94, 0.3)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSubmitted) {
                      e.target.style.backgroundColor = "#03045E";
                      e.target.style.boxShadow = "none";
                    }
                  }}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle size={18} />
                      <span>Sent</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={18} />
                    </>
                  )}
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {isSubmitted && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            padding: "20px",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            style={{
              background: "#fff",
              padding: "3rem 2.5rem",
              borderRadius: "0",
              textAlign: "center",
              maxWidth: "420px",
              width: "100%",
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
            }}
          >
            <CheckCircle
              size={48}
              style={{
                color: "#28a745",
                margin: "0 auto 1.25rem",
              }}
            />
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "700",
                color: "#242424",
                marginBottom: "0.75rem",
              }}
            >
              Message Sent Successfully
            </h3>
            <p
              style={{
                fontSize: "0.9375rem",
                color: "#666",
                lineHeight: "1.6",
              }}
            >
              Thank you for reaching out. We'll review your message and get back to you within 24 hours.
            </p>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default Contact;