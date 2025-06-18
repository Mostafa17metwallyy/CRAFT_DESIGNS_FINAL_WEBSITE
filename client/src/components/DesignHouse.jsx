import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/DesignHouse.css";


const DesignHouse = () => {
  const [booths, setBooths] = useState([]);
  const [events, setEvents] = useState([]);
  const [interior, setInterior] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
    fetchProjects("booths", setBooths);
    fetchProjects("events", setEvents);
    fetchProjects("interior", setInterior);
  }, []);

  const fetchProjects = async (swiperType, setter) => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/projects?swiper=${swiperType}`
      );
      const data = await res.json();
      setter(data);
    } catch (err) {
      console.error(`Failed to fetch ${swiperType} projects`, err);
    }
  };

  // Extract src="..." from full iframe string stored in DB
  const extractSrcFromIframe = (html) => {
    const match = html.match(/src="([^"]+)"/);
    return match ? match[1] : "";
  };

  const renderSwiper = (projects) => (
    <Swiper
      spaceBetween={5}
      slidesPerView={"auto"}
      navigation
      modules={[Navigation]}
      className="booths-carousel"
      breakpoints={{
        0: { slidesPerView: 1 }, // Mobile: 1 full card
        768: { slidesPerView: 2 }, // Tablet
        1024: { slidesPerView: 3 }, // Desktop
      }}
    >
      {projects.map((project, index) => (
        <SwiperSlide key={index}>
          <div className="booth-card" data-aos="zoom-in">
            <div className="iframe-wrapper">
              <iframe
                src={extractSrcFromIframe(project.iframe)}
                loading="lazy"
                frameBorder="0"
                allow="fullscreen"
                referrerPolicy="no-referrer"
                sandbox="allow-same-origin allow-scripts"
                title={project.title || `Behance Project ${index}`}
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                  overflow: "hidden",
                  transform: "scale(1)",
                  transformOrigin: "top left",
                  scrollbarWidth: "none",
                }}
                scrolling="no"
              />
            </div>
            <div className="booth-info">
              <p className="category">{project.category}</p>
              <h4 className="title">{project.title}</h4>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );

  return (
    <div className="design-house-container">
      {/* === Irregular Animated Blobs === */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>
      <div className="blob blob-4"></div>
      <div className="blob blob-5"></div>      
      <div className="blob blob-6"></div>      
      <div className="blob blob-7"></div>      
      <div className="blob blob-8"></div>      
      <div className="blob blob-9"></div>      


      {/* === Green Blobs === */}
      <div className="blob blob-top-left"></div>
      <div className="blob blob-bottom-right"></div>

      {/* === Page Content === */}
      <section className="design-hero" data-aos="fade-down">
        <h1>Design House</h1>
        <p>Explore our featured Behance projects.</p>
      </section>

      <section className="booths-section">
        <h2 data-aos="fade-up">
          <span className="green-line"></span>BOOTHS
        </h2>
        {renderSwiper(booths)}
      </section>

      <section className="booths-section">
        <h2 data-aos="fade-up">
          <span className="green-line"></span>EVENTS
        </h2>
        {renderSwiper(events)}
      </section>

      <section className="booths-section">
        <h2 data-aos="fade-up">
          <span className="green-line"></span>INTERIOR & EXTERIOR DESIGN
        </h2>
        {renderSwiper(interior)}
      </section>
    </div>
  );
};

export default DesignHouse;
