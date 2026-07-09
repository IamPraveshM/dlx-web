import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../supabase';

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Interactive States
  const [activeTab, setActiveTab] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    async function fetchPageData() {
      const { data: pageData, error } = await supabase
        .from('dynamic_services')
        .select('*')
        .eq('slug', slug)
        .single();

      if (!error && pageData) setData(pageData);
      setLoading(false);
    }
    if (slug) fetchPageData();
  }, [slug]);

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  if (!data) return <div className="min-h-screen flex items-center justify-center text-red-600">Page Not Found</div>;

  // Safe Arrays
  const heroList = data.hero_list || [];
  const gridItems = data.grid_section_items || [];
  const listItems = data.list_section_items || [];
  const tabItems = data.tab_section_items || [];
  const darkGridItems = data.dark_grid_items || [];
  const processItems = data.process_items || [];
  const simpleGridItems = data.simple_grid_items || [];
  const faqList = data.faq_list || [];

  return (
    <section className="dlx-ecom-page">
      
      {/* HERO */}
      <div className="dlx-hero" id="top">
        <div className="dlx-container dlx-hero-grid">
          <div>
            <span className="dlx-eyebrow">{data.hero_eyebrow}</span>
            <h1>{data.hero_heading || data.title}</h1>
            <p>{data.hero_description}</p>
            <div className="dlx-hero-buttons">
              <a href="#contact" className="dlx-btn-primary">Start Your Project</a>
              <a href="#section1" className="dlx-btn-secondary">Explore Services</a>
            </div>
          </div>
          <div className="dlx-hero-card">
            <div className="dlx-card-line"></div>
            <h3>Overview</h3>
            <ul>
              {heroList.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
        </div>
      </div>

      {/* TOC */}
      <nav className="dlx-toc">
        {gridItems.length > 0 && <a href="#section1">Services</a>}
        {listItems.length > 0 && <a href="#section2">Solutions</a>}
        {tabItems.length > 0 && <a href="#section3">Platforms</a>}
        {darkGridItems.length > 0 && <a href="#section4">Capabilities</a>}
        {processItems.length > 0 && <a href="#section5">Process</a>}
        {faqList.length > 0 && <a href="#faq">FAQ</a>}
      </nav>

      {/* SECTION 1: Standard Grid */}
      {gridItems.length > 0 && (
        <section className="dlx-section" id="section1">
          <div className="dlx-container">
            <div className="dlx-section-head">
              <h2>{data.grid_section_heading}</h2>
              <p>{data.grid_section_description}</p>
            </div>
            <div className="dlx-grid-3">
              {gridItems.map((item, i) => (
                <div className="dlx-service-card" key={i}>
                  <span>{String(i + 1).padStart(2, '0')}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 2: Split Lists */}
      {listItems.length > 0 && (
        <section className="dlx-section dlx-light" id="section2">
          <div className="dlx-container">
            <div className="dlx-section-head">
              <h2>{data.list_section_heading}</h2>
            </div>
            <div className="dlx-solution-wrap">
              {listItems.map((list, i) => (
                <div className="dlx-solution-box" key={i}>
                  <h3>{list.title}</h3>
                  <ul>
                    {list.items?.map((li, idx) => <li key={idx}>{li}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 3: Tabbed Content */}
      {tabItems.length > 0 && (
        <section className="dlx-section" id="section3">
          <div className="dlx-container">
            <div className="dlx-section-head">
              <h2>{data.tab_section_heading}</h2>
              <p>{data.tab_section_description}</p>
            </div>
            <div className="dlx-platform-tabs">
              {tabItems.map((tab, i) => (
                <button key={i} className={`dlx-tab ${activeTab === i ? 'active' : ''}`} onClick={() => setActiveTab(i)}>
                  {tab.tab_name}
                </button>
              ))}
            </div>
            {tabItems.map((tab, i) => (
              <div key={i} className={`dlx-tab-content ${activeTab === i ? 'active' : ''}`}>
                <h3>{tab.title}</h3>
                <p>{tab.description}</p>
                <ul>
                  {tab.items?.map((li, idx) => <li key={idx}>{li}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SECTION 4: Dark Grid */}
      {darkGridItems.length > 0 && (
        <section className="dlx-section dlx-dark" id="section4">
          <div className="dlx-container">
            <div className="dlx-section-head light-text">
              <h2>{data.dark_grid_heading}</h2>
              <p>{data.dark_grid_description}</p>
            </div>
            <div className="dlx-grid-3">
              {darkGridItems.map((item, i) => (
                <div className="dlx-tech-card" key={i}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 5: Process */}
      {processItems.length > 0 && (
        <section className="dlx-section" id="section5">
          <div className="dlx-container">
            <div className="dlx-section-head">
              <h2>{data.process_heading}</h2>
            </div>
            <div className="dlx-process">
              {processItems.map((step, i) => (
                <div key={i}>
                  <span>{String(i + 1).padStart(2, '0')}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 6: Simple Grid */}
      {simpleGridItems.length > 0 && (
        <section className="dlx-section dlx-light">
          <div className="dlx-container">
            <div className="dlx-section-head">
              <h2>{data.simple_grid_heading}</h2>
            </div>
            <div className="dlx-stack-grid">
              {simpleGridItems.map((item, i) => (
                <div key={i}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {faqList.length > 0 && (
        <section className="dlx-section" id="faq">
          <div className="dlx-container">
            <div className="dlx-section-head">
              <h2>{data.faq_heading}</h2>
            </div>
            <div className="dlx-faq">
              {faqList.map((faq, i) => (
                <div className={`dlx-faq-item ${activeFaq === i ? 'active' : ''}`} key={i}>
                  <button onClick={() => setActiveFaq(activeFaq === i ? null : i)}>
                    {faq.question}
                  </button>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="dlx-cta" id="contact">
        <div className="dlx-container">
          <h2>{data.cta_heading || 'Ready to start your project?'}</h2>
          <p>{data.cta_description}</p>
          <a href="/contact" className="dlx-btn-primary">Contact Us</a>
        </div>
      </section>

    </section>
  );
}