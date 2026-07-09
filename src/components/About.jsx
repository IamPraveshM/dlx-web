import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Target,
  Users,
  TrendingUp,
  Award,
  ArrowRight,
  Lightbulb,
  Linkedin,
  Mail,
  Github,
} from "lucide-react";

// ✅ Import your actual images here
import AboutImage from "../assets/AboutImage.png";
import StoryImg from "../assets/OurStory.png";
import StoryImg02 from "../assets/OurStory01.png";
import AshishImg from "../assets/Ashish.png";

// If you have images for other team members, import them like this:
// import PraveshImg from "../assets/Pravesh.png";
// import AbhishekImg from "../assets/Abhishek.png";
// import PriyaImg from "../assets/Priya.png";
// import VikramImg from "../assets/Vikram.png";
// import NehaImg from "../assets/Neha.png";

const About = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const { scrollYProgress } = useScroll();

  // Parallax effects
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.3]);

  const values = [
    {
      icon: Target,
      title: "Vision First",
      description:
        "We architect digital futures with strategy and precision, not just code.",
    },
    {
      icon: Users,
      title: "One Team",
      description:
        "No vendor juggling. Seamless execution from concept to conversion.",
    },
    {
      icon: TrendingUp,
      title: "Results Focus",
      description:
        "We measure success in growth—traffic that converts, brands that endure.",
    },
    {
      icon: Award,
      title: "Transparency",
      description: "Clear timelines. Honest pricing. Trust is our foundation.",
    },
  ];

  const teamMembers = [
    {
      name: "Pravesh Kumar",
      role: "Founder & Visionary",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80",
      // img: PraveshImg, // Uncomment when you have the image
      expertise: "Strategic Innovation",
      bio: "15+ years leading digital transformation",
    },
    {
      name: "Abhishek Singh",
      role: "Chief Executive Officer",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
      // img: AbhishekImg, // Uncomment when you have the image
      expertise: "Growth Strategy",
      bio: "Scaling businesses through data-driven decisions",
    },
    {
      name: "Ashish Sharma",
      role: "Lead Frontend Developer",
      img: AshishImg, // ✅ Your custom image
      expertise: "User Experience",
      bio: "Crafting seamless interfaces that users love",
    },
    {
      name: "Priya Desai",
      role: "Head of Design",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
      // img: PriyaImg, // Uncomment when you have the image
      expertise: "Brand Identity",
      bio: "Creating memorable visual experiences",
    },
    {
      name: "Vikram Malhotra",
      role: "Lead Developer",
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80",
      // img: VikramImg, // Uncomment when you have the image
      expertise: "Architecture",
      bio: "Building scalable and robust systems",
    },
    {
      name: "Neha Kapoor",
      role: "Marketing Director",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80",
      // img: NehaImg, // Uncomment when you have the image
      expertise: "Digital Growth",
      bio: "Driving measurable marketing results",
    },
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .story-image-wrapper {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .story-image-wrapper:hover {
          transform: translateY(-4px);
        }

        .story-image-wrapper img {
          transition: transform 0.5s ease;
        }

        .story-image-wrapper:hover img {
          transform: scale(1.04);
        }

        /* Professional Team Card Styles */
        .team-card {
          background: #FFFFFF;
          border: 1px solid #E8E8E8;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
          position: relative;
        }

        .team-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 16px 48px rgba(0, 0, 0, 0.08);
          border-color: #D1D5DB;
        }

        .team-card-image {
          position: relative;
          width: 100%;
          aspect-ratio: 1;
          overflow: hidden;
          background: #F3F4F6;
        }

        .team-card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .team-card:hover .team-card-image img {
          transform: scale(1.05);
        }

        .team-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.5) 100%);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .team-card:hover .team-card-overlay {
          opacity: 1;
        }

        .team-card-social {
          position: absolute;
          bottom: 16px;
          left: 16px;
          right: 16px;
          display: flex;
          gap: 8px;
          opacity: 0;
          transform: translateY(12px);
          transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
          z-index: 2;
        }

        .team-card:hover .team-card-social {
          opacity: 1;
          transform: translateY(0);
        }

        .social-link {
          width: 36px;
          height: 36px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .social-link:hover {
           background: linear-gradient(135deg, #03045E 0%, #0077B6 100%);
          transform: translateY(-2px);
        }

        .social-link:hover svg {
          color: white;
        }

        .social-link svg {
          color: #374151;
          transition: color 0.3s ease;
        }

        .team-card-content {
          padding: 24px;
        }

        .team-card-expertise {
          display: inline-block;
          padding: 4px 10px;
          background: #F3F4F6;
          color: #6B7280;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .team-card-name {
          font-size: 20px;
          font-weight: 600;
          color: #111827;
          margin-bottom: 4px;
          letter-spacing: -0.01em;
        }

        .team-card-role {
          font-size: 14px;
          color: #6B7280;
          margin-bottom: 12px;
          font-weight: 400;
        }

        .team-card-bio {
          font-size: 13px;
          color: #9CA3AF;
          line-height: 1.6;
          height: 0;
          opacity: 0;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .team-card:hover .team-card-bio {
          height: auto;
          opacity: 1;
          margin-top: 8px;
        }

        @media (max-width: 1024px) {
          .story-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }

          .feature-grid {
            grid-template-columns: 1fr !important;
          }

          .values-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }

          .team-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 768px) {
          .about-page-container {
            gap: 2rem !important;
            padding: 0.5rem !important;
            margin-top: 70px !important;
          }

          .hero-content {
            padding: 2rem 1.25rem !important;
          }

          .hero-content span {
            font-size: 0.9rem !important;
            letter-spacing: 2px !important;
          }

          .hero-content h2 {
            margin: 0.9rem 0 1.2rem !important;
            font-size: 2.25rem !important;
            line-height: 1.18 !important;
            letter-spacing: -0.02em !important;
          }

          .hero-content p {
            margin-bottom: 0 !important;
            font-size: 1.0625rem !important;
            line-height: 1.7 !important;
          }

          .hero-image {
            height: 280px !important;
          }

          .section-padding {
            padding: 4rem 1.5rem !important;
          }

          .values-grid,
          .team-grid {
            grid-template-columns: 1fr !important;
          }

          .cta-buttons {
            flex-direction: column !important;
            width: 100%;
          }

          .cta-buttons button {
            width: 100% !important;
            justify-content: center !important;
          }

          .team-card-content {
            padding: 20px;
          }
        }

        @media (max-width: 480px) {
          .about-page-container {
            min-height: auto !important;
            gap: 1.5rem !important;
            margin-top: 65px !important;
          }

          .hero-content {
            padding: 1.5rem 1rem !important;
          }

          .hero-content span {
            font-size: 0.85rem !important;
            letter-spacing: 1.2px !important;
          }

          .hero-content h2 {
            font-size: 1.9rem !important;
            margin: 0.6rem 0 0.9rem !important;
            line-height: 1.2 !important;
            letter-spacing: -0.01em !important;
          }

          .hero-content p {
            font-size: 1rem !important;
            line-height: 1.6 !important;
          }

          .hero-image {
            height: 240px !important;
            margin-bottom: 1rem !important;
          }

          .section-padding {
            padding: 3rem 1.25rem !important;
          }
        }

        @media (max-width: 375px) {
          .hero-image {
            height: 220px !important;
          }
        }
      `}</style>

      <div style={{ width: "100%", overflow: "hidden" }}>
        {/* Hero Section */}
        <motion.div
          style={{
            background: "linear-gradient(135deg, #03045E 0%, #0077B6 100%)",
            maxWidth: "100%",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            margin: "0 auto",
            padding: "0.5rem",
            paddingTop: "1rem",
            y: heroY,
            opacity: heroOpacity,
            paddingBottom: "1rem",
          }}
          className="about-page-container"
        >
          <div
            style={{
              maxWidth: "1400px",
              margin: "0 auto",
              width: "100%",
            }}
            className="about-page-container-inner"
          >
            <motion.div
              className="hero-content"
              style={{ padding: "4rem 1rem", color: "#ffff" }}
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.span
                variants={fadeInUp}
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  display: "block",
                  marginBottom: "2rem",
                }}
              >
                About Us
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                style={{
                  fontSize: "clamp(2rem, 3.6vw, 2.5rem)",
                  lineHeight: 1.18,
                  fontWeight: 700,
                  marginBottom: "1.25rem",
                  maxWidth: "700px",
                }}
              >
                We are Untold — Ecosystem Communication & Professional.
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                style={{
                  maxWidth: "720px",
                  fontSize: "1.125rem",
                  lineHeight: 1.75,
                  marginBottom: "1rem",
                }}
              >
                A focused network of Indian digital experts — strategists,
                designers, developers — working as one to build simple, powerful
                websites, apps, and automation systems that save time, cut
                costs, and grow your business. No templates. No noise. Just
                clean execution, real results, and ownership at every step.
              </motion.p>
            </motion.div>

            <motion.div
              className="hero-image"
              style={{
                position: "relative",
                width: "100%",
                height: "450px",
                overflow: "hidden",
                boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
              }}
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <img
                src={AboutImage}
                alt="About"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Story Section */}
        <section
          className="section-padding"
          style={{ padding: "6rem 2rem", background: "#F8F9FA" }}
        >
          <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              style={{ marginBottom: "4rem" }}
            >
              <motion.span
                variants={fadeInUp}
                style={{
                  fontSize: "0.8125rem",
                  fontWeight: 600,
                  letterSpacing: "2.5px",
                  textTransform: "uppercase",
                  color: "#03045E",
                  display: "block",
                  marginBottom: "1rem",
                }}
              >
                Our Story
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                style={{
                  fontSize: "clamp(1.875rem, 4vw, 2.5rem)",
                  color: "#1A1A1A",
                  fontWeight: 700,
                  lineHeight: 1.25,
                  marginBottom: "1.5rem",
                  maxWidth: "800px",
                }}
              >
                Creating a Better Way for Businesses to Scale in a Noisy Digital
                World
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                style={{
                  fontSize: "1.0625rem",
                  color: "#555",
                  lineHeight: 1.7,
                  maxWidth: "700px",
                }}
              >
                A unified ecosystem helping brands scale with structure,
                confidence, and measurable impact.
              </motion.p>
            </motion.div>

            <div
              className="story-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "1.2fr 1fr",
                gap: "5rem",
                alignItems: "start",
                marginBottom: "4rem",
              }}
            >
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInLeft}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "2rem",
                }}
              >
                <div
                  style={{
                    paddingLeft: "2rem",
                    borderLeft: "4px solid #03045E",
                  }}
                >
                  <p
                    style={{
                      fontSize: "1.0625rem",
                      lineHeight: 1.8,
                      color: "#333",
                      marginBottom: "1.5rem",
                    }}
                  >
                    Our story started with a question:{" "}
                    <strong style={{ color: "#1A1A1A", fontWeight: 600 }}>
                      why is digital growth so complicated for most businesses?
                    </strong>{" "}
                    We saw teams juggling multiple agencies, tools, and
                    vendors—rarely finding clarity or consistent results.
                  </p>
                  <p
                    style={{
                      fontSize: "1.0625rem",
                      lineHeight: 1.8,
                      color: "#333",
                    }}
                  >
                    So we built a single, streamlined system where strategy,
                    execution, and outcomes move together. What began as a small
                    team with a shared vision is now{" "}
                    <strong style={{ color: "#1A1A1A", fontWeight: 600 }}>
                      a unified ecosystem delivering predictable growth.
                    </strong>
                  </p>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  style={{
                    background: "#FFFFFF",
                    padding: "2rem",
                    border: "1px solid #E5E7EB",
                  }}
                >
                  <p
                    style={{
                      fontSize: "1rem",
                      fontStyle: "italic",
                      lineHeight: 1.7,
                      color: "#555",
                      margin: 0,
                    }}
                  >
                    "We don't just build digital products — we design growth
                    systems that help leadership make confident decisions and
                    scale with predictability."
                  </p>
                </motion.div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInRight}
                style={{ position: "relative" }}
              >
                <div
                  className="story-image-wrapper"
                  style={{ height: "450px", background: "#E5E7EB" }}
                >
                  <img
                    src={StoryImg02}
                    alt="Team"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    style={{
                      position: "absolute",
                      bottom: "2rem",
                      left: "2rem",
                      background: "rgba(255,255,255,0.98)",
                      padding: "1.25rem 1.5rem",
                      boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "0.75rem",
                        color: "#666",
                        fontWeight: 600,
                        letterSpacing: "1px",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Since 2021
                    </div>
                    <div
                      style={{
                        fontSize: "1rem",
                        fontWeight: 600,
                        color: "#1A1A1A",
                      }}
                    >
                      Trusted by 100+ Brands
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Feature Cards */}
            <motion.div
              className="feature-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "2rem",
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div
                variants={scaleIn}
                style={{
                  background:
                    "linear-gradient(135deg, #03045E 0%, #0077B6 100%)",
                  color: "#FFF",
                  padding: "3rem 1.5rem",
                  minHeight: "380px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Target
                  size={40}
                  strokeWidth={1.5}
                  style={{ marginBottom: "2rem", opacity: 0.95 }}
                />
                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 600,
                    marginBottom: "1.25rem",
                    lineHeight: 1.3,
                  }}
                >
                  Purpose-Driven Development
                </h3>
                <p
                  style={{
                    fontSize: "1rem",
                    lineHeight: 1.75,
                    opacity: 0.95,
                    marginBottom: "2rem",
                    flex: 1,
                  }}
                >
                  Every project begins by defining clear business outcomes, not
                  just features. We focus on measurable value that drives real
                  growth and delivers tangible ROI.
                </p>
                <div
                  style={{
                    paddingTop: "1.5rem",
                    borderTop: "1px solid rgba(255,255,255,0.2)",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    opacity: 0.9,
                  }}
                >
                  Strategy First Approach
                </div>
              </motion.div>

              <motion.div
                variants={scaleIn}
                className="story-image-wrapper"
                style={{
                  overflow: "hidden",
                  minHeight: "380px",
                  background: "#E5E7EB",
                }}
              >
                <img
                  src={StoryImg}
                  alt="Workshop"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </motion.div>

              <motion.div
                variants={scaleIn}
                style={{
                  background: "#1A1A1A",
                  color: "#FFF",
                  padding: "3rem 1.5rem",
                  minHeight: "380px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Lightbulb
                  size={40}
                  strokeWidth={1.5}
                  style={{ marginBottom: "2rem", opacity: 0.95 }}
                />
                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 600,
                    marginBottom: "1.25rem",
                    lineHeight: 1.3,
                  }}
                >
                  Strategic Innovation
                </h3>
                <p
                  style={{
                    fontSize: "1rem",
                    lineHeight: 1.75,
                    opacity: 0.95,
                    marginBottom: "2rem",
                    flex: 1,
                  }}
                >
                  We combine strategic thinking with technical excellence to
                  create scalable systems that adapt to market changes while
                  maintaining alignment with your vision.
                </p>
                <div
                  style={{
                    paddingTop: "1.5rem",
                    borderTop: "1px solid rgba(255,255,255,0.15)",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    opacity: 0.9,
                  }}
                >
                  Future-Ready Solutions
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section
          className="section-padding"
          style={{ padding: "6rem 2rem", background: "#FFFFFF" }}
        >
          <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              style={{ marginBottom: "4rem" }}
            >
              <motion.span
                variants={fadeInUp}
                style={{
                  fontSize: "0.8125rem",
                  fontWeight: 600,
                  letterSpacing: "2.5px",
                  textTransform: "uppercase",
                  color: "#03045E",
                  display: "block",
                  marginBottom: "1rem",
                }}
              >
                Our Values
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                style={{
                  fontSize: "clamp(1.625rem, 4vw, 2.375rem)",
                  color: "#242424",
                  lineHeight: 1.2,
                  fontWeight: 700,
                  maxWidth: "650px",
                }}
              >
                What Drives Us Forward
              </motion.h2>
            </motion.div>

            <div
              className="values-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "2rem",
              }}
            >
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.15,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    style={{
                      background: "#FFF",
                      border: "1px solid #E8E8E8",
                      padding: "2rem",
                      transition: "all 0.3s ease",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow =
                        "0 12px 40px rgba(63, 55, 201, 0.12)";
                      e.currentTarget.style.borderColor = "#03045E";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = "none";
                      e.currentTarget.style.borderColor = "#E8E8E8";
                    }}
                  >
                    <div
                      style={{
                        width: "56px",
                        height: "56px",
                        background: "#F8F9FA",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "1.5rem",
                        color: "#03045E",
                      }}
                    >
                      <Icon size={28} />
                    </div>
                    <h3
                      style={{
                        fontSize: "1.375rem",
                        fontWeight: 700,
                        color: "#242424",
                        marginBottom: "1rem",
                      }}
                    >
                      {value.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.9375rem",
                        lineHeight: 1.65,
                        color: "#555",
                      }}
                    >
                      {value.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team Section - Minimalist Professional Design */}
        <section
          className="section-padding"
          style={{ padding: "6rem 2rem", background: "#F8F9FA" }}
        >
          <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              style={{ marginBottom: "4rem" }}
            >
              <motion.span
                variants={fadeInUp}
                style={{
                  fontSize: "0.8125rem",
                  fontWeight: 600,
                  letterSpacing: "2.5px",
                  textTransform: "uppercase",
                  color: "#03045E",
                  display: "block",
                  marginBottom: "1rem",
                }}
              >
                Our Team
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                style={{
                  fontSize: "clamp(1.625rem, 4vw, 2.375rem)",
                  color: "#242424",
                  lineHeight: 1.2,
                  fontWeight: 700,
                  maxWidth: "650px",
                }}
              >
                Meet the People Behind the Success
              </motion.h2>
            </motion.div>

            <div
              className="team-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "2rem",
              }}
            >
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="team-card"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="team-card-image">
                    <img
                      src={member.img}
                      alt={member.name}
                      style={{
                        filter:
                          hoveredCard === index
                            ? "grayscale(0%)"
                            : "grayscale(100%)",
                      }}
                    />
                    <div className="team-card-overlay"></div>
                    <div className="team-card-social">
                      <div className="social-link">
                        <Linkedin size={16} />
                      </div>
                      <div className="social-link">
                        <Github size={16} />
                      </div>
                      <div className="social-link">
                        <Mail size={16} />
                      </div>
                    </div>
                  </div>

                  <div className="team-card-content">
                    <div className="team-card-expertise">
                      {member.expertise}
                    </div>
                    <h3 className="team-card-name">{member.name}</h3>
                    <p className="team-card-role">{member.role}</p>
                    <p className="team-card-bio">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          className="section-padding"
          style={{
            padding: "6rem 2rem",
            background: "#1A1A1A",
            position: "relative",
          }}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            style={{
              maxWidth: "1100px",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <motion.span
              variants={fadeInUp}
              style={{
                fontSize: "0.8125rem",
                fontWeight: 600,
                letterSpacing: "2.5px",
                color: "#03045E",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "1.25rem",
              }}
            >
              Ready to Transform
            </motion.span>

            <motion.h2
              variants={fadeInUp}
              style={{
                fontSize: "clamp(2.25rem, 5vw, 3.25rem)",
                color: "#FFF",
                fontWeight: 700,
                lineHeight: 1.2,
                marginBottom: "1.75rem",
                maxWidth: "900px",
                margin: "0 auto 1.75rem",
              }}
            >
              Let's Turn Your Vision Into Reality
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              style={{
                fontSize: "1.125rem",
                color: "rgba(255,255,255,0.75)",
                lineHeight: 1.7,
                maxWidth: "750px",
                margin: "0 auto 3rem",
              }}
            >
              Whether you need a powerful website, a custom app, or complete
              digital transformation—we're here to make it happen. One team, one
              vision, measurable results.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              style={{
                display: "flex",
                gap: "1.25rem",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
              className="cta-buttons"
            >
              <motion.button
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  padding: "1.125rem 2.75rem",
                  background: "#03045E",
                  color: "#FFF",
                  border: "none",
                  fontSize: "1rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.625rem",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "#03045E";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "#03045E";
                }}
              >
                <span>Start a Project</span>
                <ArrowRight size={18} />
              </motion.button>

              <motion.button
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  padding: "1.125rem 2.75rem",
                  background: "transparent",
                  color: "#FFF",
                  border: "2px solid rgba(255,255,255,0.2)",
                  fontSize: "1rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = "rgba(255,255,255,0.4)";
                  e.target.style.background = "rgba(255,255,255,0.05)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = "rgba(255,255,255,0.2)";
                  e.target.style.background = "transparent";
                }}
              >
                Schedule a Call
              </motion.button>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default About;
