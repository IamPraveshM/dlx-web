import React, { useEffect, useState, useRef } from "react";
import { ChevronDown } from "lucide-react";
import DreamlogicXLogo from "../assets/DreamlogicX.svg";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isCompact, setIsCompact] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const navbarRef = useRef(null);
  const logoRef = useRef(null);
  const navLinksRef = useRef([]);
  const ctaRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const mobileOverlayRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => setIsCompact(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  // GSAP-style animations on mount
  useEffect(() => {
    const animateOnLoad = () => {
      // Animate logo
      if (logoRef.current) {
        logoRef.current.style.opacity = "0";
        logoRef.current.style.transform = "translateX(-30px)";
        setTimeout(() => {
          logoRef.current.style.transition =
            "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)";
          logoRef.current.style.opacity = "1";
          logoRef.current.style.transform = "translateX(0)";
        }, 100);
      }

      // Animate nav links with stagger
      navLinksRef.current.forEach((link, index) => {
        if (link) {
          link.style.opacity = "0";
          link.style.transform = "translateY(-20px)";
          setTimeout(() => {
            link.style.transition =
              "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)";
            link.style.opacity = "1";
            link.style.transform = "translateY(0)";
          }, 200 + index * 100);
        }
      });

      // Animate CTA button
      if (ctaRef.current) {
        ctaRef.current.style.opacity = "0";
        ctaRef.current.style.transform = "scale(0.8)";
        setTimeout(() => {
          ctaRef.current.style.transition =
            "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)";
          ctaRef.current.style.opacity = "1";
          ctaRef.current.style.transform = "scale(1)";
        }, 600);
      }
    };

    animateOnLoad();
  }, []);

  // Mobile menu animations
  useEffect(() => {
    if (isMenuOpen) {
      // Overlay fade in
      if (mobileOverlayRef.current) {
        mobileOverlayRef.current.style.transition =
          "opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1)";
      }

      // Menu slide in
      if (mobileMenuRef.current) {
        mobileMenuRef.current.style.transition =
          "transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)";
      }
    }
  }, [isMenuOpen]);

  const navItems = ["About", "Services", "Industries", "Blog", "Contact"];
  const services = [
    "Software Development",
    "Mobile Applications",
    "AI & Automation",
    "UI/UX Design",
    "Consulting",
    "Cloud Solutions",
  ];

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', 'Helvetica Neue', sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        @keyframes slideInDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scaleIn {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes slideInRight {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }

.navbar {
          position: relative;
          width: 100%;
          z-index: 900;
          background: linear-gradient(135deg, #03045E 0%, #0077B6 100%);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          animation: slideInDown 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .navbar::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%);
          pointer-events: none;
        }

        .navbar-container {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 40px;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          text-decoration: none;
          transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .logo:hover {
          transform: translateX(5px) scale(1.02);
        }

        .logo-img {
          height: 50px;
          width: auto;
          max-width: 200px;
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          filter: brightness(1);
        }

        .logo:hover .logo-img {
          transform: scale(1.05);
          filter: brightness(1.1);
        }

        .nav-menu {
          display: ${isCompact ? "none" : "flex"};
          align-items: center;
          gap: 4px;
        }

        .nav-link {
          position: relative;
          color: #FFFFFF;
          font-size: 15px;
          font-weight: 500;
          cursor: pointer;
          text-decoration: none;
          padding: 12px 20px;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .nav-link:hover {
          color: #FFFFFF;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
          transform: translateY(-2px);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 8px;
          left: 20px;
          right: 20px;
          height: 2px;
          background: linear-gradient(90deg, #FFFFFF 0%, rgba(255, 255, 255, 0.7) 100%);
          transform: scaleX(0);
          transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          transform-origin: left;
        }

        .nav-link:hover::after {
          transform: scaleX(1);
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .cta-button {
          display: ${isCompact ? "none" : "inline-flex"};
          align-items: center;
          justify-content: center;
          padding: 12px 32px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: #0A0A0A;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          text-decoration: none;
          position: relative;
          overflow: hidden;
          box-shadow: 0 4px 24px rgba(255, 255, 255, 0.15);
        }

        .cta-button::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.05);
          transform: translate(-50%, -50%);
          transition: width 0.6s ease, height 0.6s ease;
        }

        .cta-button:hover::before {
          width: 300px;
          height: 300px;
        }

        .cta-button:hover {
          background: rgba(255, 255, 255, 1);
          border-color: rgba(255, 255, 255, 0.5);
          color: #0A0A0A;
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 12px 40px rgba(255, 255, 255, 0.3);
        }

        .cta-button:active {
          transform: translateY(-1px) scale(1.02);
        }

        .menu-toggle {
          display: ${isCompact ? "flex" : "none"};
          width: 44px;
          height: 44px;
          align-items: center;
          justify-content: center;
          border: none;
          background: transparent;
          cursor: pointer;
          position: relative;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .menu-toggle:hover {
          background: rgba(0, 0, 0, 0.05);
          transform: scale(1.1) rotate(5deg);
        }

        .menu-toggle:active {
          transform: scale(0.95);
        }

        .hamburger-line {
          position: absolute;
          height: 2px;
          background: #FFFFFF;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .line-top {
          width: 22px;
          top: 35%;
          left: 50%;
          transform: translateX(-50%) translateY(-50%);
        }

        .line-top.open {
          top: 50%;
          transform: translateX(-50%) translateY(-50%) rotate(45deg);
        }

        .line-middle {
          width: 22px;
          top: 50%;
          left: 50%;
          transform: translateX(-50%) translateY(-50%);
          opacity: 1;
        }

        .line-middle.open {
          opacity: 0;
          transform: translateX(-50%) translateY(-50%) scale(0);
        }

        .line-bottom {
          width: 22px;
          bottom: 35%;
          left: 50%;
          transform: translateX(-50%) translateY(50%);
        }

        .line-bottom.open {
          bottom: 50%;
          transform: translateX(-50%) translateY(50%) rotate(-45deg);
        }

        .mobile-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(4px);
          z-index: 1000;
          opacity: ${isMenuOpen ? 1 : 0};
          pointer-events: ${isMenuOpen ? "auto" : "none"};
          transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          animation: ${isMenuOpen ? "fadeIn 0.4s ease" : "none"};
        }

        .mobile-menu {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          width: min(400px, 90vw);
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(40px) saturate(180%);
          -webkit-backdrop-filter: blur(40px) saturate(180%);
          border-left: 1px solid rgba(255, 255, 255, 0.18);
          box-shadow: -8px 0 40px rgba(0, 0, 0, 0.12);
          z-index: 1001;
          overflow-y: auto;
          transform: translateX(${isMenuOpen ? "0" : "100%"});
          transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          animation: ${
            isMenuOpen
              ? "slideInRight 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)"
              : "none"
          };
        }
        
        .mobile-menu::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.3) 100%);
          pointer-events: none;
        }

        .mobile-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          padding: 18px 20px 26px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          position: sticky;
          top: 0;
          background: linear-gradient(135deg, #03045E 0%, #0077B6 100%);
          color: #FFFFFF;
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          z-index: 10;
        }

        .mobile-close {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.12);
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
        }

        .mobile-close:hover {
          background: rgba(0, 0, 0, 0.1);
          transform: rotate(90deg) scale(1.1);
        }

        .mobile-close:active {
          transform: rotate(90deg) scale(0.95);
        }

        .close-line {
          position: absolute;
          width: 20px;
          height: 2px;
          background: #FFFFFF;
          transition: all 0.3s ease;
        }

        .close-line:first-child {
          transform: rotate(45deg);
        }

        .close-line:last-child {
          transform: rotate(-45deg);
        }

        .mobile-content {
          padding: 24px;
        }

        .mobile-cta {
          width: 100%;
          padding: 16px;
          background: rgba(10, 10, 10, 0.85);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #fff;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          margin-bottom: 24px;
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15);
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          text-decoration: none;
          display: block;
          text-align: center;
          position: relative;
          overflow: hidden;
          animation: ${
            isMenuOpen
              ? "scaleIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s both"
              : "none"
          };
        }

        .mobile-cta::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          transform: translate(-50%, -50%);
          transition: width 0.6s ease, height 0.6s ease;
        }

        .mobile-cta:hover::before {
          width: 300px;
          height: 300px;
        }

        .mobile-cta:hover {
          background: rgba(0, 0, 0, 0.95);
          border-color: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
        }

        .mobile-section {
          margin-bottom: 4px;
          animation: ${isMenuOpen ? "fadeIn 0.5s ease both" : "none"};
        }

        .mobile-section:nth-child(2) { animation-delay: 0.3s; }
        .mobile-section:nth-child(3) { animation-delay: 0.4s; }
        .mobile-section:nth-child(4) { animation-delay: 0.5s; }
        .mobile-section:nth-child(5) { animation-delay: 0.6s; }
        .mobile-section:nth-child(6) { animation-delay: 0.7s; }

        .mobile-nav-link {
          width: 100%;
          padding: 16px 20px;
          background: none;
          border: none;
          text-align: left;
          font-size: 15px;
          font-weight: 500;
          color: #4A4A4A;
          cursor: pointer;
          text-decoration: none;
          display: block;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .mobile-nav-link:hover {
          background: rgba(0, 0, 0, 0.04);
          color: #0A0A0A;
          transform: translateX(8px);
          padding-left: 28px;
        }

        .accordion-button {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 20px;
          background: none;
          border: none;
          text-align: left;
          font-size: 15px;
          font-weight: 500;
          color: #4A4A4A;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .accordion-button:hover {
          background: rgba(0, 0, 0, 0.04);
          color: #0A0A0A;
          transform: translateX(8px);
          padding-left: 28px;
        }

        .accordion-icon {
          transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          color: #999;
        }

        .accordion-icon.open {
          transform: rotate(180deg);
          color: #0A0A0A;
        }

        .accordion-content {
          padding: 8px 0 12px 20px;
          display: grid;
          gap: 2px;
          animation: slideDown 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
            max-height: 0;
          }
          to {
            opacity: 1;
            transform: translateY(0);
            max-height: 500px;
          }
        }

        .accordion-item {
          padding: 12px 20px;
          background: none;
          border: none;
          text-align: left;
          font-size: 14px;
          color: #666;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          text-decoration: none;
          display: block;
        }

        .accordion-item:hover {
          background: rgba(0, 0, 0, 0.04);
          color: #0A0A0A;
          transform: translateX(8px);
          padding-left: 28px;
        }

        .divider {
          height: 1px;
          background: rgba(0, 0, 0, 0.08);
          margin: 24px 0;
        }

        @media (max-width: 1024px) {
          .navbar-container {
            padding: 14px 32px;
          }
        }

        @media (max-width: 768px) {
          .navbar-container {
            padding: 14px 24px;
          }

          .logo-img {
            height: 45px;
            max-width: 180px;
          }
        }

        @media (max-width: 480px) {
          .navbar-container {
            padding: 12px 16px;
          }
        }
      `}</style>

      <nav className="navbar" ref={navbarRef}>
        <div className="navbar-container">
          <a
            href="/"
            className="logo"
            ref={logoRef}
            onClick={() => setIsMenuOpen(false)}
          >
            <img src={DreamlogicXLogo} alt="Dream LogicX" className="logo-img" />
          </a>

          <div className="nav-menu">
            {navItems.map((item, index) => {
              if (item === "Blog") {
                return (
                  <a
                    key={item}
                    href="https://blogs.dreamlogicx.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link"
                    ref={(el) => (navLinksRef.current[index] = el)}
                  >
                    {item}
                  </a>
                );
              }

              if (item === "Services") {
                return (
                  <a
                    key={item}
                    href="https://dreamlogicx.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link"
                    ref={(el) => (navLinksRef.current[index] = el)}
                  >
                    {item}
                  </a>
                );
              }

              const to =
                item === "About"
                  ? "/about"
                  : item === "Industries"
                  ? "/industries"
                  : item === "Contact"
                  ? "/contact"
                  : "/";

              return (
                <a
                  key={item}
                  href={to}
                  className="nav-link"
                  onClick={() => setIsMenuOpen(false)}
                  ref={(el) => (navLinksRef.current[index] = el)}
                >
                  {item}
                </a>
              );
            })}
          </div>

          <div className="nav-actions">
            <a
              href="https://services.dreamlogicx.com/register/"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button"
              ref={ctaRef}
            >
              Get Started
            </a>
            <button
              className="menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span
                className={`hamburger-line line-top ${
                  isMenuOpen ? "open" : ""
                }`}
              />
              <span
                className={`hamburger-line line-middle ${
                  isMenuOpen ? "open" : ""
                }`}
              />
              <span
                className={`hamburger-line line-bottom ${
                  isMenuOpen ? "open" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <>
          <div
            className="mobile-overlay"
            onClick={() => setIsMenuOpen(false)}
            ref={mobileOverlayRef}
          />
          <div className="mobile-menu" ref={mobileMenuRef}>
            <div className="mobile-header">
              <a href="/" className="logo" onClick={() => setIsMenuOpen(false)}>
                <img src={DreamlogicXLogo} alt="Dream LogicX" className="logo-img" />
              </a>
              <button
                className="mobile-close"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="close-line" />
                <span className="close-line" />
              </button>
            </div>

            <div className="mobile-content">
              <a
                href="https://services.dreamlogicx.com/register/"
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-cta"
              >
                Get Started
              </a>

              <div className="mobile-section">
                <a
                  href="/about"
                  className="mobile-nav-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </a>
              </div>

              <div className="mobile-section">
                <button
                  className="accordion-button"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  <span>Services</span>
                  <ChevronDown
                    size={18}
                    strokeWidth={2}
                    className={`accordion-icon ${isServicesOpen ? "open" : ""}`}
                  />
                </button>
                {isServicesOpen && (
                  <div className="accordion-content">
                    {services.map((service) => (
                      <a
                        key={service}
                        href="https://dreamlogicx.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="accordion-item"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {service}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <div className="mobile-section">
                <button
                  className="accordion-button"
                  onClick={() => setIsIndustriesOpen(!isIndustriesOpen)}
                >
                  <span>Industries</span>
                  <ChevronDown
                    size={18}
                    strokeWidth={2}
                    className={`accordion-icon ${
                      isIndustriesOpen ? "open" : ""
                    }`}
                  />
                </button>
                {isIndustriesOpen && (
                  <div className="accordion-content">
                    <a
                      href="/industries"
                      className="accordion-item"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      View All Industries
                    </a>
                  </div>
                )}
              </div>

              <div className="mobile-section">
                <a
                  href="/contact"
                  className="mobile-nav-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </a>
              </div>

              <div className="divider" />
            </div>
          </div>
        </>
      )}
    </>
  );
}
