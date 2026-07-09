import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";

const BlogSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const blogs = [
    {
      id: 1,
      date: "03 Nov 2025",
      category: "Web Performance",
      title: "How We Achieved 100 Lighthouse Score on a React App (Case Study)",
      excerpt:
        "From 68 to 100 in 14 days. We reveal every optimization — lazy loading, code splitting, image CDN, React 19 Server Components, and edge caching.",
      image:
        "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&h=600&fit=crop&q=80",
      author: {
        name: "DreamLogicX Team",
        role: "Founders",
        avatar: "https://i.pravatar.cc/150?img=68",
      },
      readTime: "9 min read",
      featured: true,
    },
    {
      id: 2,
      date: "29 Oct 2025",
      category: "Product Strategy",
      title: "Why 90% of MVPs Fail — And How We Fixed It for 12 Clients",
      excerpt:
        "Validation before code. Learn our 5-step pre-build framework: problem interviews, Jobs-to-be-Done, risk scoring, and no-code testing.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&q=80",
      author: {
        name: "DreamLogicX Team",
        role: "Founders",
        avatar: "https://i.pravatar.cc/150?img=68",
      },
      readTime: "11 min read",
      featured: false,
    },
    {
      id: 3,
      date: "24 Oct 2025",
      category: "Animation & UX",
      title:
        "GSAP + React: Micro-Interactions That Increased CTA Clicks by 67%",
      excerpt:
        "Hover effects, scroll triggers, and loading sequences — we break down 7 high-impact animations that feel premium and drive action.",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop&q=80",
      author: {
        name: "DreamLogicX Team",
        role: "Founders",
        avatar: "https://i.pravatar.cc/150?img=68",
      },
      readTime: "7 min read",
      featured: false,
    },
    {
      id: 4,
      date: "18 Oct 2025",
      category: "Conversion",
      title: "The $47K Landing Page: A/B Tests That Doubled Sign-Ups",
      excerpt:
        "Headline, CTA color, social proof placement, and exit-intent popups — full breakdown of tests that turned a failing page into a revenue machine.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80",
      author: {
        name: "DreamLogicX Team",
        role: "Founders",
        avatar: "https://i.pravatar.cc/150?img=68",
      },
      readTime: "8 min read",
      featured: false,
    },
  ];

  return (
    <>
      <style>{`
        * {
          font-family: 'Akro', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        .blog-card {
          background: #FFFFFF;
          border: 1px solid #E5E7EB;
          transition: all 0.3s ease;
        }

        .blog-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
          border-color: #3F37C9;
        }

        .image-wrapper {
          position: relative;
          overflow: hidden;
        }

        .image-wrapper img {
          transition: transform 0.5s ease;
        }

        .blog-card:hover .image-wrapper img {
          transform: scale(1.05);
        }

        @media (max-width: 768px) {
          .blog-grid {
            grid-template-columns: 1fr !important;
          }
          
          .featured-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      <section style={{ padding: "6rem 2rem", background: "#F8F9FA" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          {/* Header - Minimal & Professional */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              marginBottom: "3.5rem",
            }}
          >
            <span
              style={{
                fontSize: "0.8125rem",
                fontWeight: "600",
                letterSpacing: "2.5px",
                textTransform: "uppercase",
                color: "#3F37C9",
                display: "inline-block",
                marginBottom: "0.75rem",
              }}
            >
              Our Blog
            </span>

            <h2
              style={{
                fontSize: "clamp(1.625rem, 4vw, 2.375rem)",
                color: "#242424",
                lineHeight: "1.2",
                fontWeight: "700",
                marginBottom: "1rem",
                maxWidth: "650px",
              }}
            >
              Latest Insights & Articles
            </h2>

            <p
              style={{
                fontSize: "1rem",
                color: "#555",
                lineHeight: 1.6,
                maxWidth: "700px",
              }}
            >
              Real strategies, real results. Learn from our 27+ years of
              building high-performance digital products.
            </p>
          </motion.div>

          {/* Featured Article */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="blog-card"
            style={{
              display: "grid",
              gridTemplateColumns: "1.1fr 0.9fr",
              gap: "0",
              marginBottom: "4rem",
              cursor: "pointer",
              overflow: "hidden",
            }}
            onMouseEnter={() => setHoveredCard(0)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div
              className="image-wrapper"
              style={{ height: "100%", minHeight: "500px" }}
            >
              <img
                src={blogs[0].image}
                alt={blogs[0].title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "1.5rem",
                  left: "1.5rem",
                  background: "#3F37C9",
                  color: "#FFFFFF",
                  padding: "0.5rem 1.25rem",
                  fontSize: "0.6875rem",
                  fontWeight: 700,
                  letterSpacing: "1.5px",
                }}
              >
                FEATURED
              </div>
            </div>

            <div
              style={{
                padding: "3.5rem 3rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1.25rem",
                    marginBottom: "1.5rem",
                    flexWrap: "wrap",
                  }}
                >
                  <span
                    style={{
                      background: "rgba(63, 55, 201, 0.08)",
                      color: "#3F37C9",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      padding: "0.4rem 1rem",
                      display: "inline-block",
                    }}
                  >
                    {blogs[0].category}
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1.5rem",
                    marginBottom: "2rem",
                    fontSize: "0.875rem",
                    color: "#666",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <Calendar size={14} />
                    {blogs[0].date}
                  </span>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <Clock size={14} />
                    {blogs[0].readTime}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: "1.625rem",
                    color: "#1A1A1A",
                    fontWeight: 700,
                    lineHeight: 1.35,
                    marginBottom: "1.5rem",
                  }}
                >
                  {blogs[0].title}
                </h3>

                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "#555",
                    lineHeight: 1.7,
                    marginBottom: "0",
                  }}
                >
                  {blogs[0].excerpt}
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingTop: "2rem",
                  borderTop: "1px solid #E5E7EB",
                  marginTop: "2rem",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "1rem" }}
                >
                  <img
                    src={blogs[0].author.avatar}
                    alt={blogs[0].author.name}
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                  <div>
                    <div
                      style={{
                        fontSize: "0.875rem",
                        color: "#1A1A1A",
                        fontWeight: 600,
                      }}
                    >
                      {blogs[0].author.name}
                    </div>
                    <div style={{ fontSize: "0.8125rem", color: "#666" }}>
                      {blogs[0].author.role}
                    </div>
                  </div>
                </div>

                <motion.a
                  href="https://blogs.dreamlogicx.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.625rem",
                    color: "#3F37C9",
                    fontWeight: 600,
                    fontSize: "0.875rem",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                  }}
                >
                  Read Article <ArrowRight size={16} />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Blog Grid */}
          <div
            className="blog-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
              gap: "2rem",
              marginBottom: "3rem",
            }}
          >
            {blogs.slice(1).map((blog, index) => (
              <motion.div
                key={blog.id}
                className="blog-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                onMouseEnter={() => setHoveredCard(blog.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{ cursor: "pointer", overflow: "hidden" }}
              >
                <div className="image-wrapper" style={{ height: "240px" }}>
                  <img
                    src={blog.image}
                    alt={blog.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </div>

                <div style={{ padding: "2rem" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      marginBottom: "1rem",
                      flexWrap: "wrap",
                    }}
                  >
                    <span
                      style={{
                        background: "rgba(63, 55, 201, 0.08)",
                        color: "#3F37C9",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        padding: "0.35rem 0.875rem",
                      }}
                    >
                      {blog.category}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: "1.25rem",
                      color: "#1A1A1A",
                      fontWeight: 700,
                      lineHeight: 1.4,
                      marginBottom: "1rem",
                      minHeight: "3.2rem",
                    }}
                  >
                    {blog.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: "#555",
                      lineHeight: 1.6,
                      marginBottom: "1.5rem",
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {blog.excerpt}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      marginBottom: "1.5rem",
                      fontSize: "0.875rem",
                      color: "#666",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                    >
                      <Calendar size={13} />
                      {blog.date}
                    </span>
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                    >
                      <Clock size={13} />
                      {blog.readTime}
                    </span>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingTop: "1.5rem",
                      borderTop: "1px solid #E5E7EB",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.875rem",
                      }}
                    >
                      <img
                        src={blog.author.avatar}
                        alt={blog.author.name}
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          objectFit: "cover",
                        }}
                      />
                      <div>
                        <div
                          style={{
                            fontSize: "0.875rem",
                            color: "#1A1A1A",
                            fontWeight: 600,
                          }}
                        >
                          {blog.author.name}
                        </div>
                        <div style={{ fontSize: "0.75rem", color: "#666" }}>
                          {blog.author.role}
                        </div>
                      </div>
                    </div>

                    <motion.a
                      href="https://blogs.dreamlogicx.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        width: "36px",
                        height: "36px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background:
                          hoveredCard === blog.id ? "#3F37C9" : "#F1F5F9",
                        color: hoveredCard === blog.id ? "#FFFFFF" : "#3F37C9",
                        borderRadius: "50%",
                        transition: "all 0.3s ease",
                        textDecoration: "none",
                      }}
                    >
                      <ArrowRight size={16} />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All CTA - Minimal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "3rem",
            }}
          >
            <motion.a
              href="https://blogs.dreamlogicx.com/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.75rem",
                padding: "1rem 2.5rem",
                background: "#3F37C9",
                color: "#FFFFFF",
                fontSize: "1rem",
                fontWeight: 600,
                cursor: "pointer",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "#5046DB";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "#3F37C9";
              }}
            >
              View All Articles
              <ArrowRight size={18} />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default BlogSection;
