import { useEffect, useState } from "react";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { getFavorite } from "~/utils/request";
import BannerItem from "./BannerItem";
import "swiper/css";
import "swiper/css/navigation";

function Banner() {
  const [bannerList, setBannerList] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const res = await getFavorite();
      setBannerList(res);
    };
    fetchApi();
  }, []);

  return (
    <Swiper
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation={true}
      modules={[Navigation, Autoplay]}
      className="absolute top-0 left-0 w-full h-full  rounded-2xl overflow-x-hidden   mySwiper"
    >
      {bannerList.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <BannerItem data={item} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default Banner;
