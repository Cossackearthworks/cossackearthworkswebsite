export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-content">
          <h1 className="hero-title">Cossack Earthworks</h1>
          <p className="hero-tagline">Professional excavation & site preparation</p>
          <p className="hero-desc">
            From residential foundations to commercial development — we move earth 
            with precision, reliability, and decades of combined experience.
          </p>
          <a href="#contact" className="cta-button">Get a Free Quote</a>
        </div>
        <div className="hero-scroll">↓ Scroll</div>
      </section>

      {/* Services */}
      <section className="services" id="services">
        <h2 className="section-title">What We Do</h2>
        <div className="services-grid">
          <div className="service-card">
            <span className="service-icon">◆</span>
            <h3>Excavation</h3>
            <p>Foundation digs, basements, trenching, and grading for any scale of project.</p>
          </div>
          <div className="service-card">
            <span className="service-icon">▣</span>
            <h3>Site Preparation</h3>
            <p>Land clearing, demolition, soil stabilization, and prep for construction.</p>
          </div>
          <div className="service-card">
            <span className="service-icon">◇</span>
            <h3>Utility & Drainage</h3>
            <p>Underground utilities, water lines, septic systems, and drainage solutions.</p>
          </div>
          <div className="service-card">
            <span className="service-icon">▢</span>
            <h3>Grading & Leveling</h3>
            <p>Precision grading for driveways, parking lots, and building pads.</p>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="trust">
        <div className="trust-content">
          <h2>Licensed. Insured. Ready to dig.</h2>
          <p>
            We take pride in every job — no project is too big or too small. 
            Contact us for a free estimate and let&apos;s get your project started.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="contact" id="contact">
        <h2 className="section-title">Get in Touch</h2>
        <p className="contact-subtitle">
          Ready to start your project? Reach out — we&apos;d love to hear from you.
        </p>
        <div className="contact-cards">
          <a href="tel:+17802218831" className="contact-card">
            <span className="contact-card-icon">✆</span>
            <span className="contact-card-label">Call Us</span>
            <span className="contact-card-value">(780) 221-8831</span>
          </a>
          <a href="mailto:cossackearthworks@gmail.com" className="contact-card">
            <span className="contact-card-icon">✉</span>
            <span className="contact-card-label">Email Us</span>
            <span className="contact-card-value">cossackearthworks@gmail.com</span>
          </a>
        </div>
        <p className="contact-note">Serving the greater area with reliable excavation services.</p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Cossack Earthworks. All rights reserved.</p>
        <p className="footer-credit">
          made by{" "}
          <a href="https://www.brandtsystems.ca/" target="_blank" rel="noopener noreferrer">
            Brandt Systems
          </a>
        </p>
      </footer>
    </main>
  );
}
