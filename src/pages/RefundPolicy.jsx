import React from "react";
import { motion } from "framer-motion";

const RefundPolicy = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
            Refund and Returns Policy
          </motion.h1>
          <motion.p
            className="policy-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            At Dream LogicX, we strive to provide the best possible services to
            our clients. However, we understand that there may be instances
            where refunds or adjustments are necessary. Please read our refund
            and return policy carefully before availing of any service.
          </motion.p>
        </motion.div>

        <div className="policy-sections">
          <motion.div
            className="policy-section"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">1. Eligibility for Refunds</h2>
            <div className="section-content">
              <p>
                Refunds will only be considered under the following
                circumstances:
              </p>
              <ul className="content-list">
                <li className="content-item">
                  The service provided does not match the agreed deliverables as
                  mentioned in the contract.
                </li>
                <li className="content-item">
                  The project is canceled by the client before the commencement
                  of work.
                </li>
                <li className="content-item">
                  Technical errors or failures caused due to negligence on our
                  end.
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
            <h2 className="section-title">2. Non-Refundable Services</h2>
            <div className="section-content">
              <p>The following services are non-refundable:</p>
              <ul className="content-list">
                <li className="content-item">
                  Services already completed and delivered as per the agreed
                  scope of work.
                </li>
                <li className="content-item">
                  Customized services that involve specific client requirements.
                </li>
                <li className="content-item">
                  Any third-party costs incurred (e.g., hosting, domain
                  registration, software licenses).
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
            <h2 className="section-title">3. Refund Request Process</h2>
            <div className="section-content">
              <p>To request a refund:</p>
              <ul className="content-list">
                <li className="content-item">
                  Contact our support team at{" "}
                  <a href="mailto:support@services.dreamlogicx.com">
                    support@services.dreamlogicx.com
                  </a>{" "}
                  with your invoice number and the reason for the refund.
                </li>
                <li className="content-item">
                  Our team will review your request and get back to you within 7
                  business days.
                </li>
                <li className="content-item">
                  If approved, refunds will be processed within 14 business days
                  via the original payment method.
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
            <h2 className="section-title">4. Revisions and Rectifications</h2>
            <div className="section-content">
              <p>
                Before issuing a refund, we may offer to revise or rectify the
                service to meet your expectations. Clients are encouraged to
                communicate their concerns clearly to resolve any issues.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="policy-section"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">
              5. Return Policy for Digital Products
            </h2>
            <div className="section-content">
              <p>
                As we deal primarily in services and digital products, returns
                are not applicable. However, issues related to digital products
                will be resolved to ensure customer satisfaction.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="policy-section"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">6. Cancellation Policy</h2>
            <div className="section-content">
              <ul className="content-list">
                <li className="content-item">
                  Clients may cancel a service before the work has started. In
                  such cases, a partial refund may be provided after deducting
                  administrative fees or expenses incurred.
                </li>
                <li className="content-item">
                  Cancellation requests must be made in writing to{" "}
                  <a href="mailto:support@services.dreamlogicx.com">
                    support@services.dreamlogicx.com
                  </a>
                  .
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
            <h2 className="section-title">7. Exceptions</h2>
            <div className="section-content">
              <p>Refunds and cancellations are not applicable if:</p>
              <ul className="content-list">
                <li className="content-item">
                  The delay or issue arises due to incomplete information or
                  delays from the client's side.
                </li>
                <li className="content-item">
                  The client changes the project scope after work has commenced.
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
            <h2 className="section-title">8. Contact Us</h2>
            <div className="section-content">
              <p>
                If you have any questions regarding this policy, feel free to
                reach out to us:
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
        </div>

        <motion.div
          className="agreement-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          We value your trust and strive to provide a seamless experience at
          Dream LogicX. Thank you for choosing us for your business needs!
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
        .policy-section { background: #F8F9FA; padding: 2.5rem; border-left: 4px solid #3F37C9; }
        .section-title { font-size: 1.25rem; color: #242424; font-weight: 700; margin-bottom: 0.75rem; }
        .section-content { color: #444; line-height: 1.7; }
        .section-content p { margin-bottom: 0.75rem; }
        .content-list { list-style: disc; padding-left: 1.25rem; margin-top: 0.5rem; }
        .content-item { margin-bottom: 0.5rem; }
        .content-item a { color: #3F37C9; text-decoration: none; }
        .content-item a:hover { text-decoration: underline; }
        .agreement-text { font-size: 1rem; color: #666; font-style: italic; max-width: 700px; margin: 1.5rem auto 0; text-align: center; }
        @media (max-width: 768px) { .privacy-page { padding: 6.25rem 1.5rem 3rem; } .policy-section { padding: 1.5rem; } }
      `}</style>
    </div>
  );
};

export default RefundPolicy;
