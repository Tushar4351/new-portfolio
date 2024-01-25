import {useState } from "react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const AboutCarousel = () => {

  // Create array with 500 slides
  const [slides, setSlides] = useState(
    Array.from({ length: 500 }).map((_, index) => `Slide ${index + 1}`)
  );

  return (
    <>
      <Swiper
        modules={[Virtual, Navigation, Pagination]}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        navigation={true}
        virtual
        className="w-full mx-auto h-80 swiper"
      >
        {slides.map(
          (
            slideContent,
            index: number // Explicitly type index
          ) => (
            <SwiperSlide
              key={slideContent}
              virtualIndex={index}
              className="rounded-full text-center text-18 bg-Blanc flex justify-center items-center swiper-slide"
            >
              {slideContent}
            </SwiperSlide>
          )
        )}
      </Swiper>
    </>
  );
};

export default AboutCarousel;
