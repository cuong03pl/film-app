import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getMovieDetails } from "~/apiServices/apiServices";
import Button from "~/components/Button/Button";
import Director from "~/components/Director/Director";
import { PlayIcon } from "~/components/Icon/Icon";
import MovieCast from "~/components/MovieCast/MovieCast";
import SimilarFilm from "~/components/SimilarFilm/SimilarFilm";
import config from "~/config";

function MovieDetail() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const res = await getMovieDetails(id);

      setData(res);
    };
    fetchApi();
  }, [id]);
  return (
    <div className="">
      <div className="relative">
        <div
          className="h-[400px] bg-no-repeat bg-center bg-cover"
          style={{
            backgroundImage: `url(${config.api.ORIGINAL_IMG}${data.backdrop_path})`,
          }}
        />
      </div>
      <div className=" bg-[#06121E] w-full px-5 py-8">
        <div className="flex">
          <div className="mr-4">
            <img
              className="min-w-[300px] object-cover mb-8"
              src={`${config.api.IMG_API}${data.poster_path}`}
              alt=""
            />
            <Button watchBtn leftIcon={<PlayIcon className={"h-5 w-5"} />}>
              Xem Phim
            </Button>
          </div>
          <div className="px-4">
            <h2 className="font-semibold text-5xl mb-7 text-[#fff]">
              {data.title}
            </h2>
            {/* <p className="text-2xl text-[#b5b5b5] font-medium mb-9">
              Đứa Trẻ Mồ Côi 2: Nạn Nhân Đầu Tiên (2022)
            </p> */}
            <div className="mb-5">
              <Link
                to={""}
                className="border-[1px] border-solid border-white text-[#b5b5b5] rounded-3xl px-2 py-2 cursor-pointer hover:bg-[#007ACC] hover:text-white"
              >
                Hành Động
              </Link>
            </div>
            <div className="flex items-center mb-5">
              <div className="font-bold text-black bg-[#f5c518] py-1 px-2  flex justify-center items-center rounded-xl">
                IMDb
              </div>
              <span className="text-[#a2a2be] ml-2  font-bold">
                {data.vote_average}
              </span>
            </div>
            <div>
              <Director id={id} />
              <div className="flex ">
                <span className="w-[120px] block text-[#7a7a7a] ">
                  QUỐC GIA
                </span>
                <span className="font-bold hover:underline cursor-pointer text-[#dbdbdb]">
                  {/* {data.production_countries[0].iso_3166_1} */}
                </span>
              </div>
              <div className="flex ">
                <span className="w-[120px] block text-[#7a7a7a] ">
                  kHỞI CHIẾU
                </span>
                <span className="font-bold  cursor-pointer text-[#dbdbdb]">
                  {data.release_date}
                </span>
              </div>
            </div>

            <div className="text-[#b5b5b5] mt-6">{data.overview}</div>
          </div>
        </div>
        {/* dien vien */}
        <MovieCast id={id} />
        {/* phim tuong tu */}
        <SimilarFilm id={id} />
        {/* cmt */}
      </div>
    </div>
  );
}

export default MovieDetail;
