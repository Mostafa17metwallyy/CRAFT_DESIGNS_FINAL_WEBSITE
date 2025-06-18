import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/Home.css";
import CountUp from "react-countup";
import { FaUsers, FaShapes, FaStoreAlt, FaCouch } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
    AOS.refresh();
  }, []);

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      const height = document.body.scrollHeight - window.innerHeight;
      const progressBar = document.getElementById("progress");
      if (progressBar) {
        progressBar.style.width = `${(scroll / height) * 100}%`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const { ref: statsRef, inView } = useInView({ triggerOnce: false });

  return (
    <div className="home-container">
      {/* BLOBS */}
      <div className="blobs-wrapper">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
        <div className="blob blob-4"></div>
        <div className="blob blob-5"></div>
        <div className="blob blob-6"></div>
        <div className="blob blob-7"></div>
        <div className="blob blob-8"></div>
        <div className="blob blob-9"></div>
        <div className="blob blob-10"></div>
      </div>

      {/* PROGRESS BAR */}
      <div id="progress-bar">
        <div id="progress"></div>
      </div>

      {/* HERO SECTION */}
      <section className="hero-section" data-aos="fade-in">
        <img
          src="/assets/videos/Craft_video_1.gif"
          alt="Craft video"
          className="hero-video"
        />
        <div className="hero-overlay">
          <div className="hero-content" data-aos="zoom-in">
            <h1>
              We Are <span className="craft-highlight">Craft</span>
            </h1>
            <p>Hyper-collaboratively minded execution</p>
            <div className="hero-buttons">
              <button className="learn-btn" onClick={() => navigate("/about")}>
                Learn More
              </button>
              <button className="join-btn" onClick={() => navigate("/contact")}>
                Join Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section
        className="home-who-we-are-section"
        data-aos="fade-up"
        ref={statsRef}
      >
        <div className="home-who-we-are-container">
          <FaUsers size={40} color="#169976" />
          <h2>Who We Are</h2>
          <p>
            Craft is more than just a company; we are a dynamic collective of
            passionate designers, insightful strategists, and seasoned
            production experts, all deeply committed to achieving excellence in
            every project.
          </p>
          <button
            className="home-learn-more-btn"
            onClick={() => navigate("/about")}
          >
            Learn More
          </button>

          <div className="home-stats">
            <div className="home-stat-box">
              <div className="countup-number">
                {inView && <CountUp end={10} duration={2} />}
              </div>
              <span>Years of Experience</span>
            </div>
            <div className="home-stat-box">
              <div className="countup-number">
                {inView && <CountUp end={500} duration={2} />}
              </div>
              <span>Projects Completed</span>
            </div>
            <div className="home-stat-box">
              <div className="countup-number">
                {inView && <CountUp end={2} duration={2} />}
              </div>
              <span>Office Locations</span>
            </div>
            <div className="home-stat-box">
              <div className="countup-number">
                {inView && <CountUp end={98} duration={2} />}
              </div>
              <span>Client Satisfaction (%)</span>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNER BANNER */}
      <section className="partner-banner-section" data-aos="fade-up">
        <h2 className="partner-heading">Our Partners</h2>
        <div className="partner-banner-track">
          {[...Array(2)].map((_, i) => (
            <div className="partner-banner-row" key={i}>
              <img
                src="/assets/partners/al-mohtada-logo.png"
                alt="Al Mohtada"
              />
              <img src="/assets/partners/Bio-me-logo.png" alt="Bio Me" />
              <img
                src="/assets/partners/embassy_of_the_kingdom_of_t.png"
                alt="Embassy"
              />
              <img src="/assets/partners/Fridal-logo.png" alt="Fridal" />
              <img
                src="/assets/partners/Hi-Tec_Oils_Logo_PNG.png"
                alt="Hi-Tec Oils"
              />
              <img src="/assets/partners/HI-TECH-logo.png" alt="HI-TECH" />
              <img src="/assets/partners/kamena.png" alt="Kamena" />
              <img src="/assets/partners/Logo-Cofina.png" alt="Cofina" />
              <img src="/assets/partners/LOGO-Detetco.png" alt="Deteco" />
              <img src="/assets/partners/logo-gem.png" alt="GEM Egypt" />
              <img src="/assets/partners/logo-royalpack.png" alt="Royal Pack" />
              <img
                src="/assets/partners/orbit logo.svg"
                alt="Orbit Developments"
              />
              <img
                src="/assets/partners/riyad-food- logo.png"
                alt="Riyadh Food"
              />
              <img
                src="/assets/partners/russian-pavilion.jpeg"
                alt="Russian Pavilion"
              />
            </div>
          ))}
        </div>
      </section>

      {/* VMS SECTION */}
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

      {/* DESIGN HOUSE SECTION */}
      <section className="home-design-house" data-aos="fade-up">
        <div className="home-design-container">
          <FaShapes size={40} className="home-design-icon" />
          <h2>Design House</h2>
          <p>
            Explore our diverse creative services — from exhibitions to interior
            innovation.
          </p>
          <button
            className="home-learn-more-btn"
            onClick={() => navigate("/design")}
          >
            View Our Work
          </button>

          <div className="home-design-cards">
            <div className="home-design-card">
              <div className="icon-wrap">
                <FaShapes />
              </div>
              <span>Exhibitions</span>
            </div>
            <div className="home-design-card">
              <div className="icon-wrap">
                <FaStoreAlt />
              </div>
              <span>Stand Display POS</span>
            </div>
            <div className="home-design-card">
              <div className="icon-wrap">
                <FaCouch />
              </div>
              <span>Interior Design</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
