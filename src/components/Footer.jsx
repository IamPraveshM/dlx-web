import React from "react";
import { motion } from "framer-motion";
import { FaTwitter, FaInstagram, FaDribbble, FaYoutube, FaFacebookF, FaLinkedin } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";

export default function Footer() {
  const [isCompact, setIsCompact] = React.useState(false);
  const [isTablet, setIsTablet] = React.useState(false);
  const [openQuick, setOpenQuick] = React.useState(false);
  const [openServices, setOpenServices] = React.useState(false);
  const [openIndustries, setOpenIndustries] = React.useState(false);

  const accordionVariants = {
    collapsed: { height: 0 },
    expanded: {
      height: "auto",
      transition: {
        height: { type: "spring", stiffness: 300, damping: 30 },
      },
    },
  };

  React.useEffect(() => {
    const onResize = () => {
      setIsCompact(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const SectionHeader = ({ title, isOpen, onToggle }) => (
    <button
      onClick={onToggle}
      aria-expanded={isOpen}
      style={{
        width: "100%",
        background: "transparent",
        border: "none",
        color: "#fff",
        textAlign: "left",
        padding: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 10,
        cursor: "pointer",
      }}
    >
      <span style={{ 
        fontWeight: 600, 
        marginBottom: isCompact ? 0 : 16, 
        fontSize: 14,
        letterSpacing: "0.03em",
      }}>{title}</span>
      {isCompact && (
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          aria-hidden
          style={{ display: "inline-flex", color: "#9a9a9a" }}
        >
          <FiChevronDown size={16} />
        </motion.span>
      )}
    </button>
  );

  return (
    <footer
      style={{
        background: "#242424",
        position: "relative",
        padding: isCompact ? "60px 24px 32px" : "80px 40px 40px",
        overflow: "hidden",
      }}
    >
      {/* Animated background gradient */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.03 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        style={{
          position: "absolute",
          top: -100,
          right: -100,
          width: 400,
          height: 400,
          background: "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.02, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.3 }}
        style={{
          position: "absolute",
          bottom: -150,
          left: -150,
          width: 500,
          height: 500,
          background: "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 60%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1300,
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Header: brand left, tagline right */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
            marginBottom: 20,
            flexWrap: "wrap",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              aria-hidden
              style={{ width: 28, height: 18, background: "#fff", borderRadius: 10 }}
            />
            <a
              href="https://www.dreamlogicx.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-family-supreme)',
                fontWeight: 700,
                fontSize: 'clamp(1rem, 5vw, 1.2rem)',
                color: '#fff',
                letterSpacing: "-0.03em",
                textDecoration: 'none',
              }}
            >
              Dream LogicX
            </a>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ fontSize: 14, color: "#8a8a8a" }}
          >
            Transforming ideas into intelligent business solutions.
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ height: 1, background: "#1a1a1a", marginBottom: 48, transformOrigin: "left" }} 
        />

        {/* Main content grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{
            display: "grid",
            gridTemplateColumns: isCompact ? "1fr" : (isTablet ? "repeat(2, 1fr)" : "repeat(4, 1fr)"),
            gap: isCompact ? 28 : 40,
            marginBottom: 48,
          }}
        >
          {/* Company Overview */}
          <div style={{ gridColumn: isCompact ? "auto" : (isTablet ? "span 2" : "span 2") }}>
            <h3 style={{ 
              fontWeight: 600, 
              marginBottom: 16, 
              fontSize: 14,
              color: "#fff",
              letterSpacing: "0.03em",
            }}>Company Overview</h3>
            <div style={{ fontSize: 15, color: "#bdbdbd", lineHeight: 1.7 }}>
              <strong style={{ color: "#fff" }}>Dream LogicX Private Limited</strong>
              <div style={{ marginTop: 8 }}>We're a next-generation consulting and technology company helping businesses automate operations, enhance user experiences, and scale efficiently through digital innovation.</div>
              <div style={{ marginTop: 14, color: "#9a9a9a" }}>CIN: U62091DL2024PTC429115</div>
              <div style={{ marginTop: 6, color: "#9a9a9a" }}>Registered Office: D-540, Third Floor, West Vinod Nagar, New Delhi – 110092, India</div>
              <div style={{ marginTop: 12 }}>
                <a href="mailto:info@dreamlogicx.com" style={{ color: "#fff", textDecoration: "none" }} onMouseEnter={(e)=> e.currentTarget.style.opacity = "0.8"} onMouseLeave={(e)=> e.currentTarget.style.opacity = "1"}>info@dreamlogicx.com</a>
                <span style={{ color: "#666" }}> · </span>
                <a href="tel:+916260439411" style={{ color: "#fff", textDecoration: "none" }} onMouseEnter={(e)=> e.currentTarget.style.opacity = "0.8"} onMouseLeave={(e)=> e.currentTarget.style.opacity = "1"}>+91 6260439411</a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            {isCompact ? (
              <SectionHeader title="Quick Links" isOpen={openQuick} onToggle={() => setOpenQuick(v => !v)} />
            ) : (
              <h3 style={{ 
                fontWeight: 600, 
                marginBottom: 16, 
                fontSize: 14,
                color: "#fff",
                letterSpacing: "0.03em",
              }}>Quick Links</h3>
            )}
            {isCompact ? (
              openQuick && (
                <div style={{ display: "flex", flexDirection: "column", gap: 12, paddingTop: 12 }}>
                  {[
                    {label: "Home", href: "/"},
                    {label: "About Us", href: "/about"},
                    {label: "Services", href: "https://dreamlogicx.com/"},
                    {label: "Industries We Serve", href: "https://dreamlogicx.com/"},
                    {label: "Careers", href: "https://dreamlogicx.com/"},
                    {label: "Contact", href: "https://dreamlogicx.com/"}
                  ].map((item) => (
                    <a 
                      key={item.label} 
                      href={item.href}
                      style={{ 
                        fontSize: 15, 
                        color: "#888", 
                        textDecoration: "none", 
                        transition: "color 0.2s",
                      }} 
                      onMouseEnter={(e) => e.currentTarget.style.color = "#fff"} 
                      onMouseLeave={(e) => e.currentTarget.style.color = "#888"}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  {label: "Home", href: "/"},
                  {label: "About Us", href: "/about"},
                  {label: "Services", href: "https://dreamlogicx.com/"},
                  {label: "Industries We Serve", href: "https://dreamlogicx.com/"},
                  {label: "Careers", href: "https://dreamlogicx.com/"},
                  {label: "Contact", href: "https://dreamlogicx.com/"}
                ].map((item, i) => (
                  <motion.a 
                    key={item.label} 
                    href={item.href}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.05 }}
                    style={{ 
                      fontSize: 15, 
                      color: "#888", 
                      textDecoration: "none", 
                      transition: "color 0.2s",
                    }} 
                    onMouseEnter={(e) => e.currentTarget.style.color = "#fff"} 
                    onMouseLeave={(e) => e.currentTarget.style.color = "#888"}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>
            )}
          </div>

          {/* Services */}
          <div>
            {isCompact ? (
              <SectionHeader title="Services" isOpen={openServices} onToggle={() => setOpenServices(v => !v)} />
            ) : (
              <h3 style={{ 
                fontWeight: 600, 
                marginBottom: 16, 
                fontSize: 14,
                color: "#fff",
                letterSpacing: "0.03em",
              }}>Services</h3>
            )}
            {isCompact ? (
              openServices && (
                <div style={{ display: "flex", flexDirection: "column", gap: 12, paddingTop: 12 }}>
                  {["Software & App Development", "Automation & AI Integration", "Cloud & DevOps Solutions", "UI/UX Design", "Business Strategy Consulting", "Marketing & Growth Enablement"].map((label) => (
                    <a 
                      key={label} 
                      href="https://dreamlogicx.com/"
                      style={{ 
                        fontSize: 15, 
                        color: "#888", 
                        textDecoration: "none", 
                        transition: "color 0.2s",
                      }} 
                      onMouseEnter={(e) => e.currentTarget.style.color = "#fff"} 
                      onMouseLeave={(e) => e.currentTarget.style.color = "#888"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {label}
                    </a>
                  ))}
                </div>
              )
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {["Software & App Development", "Automation & AI Integration", "Cloud & DevOps Solutions", "UI/UX Design", "Business Strategy Consulting", "Marketing & Growth Enablement"].map((label, i) => (
                  <motion.a 
                    key={label} 
                    href="https://dreamlogicx.com/"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.05 }}
                    style={{ 
                      fontSize: 15, 
                      color: "#888", 
                      textDecoration: "none", 
                      transition: "color 0.2s",
                    }} 
                    onMouseEnter={(e) => e.currentTarget.style.color = "#fff"} 
                    onMouseLeave={(e) => e.currentTarget.style.color = "#888"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {label}
                  </motion.a>
                ))}
              </div>
            )}
          </div>

          {/* Industries */}
          <div>
            {isCompact ? (
              <SectionHeader title="Industries We Serve" isOpen={openIndustries} onToggle={() => setOpenIndustries(v => !v)} />
            ) : (
              <h3 style={{ 
                fontWeight: 600, 
                marginBottom: 16, 
                fontSize: 14,
                color: "#fff",
                letterSpacing: "0.03em",
              }}>Industries We Serve</h3>
            )}
            {isCompact ? (
              openIndustries && (
                <div style={{ display: "flex", flexDirection: "column", gap: 12, paddingTop: 12 }}>
                  {["Real Estate", "Education", "Healthcare", "Travel & Hospitality", "Retail & E-commerce", "Manufacturing & Logistics"].map((label) => (
                    <a 
                      key={label} 
                      href="https://dreamlogicx.com/"
                      style={{ 
                        fontSize: 15, 
                        color: "#888", 
                        textDecoration: "none", 
                        transition: "color 0.2s",
                      }} 
                      onMouseEnter={(e) => e.currentTarget.style.color = "#fff"} 
                      onMouseLeave={(e) => e.currentTarget.style.color = "#888"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {label}
                    </a>
                  ))}
                </div>
              )
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {["Real Estate", "Education", "Healthcare", "Travel & Hospitality", "Retail & E-commerce", "Manufacturing & Logistics"].map((label, i) => (
                  <motion.a 
                    key={label} 
                    href="https://dreamlogicx.com/"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.05 }}
                    style={{ 
                      fontSize: 15, 
                      color: "#888", 
                      textDecoration: "none", 
                      transition: "color 0.2s",
                    }} 
                    onMouseEnter={(e) => e.currentTarget.style.color = "#fff"} 
                    onMouseLeave={(e) => e.currentTarget.style.color = "#888"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {label}
                  </motion.a>
                ))}
              </div>
            )}
          </div>
        </motion.div>

        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ height: 1, background: "#1a1a1a", marginBottom: 24, transformOrigin: "left" }} 
        />

        {/* Follow Us row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 style={{ 
            fontWeight: 600, 
            marginBottom: 16, 
            fontSize: 14,
            color: "#fff",
            letterSpacing: "0.03em",
          }}>Follow Us</h3>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {[
              { Cmp: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/dreamlogicx/" },
              { Cmp: FaInstagram, label: "Instagram", href: "https://www.instagram.com/dreamlogicxcom/" },
              { Cmp: FaTwitter, label: "Twitter/X", href: "https://twitter.com/" },
              { Cmp: FaYoutube, label: "YouTube", href: "https://www.youtube.com/@dreamlogic-X" },
              { Cmp: FaFacebookF, label: "Facebook", href: "https://www.facebook.com/dreamlogicxcom/" },
            ].map(({ Cmp, label, href }, i) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, delay: 0.6 + i * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  background: "#111",
                  display: "grid",
                  placeItems: "center",
                  border: "1px solid #222",
                  color: "#888",
                  cursor: 'pointer',
                  transition: "all 0.2s ease",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#fff";
                  e.currentTarget.style.color = "#000";
                  e.currentTarget.style.borderColor = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#111";
                  e.currentTarget.style.color = "#888";
                  e.currentTarget.style.borderColor = "#222";
                }}
                aria-label={label}
                title={label}
              >
                <Cmp size={16} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          style={{ marginTop: 28, color: "#bdbdbd", fontStyle: "italic", fontSize: 14 }}
        >
          "Empowering businesses through innovation, intelligence, and impact."
        </motion.div>

        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{ height: 1, background: "#1a1a1a", margin: "24px 0", transformOrigin: "left" }} 
        />

        {/* Bottom legal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.9 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 20,
          }}
        >
          <div style={{ 
            fontSize: 14, 
            color: "#666",
          }}>
            © 2025 <a href="https://www.dreamlogicx.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#666', textDecoration: 'underline' }}>Dream LogicX Private Limited</a>. All Rights Reserved.
          </div>
          
          <div style={{ display: "flex", gap: 28, fontSize: 14 }}>
            {[{label: "Official Website", href: "https://www.dreamlogicx.com/"}, {label: "Terms of Service", href: "/terms"}, {label: "Privacy Policy", href: "/privacy"}, {label: "Refund Policy", href: "/refunds"}].map((item) => (
              (item.href.startsWith('http') || item.href === "/privacy") ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#888",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "#fff"}
                  onMouseLeave={(e) => e.currentTarget.style.color = "#888"}
                >
                  {item.label}
                </a>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  style={{
                    color: "#888",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "#fff"}
                  onMouseLeave={(e) => e.currentTarget.style.color = "#888"}
                >
                  {item.label}
                </a>
              )
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}