import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FiSearch,
  FiCpu,
  FiLayers,
  FiTrendingUp,
} from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

function ProcessSection() {
  const sectionRef = useRef(null);
  const [activeStep, setActiveStep] = useState(null);

  const processSteps = [
    {
      number: "01",
      icon: FiSearch,
      title: "Discovery & Strategy",
      duration: "Week 1",
      description:
        "We analyze your business goals, competitive landscape, and user needs to build a strategic roadmap focused on measurable outcomes.",
      deliverables: [
        "Market & competitor analysis",
        "Strategic roadmap with KPIs",
        "Technical requirements doc",
      ],
    },
    {
      number: "02",
      icon: FiCpu,
      title: "Design & Prototyping",
      duration: "Week 2-3",
      description:
        "Creating intuitive user experiences through wireframes and high-fidelity prototypes, validated with user testing before development.",
      deliverables: [
        "Interactive prototypes",
        "Design system & components",
        "User testing reports",
      ],
    },
    {
      number: "03",
      icon: FiLayers,
      title: "Development & Integration",
      duration: "Week 3-5",
      description:
        "Building scalable, performance-optimized solutions with clean code, rigorous testing, and seamless third-party integrations.",
      deliverables: [
        "MVP deployment",
        "API integrations",
        "QA testing & documentation",
      ],
    },
    {
      number: "04",
      icon: FiTrendingUp,
      title: "Launch & Optimization",
      duration: "Week 5-6+",
      description:
        "Seamless production deployment with continuous monitoring, performance optimization, and data-driven improvements.",
      deliverables: [
        "Production deployment",
        "Analytics setup",
        "Ongoing optimization",
      ],
    },
  ];

  useEffect(() => {
    if (sectionRef.current) {
      const heading = sectionRef.current.querySelector(".process-heading");
      if (heading) {
        gsap.fromTo(
          heading,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: heading,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      const cards = sectionRef.current.querySelectorAll(".process-card");
      gsap.fromTo(
        cards,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cards[0],
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} className="process-wrapper">
      <div className="process-container">
        {/* Header */}
        <div className="process-header">
          <div className="label-row">
            <div className="label-line" />
            <span className="label-text">Our Process</span>
          </div>
          <h2 className="process-heading">
            From Vision to Reality in 30 Days
          </h2>
          <p className="process-desc">
            A systematic approach that delivers measurable results at every phase.
          </p>
        </div>

        {/* Process Cards */}
        <div className="process-grid">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            const isActive = activeStep === index;

            return (
              <div
                key={index}
                className={`process-card ${isActive ? 'active' : ''}`}
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(null)}
              >
                {/* Header */}
                <div className="card-header">
                  <div className="icon-wrapper">
                    <Icon className="step-icon" />
                  </div>
                  <div className="header-right">
                    <span className="step-number">{step.number}</span>
                    <span className="step-duration">{step.duration}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="card-title">{step.title}</h3>

                {/* Description */}
                <p className="card-desc">{step.description}</p>

                {/* Deliverables */}
                <div className="deliverables">
                  <h4 className="deliverables-title">Deliverables</h4>
                  <ul className="deliverables-list">
                    {step.deliverables.map((item, i) => (
                      <li key={i}>
                        <span className="bullet">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .process-wrapper {
          width: 100%;
          background: #FFFFFF;
          padding: 5rem 2rem 4rem;
        }

        .process-container {
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
        }

        /* ===== HEADER ===== */
        .process-header {
          max-width: 700px;
          margin-bottom: 3.5rem;
        }

        .label-row {
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

        .label-text {
          font-size: 0.8125rem;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
           color: #03045E;
        }

        .process-heading {
          font-size: clamp(1.875rem, 4vw, 2.5rem);
          color: #1A1A1A;
          font-weight: 700;
          line-height: 1.25;
          margin-bottom: 1rem;
        }

        .process-desc {
          font-size: 1.0625rem;
          color: #666;
          line-height: 1.6;
        }

        /* ===== GRID ===== */
        .process-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }

        /* ===== CARD ===== */
        .process-card {
          background: #FAFAFA;
          border: 1px solid #E5E7EB;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .process-card:hover {
          background: #FFFFFF;
          border-color: #3F37C9;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
        }

        /* ===== CARD HEADER ===== */
        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .icon-wrapper {
          width: 48px;
          height: 48px;
          background: #F0F0F0;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .process-card:hover .icon-wrapper {
          background: #3F37C9;
        }

        .step-icon {
          font-size: 1.5rem;
          color: #3F37C9;
          transition: color 0.3s ease;
        }

        .process-card:hover .step-icon {
          color: #FFFFFF;
        }

        .header-right {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .step-number {
          font-size: 0.875rem;
          font-weight: 700;
          color: #3F37C9;
        }

        .step-duration {
          font-size: 0.8125rem;
          color: #666;
          font-weight: 500;
        }

        /* ===== CONTENT ===== */
        .card-title {
          font-size: 1.375rem;
          color: #1A1A1A;
          font-weight: 700;
          line-height: 1.3;
        }

        .card-desc {
          font-size: 0.9375rem;
          line-height: 1.6;
          color: #555;
        }

        /* ===== DELIVERABLES ===== */
        .deliverables {
          padding-top: 1rem;
          border-top: 1px solid #E5E7EB;
          margin-top: auto;
        }

        .deliverables-title {
          font-size: 0.8125rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #3F37C9;
          margin-bottom: 0.75rem;
        }

        .deliverables-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .deliverables-list li {
          font-size: 0.875rem;
          color: #444;
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          line-height: 1.5;
        }

        .bullet {
          color: #3F37C9;
          font-size: 1.25rem;
          line-height: 1;
          margin-top: -0.125rem;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 1100px) {
          .process-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }

        @media (max-width: 768px) {
          .process-wrapper {
            padding: 4rem 1.5rem 3rem;
          }

          .process-header {
            margin-bottom: 2.5rem;
          }

          .process-card {
            padding: 1.75rem;
            gap: 1.25rem;
          }

          .icon-wrapper {
            width: 44px;
            height: 44px;
          }

          .step-icon {
            font-size: 1.375rem;
          }

          .card-title {
            font-size: 1.25rem;
          }
        }

        @media (max-width: 640px) {
          .process-wrapper {
            padding: 3rem 1rem 2.5rem;
          }

          .process-header {
            margin-bottom: 2rem;
          }

          .label-line {
            width: 30px;
          }

          .process-card {
            padding: 1.5rem;
          }

          .icon-wrapper {
            width: 40px;
            height: 40px;
          }

          .step-icon {
            font-size: 1.25rem;
          }

          .card-title {
            font-size: 1.125rem;
          }

          .card-desc {
            font-size: 0.875rem;
          }
        }

        @media (max-width: 480px) {
          .process-wrapper {
            padding: 2.5rem 1rem 2rem;
          }

          .process-heading {
            font-size: 1.5rem;
          }

          .card-header {
            flex-direction: column;
            gap: 0.75rem;
          }

          .header-right {
            width: 100%;
            justify-content: space-between;
          }
        }
      `}</style>
    </section>
  );
}

export default ProcessSection