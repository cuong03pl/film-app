import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FreeMode, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import config from "~/config";
import { getFilmHomePage } from "~/utils/request";
import { StarIcon } from "../Icon/Icon";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

function MovieList({ path, title }) {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const res = await getFilmHomePage(`movie/${path}`);
      setMovieList(res);
    };
    fetchApi();
  }, [path]);
  return (
    <div>
      <h3 className="text-xl font-bold ">{title}</h3>
      <Swiper
        slidesPerView="auto"
        spaceBetween={30}
        slidesPerGroupAuto
        loop={true}
        loopedSlides={5}
        navigation={true}
        modules={[Navigation]}
        className="swiper swiper-initialized swiper-horizontal swiper-pointer-events absolute   h-full rounded-2xl  mySwiper"
      >
        {movieList.map((item, index) => {
          return (
            <SwiperSlide className="!w-[175px] select-none" key={index}>
              <Link
                to={`/movie/${item.id}`}
                className="w-[175px] flex flex-col items-center mt-6 overflow-hidden relative hover:scale-105 hover:brightness-110 transition duration-300"
              >
                <img
                  className="object-cover rounded-xl"
                  src={`${config.api.IMG_API}${item.poster_path}`}
                  alt=""
                />
                <p className="text-center font-semibold text-lg max-h-[56px] line-clamp-2">
                  {item.title}
                </p>
                <div className="absolute right-5 flex items-center px-2 top-2  rounded-2xl bg-[#5985FF] text-[white]">
                  <span className="font-semibold mr-1">
                    {item.vote_average}
                  </span>
                  <StarIcon className={"h-4 w-4"} />
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default MovieList;
