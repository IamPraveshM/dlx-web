import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import IndustryImg from "../assets/Industry.png";
import IndustryCard from "./IndustryCard";
import IndustrySolutionImg from "../assets/Solution02.png";
import IndustryMarquee from "./IndustryMarquees";

gsap.registerPlugin(ScrollTrigger);

function IndustryPage() {
  const labelRef = useRef(null);
  const lineRef = useRef(null);
  const headingRef = useRef(null);
  const descRef = useRef(null);
  const buttonsRef = useRef(null);
  const imageRef = useRef(null);

  // Solution Section Refs
  const solutionSectionRef = useRef(null);
  const solutionLabelRef = useRef(null);
  const solutionHeadingRef = useRef(null);
  const solutionPara1Ref = useRef(null);
  const solutionImageRef = useRef(null);
  const solutionPara2Ref = useRef(null);
  const solutionPara3Ref = useRef(null);
  const marqueeRef = useRef(null);

  // Hero Section Animation
  useEffect(() => {
    gsap.set(
      [
        labelRef.current,
        lineRef.current,
        headingRef.current,
        descRef.current,
        buttonsRef.current,
      ],
      { opacity: 0, y: 40 }
    );
    gsap.set(imageRef.current, { scale: 1.2, opacity: 0 });

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.to(imageRef.current, {
      scale: 1,
      opacity: 1,
      duration: 1.4,
      ease: "power2.out",
    })
      .to(lineRef.current, { opacity: 1, y: 0, duration: 0.8 }, "-=0.8")
      .to(labelRef.current, { opacity: 1, y: 0, duration: 0.8 }, "-=0.6")
      .to(headingRef.current, { opacity: 1, y: 0, duration: 1 }, "-=0.4")
      .to(descRef.current, { opacity: 1, y: 0, duration: 1 }, "-=0.7")
      .to(buttonsRef.current, { opacity: 1, y: 0, duration: 0.9 }, "-=0.6");

    gsap.to(imageRef.current, {
      y: 100,
      scale: 1.1,
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1.5,
      },
    });
  }, []);

  // Solution Section Animation
  useEffect(() => {
    gsap.set(
      [
        solutionLabelRef.current,
        solutionHeadingRef.current,
        solutionPara1Ref.current,
        solutionImageRef.current,
        solutionPara2Ref.current,
        solutionPara3Ref.current,
        marqueeRef.current,
      ],
      { opacity: 0, y: 50 }
    );

    const solutionTl = gsap.timeline({
      scrollTrigger: {
        trigger: solutionSectionRef.current,
        start: "top 70%",
        end: "top 30%",
        toggleActions: "play none none none",
      },
    });

    solutionTl
      .to(solutionLabelRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      })
      .to(
        solutionHeadingRef.current,
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
        "-=0.5"
      )
      .to(
        solutionPara1Ref.current,
        { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" },
        "-=0.6"
      )
      .to(
        solutionImageRef.current,
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
        "-=0.7"
      )
      .to(
        solutionPara2Ref.current,
        { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" },
        "-=0.7"
      )
      .to(
        solutionPara3Ref.current,
        { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" },
        "-=0.7"
      )
      .to(
        marqueeRef.current,
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
        "-=0.6"
      );
  }, []);

  return (
    <div style={{ paddingTop: "2rem", marginBottom: "2rem" }}>
      {/* Hero Section */}
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <div
          style={{
            position: "relative",
            minHeight: "600px",
            overflow: "hidden",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
            <img
              ref={imageRef}
              src={IndustryImg}
              alt="Industry"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(90deg, rgba(0,0,0,0.90) 0%, rgba(0,0,0,0.70) 45%, rgba(0,0,0,0.20) 100%)",
              }}
            />
          </div>

          <div
            style={{
              position: "relative",
              zIndex: 1,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "0 6%",
              maxWidth: "850px",
              marginRight: "auto",
              marginLeft: "0",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                marginBottom: "2rem",
              }}
            >
              <div
                ref={lineRef}
                style={{
                  width: "60px",
                  height: "1px",
                  backgroundColor: "rgba(255, 255, 255, 0.35)",
                }}
              />
              <span
                ref={labelRef}
                style={{
                  color: "#ffffff",
                  fontSize: "0.7rem",
                  fontWeight: "600",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  opacity: 0.9,
                }}
              >
                Our Industry
              </span>
            </div>

            <h2
              ref={headingRef}
              style={{
                fontSize: "clamp(2rem, 3.6vw, 2.5rem)",
                fontWeight: "700",
                lineHeight: "1.08",
                color: "#ffffff",
                marginBottom: "2.5rem",
                letterSpacing: "-0.025em",
              }}
            >
              Helping Industries Move Faster, Make Better Decisions, and Grow
            </h2>

            <p
              ref={descRef}
              style={{
                fontSize: "1.2rem",
                lineHeight: "1.75",
                color: "rgba(255, 255, 255, 0.88)",
                marginBottom: "3.5rem",
                maxWidth: "680px",
                fontWeight: "300",
              }}
            >
              Every industry has its own pressures and pace. We design solutions
              that streamline workflows, improve decision-making, and create
              real operational momentum—so your team can stay focused on what
              matters most.
            </p>

            <div
              ref={buttonsRef}
              style={{ display: "flex", gap: "1.25rem", flexWrap: "wrap" }}
            >
              <button
                style={{
                  padding: "1.1rem 3rem",
                  backgroundColor: "#03045E",
                  color: "#ffffff",
                  fontSize: "1rem",
                  fontWeight: "600",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                  letterSpacing: "0.03em",
                }}
                onMouseEnter={(e) => {
                  gsap.to(e.target, {
                    backgroundColor: "#3530a8",
                    y: -3,
                    boxShadow: "0 12px 24px rgba(63, 55, 201, 0.35)",
                    duration: 0.35,
                    ease: "power2.out",
                  });
                }}
                onMouseLeave={(e) => {
                  gsap.to(e.target, {
                    backgroundColor: "#03045E",
                    y: 0,
                    boxShadow: "none",
                    duration: 0.35,
                    ease: "power2.out",
                  });
                }}
              >
                Explore Solutions
              </button>
              <button
                style={{
                  padding: "1.1rem 3rem",
                  backgroundColor: "transparent",
                  color: "#ffffff",
                  fontSize: "1rem",
                  fontWeight: "600",
                  border: "2px solid rgba(255, 255, 255, 0.25)",
                  cursor: "pointer",
                  transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                  letterSpacing: "0.03em",
                }}
                onMouseEnter={(e) => {
                  gsap.to(e.target, {
                    borderColor: "rgba(255, 255, 255, 0.5)",
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                    y: -3,
                    duration: 0.35,
                    ease: "power2.out",
                  });
                }}
                onMouseLeave={(e) => {
                  gsap.to(e.target, {
                    borderColor: "rgba(255, 255, 255, 0.25)",
                    backgroundColor: "transparent",
                    y: 0,
                    duration: 0.35,
                    ease: "power2.out",
                  });
                }}
              >
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Solution Section */}
      <section
        ref={solutionSectionRef}
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "5rem 2rem 3rem",
        }}
        className="industry-solution"
      >
          <div
            style={{
              display: "flex",
              maxWidth: "1400px",
              margin: "0 auto",
              justifyContent: "space-between",
              alignItems: "stretch",
              gap: "2rem",
            }}
            className="industry-solution-content"
          >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
                justifyContent: "space-between",
                flex: "1 1 50%",
                maxWidth: "620px",
            }}
            className="solution-left"
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
                  width: "100%",
              }}
              className="solution-left-top"
            >
              <span
                ref={solutionLabelRef}
                style={{
                  fontSize: "0.875rem",
                  fontWeight: "600",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  color: "#03045E",
                  display: "inline-block",
                }}
              >
                Industry Solution
              </span>
              <h2
                ref={solutionHeadingRef}
                style={{
                  fontSize: "clamp(1.8rem, 3.6vw, 2.5rem)",
                  lineHeight: 1.18,
                  fontWeight: 700,
                  maxWidth: "600px",
                  color: "#1a1a1a",
                }}
              >
                Precision-Built Solutions for Industries That Can't Afford Slow
                Decisions
              </h2>
              <p
                ref={solutionPara1Ref}
                style={{
                  fontSize: "clamp(1rem, 2vw, 1.1rem)",
                  lineHeight: "1.7",
                  color: "#555",
                }}
              >
                In every industry, the real challenge isn't just speed — it's
                the ability to make clear, confident decisions when it matters
                most. Teams lose momentum when information is scattered,
                responsibilities overlap, or workflows depend on systems that
                slow the work down instead of supporting it. These moments seem
                small, but together, they shape outcomes.
              </p>
            </div>
            <div
              ref={marqueeRef}
              style={{ maxWidth: "100%", marginTop: "3rem" }}
              className="solution-left-marquees"
            >
              <IndustryMarquee />
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
              flex: "1 1 50%",
              alignSelf: "stretch",
              alignItems : 'flex-end'
            }}
            className="solution-right"
          >
            <div
              ref={solutionImageRef}
              style={{ width: "550px", height: "280px", overflow: "hidden" }}
              className="solution-right-img"
            >
              <img
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                src={IndustrySolutionImg}
                alt=""
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "2.2rem",
                maxWidth: "550px",
              }}
              className="solution-right-content"
            >
              <p
                ref={solutionPara2Ref}
                style={{ fontSize: "1rem", lineHeight: "1.7", color: "#555" }}
              >
                We help organizations remove that friction. Our approach is
                simple: understand how work actually happens today, identify
                where clarity breaks, and rebuild the operational structure so
                teams can move with discipline, rhythm, and precision.
              </p>
              <p
                ref={solutionPara3Ref}
                style={{ fontSize: "1rem", lineHeight: "1.7", color: "#555" }}
              >
                The result isn't just efficiency. It's an organization that
                operates with confidence — where decisions are faster, handoffs
                are cleaner, and progress never stalls.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Cards Section */}
      <div>
        <IndustryCard />
      </div>

      <style>{`
        /* ===== RESPONSIVE FROM 1100PX ===== */
        
        /* Tablet & Small Desktop (1100px and below) */
        @media (max-width: 1100px) {
          .industry-solution {
            padding: 4rem 2rem 3rem !important;
          }
          
          .industry-solution-content {
            flex-direction: column !important;
            gap: 4rem !important;
          }
          
          .solution-left,
          .solution-right {
            max-width: 100% !important;
          }
          
          .solution-right-img {
            max-width: 100% !important;
            height: 350px !important;
          }
          
          .solution-left-top {
            max-width: 100% !important;
          }
        }

        /* Tablet (768px - 900px) */
        @media (max-width: 900px) {
          div[style*="paddingTop: 6rem"] {
            padding-top: 4.5rem !important;
          }

          div[style*="padding: 0 6%"] {
            padding: 0 5% !important;
          }
          
          .industry-solution {
            padding: 3.5rem 1.5rem 2.5rem !important;
          }
          
          .solution-right-img {
            height: 300px !important;
          }
        }

        /* Mobile Landscape (640px - 768px) */
        @media (max-width: 768px) {
          div[style*="paddingTop: 6rem"] {
            padding-top: 4rem !important;
          }

          div[style*="padding: 0 6%"] {
            padding: 0 4% !important;
          }

          div[style*="minHeight: 600px"] {
            min-height: 550px !important;
          }
          
          .industry-solution {
            padding: 3rem 1.5rem 2rem !important;
          }
          
          .solution-left-top,
          .solution-right-content {
            gap: 1.5rem !important;
          }
          
          .solution-right-img {
            height: 280px !important;
          }
          
          .solution-left-marquees {
            margin-top: 2.5rem !important;
          }
        }

        /* Mobile Portrait (480px - 640px) */
        @media (max-width: 640px) {
          div[style*="paddingTop: 6rem"] {
            padding-top: 3.5rem !important;
          }

          div[style*="padding: 0 6%"] {
            padding: 0 5% !important;
          }

          div[style*="minHeight: 600px"] {
            min-height: 520px !important;
          }

          div[style*="gap: 1.25rem"] {
            flex-direction: column !important;
            gap: 1rem !important;
          }

          button[style*="padding: 1.1rem 3rem"] {
            width: 100%;
            padding: 1rem 2rem !important;
            font-size: 0.95rem !important;
          }
          
          .industry-solution {
            padding: 2.5rem 1.25rem 2rem !important;
          }
          
          .solution-left-marquees {
            margin-top: 2rem !important;
            max-width: 100% !important;
          }
          
          .solution-right-img {
            height: 240px !important;
          }
          
          .solution-right-content {
            gap: 1.8rem !important;
          }
        }

        /* Small Mobile (380px - 480px) */
        @media (max-width: 480px) {
          div[style*="paddingTop: 6rem"] {
            padding-top: 3rem !important;
          }

          div[style*="minHeight: 600px"] {
            min-height: 480px !important;
          }

          div[style*="padding: 0 6%"] {
            padding: 0 5% !important;
          }
          
          h2[ref="headingRef"] {
            font-size: 1.75rem !important;
            line-height: 1.2 !important;
            margin-bottom: 2rem !important;
          }
          
          p[ref="descRef"] {
            font-size: 1.05rem !important;
            margin-bottom: 2.5rem !important;
          }
          
          .industry-solution {
            padding: 2rem 1rem 1.5rem !important;
          }
          
          .solution-left-top h2 {
            font-size: 1.5rem !important;
          }
          
          .solution-right-img {
            height: 220px !important;
          }
          
          button[style*="padding: 1.1rem 3rem"] {
            padding: 0.9rem 1.5rem !important;
            font-size: 0.9rem !important;
          }
        }

        /* Extra Small Mobile (max 380px) */
        @media (max-width: 380px) {
          div[style*="paddingTop: 6rem"] {
            padding-top: 2.5rem !important;
          }

          div[style*="minHeight: 600px"] {
            min-height: 450px !important;
          }

          h2[ref="headingRef"] {
            font-size: 1.5rem !important;
            margin-bottom: 1.5rem !important;
          }
          
          p[ref="descRef"] {
            font-size: 1rem !important;
            margin-bottom: 2rem !important;
          }
          
          .solution-right-img {
            height: 200px !important;
          }
          
          .industry-solution {
            padding: 1.5rem 0.75rem 1.5rem !important;
          }
        }
      `}</style>
    </div>
  );
}

export default IndustryPage;
