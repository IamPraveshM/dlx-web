// components/ui/ValuesCarousel.jsx
"use client";

import React, { useState, useRef, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";

export default function ValuesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);
  const autoPlayRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Dream LogicX Core Values – Premium, Purposeful, Unique
  const values = [
    {
      number: "01",
      title: "Vision First, Code Second",
      description:
        "We don’t just build websites — we architect your digital future with strategy, insight, and precision.",
      image: "https://images.unsplash.com/photo-1519389950477-1b05c8e7d8c6?w=600&q=80",
    },
    {
      number: "02",
      title: "Craft Over Chaos",
      description:
        "No vendor juggling. One trusted team. Seamless execution from concept to conversion.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    },
    {
      number: "03",
      title: "Results, Not Reports",
      description:
        "We measure success in growth — traffic that converts, apps that engage, brands that endure.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2b034f?w=600&q=80",
    },
    {
      number: "04",
      title: "Transparency at Every Step",
      description:
        "Clear timelines. Honest pricing. Real-time progress. Trust is the foundation of every partnership.",
      image: "https://images.unsplash.com/photo-1581092588526-4d3051a0039f?w=600&q=80",
    },
    {
      number: "05",
      title: "India’s Dreamers, Global Reach",
      description:
        "Born in New Delhi. Built for the world. We empower local visionaries to dominate global markets.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80",
    },
  ];

  // Responsive config
  const getConfig = () => {
    const width = window.innerWidth;
    if (width >= 1280) return { cardsPerView: 4, cardWidth: 300, gap: 30 };
    if (width >= 1024) return { cardsPerView: 3, cardWidth: 300, gap: 30 };
    if (width >= 768) return { cardsPerView: 2, cardWidth: 300, gap: 24 };
    return { cardsPerView: 1, cardWidth: window.innerWidth - 40, gap: 0 };
  };

  const [config, setConfig] = useState(getConfig());

  useEffect(() => {
    const handleResize = () => setConfig(getConfig());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Scroll to index
  const scrollToIndex = (index) => {
    if (!scrollContainerRef.current) return;
    const maxIndex = values.length - config.cardsPerView;
    const clampedIndex = Math.max(0, Math.min(index, maxIndex));
    const scrollPosition = clampedIndex * (config.cardWidth + config.gap);
    scrollContainerRef.current.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });
    setCurrentIndex(clampedIndex);
  };

  const handleNext = () => {
    const maxIndex = values.length - config.cardsPerView;
    const next = currentIndex >= maxIndex ? 0 : currentIndex + 1;
    scrollToIndex(next);
  };

  const handlePrev = () => {
    const prev =
      currentIndex <= 0
        ? Math.max(0, values.length - config.cardsPerView)
        : currentIndex - 1;
    scrollToIndex(prev);
  };

  // Sync scroll to index
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const totalWidth = config.cardWidth + config.gap;
      const newIndex = Math.round(scrollLeft / totalWidth);
      setCurrentIndex(
        Math.min(Math.max(0, newIndex), values.length - config.cardsPerView)
      );
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [config]);

  // Auto-play
  useEffect(() => {
    autoPlayRef.current = setInterval(handleNext, 5000);
    return () => clearInterval(autoPlayRef.current);
  }, [currentIndex, config]);

  const handleMouseEnter = () => clearInterval(autoPlayRef.current);
  const handleMouseLeave = () => {
    autoPlayRef.current = setInterval(handleNext, 5000);
  };

  // Animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: i * 0.1 },
    }),
  };

  return (
    <>
      {/* ================== CSS ================== */}
      <style jsx>{`
        .carousel-container {
          padding: 100px 40px;
          background: linear-gradient(135deg, #0a0a0a 0%, #111 100%);
          color: #f8f9fa;
          overflow: hidden;
        }
        .inner {
          max-width: 1400px;
          margin: 0 auto;
        }
        .header {
          text-align: center;
          margin-bottom: 80px;
        }
        .header h2 {
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 600;
          letter-spacing: -1.2px;
          background: linear-gradient(90deg, #f8f9fa, #bbbbbb);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .header p {
          font-size: 1.1rem;
          color: #aaaaaa;
          max-width: 700px;
          margin: 16px auto 0;
          line-height: 1.7;
        }
        .scroll-wrapper {
          position: relative;
          overflow: hidden;
        }
        .scroll-container {
          display: flex;
          gap: ${config.gap}px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scrollbar-width: none;
          -ms-overflow-style: none;
          scroll-behavior: smooth;
          padding-bottom: 20px;
        }
        .scroll-container::-webkit-scrollbar {
          display: none;
        }
        .card {
          flex: 0 0 ${config.cardWidth}px;
          width: ${config.cardWidth}px;
          scroll-snap-align: ${config.cardsPerView === 1 ? "center" : "start"};
        }
        .image-wrapper {
          width: 100%;
          height: 420px;
          overflow: hidden;
          background: #1a1a1a;
          margin-bottom: 28px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }
        .image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.7s cubic-bezier(0.25, 0.8, 0.25, 1);
        }
        .number {
          font-size: 13px;
          color: #025AEE;
          margin: 0 0 12px 0;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
        }
        .title {
          font-size: 1.35rem;
          font-weight: 600;
          color: #f8f9fa;
          line-height: 1.4;
          letter-spacing: -0.5px;
          margin-bottom: 12px;
        }
        .description {
          font-size: 15px;
          color: #bbbbbb;
          line-height: 1.7;
          font-weight: 400;
        }
        .arrows {
          display: flex;
          justify-content: center;
          gap: 16px;
          margin-top: 60px;
        }
        .arrow-btn {
          width: 52px;
          height: 52px;
          border: 1.5px solid #333;
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.4s ease;
        }
        .arrow-btn:hover {
          background: #025AEE;
          border-color: #025AEE;
          transform: translateY(-2px);
        }
        .arrow-btn:hover svg {
          color: white;
        }

        /* Mobile */
        @media (max-width: 768px) {
          .carousel-container {
            padding: 80px 20px;
          }
          .header h2 {
            font-size: 1.75rem;
          }
          .header p {
            font-size: 1rem;
          }
          .image-wrapper {
            height: 360px;
            border-radius: 10px;
          }
          .title {
            font-size: 1.25rem;
          }
          .arrows {
            margin-top: 50px;
          }
          .arrow-btn {
            width: 48px;
            height: 48px;
          }
        }
      `}</style>

      {/* ================== JSX ================== */}
      <section ref={sectionRef} className="carousel-container">
        <div className="inner">
          {/* Header */}
          {/* <motion.div
            className="header"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={headerVariants}
          >
            <h2>Dream LogicX Values</h2>
            <p>
              We don’t follow trends — we set them. With 27 years of craft, we build digital futures that last.
            </p>
          </motion.div> */}

          {/* Carousel */}
          <div
            className="scroll-wrapper"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div ref={scrollContainerRef} className="scroll-container">
              {values.map((value, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={cardVariants}
                  className="card"
                >
                  <motion.div
                    className="image-wrapper"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.img
                      src={value.image}
                      alt={value.title}
                      className="image"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.7 }}
                    />
                  </motion.div>

                  <div>
                    <motion.p
                      className="number"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ delay: i * 0.1 + 0.3 }}
                    >
                      {value.number}
                    </motion.p>
                    <motion.h3
                      className="title"
                      initial={{ opacity: 0, y: 10 }}
                      animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                      }
                      transition={{ delay: i * 0.1 + 0.4 }}
                    >
                      {value.title}
                    </motion.h3>
                    <motion.p
                      className="description"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ delay: i * 0.1 + 0.5 }}
                    >
                      {value.description}
                    </motion.p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <motion.div
            className="arrows"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.8 }}
          >
            <motion.button
              onClick={handlePrev}
              className="arrow-btn"
              whileTap={{ scale: 0.95 }}
              aria-label="Previous value"
            >
              <ArrowLeft size={22} color="#f8f9fa" />
            </motion.button>

            <motion.button
              onClick={handleNext}
              className="arrow-btn"
              whileTap={{ scale: 0.95 }}
              aria-label="Next value"
            >
              <ArrowRight size={22} color="#f8f9fa" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </>
  );
}