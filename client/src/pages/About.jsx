import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/About.css";

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <div>
      {/* About Us Title */}
      <section className="about-title-section" data-aos="fade-down">
        <h1 className="about-title">About Us</h1>
        <p className="about-subtitle">
          Discover who we are and what drives our vision forward.
        </p>
      </section>

      {/* Who We Are Section */}
      <section className="who-we-are-section" data-aos="fade-up">
        <div className="who-we-are-container">
          <div className="who-box" data-aos="fade-right">
            <h2>Who We Are</h2>
            <p>
              Craft community is always looking forward to connect, inspire, and
              improve businesses through a collaborative approach that merges
              creative thinking with execution power.
            </p>
          </div>
          <div className="who-box" data-aos="fade-left" data-aos-delay="150">
            <h3>Our Approach</h3>
            <p>
              We connect, inspire, and improve businesses through collaboration.
            </p>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Strategy Section */}
      <section className="vms-section" data-aos="fade-in">
        <h2 className="vms-title" data-aos="fade-up">
          Our Vision, Mission & Strategy
        </h2>
        <p className="vms-subtitle" data-aos="fade-up" data-aos-delay="100">
          Guiding Principles
        </p>

        <div className="vms-cards">
          <div className="vms-card" data-aos="zoom-in">
            <div className="emoji" role="img" aria-label="Vision">
              ⭐
            </div>
            <h4>Vision</h4>
            <p className="sub">Success is a moving target.</p>
            <p className="main">
              We help you move with it by innovating and adapting.
            </p>
          </div>

          <div className="vms-card" data-aos="zoom-in" data-aos-delay="200">
            <div className="emoji" role="img" aria-label="Mission">
              🎯
            </div>
            <h4>Mission</h4>
            <p className="sub">Your vision is our mission.</p>
            <p className="main">We shape it into reality.</p>
          </div>

          <div className="vms-card" data-aos="zoom-in" data-aos-delay="400">
            <div className="emoji" role="img" aria-label="Strategy">
              🛠
            </div>
            <h4>Strategy</h4>
            <p className="sub">Tailored Solutions.</p>
            <p className="main">
              No off-the-shelf solutions — only thoughtful execution.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
