import React from "react";
import { motion } from "framer-motion";

const TermsConditions = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="privacy-page">
      <div className="policy-container">
        <motion.div
          className="policy-header"
          initial="hidden"
          animate="visible"
          variants={headerVariants}
        >
          <motion.span
            className="policy-label"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            LEGAL
          </motion.span>
          <motion.h1
            className="policy-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Terms and Conditions
          </motion.h1>
          <motion.p
            className="policy-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Welcome to Dream LogicX! By accessing or using our website,
            services, or products, you agree to the following terms and
            conditions. Please read them carefully before proceeding.
          </motion.p>
        </motion.div>

        <motion.div
          className="policy-sections"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            className="policy-section"
            variants={itemVariants}
            whileHover={{ x: 5, transition: { duration: 0.3 } }}
          >
            <h2 className="section-title">1. General</h2>
            <div className="section-content">
              <ul className="content-list">
                <li className="content-item">
                  These terms govern your use of Dream LogicX's services,
                  products, and platform.
                </li>
                <li className="content-item">
                  By availing of our services, you agree to comply with these
                  terms, as well as any policies referenced herein.
                </li>
                <li className="content-item">
                  Dream LogicX reserves the right to modify these terms at any
                  time without prior notice. Continued use of our services
                  constitutes your acceptance of such changes.
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="policy-section"
            variants={itemVariants}
            whileHover={{ x: 5, transition: { duration: 0.3 } }}
          >
            <h2 className="section-title">2. Services</h2>
            <div className="section-content">
              <ul className="content-list">
                <li className="content-item">
                  Dream LogicX offers business, branding, development, and
                  consulting services, among others.
                </li>
                <li className="content-item">
                  All deliverables are provided as per the agreed scope of work,
                  contract, and timeline.
                </li>
                <li className="content-item">
                  Changes to the scope of work after project commencement may
                  incur additional costs.
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="policy-section"
            variants={itemVariants}
            whileHover={{ x: 5, transition: { duration: 0.3 } }}
          >
            <h2 className="section-title">3. Payment Terms</h2>
            <div className="section-content">
              <ul className="content-list">
                <li className="content-item">
                  Payments must be made as per the agreed payment schedule
                  mentioned in the contract or invoice.
                </li>
                <li className="content-item">
                  For delayed payments, Dream LogicX reserves the right to pause
                  or terminate services until payment is cleared.
                </li>
                <li className="content-item">
                  Any third-party costs (e.g., domain, hosting, tools) are
                  non-refundable and must be paid upfront.
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="policy-section"
            variants={itemVariants}
            whileHover={{ x: 5, transition: { duration: 0.3 } }}
          >
            <h2 className="section-title">4. Confidentiality</h2>
            <div className="section-content">
              <ul className="content-list">
                <li className="content-item">
                  Both parties agree to keep all sensitive business information
                  confidential.
                </li>
                <li className="content-item">
                  Client information, project details, and trade secrets will
                  not be disclosed to any third party without prior consent.
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="policy-section"
            variants={itemVariants}
            whileHover={{ x: 5, transition: { duration: 0.3 } }}
          >
            <h2 className="section-title">5. Intellectual Property</h2>
            <div className="section-content">
              <ul className="content-list">
                <li className="content-item">
                  All intellectual property rights of the deliverables remain
                  with Dream LogicX until full payment is made.
                </li>
                <li className="content-item">
                  Upon full payment, the ownership of the final deliverables
                  will be transferred to the client.
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="policy-section"
            variants={itemVariants}
            whileHover={{ x: 5, transition: { duration: 0.3 } }}
          >
            <h2 className="section-title">6. Client Obligations</h2>
            <div className="section-content">
              <ul className="content-list">
                <li className="content-item">
                  The client must provide accurate and complete information
                  required for the successful execution of the project.
                </li>
                <li className="content-item">
                  Delays or miscommunication on the client's part may lead to
                  changes in delivery timelines.
                </li>
                <li className="content-item">
                  Clients are responsible for reviewing and approving
                  deliverables promptly.
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="policy-section"
            variants={itemVariants}
            whileHover={{ x: 5, transition: { duration: 0.3 } }}
          >
            <h2 className="section-title">7. Cancellation and Termination</h2>
            <div className="section-content">
              <ul className="content-list">
                <li className="content-item">
                  Either party may terminate the agreement with a 30-day written
                  notice.
                </li>
                <li className="content-item">
                  Refunds for canceled projects will be governed by our Refund
                  and Return Policy.
                </li>
                <li className="content-item">
                  Dream LogicX may terminate services immediately if there is a
                  breach of these terms or unethical behavior.
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="policy-section"
            variants={itemVariants}
            whileHover={{ x: 5, transition: { duration: 0.3 } }}
          >
            <h2 className="section-title">8. Liability</h2>
            <div className="section-content">
              <ul className="content-list">
                <li className="content-item">
                  Dream LogicX will not be held liable for delays, losses, or
                  damages caused by factors outside its control (e.g., force
                  majeure events, third-party failures).
                </li>
                <li className="content-item">
                  Clients are advised to keep backups of all deliverables and
                  important data.
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="policy-section"
            variants={itemVariants}
            whileHover={{ x: 5, transition: { duration: 0.3 } }}
          >
            <h2 className="section-title">9. Prohibited Actions</h2>
            <div className="section-content">
              <p>Clients and users must not:</p>
              <ul className="content-list">
                <li className="content-item">
                  Use our services for illegal or unethical activities.
                </li>
                <li className="content-item">
                  Resell or redistribute our work without authorization.
                </li>
              </ul>
              <p style={{ marginTop: "0.75rem" }}>
                Any breach of these terms may result in immediate termination of
                services.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="policy-section"
            variants={itemVariants}
            whileHover={{ x: 5, transition: { duration: 0.3 } }}
          >
            <h2 className="section-title">10. Dispute Resolution</h2>
            <div className="section-content">
              <ul className="content-list">
                <li className="content-item">
                  In case of disputes, both parties will attempt to resolve the
                  matter amicably through mutual discussions.
                </li>
                <li className="content-item">
                  If unresolved, disputes will be subject to the jurisdiction of
                  Delhi, India.
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="policy-section"
            variants={itemVariants}
            whileHover={{ x: 5, transition: { duration: 0.3 } }}
          >
            <h2 className="section-title">11. Portfolio Rights</h2>
            <div className="section-content">
              <p>
                Dream LogicX reserves the right to use completed projects for
                portfolio and promotional purposes unless otherwise agreed upon
                in writing.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="policy-section"
            variants={itemVariants}
            whileHover={{ x: 5, transition: { duration: 0.3 } }}
          >
            <h2 className="section-title">12. Contact Information</h2>
            <div className="section-content">
              <p>
                For any queries, concerns, or support, please contact us at:
              </p>
              <ul className="content-list">
                <li className="content-item">
                  Email:{" "}
                  <a href="mailto:support@services.dreamlogicx.com">
                    support@services.dreamlogicx.com
                  </a>
                </li>
                <li className="content-item">
                  Phone: <a href="tel:+916260439411">+91 6260439411</a>
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="agreement-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Thank you for choosing Dream LogicX. We are committed to helping you
          achieve your business goals with our services!
        </motion.div>
      </div>

      <style>{`
        .privacy-page { width: 100%; min-height: 100vh; background: #FFFFFF; padding: 6rem 2rem 4rem; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }
        .policy-container { max-width: 1100px; margin: 0 auto; }
        .policy-header { text-align: center; margin-bottom: 4rem; max-width: 900px; margin-left: auto; margin-right: auto; }
        .policy-label { display: inline-block; font-size: 0.875rem; font-weight: 600; letter-spacing: 3px; color: #3F37C9; text-transform: uppercase; margin-bottom: 1rem; }
        .policy-title { font-size: clamp(2rem, 4.5vw, 3rem); color: #242424; font-weight: 700; line-height: 1.15; margin-bottom: 1rem; }
        .policy-subtitle { font-size: 1.0625rem; color: #666; line-height: 1.8; max-width: 850px; margin: 0 auto; }
        .policy-sections { display: flex; flex-direction: column; gap: 2.5rem; margin-bottom: 3rem; }
        .policy-section { background: #F8F9FA; padding: 2.5rem; border-left: 4px solid #3F37C9; cursor: pointer; transition: all 0.3s ease; }
        .policy-section:hover { background: #F0F1F3; box-shadow: 0 4px 12px rgba(63, 55, 201, 0.08); }
        .section-title { font-size: 1.25rem; color: #242424; font-weight: 700; margin-bottom: 0.75rem; }
        .section-content { color: #444; line-height: 1.7; }
        .section-content p { margin-bottom: 0.75rem; }
        .content-list { list-style: disc; padding-left: 1.25rem; margin-top: 0.5rem; }
        .content-item { margin-bottom: 0.5rem; }
        .content-item a { color: #3F37C9; text-decoration: none; transition: all 0.2s ease; }
        .content-item a:hover { text-decoration: underline; color: #2E28A0; }
        .agreement-text { font-size: 1rem; color: #666; font-style: italic; max-width: 700px; margin: 1.5rem auto 0; text-align: center; }
        @media (max-width: 768px) { .privacy-page { padding: 6.25rem 1.5rem 3rem; } .policy-section { padding: 1.5rem; } }
      `}</style>
    </div>
  );
};

export default TermsConditions;
