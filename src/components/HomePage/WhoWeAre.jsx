import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Lightbulb, TrendingUp } from "lucide-react";
import { SiReact } from "react-icons/si";

// Import your images here
import WhoWeAreImg from "../../assets/WhoRight.png"; // Use existing asset from src/assets

gsap.registerPlugin(ScrollTrigger);

function WhoWeAre() {
  const whoRef = useRef(null);

  useEffect(() => {
    if (whoRef.current) {
      const elements = {
        label: whoRef.current.querySelector(".who-label"),
        heading: whoRef.current.querySelector(".who-heading"),
        subtitle: whoRef.current.querySelector(".who-subtitle"),
        leftContent: whoRef.current.querySelector(".who-left-content"),
        rightImage: whoRef.current.querySelector(".who-right-image"),
        featureCards: whoRef.current.querySelectorAll(".feature-card"),
      };

      // Animations
      gsap.fromTo(
        elements.label,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: elements.label,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        elements.heading,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: elements.heading,
            start: "top 75%",
          },
        }
      );

      gsap.fromTo(
        elements.subtitle,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: elements.subtitle,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        elements.leftContent,
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: elements.leftContent,
            start: "top 75%",
          },
        }
      );

      gsap.fromTo(
        elements.rightImage,
        { opacity: 0, x: 60 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: elements.rightImage,
            start: "top 75%",
          },
        }
      );

      gsap.fromTo(
        elements.featureCards,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: elements.featureCards[0],
            start: "top 80%",
          },
        }
      );
    }
  }, []);

  return (
    <section ref={whoRef} className="who-section">
      <div className="who-container">
        {/* Header */}
        <div className="section-header">
          <span className="who-label">Who We Are</span>
          <h2 className="who-heading">
            We Help Businesses Think Clearly, Work Smarter, and Grow Confidently
          </h2>
          <p className="who-subtitle">
            A strategic partner committed to solving real problems with clarity,
            systems, and measurable results.
          </p>
        </div>

        {/* Main Grid - Like Our Story Section */}
        <div className="main-grid">
          {/* Left Column - Text Content */}
          <div className="who-left-content">
            <div className="text-block">
              <p className="text-para">
                We started this company because we've seen too many good
                businesses struggle—not because they lacked ideas, but because
                they lacked{" "}
                <strong>clarity, systems, and the right tools</strong>.
              </p>
              <p className="text-para">
                Today, we're a team of{" "}
                <strong>
                  200+ consultants, developers, designers, and strategists
                </strong>{" "}
                who work as one unit. We don't sell services—we solve real
                problems.
              </p>
            </div>

            <div className="quote-box">
              <p className="quote-text">
                "We don't just build digital products — we design growth systems
                that help leadership make confident decisions and scale with
                predictability."
              </p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="who-right-image">
            <div className="image-wrapper">
              <img src={WhoWeAreImg} alt="Who We Are" className="main-image" />
              <div className="image-badge">
                <div className="badge-label">Since 2021</div>
                <div className="badge-value">Trusted by 100+ Brands</div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards Grid - Like Our Story Bottom Cards */}
        <div className="features-grid">
          {/* Card 1 - Blue */}
          <div className="feature-card card-blue">
            <SiReact size={40} className="card-icon" />
            <h3 className="card-title" style={{ color: "#FFFFFF" }}>
              Your Growth Partner
            </h3>
            <p
              className="card-description"
              style={{ color: "rgba(255,255,255,0.95)" }}
            >
              We've worked with startups raising their first round, SMEs stuck
              in manual processes, and enterprises ready to scale digitally.
              Every project is designed to remove friction and unlock growth.
            </p>
            <div
              className="card-footer"
              style={{ color: "rgba(255,255,255,0.95)", fontWeight: 600 }}
            >
              Strategic Partnerships
            </div>
          </div>

          {/* Card 2 - Image */}
          <div className="feature-card card-image">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop&q=80"
              alt="Team Working"
              className="feature-image"
            />
          </div>

          {/* Card 3 - Dark */}
          <div className="feature-card card-dark">
            <Lightbulb size={40} strokeWidth={1.5} className="card-icon" />
            <h3 className="card-title" style={{ color: "#FFFFFF" }}>
              No Jargon, No Templates
            </h3>
            <p
              className="card-description"
              style={{ color: "rgba(255,255,255,0.9)" }}
            >
              Our promise is simple: no half-measures—just practical, tailored
              solutions that deliver real progress every single time. We build
              what works for your business, not what looks good on paper.
            </p>
            <div
              className="card-footer"
              style={{ color: "rgba(255,255,255,0.9)", fontWeight: 600 }}
            >
              Custom Solutions
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .who-section {
          padding: 6rem 2rem;
          background: #F8F9FA;
          width: 100%;
        }

        .who-container {
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
        }

        /* ===== HEADER ===== */
        .section-header {
          margin-bottom: 4rem;
        }

        .who-label {
          font-size: 0.8125rem;
          font-weight: 600;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #3F37C9;
          display: block;
          margin-bottom: 1rem;
        }

        .who-heading {
          font-size: clamp(1.875rem, 4vw, 2.5rem);
          color: #1A1A1A;
          font-weight: 700;
          line-height: 1.25;
          margin-bottom: 1.5rem;
          max-width: 800px;
        }

        .who-subtitle {
          font-size: 1.0625rem;
          color: #555;
          line-height: 1.7;
          max-width: 700px;
        }

        /* ===== MAIN GRID (Like Our Story) ===== */
        .main-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 5rem;
          align-items: start;
          margin-bottom: 4rem;
        }

        .who-left-content {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        /* ===== TEXT BLOCK ===== */
        .text-block {
          padding-left: 2rem;
          border-left: 4px solid #3F37C9;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .text-para {
          font-size: 1.0625rem;
          line-height: 1.8;
          color: #333;
          margin: 0;
        }

        .text-para strong {
          color: #1A1A1A;
          font-weight: 600;
        }

        /* ===== QUOTE BOX ===== */
        .quote-box {
          background: #FFFFFF;
          padding: 2rem;
          border: 1px solid #E5E7EB;
        }

        .quote-text {
          font-size: 1rem;
          font-style: italic;
          line-height: 1.7;
          color: #555;
          margin: 0;
        }

        /* ===== IMAGE SECTION ===== */
        .who-right-image {
          position: relative;
        }

        .image-wrapper {
          position: relative;
          height: 450px;
          background: #E5E7EB;
          overflow: hidden;
        }

        .main-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }

        .image-wrapper:hover .main-image {
          transform: scale(1.04);
        }

        .image-badge {
          position: absolute;
          bottom: 2rem;
          left: 2rem;
          background: rgba(255, 255, 255, 0.98);
          padding: 1.25rem 1.5rem;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }

        .badge-label {
          font-size: 0.75rem;
          color: #666;
          font-weight: 600;
          letter-spacing: 1px;
          margin-bottom: 0.5rem;
        }

        .badge-value {
          font-size: 1rem;
          font-weight: 600;
          color: #1A1A1A;
        }

        /* ===== FEATURES GRID ===== */
        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .feature-card {
          min-height: 380px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        /* Card Blue */
        .card-blue {
           background: linear-gradient(135deg, #03045E 0%, #0077B6 100%);
          color: #FFFFFF;
          padding: 3rem 1.5rem;
        }

        .card-blue .card-icon {
          margin-bottom: 2rem;
          opacity: 0.95;
        }

        .card-blue .card-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1.25rem;
          line-height: 1.3;
        }

        .card-blue .card-description {
          font-size: 1rem;
          line-height: 1.75;
          opacity: 0.95;
          margin-bottom: 2rem;
          flex: 1;
        }

        .card-blue .card-footer {
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.2);
          font-size: 0.875rem;
          font-weight: 500;
          opacity: 0.9;
        }

        /* Card Image */
        .card-image {
          background: #E5E7EB;
          transition: transform 0.3s ease;
        }

        .card-image:hover {
          transform: translateY(-4px);
        }

        .feature-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }

        .card-image:hover .feature-image {
          transform: scale(1.04);
        }

        /* Card Dark */
        .card-dark {
          background: #1A1A1A;
          color: #FFFFFF;
          padding: 3rem 1.5rem;
        }

        .card-dark .card-icon {
          margin-bottom: 2rem;
          opacity: 0.95;
        }

        .card-dark .card-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1.25rem;
          line-height: 1.3;
        }

        .card-dark .card-description {
          font-size: 1rem;
          line-height: 1.75;
          opacity: 0.95;
          margin-bottom: 2rem;
          flex: 1;
        }

        .card-dark .card-footer {
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.15);
          font-size: 0.875rem;
          font-weight: 500;
          opacity: 0.9;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 1024px) {
          .main-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .features-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .who-section {
            padding: 4rem 1.5rem;
          }

          .section-header {
            margin-bottom: 3rem;
          }

          .main-grid {
            gap: 2rem;
            margin-bottom: 3rem;
          }

          .image-wrapper {
            height: 350px;
          }

          .feature-card {
            min-height: auto;
          }

          .card-blue,
          .card-dark {
            padding: 2.5rem 1.5rem;
          }
        }

        @media (max-width: 640px) {
          .who-section {
            padding: 3rem 1rem;
          }

          .section-header {
            margin-bottom: 2.5rem;
          }

          .text-block {
            padding-left: 1.5rem;
            border-left-width: 3px;
          }

          .text-para {
            font-size: 1rem;
          }

          .quote-box {
            padding: 1.5rem;
          }

          .image-wrapper {
            height: 300px;
          }

          .image-badge {
            bottom: 1.5rem;
            left: 1.5rem;
            padding: 1rem 1.25rem;
          }

          .card-blue,
          .card-dark {
            padding: 2rem 1.25rem;
          }

          .features-grid {
            gap: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .who-section {
            padding: 2.5rem 1rem;
          }

          .who-heading {
            font-size: 1.5rem;
          }

          .who-subtitle {
            font-size: 1rem;
          }

          .image-wrapper {
            height: 250px;
          }
        }
      `}</style>
    </section>
  );
}

export default WhoWeAre;
