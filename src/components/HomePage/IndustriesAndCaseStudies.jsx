import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaHospital,
  FaUniversity,
  FaShoppingCart,
  FaGraduationCap,
  FaBuilding,
  FaCar,
  FaArrowRight,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const IndustriesAndCaseStudies = () => {
  const [activeTab, setActiveTab] = useState("industries");
  const headerRef = useRef(null);

  useEffect(() => {
    if (headerRef.current) {
      const title = headerRef.current.querySelector(".section-title");
      if (title) {
        gsap.fromTo(
          title,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: title,
              start: "top 80%",
            },
          }
        );
      }
    }
  }, []);

  const industries = [
    {
      icon: FaHospital,
      name: "Healthcare & Medical",
      description:
        "Digital transformation solutions for hospitals, clinics, and healthcare providers with HIPAA-compliant systems.",
      projects: "240+",
    },
    {
      icon: FaUniversity,
      name: "Finance & Banking",
      description:
        "Secure, scalable fintech solutions with advanced encryption and regulatory compliance built-in.",
      projects: "180+",
    },
    {
      icon: FaShoppingCart,
      name: "E-Commerce & Retail",
      description:
        "High-converting online stores with AI-powered recommendations and seamless checkout experiences.",
      projects: "320+",
    },
    {
      icon: FaGraduationCap,
      name: "Education & E-Learning",
      description:
        "Interactive learning platforms with real-time collaboration and advanced analytics for educators.",
      projects: "150+",
    },
    {
      icon: FaBuilding,
      name: "Real Estate & Construction",
      description:
        "Property management systems and project tracking tools with 3D visualization capabilities.",
      projects: "130+",
    },
    {
      icon: FaCar,
      name: "Automotive & Logistics",
      description:
        "Fleet management, route optimization, and real-time tracking solutions for transport companies.",
      projects: "95+",
    },
  ];

  const caseStudies = [
    {
      id: 1,
      title: "Precision Planning",
      subtitle: "Deep Discovery & Clarity",
      description:
        "We dive deep into your operations, uncover hidden bottlenecks, and craft data-backed roadmaps that align perfectly with your goals—no templates, no fluff, just clarity that drives measurable results from day one.",
      metrics: [
        { value: "40%", label: "Faster Delivery" },
        { value: "60%", label: "Cost Reduction" },
        { value: "95%", label: "Client Satisfaction" },
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&q=80",
    },
    {
      id: 2,
      title: "Flawless Execution",
      subtitle: "Fixed timelines, transparent pricing",
      description:
        "Fixed timelines, transparent pricing, and zero surprises—delivered with full accountability and 30-day post-launch support, so you stay in control while we handle the rest with ownership and excellence.",
      metrics: [
        { value: "100%", label: "On-Time Delivery" },
        { value: "0", label: "Hidden Costs" },
        { value: "30 Days", label: "Support Period" },
      ],
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=500&fit=crop&q=80",
    },
  ];

  return (
    <section className="industries-wrapper">
      <div className="industries-container">
        {/* Header */}
        <div ref={headerRef} className="header">
          <div className="label-wrapper">
            <span className="label-line" />
            <span className="label">Our Expertise</span>
          </div>
          <h2 className="section-title">
            Industries We Serve & Success Stories
          </h2>
          <p className="subtitle">
            Trusted by businesses across diverse sectors, delivering measurable
            results through technology and innovation.
          </p>
        </div>

        {/* Tabs */}
        <div className="tabs">
          <button
            onClick={() => setActiveTab("industries")}
            className={`tab ${activeTab === "industries" ? "active" : ""}`}
          >
            Industries We Serve
          </button>
          <button
            onClick={() => setActiveTab("cases")}
            className={`tab ${activeTab === "cases" ? "active" : ""}`}
          >
            Case Studies
          </button>
        </div>

        {/* Content */}
        <div className="content">
          <AnimatePresence mode="wait">
            {activeTab === "industries" && (
              <motion.div
                key="industries"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="industries-grid"
              >
                {industries.map((industry, idx) => {
                  const Icon = industry.icon;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="industry-card"
                    >
                      <div className="card-header">
                        <div className="icon-wrapper">
                          <Icon />
                        </div>
                        <span className="projects">{industry.projects}</span>
                      </div>
                      <h3 className="card-title">{industry.name}</h3>
                      <p className="card-desc">{industry.description}</p>
                      <div className="card-arrow">
                        <FaArrowRight />
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            )}

            {activeTab === "cases" && (
              <motion.div
                key="cases"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="cases-grid"
              >
                {caseStudies.map((study, idx) => (
                  <motion.div
                    key={study.id}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.2 }}
                    className="case-card"
                  >
                    <div className="case-image">
                      <img src={study.image} alt={study.title} />
                      <div className="case-badge">Case Study</div>
                    </div>
                    <div className="case-content">
                      <span className="case-subtitle">{study.subtitle}</span>
                      <h3 className="case-title">{study.title}</h3>
                      <p className="case-desc">{study.description}</p>
                      <div className="metrics">
                        {study.metrics.map((metric, i) => (
                          <div key={i} className="metric">
                            <div className="metric-value">{metric.value}</div>
                            <div className="metric-label">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <style>{`
        .industries-wrapper {
          width: 100%;
          background: #FFFFFF;
          padding: 5rem 2rem;
        }

        .industries-container {
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
        }

        /* ===== HEADER ===== */
        .header {
          max-width: 800px;
          margin-bottom: 4rem;
        }

        .label-wrapper {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .label-line {
          width: 40px;
          height: 1px;
          background: #03045E;
        }

        .label {
          font-size: 0.8125rem;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #03045E;
        }

        .section-title {
          font-size: clamp(1.875rem, 4vw, 2.5rem);
          color: #1A1A1A;
          font-weight: 700;
          line-height: 1.25;
          margin-bottom: 1rem;
        }

        .subtitle {
          font-size: 1.0625rem;
          color: #666;
          line-height: 1.6;
        }

        /* ===== TABS ===== */
        .tabs {
          display: flex;
          gap: 0;
          border-bottom: 1px solid #E5E7EB;
          margin-bottom: 3rem;
        }

        .tab {
          padding: 1rem 2rem;
          background: transparent;
          border: none;
          border-bottom: 2px solid transparent;
          color: #666;
          font-size: 0.9375rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          bottom: -1px;
        }

        .tab.active {
          color: #03045E;
          border-bottom-color: #03045E;
        }

        .tab:hover {
          color: #03045E;
        }

        /* ===== CONTENT ===== */
        .content {
          width: 100%;
        }

        /* ===== INDUSTRIES GRID ===== */
        .industries-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .industry-card {
          background: #FFFFFF;
          border: 1px solid #E5E7EB;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          transition: all 0.3s ease;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .industry-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: #03045E;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }

        .industry-card:hover::before {
          transform: scaleX(1);
        }

        .industry-card:hover {
          border-color: #03045E;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
          transform: translateY(-4px);
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .icon-wrapper {
          width: 56px;
          height: 56px;
          background: linear-gradient(135deg, rgba(91, 88, 232, 0.12) 0%, rgba(63, 55, 201, 0.08) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #03045E;
          font-size: 1.5rem;
          position: relative;
        }

        .icon-wrapper::before {
          content: '';
          position: absolute;
          inset: -8px;
          background: linear-gradient(135deg, rgba(91, 88, 232, 0.06) 0%, rgba(63, 55, 201, 0.03) 100%);
          z-index: -1;
          filter: blur(12px);
        }

        .projects {
          font-size: 0.875rem;
          font-weight: 600;
          color: #03045E;
        }

        .card-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #1A1A1A;
          line-height: 1.3;
          margin: 0;
        }

        .card-desc {
          font-size: 0.9375rem;
          color: #555;
          line-height: 1.6;
          flex: 1;
          margin: 0;
        }

        .card-arrow {
          width: 40px;
          height: 40px;
          border: 1px solid #E5E7EB;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #03045E;
          transition: all 0.3s ease;
          margin-left: auto;
        }

        .industry-card:hover .card-arrow {
          background: #03045E;
          color: #fff;
          border-color: #03045E;
          transform: translateX(4px);
        }

        /* ===== CASES GRID ===== */
        .cases-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 4rem;
        }

        .case-card {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
        }

        .case-card:nth-child(even) {
          direction: rtl;
        }

        .case-card:nth-child(even) > * {
          direction: ltr;
        }

        .case-image {
          position: relative;
          width: 100%;
          height: 500px;
          overflow: hidden;
          background: #E5E7EB;
        }

        .case-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .case-card:hover .case-image img {
          transform: scale(1.05);
        }

        .case-badge {
          position: absolute;
          top: 1.5rem;
          left: 1.5rem;
          padding: 0.5rem 1rem;
          background: #03045E;
          color: #fff;
          font-size: 0.6875rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
        }

        .case-content {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .case-subtitle {
          font-size: 0.8125rem;
          color: #03045E;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .case-title {
          font-size: clamp(1.75rem, 3.5vw, 2.25rem);
          color: #1A1A1A;
          font-weight: 700;
          line-height: 1.25;
          margin: 0;
        }

        .case-desc {
          font-size: 1rem;
          color: #555;
          line-height: 1.7;
          margin: 0;
        }

        .metrics {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-top: 1rem;
        }

        .metric {
          text-align: center;
          padding: 1.5rem 1rem;
          background: #F8F9FA;
          border-left: 3px solid #03045E;
        }

        .metric-value {
          font-size: 2rem;
          font-weight: 700;
          color: #1A1A1A;
          line-height: 1;
          margin-bottom: 0.5rem;
        }

        .metric-label {
          font-size: 0.875rem;
          color: #666;
          font-weight: 500;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 1100px) {
          .industries-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .case-card {
            grid-template-columns: 1fr;
          }

          .case-card:nth-child(even) {
            direction: ltr;
          }

          .case-image {
            height: 400px;
          }
        }

        @media (max-width: 768px) {
          .industries-wrapper {
            padding: 4rem 1.5rem;
          }

          .header {
            margin-bottom: 3rem;
          }

          .tabs {
            margin-bottom: 2.5rem;
          }

          .tab {
            padding: 0.875rem 1.5rem;
            font-size: 0.875rem;
          }

          .industries-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .cases-grid {
            gap: 3rem;
          }

          .case-image {
            height: 350px;
          }

          .metrics {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
        }

        @media (max-width: 640px) {
          .industries-wrapper {
            padding: 3rem 1rem;
          }

          .label-line {
            width: 30px;
          }

          .tab {
            padding: 0.75rem 1rem;
            font-size: 0.8125rem;
          }

          .industry-card {
            padding: 1.75rem;
          }

          .icon-wrapper {
            width: 52px;
            height: 52px;
            font-size: 1.375rem;
          }

          .case-image {
            height: 300px;
          }

          .case-badge {
            top: 1rem;
            left: 1rem;
            padding: 0.4rem 0.875rem;
            font-size: 0.625rem;
          }
        }

        @media (max-width: 480px) {
          .industries-wrapper {
            padding: 2.5rem 1rem;
          }

          .section-title {
            font-size: 1.5rem;
          }

          .card-title {
            font-size: 1.125rem;
          }

          .case-image {
            height: 250px;
          }

          .metric-value {
            font-size: 1.75rem;
          }
        }
      `}</style>
    </section>
  );
};

export default IndustriesAndCaseStudies;