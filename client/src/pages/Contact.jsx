import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import '../styles/Contact.css'
import logo from "../assets/Craft Logo jpg.jpg"; // Replace with actual path

const Contact = () => {
  const [sent, setSent] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name: e.target[0].value,
      email: e.target[1].value,
      subject: e.target[2].value,
      message: e.target[3].value,
    };

    await fetch("http://localhost:5000/api/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    setSent(true);
    e.target.reset();
    setTimeout(() => setSent(false), 3000); // Hide message after 3s
  };

  return (
    <div className="about-container">
      {/* HERO SECTION */}
      <section className="about-hero" data-aos="fade-in">
        <div className="hero-wrapper">
          <div className="hero-text" data-aos="fade-right">
            <h2>Let's Connect</h2>
            <p>
              We’d love to hear from you! Reach out to us through the contact
              form or via our office locations.
            </p>
          </div>
          <div className="hero-logo-card" data-aos="fade-left">
            <img src={logo} alt="Craft Logo" />
          </div>
        </div>
      </section>

      {/* OFFICE LOCATIONS */}
      <section className="about-offices" data-aos="fade-up">
        <h3 data-aos="fade-up">Our Offices</h3>
        <p className="office-sub" data-aos="fade-up" data-aos-delay="100">Find us at our locations</p>

        <div className="office-cards">
          <div className="office-card" data-aos="zoom-in">
            <span className="emoji">📍</span>
            <h4>Egypt Office</h4>
            <p>
              30th El Ahram St., Behind Meridian Hotel, Remaya, Giza – Egypt
            </p>
            <strong>+2 01030550055</strong>
          </div>

          <div className="office-card" data-aos="zoom-in" data-aos-delay="150">
            <span className="emoji">📍</span>
            <h4>UAE Office</h4>
            <p>
              Office No. 43–44, Dubai Municipality Property – Bur Dubai – Al
              Fahidi
            </p>
            <strong>+971551235995 | +971501483933</strong>
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="map-section" data-aos="fade-up">
        <a
          href="https://www.google.com/maps/place/30th+El+Ahram+St.,+Remaya,+Giza,+Egypt"
          target="_blank"
          rel="noopener noreferrer"
          className="map-card"
          data-aos="fade-up"
        >
          <iframe
            title="Egypt Office"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.3321534209267!2d31.172225074658308!3d29.962911623922167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145846b18cd0c57d%3A0x2a748f23406a4a2d!2z2KfZhNmF2K3Yp9mFINmF2YbYtNin2YTZhSDYtNin2YTYuSDYp9mE2KfZhNix2YrYqQ!5e0!3m2!1sen!2seg!4v1717248089622!5m2!1sen!2seg"
            loading="lazy"
            allowFullScreen
          ></iframe>
          <div className="map-label">Our office location in Egypt</div>
        </a>

        <a
          href="https://www.google.com/maps/place/Office+No.+43-44,+Dubai+Municipality+Property,+Al+Fahidi,+Dubai"
          target="_blank"
          rel="noopener noreferrer"
          className="map-card"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <iframe
            title="UAE Office"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.4906597547056!2d55.298938274592135!3d25.2639259287915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43359fcb1c6f%3A0x44e0a85ec088c21f!2sAl%20Fahidi%20St%20-%20Al%20Fahidi%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2seg!4v1717248126677!5m2!1sen!2seg"
            loading="lazy"
            allowFullScreen
          ></iframe>
          <div className="map-label">Our office location in UAE</div>
        </a>
      </section>

      {/* CONTACT FORM */}
      <section className="about-contact" data-aos="fade-up">
        <h3>Get in Touch</h3>

        {sent && <div className="success-message">✅ Message Sent!</div>}

        <form onSubmit={handleSubmit} data-aos="fade-up" data-aos-delay="100">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Your Email Address" required />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Write your message..." rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
