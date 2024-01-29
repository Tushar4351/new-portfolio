import AboutItem from "../../data/aboutData";

import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "./About.css"
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const AboutCarousel = () => {
  return (
    <>
    <Swiper
        modules={[Virtual, Navigation, Pagination]}
        slidesPerView={2} // Set the number of slides per view
        centeredSlides={true}
        spaceBetween={30}
        navigation={true}
        virtual
        className="w-full mx-auto h-80"
      >
        {Object.values(AboutItem).map((aboutItem, index) => (
          <SwiperSlide
            key={index}
            virtualIndex={index}
            className="rounded-full text-center text-18 bg-Blanc flex justify-center items-center"
          >
             <div> 
               <h1>{aboutItem.title}</h1>
               <h4>{aboutItem.description}</h4>
             </div>
           </SwiperSlide>
       ))}
     </Swiper>
    </>
  );
};

export default AboutCarousel;


