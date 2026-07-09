import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { VscServerProcess } from "react-icons/vsc";
import { HiArrowRight, HiPlay } from "react-icons/hi2";
import ProcessSection from "../components/HomePage/ProcessSection";
import CaseStudySection from "../components/HomePage/IndustriesAndCaseStudies";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ThirdCardImage from "../assets/HeroThird.png";
import ProfileImg from "../assets/Profile.png";
import ServiceSection from "../components/HomePage/Service";
import WhoWeAre from "../components/HomePage/WhoWeAre";
import TestimonialSection from "../components/HomePage/TestimonialSection";
import FAQSection from "../components/HomePage/FAQSection";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const heroRef = useRef(null);
  const cardsRef = useRef(null);
  const secondCardRef = useRef(null);

  useEffect(() => {
    // GSAP animations for hero heading with split text effect
    if (heroRef.current) {
      const heading = heroRef.current.querySelector("h2");
      if (heading) {
        const words = heading.textContent.split(" ");
        heading.innerHTML = words
          .map((word) => `<span class="word">${word}</span>`)
          .join(" ");

        const wordSpans = heading.querySelectorAll(".word");

        if (wordSpans && wordSpans.length) {
          gsap.fromTo(
            wordSpans,
            {
              opacity: 0,
              y: 50,
              rotateX: -90,
            },
            {
              opacity: 1,
              y: 0,
              rotateX: 0,
              duration: 1,
              stagger: 0.08,
              ease: "power4.out",
              delay: 0.3,
            }
          );
        }
      }

      const paragraph = heroRef.current.querySelector(".hero-top-right p");
      if (paragraph) {
        gsap.fromTo(
          paragraph,
          {
            opacity: 0,
            x: 30,
          },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            delay: 0.8,
            ease: "power3.out",
          }
        );
      }

      const buttons = heroRef.current.querySelectorAll(
        ".hero-top-button button"
      );
      if (buttons && buttons.length) {
        gsap.fromTo(
          buttons,
          {
            opacity: 0,
            y: 30,
            scale: 0.8,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.15,
            delay: 1.2,
            ease: "back.out(1.7)",
          }
        );
      }
    }

    // GSAP animations for cards - all cards animate together
    if (cardsRef.current) {
      const cards = cardsRef.current.querySelectorAll(".card-animate");

      gsap.fromTo(
        cards,
        {
          y: 80,
          opacity: 0,
          scale: 0.95,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // First card internal animation - top first, then bottom
    if (cardsRef.current) {
      const firstCard = cardsRef.current.querySelector(".bottom-first-card");
      if (firstCard) {
        const topSection = firstCard.querySelector(".top");
        const bottomSection = firstCard.querySelector(".bottom");

        gsap.fromTo(
          topSection,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );

        gsap.fromTo(
          bottomSection,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }

    // Second card internal animation - top first, then bottom
    if (secondCardRef.current) {
      const topSection = secondCardRef.current.querySelector(".top");
      const bottomSection = secondCardRef.current.querySelector(".bottom");

      gsap.fromTo(
        topSection,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        bottomSection,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  const buttonVariants = {
    rest: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    tap: { scale: 0.95 },
  };

  return (
    <div className="home-main-container">
      <div
        style={{
          backgroundColor: "#F8F9FA",
          maxWidth: "100%",
          minHeight: "100vh",
          display: "flex",
          gap: "5rem",
          flexDirection: "column",
          marginBottom: "4rem",
        }}
        className="home-page-container"
      >
        {/* Hero Section */}
        <div
          ref={heroRef}
          style={{
            padding: "0 2rem",
            maxWidth: "1400px",
            margin: "0 auto",
            width: "100%",
          }}
          className="hero-section"
        >
          <div
            className="hero-top-section"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "3rem",
              width: "100%",
              paddingTop: "4rem",
            }}
          >
            <motion.div
              className="hero-top-left"
              style={{ flex: 1 }}
            >
              <h2
                style={{
                  fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                  color: "#242424",
                  maxWidth: "650px",
                }}
              >
                Unlock Effortless Growth: AI-Powered Strategies for Ambitious
                Brands
              </h2>
            </motion.div>

            <div
              style={{
                maxWidth: "600px",
                display: "flex",
                flexDirection: "column",
                gap: "3rem",
                flex: 1,
              }}
              className="hero-top-right"
            >
              <p
                style={{
                  lineHeight: "1.7",
                  color: "#555",
                  fontSize: "1rem",
                }}
              >
                In a world of digital noise, Dream LogicX cuts through with
                data-driven consulting, custom web experiences, and growth
                roadmaps that deliver proven ROI—trusted by startups and
                enterprises for 4+ years.
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "1.5rem",
                  flexWrap: "wrap",
                }}
                className="hero-top-button"
              >
                <a href="https://services.dreamlogicx.com/register/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                  <motion.button
                  variants={buttonVariants}
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                  style={{
                    padding: "1rem 2.5rem",
                    backgroundColor: "#03045E",
                    color: "#ffff",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "1rem",
                    fontWeight: "500",
                    borderRadius: "4px",
                    transition: "box-shadow 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.boxShadow =
                      "0 8px 20px rgba(63, 55, 201, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.boxShadow = "none";
                  }}
                >
                  Get Started
                  </motion.button>
                </a>

                <a href="https://zcal.co/pravesh/lets-solve-problem" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                  <motion.button
                  variants={buttonVariants}
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                  style={{
                    padding: "1rem 2rem",
                    backgroundColor: "transparent",
                    color: "#242424",
                    border: "2px solid #03045E",
                    cursor: "pointer",
                    fontSize: "1rem",
                    fontWeight: "500",
                    borderRadius: "4px",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#03045E";
                    e.target.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "transparent";
                    e.target.style.color = "#242424";
                  }}
                >
                  Schedule a Call
                  </motion.button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Cards Section */}
        <div
          ref={cardsRef}
          style={{
            padding: "0 2rem",
            maxWidth: "1400px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            gap: "2rem",
            width: "100%",
          }}
          className="hero-bottom-section"
        >
          <div
            className="card-animate bottom-first-card"
            style={{
              background: "linear-gradient(135deg, #03045E 0%, #0077B6 100%)",
              color: "#ffff",
              flex: "1",
              minWidth: "280px",
              padding: "2.5rem 2rem",
              minHeight: "50vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "1.5rem",
                flexDirection: "column",
              }}
              className="top"
            >
              <h2
                style={{
                  fontSize: "clamp(1.5rem, 5vw, 2.2rem)",
                  fontWeight: "700",
                  lineHeight: "1.2",
                }}
              >
                Collaborative Growth
              </h2>
              <p
                style={{
                  lineHeight: "1.6",
                  opacity: "0.95",
                  fontSize: "1rem",
                }}
              >
                Seamless collaboration between strategy, design, and tech teams
                for faster launches and better ROI.
              </p>
            </div>

            <div className="bottom">
              <h2
                style={{
                  fontSize: "1.3rem",
                  marginBottom: "1.5rem",
                  fontWeight: "600",
                }}
              >
                Join the program with
              </h2>
              <img
                style={{
                  maxWidth: "120px",
                }}
                src={ProfileImg}
                alt=""
              />
            </div>
          </div>

          <div
            className="card-animate second-card"
            ref={secondCardRef}
            style={{
              backgroundColor: "#1F271B",
              color: "#ffff",
              flex: "1",
              minWidth: "280px",
              padding: "2.5rem 2rem",
              minHeight: "50vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "2px solid #444",
                paddingBottom: "1.5rem",
              }}
              className="top"
            >
              <span style={{ fontSize: "2rem", opacity: "0.9" }}>
                <VscServerProcess />
              </span>
              <h2
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "700",
                }}
              >
                Process to Deliver
              </h2>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
                marginTop: "1rem",
              }}
              className="bottom"
            >
              <p
                style={{
                  lineHeight: "1.6",
                  opacity: "0.95",
                  fontSize: "1rem",
                }}
              >
                From audit to launch in 30 days. AI-powered strategy, design,
                and development—seamless, fast, and measurable.
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.8rem",
                }}
              >
                <h2
                  style={{
                    fontSize: "1.6rem",
                    fontWeight: "700",
                  }}
                >
                  251 / 130 Projects Live
                </h2>

                <div
                  style={{
                    width: "100%",
                    height: "8px",
                    backgroundColor: "#F5F5DC",
                    borderRadius: "4px",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "94.63%" }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                    viewport={{ once: true }}
                    style={{
                      height: "100%",
                      backgroundColor: "#2D5016",
                      borderRadius: "4px",
                    }}
                  />
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontSize: "0.85rem",
                    opacity: "0.8",
                  }}
                >
                  <span>Progress</span>
                  <span style={{ fontWeight: "600" }}>94%</span>
                </div>
              </div>
            </div>
          </div>

          <div
            className="card-animate third-card"
            style={{
              flex: "1",
              minWidth: "280px",
              minHeight: "50vh",
              overflow: "hidden",
              backgroundColor: "#E5E5E5",
            }}
          >
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
                display: "block",
              }}
              src={ThirdCardImage}
              alt="Team collaboration"
            />
          </div>
        </div>
      </div>

      {/* WHO WE ARE SECTION */}
      <WhoWeAre />

      {/* SERVICES SECTION */}
      <ServiceSection />

      {/* CASE STUDIES / INDUSTRIES SECTION */}
      <CaseStudySection />

      {/* PROCESS SECTION */}
      <ProcessSection />

      {/* TESTIMONIALS SECTION */}
      <TestimonialSection />

      {/* FAQ SECTION */}
      <FAQSection />

      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        }

        .word {
          display: inline-block;
          margin-right: 0.3em;
          transform-origin: center bottom;
          perspective: 1000px;
        }

        @media (max-width: 1024px) {
          .hero-top-section {
            flex-direction: column !important;
            align-items: flex-start !important;
          }

          .hero-top-left,
          .hero-top-right {
            max-width: 100% !important;
          }

          .hero-bottom-section {
            flex-direction: column !important;
          }

          .bottom-first-card,
          .second-card,
          .third-card {
            max-width: 100% !important;
            min-width: 100% !important;
            min-height: 400px !important;
          }
        }

        @media (max-width: 768px) {
          .hero-section,
          .hero-bottom-section {
            padding: 0 1rem !important;
          }

          /* Reduce top spacing on mobile so hero sits closer to navbar */
          .hero-top-section {
            gap: 2rem !important;
            padding-top: 1.5rem !important;
          }

          .hero-section {
            padding-top: 0.5rem !important;
          }

          .hero-top-right {
            gap: 2rem !important;
          }

          .hero-top-button {
            flex-direction: column !important;
            width: 100%;
          }

          .hero-top-button button {
            width: 100% !important;
            max-width: 100% !important;
          }

          .home-page-container {
            gap: 3rem !important;
          }

          .bottom-first-card,
          .second-card,
          .third-card {
            min-height: auto !important;
            display: flex !important;
            overflow: hidden !important;
          }

          .third-card img {
            width: 100% !important;
            height: auto !important;
            object-fit: cover !important;
            object-position: center center !important;
            display: block !important;
          }
        }

        @media (max-width: 480px) {
          .bottom-first-card,
          .second-card {
            padding: 2rem 1.5rem !important;
            min-height: 350px !important;
          }

          .third-card {
            min-height: auto !important;
            padding-top: 0.5rem !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            overflow: hidden !important;
          }

          .third-card img {
            width: 100% !important;
            height: auto !important;
            object-fit: cover !important;
            object-position: center center !important;
            display: block !important;
          }

          h2 {
            font-size: clamp(1.3rem, 5vw, 1.8rem) !important;
          }

          .hero-top-left h2 {
            font-size: clamp(1.9rem, 6vw, 2.4rem) !important;
            line-height: 1.15 !important;
          }

          .hero-top-section {
            padding-top: 1rem !important;
          }
        }
      `}</style>

      {/* FINAL CTA SECTION */}
      <div
        style={{
          maxWidth: "1400px",
          margin: "0rem auto 0",
          padding: "0 1rem",
          marginBottom : '2rem'
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          style={{
            padding: "4rem 2rem",
            background: "#242424",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Background Grid Pattern */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              opacity: 0.03,
              backgroundImage:
                "linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />

          {/* Top Border Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "3px",
              background: "linear-gradient(90deg, #03045E 0%, #03045E 100%)",
              transformOrigin: "left",
            }}
          />

          {/* Content */}
          <div
            style={{
              position: "relative",
              zIndex: 1,
              display: "flex",
              flexDirection: "column",
              gap: "4rem",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <div
              style={{
                maxWidth: "800px",
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                style={{
                  fontSize: "0.8125rem",
                  fontWeight: "700",
                  letterSpacing: "3px",
                  color: "#03045E",
                  textTransform: "uppercase",
                }}
              >
                LET'S WORK TOGETHER
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  color: "#ffffff",
                  fontWeight: "700",
                  lineHeight: "1.2",
                  letterSpacing: "-0.02em",
                }}
              >
                Ready to Transform Your Business?
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                style={{
                  fontSize: "clamp(1.0625rem, 2vw, 1.25rem)",
                  color: "rgba(255, 255, 255, 0.8)",
                  lineHeight: "1.7",
                }}
              >
                Let's discuss how we can help you achieve your goals with
                tailored solutions and expert guidance.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              style={{
                display: "flex",
                gap: "1.5rem",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <motion.button
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  padding: "1.25rem 3rem",
                  backgroundColor: "#03045E",
                  color: "#ffffff",
                  border: "none",
                  fontSize: "1.0625rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#03045E";
                  e.target.style.boxShadow =
                    "0 8px 24px rgba(63, 55, 201, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#03045E";
                  e.target.style.boxShadow = "none";
                }}
              >
                <span>Start Project</span>
                <HiArrowRight style={{ fontSize: "1.375rem" }} />
              </motion.button>

              <motion.button
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  padding: "1.125rem 2.875rem",
                  backgroundColor: "transparent",
                  color: "#ffffff",
                  border: "2px solid rgba(255, 255, 255, 0.2)",
                  fontSize: "1.0625rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#ffffff";
                  e.target.style.color = "#242424";
                  e.target.style.borderColor = "#ffffff";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.color = "#ffffff";
                  e.target.style.borderColor = "rgba(255, 255, 255, 0.2)";
                }}
              >
                <HiPlay style={{ fontSize: "1.375rem" }} />
                <span>Case Studies</span>
              </motion.button>
            </motion.div>
          </div>

          {/* Bottom Border Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: "3px",
              background: "linear-gradient(90deg, #03045E 0%, #03045E 100%)",
              transformOrigin: "left",
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Home;