import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getGenresFilm } from "~/apiServices/apiServices";
import Paginate from "~/components/Paginate/Paginate";
import RateFilm from "~/components/RateFilm/RateFilm";
import config from "~/config";

function GenresPage() {
  const [movies, setMovies] = useState([]);
  const { id } = useParams();
  const [pages, setPages] = useState(1);
  const [page, setPage] = useState();
  useEffect(() => {
    const fetchApi = async () => {
      const res = await getGenresFilm(id, page);
      setMovies(res.results);
      {
        res.total_pages > 500 && setPages(500);
      }
    };
    fetchApi();
  }, [id, page]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);
  const renderMovies = () => {
    return movies.map((item, index) => {
      return (
        <Link
          key={index}
          to={`/movie/${item.id}`}
          className="max-w-[25%] w-[25%] flex flex-col items-center mt-6 overflow-hidden relative hover:scale-105 hover:brightness-110 transition duration-300"
        >
          <img
            className="w-[180px] h-[270px] rounded-xl"
            src={`${config.api.IMG_API}${item.poster_path}`}
            alt=""
          />
          <p className="text-center font-semibold text-lg h-[56px] text-textPrimary text-ellipsis  line-clamp-2">
            {item.title}
          </p>
          <RateFilm data={item.vote_average} />
        </Link>
      );
    });
  };

  const handlePageClick = (event) => {
    setPage(event.selected + 1);
  };
  return (
    <>
      <div className="w-full px-5">
        <div className="flex flex-wrap  w-full mt-6 ">{renderMovies()}</div>
        <Paginate pageCount={pages} handlePageClick={handlePageClick} />
      </div>
    </>
  );
}

export default GenresPage;
