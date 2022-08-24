import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { StarIcon } from "../Icon/Icon";

function SimilarFilm() {
  return (
    <div className="mt-7">
      <h3 className="text-white font-bold text-xl mb-8">{"Phim tương tự"}</h3>
      <Swiper
        slidesPerView="auto"
        spaceBetween={30}
        slidesPerGroupAuto
        loop={true}
        loopedSlides={5}
        className="mySwiper"
      >
        <SwiperSlide className="!w-[175px] select-none">
          <Link
            to={`/movie/123`}
            className="w-[175px] flex flex-col items-center mt-6 overflow-hidden relative hover:scale-105 hover:brightness-110 transition duration-300"
          >
            <img
              className="object-cover rounded-xl"
              src={`https://image.tmdb.org/t/p/w342/wSqAXL1EHVJ3MOnJzMhUngc8gFs.jpg`}
              alt=""
            />
            <p className="text-[#dbdbdb] text-lg font-semibold text-center max-h-[56px] line-clamp-2">
              Phim
            </p>
            <div className="absolute right-5 flex items-center px-2 top-2  rounded-2xl bg-[#5985FF] text-[white]">
              <span className="font-semibold mr-1">8</span>
              <StarIcon className={"h-4 w-4"} />
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SimilarFilm;
