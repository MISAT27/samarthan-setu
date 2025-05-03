import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Carousel.css"

import {Autoplay, Navigation, Pagination } from "swiper/modules";

export default function Carousel() {
  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className="relative h-124 bg-cover bg-center"
            style={{
              backgroundImage:
                `url(/assets/home.webp)`,
            }}
          >
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
              <div>
                <h1 className="text-4xl md:text-6xl">
                  Welcome to{" "}
                  <span className="font-bold">Samarthan Setu</span>
                </h1>
                <p className="mt-4 text-lg md:text-2xl">
                  A Tech Driven NGO bridging between Donors and Needy
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div
            className="relative h-124 bg-cover bg-center"
            style={{
              backgroundImage:
                `url(/assets/home2.jpg)`,
            }}
          >
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
              <div>
                <h1 className="text-4xl md:text-6xl">
                Join us in making a  {" "}
                  <span className="font-bold">Difference</span>
                </h1>
                <p className="mt-4 text-lg md:text-2xl">
                Learn how you can contribute to our mission
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
}
