import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, Mail } from 'lucide-react';
import DigitalAgency from '../assets/DigitalAgency.png';
import { useServices } from '../hooks/useServices';

const digitalPlatform = [
  {
    title: 'Innovation & Design',
    description: 'Shape new digital products with research, rapid prototyping, and customer journey mapping.',
  },
  {
    title: 'Modern Marketing',
    description: 'Connect brand, content, automation, and analytics to create better customer experiences.',
  },
  {
    title: 'AI, Insights and Solutions',
    description: 'Use AI and business data to accelerate decisions, reduce manual work, and uncover opportunities.',
  },
  {
    title: 'Automation',
    description: 'Reinvent how work gets done with workflow automation, integrations, and intelligent tools.',
  },
  {
    title: 'Enterprise Technology',
    description: 'Build dependable systems and integrations that support ambitious digital operations.',
  },
  {
    title: 'Web3',
    description: 'Explore blockchain-backed products, digital ownership models, and emerging web experiences.',
  },
];

const pageStyles = `
  .services-page {
    background: #fff;
    color: #171717;
    font-family: var(--font-family-supreme), -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }

  .services-container {
    width: min(100%, 1320px);
    margin: 0 auto;
    padding-left: 32px;
    padding-right: 32px;
  }

  .services-hero {
    padding-top: 110px;
    padding-bottom: 96px;
  }

  .services-hero-grid {
    display: grid;
    grid-template-columns: minmax(280px, 0.8fr) minmax(380px, 1.2fr);
    gap: 96px;
    align-items: start;
  }

  .services-eyebrow {
    margin: 0 0 22px;
    color: #d40000;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
  }

  .services-title {
    margin: 0;
    color: #000;
    font-size: clamp(54px, 6vw, 86px);
    font-weight: 700;
    line-height: 0.98;
    letter-spacing: 0;
  }

  .services-intro {
    max-width: 720px;
    margin: 6px 0 0;
    color: #303030;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.78;
  }

  .services-section {
    padding-bottom: 96px;
  }

  .services-section-heading {
    margin: 0 0 46px;
    color: #000;
    font-size: clamp(30px, 3vw, 40px);
    font-weight: 700;
    line-height: 1.1;
    text-align: center;
  }

  .services-section-heading.with-rule {
    border-top: 1px solid #eeeeee;
    padding-top: 44px;
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    column-gap: 56px;
    row-gap: 68px;
  }

  .service-card {
    display: block;
    min-height: 148px;
    padding-top: 22px;
    border-top: 1px solid #e2e2e2;
    color: inherit;
    text-decoration: none;
    transition: border-color 180ms ease, transform 180ms ease;
  }

  .service-card:hover {
    border-color: #d40000;
    transform: translateY(-2px);
  }

  .service-card-top {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 22px;
    margin-bottom: 12px;
  }

  .service-card h3 {
    max-width: 290px;
    margin: 0;
    color: #171717;
    font-size: 20px;
    font-weight: 700;
    line-height: 1.16;
  }

  .service-card p {
    max-width: 360px;
    margin: 0;
    color: #646464;
    font-size: 14px;
    line-height: 1.58;
  }

  .service-arrow {
    width: 16px;
    height: 16px;
    flex: 0 0 auto;
    margin-top: 3px;
    color: #d40000;
    transition: transform 180ms ease;
  }

  .service-card:hover .service-arrow {
    transform: translateX(4px);
  }

  .services-state {
    border-top: 1px solid #e2e2e2;
    padding: 28px 0;
    color: #646464;
    font-size: 16px;
    line-height: 1.6;
    text-align: center;
  }

  .services-state.error {
    color: #c40000;
  }

  .services-digital-band {
    padding-bottom: 64px;
  }

  .digital-panel {
    display: grid;
    grid-template-columns: 2fr 1fr;
    min-height: 278px;
    overflow: hidden;
    border: 1px solid #e2e2e2;
    background: #fff;
  }

  .digital-copy {
    padding: 52px 56px;
  }

  .digital-copy h2 {
    margin: 0 0 14px;
    color: #000;
    font-size: 34px;
    font-weight: 700;
    line-height: 1.1;
  }

  .digital-copy p {
    max-width: 720px;
    margin: 0 0 34px;
    color: #333;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.65;
  }

  .red-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 50px;
    padding: 0 32px;
    border: 0;
    background: #d40000;
    color: #fff;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-decoration: none;
    text-transform: uppercase;
    transition: background 180ms ease, transform 180ms ease;
  }

  .red-button:hover {
    background: #ad0000;
    transform: translateY(-1px);
  }

  .digital-image {
    position: relative;
    min-height: 278px;
    background: #050505;
  }

  .digital-image img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .services-contact {
    padding-bottom: 96px;
  }

  .contact-panel {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 56px;
    border: 1px solid #e2e2e2;
    background: #fff;
    padding: 52px 56px;
  }

  .contact-panel h2 {
    margin: 0 0 42px;
    color: #000;
    font-size: 34px;
    font-weight: 700;
    line-height: 1.1;
  }

  .contact-lead {
    margin: 0 0 20px;
    color: #222;
    font-size: 23px;
    line-height: 1.25;
  }

  .industry-select {
    display: flex;
    width: min(100%, 420px);
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 0 0 13px;
    border: 0;
    border-bottom: 1px solid #b8b8b8;
    background: transparent;
    color: #000;
    cursor: pointer;
    font: inherit;
    text-align: left;
  }

  .industry-select span {
    color: #000;
    font-size: clamp(24px, 2.3vw, 31px);
    font-weight: 700;
    line-height: 1.15;
  }

  .industry-select svg {
    width: 20px;
    height: 20px;
    color: #d40000;
  }

  .contact-panel-copy {
    padding-top: 12px;
  }

  .contact-panel-copy p {
    max-width: 560px;
    margin: 0 0 30px;
    color: #555;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.65;
  }

  .contact-row {
    display: flex;
    gap: 16px;
  }

  .email-input {
    min-height: 54px;
    flex: 1 1 auto;
    min-width: 0;
    border: 1px solid #9f9f9f;
    border-radius: 0;
    padding: 0 18px;
    color: #111;
    font: inherit;
    font-size: 15px;
    outline: none;
  }

  .email-input:focus {
    border-color: #d40000;
  }

  .contact-button {
    gap: 9px;
    min-width: 152px;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  @media (max-width: 1024px) {
    .services-container {
      padding-left: 28px;
      padding-right: 28px;
    }

    .services-hero-grid,
    .digital-panel,
    .contact-panel {
      grid-template-columns: 1fr;
    }

    .services-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .digital-image {
      min-height: 320px;
    }
  }

  @media (max-width: 640px) {
    .services-container {
      padding-left: 20px;
      padding-right: 20px;
    }

    .services-hero {
      padding-top: 72px;
      padding-bottom: 72px;
    }

    .services-hero-grid {
      gap: 34px;
    }

    .services-intro {
      font-size: 16px;
      line-height: 1.65;
    }

    .services-grid {
      grid-template-columns: 1fr;
      row-gap: 38px;
    }

    .service-card {
      min-height: auto;
    }

    .services-section,
    .services-contact {
      padding-bottom: 72px;
    }

    .digital-copy,
    .contact-panel {
      padding: 32px 24px;
    }

    .contact-row {
      flex-direction: column;
    }

    .red-button {
      width: 100%;
    }
  }
`;

function ServiceCard({ title, description, slug }) {
  const target = slug ? `/services/${slug}` : '/contact';

  return (
    <Link to={target} className="service-card">
      <div className="service-card-top">
        <h3>{title}</h3>
        <ArrowRight className="service-arrow" strokeWidth={2.5} />
      </div>
      <p>{description}</p>
    </Link>
  );
}

export default function ServicesPage() {
  const { services, loading, error } = useServices();
  const hasServices = services.length > 0;
  
  // This correctly maps your database rows to the card format
  const howWeHelpServices = services.map((service) => ({
    id: service.id,
    title: service.title || 'Untitled service',
    
    // Uses the new short_description first, falls back to hero_description if empty
    description:
      service.short_description ||
      service.hero_description ||
      'Explore this service to see how Dream LogicX can support your business.',
    slug: service.slug,
  }));

  return (
    <main className="services-page">
      <style>{pageStyles}</style>

      <section className="services-container services-hero">
        <div className="services-hero-grid">
          <div>
            <p className="services-eyebrow">Dream LogicX Services</p>
            <h1 className="services-title">
              Consulting
              <br />
              Services
            </h1>
          </div>

          <div>
            <p className="services-intro">
              Our consulting and technology services focus on the issues that matter most to growing businesses:
              strategy, automation, software delivery, operations, digital experience, cloud infrastructure,
              data, AI, and performance improvement. We bring practical execution and broad technical expertise
              together so your organization can move faster, work smarter, and create durable value.
            </p>
          </div>
        </div>
      </section>

      <section className="services-container services-section">
        <h2 className="services-section-heading">How We Help</h2>

        {loading && <div className="services-state">Loading services...</div>}

        {!loading && error && (
          <div className="services-state error">Unable to load services: {error}</div>
        )}

        {!loading && !error && !hasServices && (
          <div className="services-state">No published services found.</div>
        )}

        {!loading && !error && hasServices && (
          <div className="services-grid">
            {howWeHelpServices.map((service) => (
              <ServiceCard
                key={service.id ?? service.slug ?? service.title}
                title={service.title}
                description={service.description}
                slug={service.slug}
              />
            ))}
          </div>
        )}
      </section>

      <section className="services-container services-section">
        <h2 className="services-section-heading with-rule">Our Digital Delivery Platform</h2>

        <div className="services-grid">
          {digitalPlatform.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      <section className="services-container services-digital-band">
        <div className="digital-panel">
          <div className="digital-copy">
            <h2>Digital</h2>
            <p>
              We bridge strategy, design, automation, and technology to accelerate digital transformation
              and keep results improving after launch.
            </p>
            <Link to="/contact" className="red-button">
              Learn More
            </Link>
          </div>

          <div className="digital-image">
            <img src={DigitalAgency} alt="Digital delivery and technology consulting" />
          </div>
        </div>
      </section>

      <section className="services-container services-contact">
        <div className="contact-panel">
          <div>
            <h2>Ready to talk?</h2>
            <p className="contact-lead">I want to talk to your experts in:</p>
            <button type="button" className="industry-select">
              <span>Select an industry</span>
              <ChevronDown strokeWidth={2.5} />
            </button>
          </div>

          <div className="contact-panel-copy">
            <p>
              We work with ambitious leaders who want to define the future, not hide from it.
              Together, we create practical systems, stronger operations, and better digital experiences.
            </p>
            <div className="contact-row">
              <label className="sr-only" htmlFor="services-email">
                Your email
              </label>
              <input id="services-email" type="email" placeholder="Your email" className="email-input" />
              <Link to="/contact" className="red-button contact-button">
                <Mail size={16} />
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}