import React from "react";
import "../styles/components/Event.css";

// Import Swiper React components
import { Pagination } from "swiper";

// import Swiper core and required modules
import eventIcon from "../assets/img/event.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Event = () => {
  return (
    <section id="carousel">
      <div className="container-fluid py-3 contain-event">
        <div className="container contain-event-card py-3">
          <h4>UPCOMING EVENTS</h4>
          <div className="bars-2"></div>
          <Swiper
            modules={[Pagination]}
            className="swiper mySwiper mt-3"
            pagination={{ clickable: true }}
            spaceBetween={50}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide className="card p-2 swiper-slide text-center dayEnglish">
              <div>
                <img
                  src={eventIcon}
                  className="card-img-top dayEnglish-img"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title title-21day-carousel">
                    <i className="fa-solid fa-calendar-days"></i> : Coming Soon
                    (August)
                  </h5>
                  <a href="#" className="btn btn-dark btn-sm fw-bold more-info">
                    More Info
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="card p-2 swiper-slide text-center comingSoon">
              <div className="card-body">
                <h3 className="card-title comingSoon-txt">COMING SOON</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide className="card p-2 swiper-slide text-center comingSoon">
              <div className="card-body">
                <h3 className="card-title comingSoon-txt">COMING SOON</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide className="card p-2 swiper-slide text-center comingSoon">
              <div className="card-body">
                <h3 className="card-title comingSoon-txt">COMING SOON</h3>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Event;
