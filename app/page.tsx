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
          <a href="mailto:cossackearthworks@gmail.com" className="nav-email">✉ cossackearthworks@gmail.com</a>
          <a href="tel:+17802218831" className="nav-phone">✆ (780) 221-8831</a>
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
          <p className="hero-tagline">Serving Sherwood Park &amp; Area Since 2024</p>
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
            <Image src="/mini-excavator-trench-digging.jpg" alt="Excavation" fill sizes="(max-width: 700px) 100vw, 50vw" style={{ objectFit: "cover", objectPosition: "center 5%" }} />
            <div className="service-card-overlay" />
            <div className="service-card-content">
              <h3>Excavation</h3>
              <p>Foundations, basements, trenching, and earthmoving for residential and commercial projects.</p>
            </div>
          </div>
          <div className="service-card">
            <Image src="/gradingphoto.jpg" alt="Grading" fill sizes="(max-width: 700px) 100vw, 50vw" style={{ objectFit: "cover" }} />
            <div className="service-card-overlay" />
            <div className="service-card-content">
              <h3>Grading</h3>
              <p>Precision leveling and sloping for land developments and commercial building sites.</p>
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
              <p>Supply placement and compaction of aggregate products for driveways, concrete slabs and building pads.</p>
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
          <a
            href="https://www.linkedin.com/company/cossack-earthworks/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <span className="contact-card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="32" height="32" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </span>
            <span className="contact-card-label">LinkedIn</span>
            <span className="contact-card-value">Follow us</span>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61572262630816"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <span className="contact-card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="32" height="32" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </span>
            <span className="contact-card-label">Facebook</span>
            <span className="contact-card-value">Follow us</span>
          </a>
        </div>
        <p className="contact-note">Serving Sherwood Park, Edmonton, and surrounding communities.</p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Cossack Earthworks. All rights reserved.</p>
        <div className="footer-social">
          <a href="https://www.linkedin.com/company/cossack-earthworks/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="https://www.facebook.com/profile.php?id=61572262630816" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
        </div>
        <p className="footer-links">
          <a href="/privacy-policy">Privacy Policy</a>
        </p>
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
