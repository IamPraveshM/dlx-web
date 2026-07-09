import React, { useMemo } from "react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-page">
      <div className="policy-container">
        <div className="policy-header">
          <motion.span
            className="policy-label"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            LEGAL
          </motion.span>

          <motion.h1
            className="policy-title"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.05, delayChildren: 0.16 },
              },
            }}
          >
            {useMemo(() => {
              const words = "Privacy Policy".split(" ");
              return words.map((w, i) => (
                <motion.span
                  key={i}
                  className="title-word"
                  variants={{
                    hidden: { opacity: 0, y: 36, rotateX: -90 },
                    show: {
                      opacity: 1,
                      y: 0,
                      rotateX: 0,
                      transition: { duration: 0.85, ease: "easeOut" },
                    },
                  }}
                >
                  {w}
                </motion.span>
              ));
            }, [])}
          </motion.h1>

          <motion.p
            className="policy-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.56 }}
          >
            This Privacy Policy explains how Dream LogicX collects, uses,
            discloses, and protects personal information of users when you visit
            our website or interact with our services.
          </motion.p>
        </div>

        <div className="policy-sections">
          <motion.div
            className="policy-section"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">1. Information We Collect</h2>
            <div className="section-content">
              <p>
                We may collect information you provide directly (such as name,
                email, phone number, business details) and information collected
                automatically (such as IP address, device and browser data,
                cookies, and usage analytics).
              </p>
            </div>
          </motion.div>

          <motion.div
            className="policy-section"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">2. How We Use Information</h2>
            <div className="section-content">
              <ul className="content-list">
                <li className="content-item">
                  To provide and improve our services.
                </li>
                <li className="content-item">
                  To communicate with you about inquiries, projects, and
                  updates.
                </li>
                <li className="content-item">
                  To analyze usage and optimize site performance.
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="policy-section"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">3. Cookies & Tracking</h2>
            <div className="section-content">
              <p>
                We use cookies and similar technologies to remember preferences,
                enable certain features, and collect analytics. You can control
                cookies via your browser settings.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="policy-section"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">4. Data Sharing & Disclosure</h2>
            <div className="section-content">
              <p>
                We may share information with service providers, partners, and
                when required by law. We do not sell personal information to
                third parties.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="policy-section"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">5. Your Rights</h2>
            <div className="section-content">
              <p>
                Depending on your jurisdiction, you may have rights to access,
                correct, or delete your personal data. Contact us at the address
                below to exercise your rights.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="policy-section"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">6. Contact</h2>
            <div className="section-content">
              <p>
                For privacy-related questions, email:{" "}
                <a href="mailto:privacy@dreamlogicx.com">
                  privacy@dreamlogicx.com
                </a>
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="agreement-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          By using our website and services, you acknowledge that you have read
          and understood this Privacy Policy.
        </motion.div>
      </div>

      <style>{`
        .privacy-page { width: 100%; min-height: 100vh; background: #FFFFFF; padding: 6rem 2rem 4rem; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }
        .policy-container { max-width: 1100px; margin: 0 auto; }
        .policy-header { text-align: center; margin-bottom: 4rem; max-width: 900px; margin-left: auto; margin-right: auto; }
        .policy-label { display: inline-block; font-size: 0.875rem; font-weight: 600; letter-spacing: 3px; color: #3F37C9; text-transform: uppercase; margin-bottom: 1rem; }
        .policy-title { font-size: clamp(2rem, 4.5vw, 3rem); color: #242424; font-weight: 700; line-height: 1.15; margin-bottom: 1rem; }
  .policy-subtitle { font-size: 1.0625rem; color: #666; line-height: 1.8; max-width: 850px; margin: 0 auto; }
  .title-word { display: inline-block; margin-right: 0.3em; transform-origin: center bottom; perspective: 1000px; }
        .policy-sections { display: flex; flex-direction: column; gap: 2.5rem; margin-bottom: 3rem; }
        .policy-section { background: #F8F9FA; padding: 2.5rem; border-left: 4px solid #3F37C9; }
        .section-title { font-size: 1.25rem; color: #242424; font-weight: 700; margin-bottom: 0.75rem; }
        .section-content { color: #444; line-height: 1.7; }
        .content-list { list-style: disc; padding-left: 1.25rem; }
        .content-item { margin-bottom: 0.5rem; }
        .agreement-text { font-size: 1rem; color: #666; font-style: italic; max-width: 700px; margin: 1.5rem auto 0; text-align: center; }
        @media (max-width: 768px) { .privacy-page { padding: 6.25rem 1.5rem 3rem; } .policy-section { padding: 1.5rem; } }
      `}</style>
    </div>
  );
};

export default PrivacyPolicy;
