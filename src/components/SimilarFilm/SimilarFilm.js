import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { getSimilarFilm } from "~/apiServices/apiServices";
import image from "~/assets/img/img";
import config from "~/config";
import Images from "../Images/Images";
import RateFilm from "../RateFilm/RateFilm";

function SimilarFilm({ id }) {
  const [similar, setSimilar] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      await getSimilarFilm(id)
        .then((res) => {
          setSimilar(res);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchApi();
    return () => {};
  }, [id]);
  return (
    <div className="mt-7">
      <h3 className="text-white font-bold text-xl mb-8">{"Phim tương tự"}</h3>
      <Swiper
        slidesPerView="auto"
        spaceBetween={30}
        slidesPerGroupAuto
        loop={true}
        loopedSlides={20}
        className="   mySwiper !max-w-[845px]"
      >
        {similar.map((item, index) => {
          return (
            <SwiperSlide key={index} className="!w-[175px] select-none">
              <Link
                to={`/movie/${item.id}`}
                className="w-[175px] flex flex-col items-center mt-6 overflow-hidden relative hover:scale-105 hover:brightness-110 transition duration-300"
              >
                <Images
                  fallBack={image.similarFilmFallBack}
                  className="object-cover rounded-xl"
                  src={`${config.api.IMG_API}${item.backdrop_path}`}
                  alt=""
                />
                <p className="text-[#dbdbdb] text-lg font-semibold text-center max-h-[56px] line-clamp-2">
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

export default SimilarFilm;
