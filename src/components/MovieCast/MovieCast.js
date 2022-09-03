import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import config from "~/config";
import Images from "../Images/Images";
import image from "~/assets/img/img";
import { getCast } from "~/apiServices/apiServices";
import "swiper/css";
import "swiper/css/pagination";

function MovieCast({ id }) {
  const [cast, setCast] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const res = await getCast(`movie/${id}/credits`);
      setCast(
        res.cast.filter((item) => item.known_for_department === "Acting")
      );
    };
    fetchApi();
  }, [id]);

  return (
    <div className="mt-7">
      <h3 className="text-white font-bold text-xl mb-8">Diễn Viên</h3>

      <Swiper
        slidesPerView="auto"
        spaceBetween={10}
        slidesPerGroupAuto
        loop={true}
        loopedSlides={5}
        className=" mySwiper !max-w-[845px]"
      >
        {cast.map((item, index) => {
          return item.profile_path !== null ? (
            <SwiperSlide
              key={index}
              className=" !w-[160px] select-none flex flex-col items-center"
            >
              <Images
                fallBack={image.actingFallBack}
                src={`${config.api.IMG_API}${item.profile_path}`}
                alt=""
                className="select-none h-[120px] w-[120px] object-cover rounded-[50%] cursor-pointer border-transparent border-solid border-[1px] hover:border-[#cc7b19f7] "
              />
              <Link
                to={""}
                className="text-[#dbdbdb] text-lg font-semibold text-center"
              >
                {item.name}
              </Link>
            </SwiperSlide>
          ) : (
            ""
          );
        })}
      </Swiper>
    </div>
  );
}

export default MovieCast;
