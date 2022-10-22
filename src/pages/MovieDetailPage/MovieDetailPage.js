import { useEffect, useLayoutEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getMovieDetails } from "~/apiServices/apiServices";
import Button from "~/components/Button/Button";
import Director from "~/components/Director/Director";
import FilmDetails from "~/components/FilmDetails/FilmDetails";
import Genres from "~/components/Genres/Genres";
import { PlayIcon } from "~/components/Icon/Icon";
import MovieCast from "~/components/MovieCast/MovieCast";
import SimilarFilm from "~/components/SimilarFilm/SimilarFilm";
import config from "~/config";

function MovieDetail() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    if (data.title) {
      document.title = `${data.title}`;
    } else {
      document.title = "CFilm";
    }
    return () => {};
  }, [id, data.title]);
  useEffect(() => {
    const fetchApi = async () => {
      await getMovieDetails(id)
        .then((res) => {
          setData(res);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchApi();

    return () => {};
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
            <Button
              watchBtn
              to={`/watch/${data.id}`}
              leftIcon={<PlayIcon className={"h-5 w-5"} />}
            >
              Xem Phim
            </Button>
          </div>
          <FilmDetails id={id} movieDetailPage />
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
