import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/ProductionHouse.css";

const ProductionHouse = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
    fetch("http://localhost:5000/api/production")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  const renderSwiper = (projects) => (
    <Swiper
      spaceBetween={5}
      slidesPerView={"auto"}
      navigation
      modules={[Navigation]}
      className="production-carousel"
      breakpoints={{
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {projects.map((project, index) => (
        <SwiperSlide key={index}>
          <div className="production-card" data-aos="zoom-in">
            <div className="production-carousel-wrapper">
              <Swiper
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                loop
              >
                {project.images.map((url, i) => (
                  <SwiperSlide key={i}>
                    <img
                      src={`http://localhost:5000${url}`}
                      alt={`Slide ${i + 1}`}
                      className="production-image"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="production-info">
              <h4 className="production-title">{project.title}</h4>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );

  return (
    <div className="production-house-container">
      {/* Animated Blobs */}
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

      {/* Page Content */}
      <section className="production-hero" data-aos="fade-down">
        <h1>Production House</h1>
        <p>Explore our best visual production projects.</p>
      </section>

      <section className="production-section">
        <h2 data-aos="fade-up">
          <span className="green-line"></span>PROJECTS
        </h2>
        {renderSwiper(projects)}
      </section>
    </div>
  );
};

export default ProductionHouse;
