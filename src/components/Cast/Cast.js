import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { getCast } from "~/apiServices/apiServices";
import "swiper/css";
import "swiper/css/pagination";
import PropTypes from "prop-types";
import CastItem from "./CastItem";

function Cast({ id }) {
  const [cast, setCast] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const res = await getCast(`movie/${id}/credits`)
        .then((res) => {
          setCast(res?.cast);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchApi();

    return () => {};
  }, [id]);
  return (
    <div className="mt-10">
      <h3 className="text-white font-bold text-xl mb-8">Diễn viên</h3>

      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        slidesPerGroupAuto
        loop={true}
        // loopedSlides={10}
        className=" mySwiper !max-w-[845px]"
      >
        {cast
          .filter((item) => item?.known_for_department === "Acting")
          .map((item, index) => {
            return (
              <SwiperSlide
                key={index}
                className=" !w-[160px] select-none flex flex-col items-center"
              >
                <CastItem item={item} />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}
Cast.propsType = {
  id: PropTypes.string,
};
export default Cast;
