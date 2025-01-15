import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "../Carousel/Carousel.css";

const Carousel = () => {
  return (
    <div className="flex justify-center mt-16">
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        freeMode={true}
        centeredSlides={true}
        loop={true}
        pagination={{
          clickable: false,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper w-[1330px] h-[75px]"
      >
        <SwiperSlide>
          <div className="customTransition overflow-hidden min-w-fit relative flex justify-center lg:justify-start">
            <img
              className="img-1"
              src="https://i.ibb.co.com/WyQ4bnX/client-1.png"
              alt=""
            />
            <img
              className="img-2"
              src="https://i.ibb.co.com/4gyJkQL/client-1h.png"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="customTransition overflow-hidden min-w-fit relative flex justify-center lg:justify-start">
            <img
              className="img-1"
              src="https://i.ibb.co.com/NTyBw2k/client-2.png"
              alt=""
            />
            <img
              className="img-2"
              src="https://i.ibb.co.com/Dgg0Ckd/client-2h.png"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="customTransition overflow-hidden min-w-fit relative flex justify-center lg:justify-start">
            <img
              className="img-1"
              src="https://i.ibb.co.com/g4MB7f5/client-3.png"
              alt=""
            />
            <img
              className="img-2"
              src="https://i.ibb.co.com/806r3gn/client-3h.png"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="customTransition overflow-hidden min-w-fit relative flex justify-center lg:justify-start">
            <img
              className="img-1"
              src="https://i.ibb.co.com/7rZLfFn/client-4.png"
              alt=""
            />
            <img
              className="img-2"
              src="https://i.ibb.co.com/b680jt1/client-4h.png"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="customTransition overflow-hidden min-w-fit relative flex justify-center lg:justify-start">
            <img
              className="img-1"
              src="https://i.ibb.co.com/n7BP3dn/client-5.png"
              alt=""
            />
            <img
              className="img-2"
              src="https://i.ibb.co.com/P55NfLv/client-5h.png"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="customTransition overflow-hidden min-w-fit relative flex justify-center lg:justify-start">
            <img
              className="img-1"
              src="https://i.ibb.co.com/DpvSRL7/client-6.png"
              alt=""
            />
            <img
              className="img-2"
              src="https://i.ibb.co.com/25Y3gYt/client-6h.png"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="customTransition overflow-hidden min-w-fit relative flex justify-center lg:justify-start">
            <img
              className="img-1"
              src="https://i.ibb.co.com/jkw4Y31/client-7.png"
              alt=""
            />
            <img
              className="img-2"
              src="https://i.ibb.co.com/L6SsrdZ/client-7h.png"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="customTransition overflow-hidden min-w-fit relative flex justify-center lg:justify-start">
            <img
              className="img-1"
              src="https://i.ibb.co.com/BrtLJTs/client-8.png"
              alt=""
            />
            <img
              className="img-2"
              src="https://i.ibb.co.com/cDk4HRx/client-8h.png"
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
