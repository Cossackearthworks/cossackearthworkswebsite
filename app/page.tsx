"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    if (!lightbox) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setLightbox(null);
    }
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox]);

  return (
    <main>
      {/* Navbar */}
      <nav className="navbar">
        <a href="#" className="nav-logo">
          Cossack Earthworks
        </a>
        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#awards">Awards</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="nav-contact">
          <a href="tel:+17802218831" className="nav-phone">✆ (780) 221-8831</a>
          <a href="mailto:cossackearthworks@gmail.com" className="nav-email">✉ cossackearthworks@gmail.com</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-bg">
          <Image
            src="/track-loader-working-at-dusk.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="hero-content">
          <Image
            src="/Cossack_Earthworks_Logo_page-0001-removebg-preview.png"
            alt="Cossack Earthworks"
            width={340}
            height={340}
            className="hero-logo"
          />
          <p className="hero-desc">
            Big jobs or small, we move dirt properly the first time. Foundations, site prep, and everything in between.
          </p>
          <a href="#contact" className="cta-button">Contact Us</a>
        </div>
      </section>

      {/* Services */}
      <section className="services" id="services">
        <h2 className="section-title">What We Do</h2>
        <div className="services-grid">
          <div className="service-card">
            <Image src="/mini-excavator-trench-digging.jpg" alt="Excavation" fill sizes="(max-width: 700px) 100vw, 50vw" style={{ objectFit: "cover" }} />
            <div className="service-card-overlay" />
            <div className="service-card-content">
              <h3>Excavation</h3>
              <p>Foundations, basements, trenching, and earthmoving for residential and commercial projects.</p>
            </div>
          </div>
          <div className="service-card">
            <Image src="/plate-compactor-driveway-finish.jpg" alt="Grading" fill sizes="(max-width: 700px) 100vw, 50vw" style={{ objectFit: "cover" }} />
            <div className="service-card-overlay" />
            <div className="service-card-content">
              <h3>Grading</h3>
              <p>Precision leveling for driveways, building pads, parking lots, and yards.</p>
            </div>
          </div>
          <div className="service-card">
            <Image src="/excavator-hillside-clearing-wide.jpg" alt="Land Clearing" fill sizes="(max-width: 700px) 100vw, 50vw" style={{ objectFit: "cover" }} />
            <div className="service-card-overlay" />
            <div className="service-card-content">
              <h3>Land Clearing</h3>
              <p>Tree and brush removal, stump clearing, and site prep to get your land build-ready.</p>
            </div>
          </div>
          <div className="service-card">
            <Image src="/track-loader-pad-grading-rural.jpg" alt="Gravel" fill sizes="(max-width: 700px) 100vw, 50vw" style={{ objectFit: "cover" }} />
            <div className="service-card-overlay" />
            <div className="service-card-content">
              <h3>Gravel</h3>
              <p>Gravel supply, spreading, and compaction for roads, pads, and drainage layers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="gallery" id="gallery">
        <h2 className="section-title">Our Work</h2>
        <div className="gallery-grid">
          {[
            { src: "/foundation-grading-sunset.jpg", alt: "Foundation grading at sunset", tall: true },
            { src: "/hitachi-excavator-zaxis-210.jpg", alt: "Hitachi excavator on site" },
            { src: "/skid-steer-driveway-grading-wide.jpg", alt: "Skid steer grading a driveway" },
            { src: "/track-loader-wooded-lot-grading.jpg", alt: "Track loader grading a wooded lot", tall: true },
            { src: "/excavator-and-track-loader-residential.jpg", alt: "Excavator and track loader on residential project" },
            { src: "/operator-selfie-foundation-complete.jpg", alt: "Operator at completed foundation" },
            { src: "/worker-kubota-loader-sunset.jpg", alt: "Worker with Kubota loader at sunset" },
          ].map((photo) => (
            <div
              key={photo.src}
              className={`gallery-item${photo.tall ? " gallery-item-tall" : ""}`}
              onClick={() => setLightbox(photo.src)}
            >
              <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 480px) 100vw, (max-width: 700px) 50vw, 33vw" style={{ objectFit: "cover" }} />
            </div>
          ))}
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

      {/* Awards */}
      <section className="awards" id="awards">
        <h2 className="section-title">Awards &amp; Recognition</h2>
        <div className="awards-list">
          <div className="award-card">
            <span className="award-icon">★</span>
            <h3 className="award-name">Community Vote 2025 Category Winner</h3>
            <p className="award-category">Excavation</p>
            <p className="award-location">Sherwood Park</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="contact" id="contact">
        <h2 className="section-title">Contact Us</h2>
        <p className="contact-subtitle">
          Ready to get started? Get in touch and let&apos;s talk about your project.
        </p>
        <div className="contact-cards">
          <div className="contact-card">
            <span className="contact-card-icon">✆</span>
            <span className="contact-card-label">Call Us</span>
            <span className="contact-card-value contact-card-selectable">(780) 221-8831</span>
          </div>
          <div className="contact-card contact-card-email">
            <span className="contact-card-icon">✉</span>
            <span className="contact-card-label">Email Us</span>
            <span className="contact-card-value contact-card-selectable">cossackearthworks@gmail.com</span>
          </div>
        </div>
        <p className="contact-note">Serving Sherwood Park, Edmonton, and surrounding communities.</p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Cossack Earthworks. All rights reserved.</p>
        <p className="footer-credit">
          Website by{" "}
          <a href="https://www.brandtsystems.ca/" target="_blank" rel="noopener noreferrer">
            Brandt Systems
          </a>
        </p>
      </footer>

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="lightbox-close" onClick={() => setLightbox(null)} aria-label="Close">×</button>
          <img
            className="lightbox-img"
            src={lightbox}
            alt=""
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </main>
  );
}
