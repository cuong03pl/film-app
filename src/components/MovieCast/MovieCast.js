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
      const res = await getCast(`movie/${id}/credits`)
        .then((res) => {
          setCast(res.cast);
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
      <h3 className="text-white font-bold text-xl mb-8">Diễn Viên</h3>

      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        slidesPerGroupAuto
        loop={true}
        // loopedSlides={10}
        className=" mySwiper !max-w-[845px]"
      >
        {cast
          .filter((item) => item.known_for_department === "Acting")
          .map((item, index) => {
            return (
              <SwiperSlide
                key={index}
                className=" !w-[160px] select-none flex flex-col items-center"
              >
                <Link to={`/person/${item.id}`}>
                  <Images
                    fallBack={image.actingFallBack}
                    src={
                      item.profile_path !== null
                        ? `${config.api.IMG_API}${item.profile_path}`
                        : ""
                    }
                    alt=""
                    className="select-none h-[120px] w-[120px] object-cover rounded-[50%] cursor-pointer border-transparent border-solid border-[1px] hover:border-[#cc7b19f7] "
                  />
                </Link>

                <Link
                  to={""}
                  className="text-[#dbdbdb] text-lg font-semibold text-center"
                >
                  {item.name}
                </Link>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}

export default MovieCast;
