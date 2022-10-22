import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import config from "~/config";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import RateFilm from "../RateFilm/RateFilm";
import { getFilmHomePage } from "~/apiServices/apiServices";

function MovieList({ path, title }) {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      await getFilmHomePage(`movie/${path}`)
        .then((res) => {
          setMovieList(res);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchApi();
  }, [path]);
  return (
    <div>
      <h3 className="text-xl font-bold text-textPrimary">{title}</h3>
      <Swiper
        slidesPerView="auto"
        spaceBetween={30}
        slidesPerGroupAuto
        loop={true}
        loopedSlides={5}
        className=" absolute   h-full rounded-2xl  mySwiper"
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
                <p className="text-center font-semibold text-lg max-h-[56px] line-clamp-2 text-textPrimary">
                  {item.title}
                </p>
                <RateFilm data={item.vote_average} />
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default MovieList;
