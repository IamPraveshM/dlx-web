import React, { useEffect, useRef } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import gsap from "gsap";

function TestimonialSection() {
  const testimonials = [
    {
      quote:
        "Dream LogicX helped us prioritize product-market fit — revenue doubled within 6 months.",
      author: "Rahul Sharma",
      role: "Founder, BrightWave",
    },
    {
      quote:
        "Their team built a reliable growth engine. We saw immediate improvements in acquisition and retention.",
      author: "Michael Chen",
      role: "Founder, Streamline",
    },
    {
      quote:
        "Practical, clear, and fast. The strategy call alone saved us months of costly mistakes.",
      author: "Arjun Malhotra",
      role: "Founder, NovaHealth",
    },
    {
      quote:
        "Working with Dream LogicX transformed our approach to customer acquisition. Our CAC dropped by 40% in just 3 months.",
      author: "Vikram Singh",
      role: "Head of Marketing, TechFlow",
    },
    {
      quote:
        "They didn't just give us a strategy — they helped us execute it. Our MRR grew 3x in the first quarter.",
      author: "Sarah Martinez",
      role: "Co-Founder, CloudNine",
    },
  ];

  const trackRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Calculate the width of all cards
    const firstCard = track.querySelector(".testimonial-card");
    if (!firstCard) return;

    const cardWidth = firstCard.offsetWidth;
    const gap = 16; // 1rem gap
    const totalWidth = (cardWidth + gap) * testimonials.length;

    // Create seamless infinite scroll
    animationRef.current = gsap.to(track, {
      x: -totalWidth,
      duration: 20,
      ease: "none",
      repeat: -1,
    });

    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [testimonials.length]);

  const handleMouseEnter = () => {
    if (animationRef.current) {
      gsap.to(animationRef.current, { timeScale: 0, duration: 0.5 });
    }
  };

  const handleMouseLeave = () => {
    if (animationRef.current) {
      gsap.to(animationRef.current, { timeScale: 1, duration: 0.5 });
    }
  };

  return (
    <section
      className="testimonial-section"
      aria-label="Client testimonials"
      style={{
        backgroundColor: "#F8F9FA",
        padding: "0rem 0",
        maxWidth: "1400px",
        margin: "0 auto",
        width: "100%",
      }}
    >
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "3rem 2rem 4rem" }}>
        <div style={{ marginBottom: "3rem", maxWidth: "800px" }}>
          <span
            style={{
              fontSize: "0.8125rem",
              fontWeight: 600,
              letterSpacing: "2.5px",
              textTransform: "uppercase",
              color: "#03045E",
              display: "block",
              marginBottom: "0.75rem",
            }}
          >
            Testimonials
          </span>
          <h2
            style={{
              fontSize: "clamp(1.875rem, 4vw, 2.5rem)",
              color: "#1A1A1A",
              fontWeight: 700,
              lineHeight: 1.25,
              marginBottom: "1rem",
              maxWidth: "700px",
            }}
          >
            What Our Clients Say
          </h2>
          <p
            style={{
              fontSize: "1.0625rem",
              color: "#555",
              lineHeight: 1.7,
              maxWidth: "700px",
            }}
          >
            Trusted by businesses across diverse sectors, delivering measurable
            results through technology and innovation.
          </p>
        </div>

        <div
          className="testimonial-marquee"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="testimonial-track" ref={trackRef}>
            {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
              <article className="testimonial-card" key={i}>
                <div className="quote-icon">
                  <FaQuoteLeft />
                </div>
                <p className="quote">{t.quote}</p>
                <div className="author">{t.author}</div>
                <div className="role">{t.role}</div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .testimonial-marquee { 
          overflow: hidden; 
          width: 100%; 
          position: relative;
        }
        .testimonial-track { 
          display: flex; 
          gap: 1rem; 
          align-items: stretch; 
          padding: 1rem 0; 
          will-change: transform;
        }
        .testimonial-card { 
          min-width: 320px; 
          max-width: 360px; 
          background: #fff; 
          border: 1px solid #E5E7EB; 
          border-radius: 0; 
          padding: 1.25rem; 
          box-shadow: 0 6px 18px rgba(31,39,27,0.04); 
          display: flex; 
          flex-direction: column; 
          gap: 0.75rem; 
          flex-shrink: 0;
        }
        .testimonial-card .quote { 
          color: #333; 
          font-size: 1rem; 
          line-height: 1.6; 
          margin-top: 0.25rem; 
          flex: 1;
        }
        .quote-icon { 
          width: 40px; 
          height: 40px; 
          border-radius: 0; 
          display: inline-flex; 
          align-items: center; 
          justify-content: center; 
          background: #F5F7FA; 
          color: #03045E; 
        }
        .author { 
          font-weight: 700; 
          color: #242424; 
        }
        .role { 
          font-size: 0.9rem; 
          color: #666;
        }

        @media (max-width: 768px) {
          .testimonial-card { 
            min-width: 280px; 
            max-width: 320px; 
            padding: 1rem;
          }
        }
      `}</style>
    </section>
  );
}

export default TestimonialSection;
