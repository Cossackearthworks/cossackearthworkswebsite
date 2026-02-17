import ContactForm from "./components/ContactForm";

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
        <div className="contact-grid">
          <div className="contact-info">
            <p><strong>Phone</strong><br /><a href="tel:+15551234567">(555) 123-4567</a></p>
            <p><strong>Email</strong><br /><a href="mailto:info@cossackearthworks.com">info@cossackearthworks.com</a></p>
            <p className="contact-note">Serving the greater area with reliable excavation services.</p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Cossack Earthworks. All rights reserved.</p>
      </footer>
    </main>
  );
}
