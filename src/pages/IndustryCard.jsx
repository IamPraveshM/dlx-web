import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaPalette,
  FaHeartbeat,
  FaUniversity,
  FaShoppingCart,
  FaGraduationCap,
  FaBuilding,
  FaTruck,
  FaCloud,
  FaUmbrellaBeach,
  FaIndustry,
  FaFilm,
  FaHandsHelping,
} from "react-icons/fa";
import IndustryCardsDetail from "./IndustryCardsDetail";
import DigitalAgencyImg from "../assets/DigitalAgency.png";
import ECommerceImg from "../assets/E-Commerce&Retail.png";
import EducationImg from "../assets/Education&eLearning.png";
import RealEstateImg from "../assets/Real-Estate&PropTech.png";
import AutomotiveImg from "../assets/Automotive&Logistics.png";
import SaaSImg from "../assets/SaaS&Platforms.png";
import HospitalityImg from "../assets/Hospitality&Travel.png";
import ManufacturingImg from "../assets/Manufacturing&Industry.png";
import MediaImg from "../assets/Media&Entertainment.png";
import NonprofitImg from "../assets/Nonprofit&PublicSector.png";
import HealthcareImg from "../assets/Professional Meeting Scene.png";
import FinanceImg from "../assets/Office Workspace with Team Collaboration.png";

const CardImg =
  "data:image/svg+xml,%3Csvg width='400' height='140' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%233F37C9;stop-opacity:0.1' /%3E%3Cstop offset='100%25' style='stop-color:%233F37C9;stop-opacity:0.3' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='140' fill='url(%23grad)'/%3E%3C/svg%3E";

const industryCardsData = [
  {
    id: 1,
    title: "Digital Agency",
    icon: FaPalette,
    description:
      "Better cross-team flow, cleaner handoffs, and faster delivery without losing creative quality.",
    keyPoints: ["Faster Delivery", "Clean Handoffs", "Reusable Systems"],
    detailedContent: {
      overview: "Digital agencies thrive on speed and creativity, but often struggle with fragmented workflows that slow down delivery. Our solutions streamline project management, client communication, and resource allocation to help teams deliver exceptional work faster.",
      features: [
        "Unified project dashboards for real-time visibility",
        "Automated client approval workflows",
        "Resource planning and team capacity management",
        "Integrated time tracking and billing",
        "Asset library with version control",
        "Client portal for seamless collaboration"
      ],
      benefits: [
        "Reduce project delivery time by 40%",
        "Improve client satisfaction scores",
        "Better resource utilization across teams",
        "Faster onboarding for new team members"
      ]
    }
  },
  {
    id: 2,
    title: "Healthcare",
    icon: FaHeartbeat,
    description:
      "Improve patient coordination, reduce admin load, and bring clarity to high-pressure medical workflows.",
    keyPoints: ["Secure Records", "Smooth Intake", "Faster Approvals"],
    detailedContent: {
      overview: "Healthcare organizations need systems that prioritize patient care while maintaining strict compliance and security standards. Our solutions streamline administrative processes, improve care coordination, and ensure data security.",
      features: [
        "HIPAA-compliant patient management systems",
        "Automated appointment scheduling and reminders",
        "Secure document management and sharing",
        "Integrated billing and insurance verification",
        "Care team collaboration tools",
        "Real-time patient status tracking"
      ],
      benefits: [
        "Reduce administrative burden by 50%",
        "Improve patient wait times",
        "Enhanced care coordination",
        "Better compliance tracking and reporting"
      ]
    }
  },
  {
    id: 3,
    title: "Finance & Banking",
    icon: FaUniversity,
    description:
      "Stronger compliance, cleaner auditing, and automated processes that make financial operations predictable.",
    keyPoints: ["Risk Control", "Fast Verifications", "Clean Audit Trails"],
    detailedContent: {
      overview: "Financial institutions require robust systems that ensure compliance, reduce risk, and maintain transparent audit trails. Our solutions automate complex workflows while maintaining the highest security standards.",
      features: [
        "Automated compliance monitoring and reporting",
        "Real-time risk assessment dashboards",
        "Secure document verification workflows",
        "Transaction audit trails",
        "KYC/AML process automation",
        "Regulatory reporting automation"
      ],
      benefits: [
        "Reduce compliance costs by 35%",
        "Faster customer onboarding",
        "Improved risk management",
        "Enhanced audit readiness"
      ]
    }
  },
  {
    id: 4,
    title: "E-Commerce & Retail",
    icon: FaShoppingCart,
    description:
      "Optimize product operations, strengthen conversions, and streamline backend processes that drive daily sales.",
    keyPoints: ["Faster Checkout", "Smart Inventory", "Clean Analytics"],
    detailedContent: {
      overview: "E-commerce businesses need agile systems that can handle rapid growth, manage inventory efficiently, and provide exceptional customer experiences. Our solutions integrate all aspects of online retail operations.",
      features: [
        "Unified inventory management across channels",
        "Automated order processing and fulfillment",
        "Customer data and behavior analytics",
        "Dynamic pricing and promotion management",
        "Returns and refund automation",
        "Multi-channel sales synchronization"
      ],
      benefits: [
        "Increase conversion rates by 25%",
        "Reduce inventory costs",
        "Faster order fulfillment",
        "Better customer insights"
      ]
    }
  },
  {
    id: 5,
    title: "Education & e-Learning",
    icon: FaGraduationCap,
    description:
      "Simplify course delivery, track student progress clearly, and improve academic and operational efficiency.",
    keyPoints: ["Smarter Tracking", "Clean Content", "Easy Onboarding"],
    detailedContent: {
      overview: "Educational institutions and e-learning platforms need systems that support both students and educators while maintaining academic standards. Our solutions streamline course management, student tracking, and administrative processes.",
      features: [
        "Comprehensive learning management system",
        "Student progress tracking and analytics",
        "Automated grading and assessment tools",
        "Content library with version control",
        "Student enrollment and registration workflows",
        "Parent and guardian communication portals"
      ],
      benefits: [
        "Improve student engagement by 30%",
        "Reduce administrative workload",
        "Better learning outcomes tracking",
        "Streamlined communication"
      ]
    }
  },
  {
    id: 6,
    title: "Real Estate & PropTech",
    icon: FaBuilding,
    description:
      "Organize listings, automate follow-ups, and improve clarity across agents, buyers, and operations.",
    keyPoints: ["Lead Clarity", "Smooth Handoffs", "Smart Listings"],
    detailedContent: {
      overview: "Real estate professionals need tools that help them manage properties, nurture leads, and close deals faster. Our solutions streamline the entire property lifecycle from listing to closing.",
      features: [
        "Property listing and management system",
        "Automated lead nurturing workflows",
        "Document management for transactions",
        "Client communication and scheduling",
        "Market analytics and reporting",
        "Commission tracking and management"
      ],
      benefits: [
        "Increase lead conversion by 40%",
        "Reduce time to close deals",
        "Better client relationship management",
        "Improved operational efficiency"
      ]
    }
  },
  {
    id: 7,
    title: "Automotive & Logistics",
    icon: FaTruck,
    description:
      "Stronger tracking, fewer delays, and smoother coordination across fleets, warehouses, and delivery teams.",
    keyPoints: ["Real-Time Tracking", "Route Clarity", "Faster Dispatch"],
    detailedContent: {
      overview: "Logistics and automotive companies require real-time visibility and coordination across complex supply chains. Our solutions provide end-to-end tracking and optimization for fleets, warehouses, and delivery operations.",
      features: [
        "Real-time fleet tracking and monitoring",
        "Route optimization and planning",
        "Warehouse inventory management",
        "Delivery scheduling and dispatch",
        "Driver performance analytics",
        "Maintenance scheduling and tracking"
      ],
      benefits: [
        "Reduce delivery times by 30%",
        "Lower fuel and operational costs",
        "Improved customer satisfaction",
        "Better fleet utilization"
      ]
    }
  },
  {
    id: 8,
    title: "SaaS & Platforms",
    icon: FaCloud,
    description:
      "Create scalable systems, improve feature rollout speed, and maintain a clean product experience as you grow.",
    keyPoints: ["Scalable UX", "Faster Releases", "Stable Systems"],
    detailedContent: {
      overview: "SaaS companies need systems that scale with growth while maintaining product quality and user experience. Our solutions streamline development workflows, customer onboarding, and product management.",
      features: [
        "Product roadmap and feature management",
        "Customer onboarding automation",
        "Usage analytics and monitoring",
        "Subscription and billing management",
        "Support ticket and knowledge base integration",
        "A/B testing and feature flag management"
      ],
      benefits: [
        "Faster feature releases",
        "Improved customer retention",
        "Better product insights",
        "Scalable operations"
      ]
    }
  },
  {
    id: 9,
    title: "Hospitality & Travel",
    icon: FaUmbrellaBeach,
    description:
      "Improve guest experience, streamline internal workflows, and reduce friction across booking, service, and support.",
    keyPoints: ["Smooth Bookings", "Service Flow", "Guest Insights"],
    detailedContent: {
      overview: "Hospitality businesses need to deliver exceptional guest experiences while managing complex operations behind the scenes. Our solutions streamline bookings, guest services, and operational workflows.",
      features: [
        "Integrated booking and reservation system",
        "Guest communication and preferences management",
        "Housekeeping and maintenance scheduling",
        "Revenue management and pricing",
        "Guest feedback and review management",
        "Staff scheduling and task management"
      ],
      benefits: [
        "Increase guest satisfaction scores",
        "Optimize revenue per available room",
        "Reduce operational costs",
        "Better staff productivity"
      ]
    }
  },
  {
    id: 10,
    title: "Manufacturing & Industry",
    icon: FaIndustry,
    description:
      "Boost production visibility, reduce delays, and create tighter coordination across your supply chain.",
    keyPoints: ["Smart Tracking", "Steady Output", "Process Control"],
    detailedContent: {
      overview: "Manufacturing companies require systems that provide real-time visibility into production, inventory, and supply chain operations. Our solutions help optimize production processes and reduce waste.",
      features: [
        "Production planning and scheduling",
        "Real-time inventory tracking",
        "Quality control and inspection workflows",
        "Supply chain coordination",
        "Equipment maintenance scheduling",
        "Production analytics and reporting"
      ],
      benefits: [
        "Reduce production delays by 35%",
        "Improve product quality",
        "Lower inventory costs",
        "Better supply chain visibility"
      ]
    }
  },
  {
    id: 11,
    title: "Media & Entertainment",
    icon: FaFilm,
    description:
      "Organize assets, speed up production cycles, and create smoother workflows for creative teams.",
    keyPoints: ["Clean Assets", "Fast Edits", "Team Sync"],
    detailedContent: {
      overview: "Media and entertainment companies need systems that support creative workflows while managing complex production schedules and asset libraries. Our solutions streamline content creation, production, and distribution.",
      features: [
        "Digital asset management system",
        "Production scheduling and coordination",
        "Content review and approval workflows",
        "Rights and licensing management",
        "Distribution and publishing automation",
        "Performance analytics and reporting"
      ],
      benefits: [
        "Reduce production time by 30%",
        "Better asset organization",
        "Improved collaboration",
        "Faster time to market"
      ]
    }
  },
  {
    id: 12,
    title: "Nonprofit & Public Sector",
    icon: FaHandsHelping,
    description:
      "Bring clarity to data, improve program tracking, and optimize outreach with transparent workflows.",
    keyPoints: ["Clear Impact", "Smooth Reporting", "Better Coordination"],
    detailedContent: {
      overview: "Nonprofit organizations and public sector agencies need systems that maximize impact while maintaining transparency and accountability. Our solutions streamline program management, donor relations, and reporting.",
      features: [
        "Program and project management",
        "Donor and volunteer management",
        "Grant application and tracking",
        "Impact measurement and reporting",
        "Fundraising campaign management",
        "Compliance and audit reporting"
      ],
      benefits: [
        "Increase program efficiency by 40%",
        "Better donor engagement",
        "Improved impact reporting",
        "Enhanced transparency"
      ]
    }
  },
];

// Simple explicit image map for cards (add more imports as needed)
const imagesMap = {
  "digital agency": DigitalAgencyImg,
  "e-commerce & retail": ECommerceImg,
  "education & e-learning": EducationImg,
  "real estate & proptech": RealEstateImg,
  "automotive & logistics": AutomotiveImg,
  "saas & platforms": SaaSImg,
  "hospitality & travel": HospitalityImg,
  "manufacturing & industry": ManufacturingImg,
  "media & entertainment": MediaImg,
  "nonprofit & public sector": NonprofitImg,
  healthcare: HealthcareImg,
  "finance & banking": FinanceImg,
};

function Card({ card, index, onClick }) {
  const Icon = card.icon;
  const imageSrc = imagesMap[card.title.toLowerCase()] || CardImg;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      onClick={onClick}
      style={{
        padding: "1rem",
        width: "100%",
        maxWidth: 380,
        margin: "0 auto",
        backgroundColor: "#FFFFFF",
        boxShadow: "0 6px 18px rgba(0,0,0,0.04)",
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
        height: "100%",
        justifyContent: "space-between",
        cursor: "pointer",
      }}
      whileHover={{
        y: -8,
        boxShadow: "0 12px 28px rgba(0,0,0,0.12)",
        transition: { duration: 0.3 },
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
        <motion.div
          whileHover={{ rotate: 15, scale: 1.05 }}
          transition={{ duration: 0.3 }}
          style={{
            width: 40,
            height: 40,
            background: "#111",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
          }}
        >
          <Icon />
        </motion.div>
        <h3 style={{ margin: 0, fontSize: "1.05rem", fontWeight: 700 }}>
          {card.title}
        </h3>
      </div>

      <motion.div
        style={{ width: "100%", height: 140, overflow: "hidden" }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src={imageSrc}
          alt={card.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </motion.div>

      <p
        style={{
          margin: 0,
          color: "#333",
          lineHeight: 1.5,
          fontSize: "0.95rem",
        }}
      >
        {card.description}
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
        {card.keyPoints.map((kp, i) => (
          <motion.span
            key={i}
            whileHover={{ scale: 1.05, backgroundColor: "#2E2A99" }}
            transition={{ duration: 0.2 }}
            style={{
              backgroundColor: "#03045E",
              color: "#fff",
              padding: "0.35rem 0.65rem",
              fontSize: "0.85rem",
              cursor: "default",
            }}
          >
            {kp}
          </motion.span>
        ))}
      </div>

      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <motion.div
          whileHover={{ x: 5 }}
          transition={{ duration: 0.3 }}
          style={{ cursor: "pointer" }}
        >
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
            <circle cx="22" cy="22" r="22" fill="#03045E" />
            <path
              d="M18 15L25 22L18 29"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function IndustryCarousel() {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null);
  const cardsPerPage = 3;
  const totalPages = Math.ceil(industryCardsData.length / cardsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setDirection(1);
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setDirection(-1);
      setCurrentPage((prev) => prev - 1);
    }
  };

  const getCurrentCards = () => {
    const start = currentPage * cardsPerPage;
    return industryCardsData.slice(start, start + cardsPerPage);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleCloseDetail = () => {
    setSelectedCard(null);
  };

  return (
    <div
      style={{
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "3rem 2rem",
        backgroundColor : '#F8F9FA'
      }}
    >
      {/* Section Header */}
      <div style={{ marginBottom: "3rem", maxWidth: "600px" }}>
        <span
          style={{
            fontSize: "0.875rem",
            fontWeight: "600",
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "#03045E",
            display: "inline-block",
          }}
        >
          OUR INDUSTRIES
        </span>
        <h2
          style={{
            fontSize: "clamp(1.8rem, 4.5vw, 2.5rem)",
            color: "#242424",
            lineHeight: "1.2",
            fontWeight: "700",
            marginTop: "1rem",
            marginBottom: "1rem",
          }}
        >
          Designed for Growth, Clarity, and Control
        </h2>
        <p
          style={{
            fontSize: "1.1rem",
            lineHeight: "1.7",
            color: "#666",
          }}
        >
          From high-velocity digital teams to regulated sectors, our solutions
          strengthen processes, sharpen execution, and create measurable
          day-to-day impact.
        </p>
      </div>

      {/* Cards Container */}
      <div style={{ overflow: "hidden", marginBottom: "3rem" }}>
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentPage}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1.5rem",
              gridAutoRows: "1fr",
              marginBottom: "2rem",
            }}
            className="industry-cards-grid"
          >
            {getCurrentCards().map((card, index) => (
              <div key={card.id} style={{ display: "flex" }}>
                <Card 
                  card={card} 
                  index={index} 
                  onClick={() => handleCardClick(card)}
                />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Section - Prev | Indicators | Next in Row */}
        <div
          style={{
            display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        {/* Prev Button */}
        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: "#2E2A99" }}
          whileTap={{ scale: 0.95 }}
          onClick={handlePrev}
          disabled={currentPage === 0}
              style={{
            padding: "0.75rem 1.75rem",
            backgroundColor: "#03045E",
            border: "none",
            color: "#fff",
            cursor: currentPage === 0 ? "not-allowed" : "pointer",
            fontSize: "1rem",
                fontWeight: "600",
            boxShadow: "0 4px 12px rgba(63, 55, 201, 0.3)",
            opacity: currentPage === 0 ? 0.4 : 1,
            transition: "all 0.3s ease",
          }}
        >
          Prev
        </motion.button>

        {/* Progress Indicators */}
        <div
          style={{
            display: "flex",
            gap: "0.6rem",
            alignItems: "center",
          }}
        >
          {Array.from({ length: totalPages }).map((_, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                setDirection(idx > currentPage ? 1 : -1);
                setCurrentPage(idx);
              }}
              style={{
                width: currentPage === idx ? 36 : 10,
                height: 10,
                backgroundColor: currentPage === idx ? "#03045E" : "#D1D1D1",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>

        {/* Next Button */}
        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: "#2E2A99" }}
          whileTap={{ scale: 0.95 }}
          onClick={handleNext}
          disabled={currentPage === totalPages - 1}
          style={{
            padding: "0.75rem 1.75rem",
            backgroundColor: "#03045E",
            border: "none",
            color: "#fff",
            cursor: currentPage === totalPages - 1 ? "not-allowed" : "pointer",
            fontSize: "1rem",
            fontWeight: "600",
            boxShadow: "0 4px 12px rgba(63, 55, 201, 0.3)",
            opacity: currentPage === totalPages - 1 ? 0.4 : 1,
            transition: "all 0.3s ease",
          }}
        >
          Next
        </motion.button>
      </div>

      {/* Detail Panel */}
      <IndustryCardsDetail
        selectedCard={selectedCard}
        onClose={handleCloseDetail}
      />

      <style>{`
        @media (max-width: 1024px) {
          .industry-cards-grid { 
            grid-template-columns: repeat(2, 1fr) !important; 
          }
        }
        @media (max-width: 640px) {
          .industry-cards-grid { 
            grid-template-columns: 1fr !important; 
          }
        }
      `}</style>
    </div>
  );
}
