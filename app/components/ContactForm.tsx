"use client";

export default function ContactForm() {
  return (
    <form
      className="contact-form"
      onSubmit={(e) => e.preventDefault()}
    >
      <input type="text" placeholder="Your name" required />
      <input type="email" placeholder="Email" required />
      <input type="tel" placeholder="Phone" />
      <textarea placeholder="Tell us about your project..." rows={4} required />
      <button type="submit" className="cta-button">
        Request Quote
      </button>
    </form>
  );
}
