import { Link } from "react-router-dom";
import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

function MovieCast() {
  return (
    <div className="mt-7 ">
      <h3 className="text-white font-bold text-xl mb-8">Diễn Viên</h3>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        freeMode={true}
        modules={[FreeMode]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex flex-col items-center">
            <img
              src="https://image.tmdb.org/t/p/w138_and_h175_face/eW73DbmKQrqb6xDC52oMbVehw6G.jpg"
              alt=""
              className=" h-[120px] w-[120px] object-cover rounded-[50%] cursor-pointer border-transparent border-solid border-[1px] hover:border-[#cc7b19f7] "
            />
            <Link
              to={""}
              className="text-[#dbdbdb] text-lg font-semibold text-center"
            >
              Cuong hk
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default MovieCast;
