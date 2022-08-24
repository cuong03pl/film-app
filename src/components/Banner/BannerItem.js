import { useState } from "react";
import { Link } from "react-router-dom";
import config from "~/config";

function BannerItem({ data }) {
  return (
    <Link
      to={`/movie/${data.id}`}
      className="relative w-full flex flex-col items-center h-[400px] "
    >
      <img
        className="h-full w-full "
        src={`${config.api.IMG_API}${data.backdrop_path}`}
        alt=""
      />
      <div className="bg-gradient-to-r from-black to-transparent absolute top-0 right-0 left-0 bottom-0"></div>
      <div className="absolute max-w-[50%] left-0 flex flex-col justify-center h-full pl-12">
        <h3 className="text-[#5078FC] font-bold text-[30px] mb-4">
          {data.title}
        </h3>
        <p className="text-white opacity-80 mb-2">
          Ngày phát hành: {data.release_date}{" "}
        </p>
        <p className="text-white opacity-80 h-[120px] text-ellipsis  line-clamp-5">
          {data.overview}
        </p>
      </div>
    </Link>
  );
}

export default BannerItem;
