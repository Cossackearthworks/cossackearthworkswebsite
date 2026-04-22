import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Cossack Earthworks",
  description: "Privacy policy for Cossack Earthworks.",
};

export default function PrivacyPolicy() {
  return (
    <main className="policy-page">
      <nav className="navbar">
        <Link href="/" className="nav-logo">
          Cossack Earthworks
        </Link>
      </nav>

      <div className="policy-container">
        <h1 className="policy-title">Privacy Policy</h1>
        <p className="policy-updated">Last updated: April 21, 2026</p>

        <section className="policy-section">
          <h2>1. Introduction</h2>
          <p>
            Cossack Earthworks (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) respects your privacy and is
            committed to protecting any information you may provide while using our website:{" "}
            <a href="https://www.cossackearthworks.ca/" target="_blank" rel="noopener noreferrer">
              https://www.cossackearthworks.ca/
            </a>
            .
          </p>
          <p>This Privacy Policy explains what information we collect and how we use it.</p>
        </section>

        <section className="policy-section">
          <h2>2. Information We Collect</h2>
          <p>
            We do not actively collect personal information through this website (such as names, emails, or phone
            numbers).
          </p>
          <p>
            However, like most websites, certain basic information may be collected automatically, including:
          </p>
          <ul>
            <li>IP address</li>
            <li>Browser type and device information</li>
            <li>Pages visited and time spent on the site</li>
            <li>General location data (e.g., city-level)</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>3. Analytics (Google Analytics)</h2>
          <p>We may use Google Analytics to better understand how visitors use our website.</p>
          <p>Google Analytics may collect information such as:</p>
          <ul>
            <li>Pages visited and time spent on the site</li>
            <li>How users arrive at the website (e.g., search engines or direct visits)</li>
            <li>Device and browser type</li>
            <li>Approximate geographic location</li>
          </ul>
          <p>This information is aggregated and does not identify you personally.</p>
          <p>Google may use this data in accordance with its own privacy policies.</p>
        </section>

        <section className="policy-section">
          <h2>4. How We Use Information</h2>
          <p>Any information collected is used to:</p>
          <ul>
            <li>Improve website performance and user experience</li>
            <li>Understand general traffic patterns</li>
            <li>Monitor website effectiveness</li>
          </ul>
          <p>We do not sell, rent, or trade any information.</p>
        </section>

        <section className="policy-section">
          <h2>5. Cookies &amp; Tracking</h2>
          <p>This website may use cookies or similar technologies to:</p>
          <ul>
            <li>Support analytics (such as Google Analytics)</li>
            <li>Ensure the site functions properly</li>
          </ul>
          <p>You can disable cookies through your browser settings at any time.</p>
        </section>

        <section className="policy-section">
          <h2>6. Third-Party Services</h2>
          <p>
            We may use third-party services (such as hosting providers and analytics tools) to operate the website.
            These services may collect limited technical data as required for their functionality.
          </p>
          <p>
            We do not control how third-party services handle data. Please refer to their respective privacy policies
            for more information.
          </p>
        </section>

        <section className="policy-section">
          <h2>7. Data Security</h2>
          <p>
            We take reasonable steps to protect any information collected from unauthorized access, use, or disclosure.
          </p>
        </section>

        <section className="policy-section">
          <h2>8. Your Rights</h2>
          <p>
            You may request information about any personal data related to you or ask questions about how your data is
            handled.
          </p>
        </section>

        <section className="policy-section">
          <h2>9. Contact</h2>
          <p>If you have any questions about this Privacy Policy, you can contact:</p>
          <address className="policy-address">
            <strong>Cossack Earthworks</strong>
            <br />
            <a href="mailto:cossackearthworks@gmail.com">cossackearthworks@gmail.com</a>
            <br />
            <a href="tel:+17802218831">(780) 221-8831</a>
          </address>
        </section>

        <section className="policy-section">
          <h2>10. Updates</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an
            updated date.
          </p>
        </section>

        <div className="policy-back">
          <Link href="/" className="cta-button">
            &larr; Back to Home
          </Link>
        </div>
      </div>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Cossack Earthworks. All rights reserved.</p>
        <p className="footer-credit">
          Website by{" "}
          <a href="https://www.brandtsystems.ca/" target="_blank" rel="noopener noreferrer">
            Brandt Systems
          </a>
        </p>
      </footer>
    </main>
  );
}
