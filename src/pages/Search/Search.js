import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getSearch, search } from "~/apiServices/apiServices";
import RateFilm from "~/components/RateFilm/RateFilm";
import config from "~/config";

function Search() {
  const [movies, setMovies] = useState([]);
  const { q } = useParams();

  useEffect(() => {
    const fetchApi = async () => {
      const res = await search(q);
      setMovies(res);
    };
    fetchApi();
  }, [q]);
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
          <p className="text-center font-semibold text-lg">{item.title}</p>
          <RateFilm data={item.vote_average} />
        </Link>
      );
    });
  };
  return (
    <div className="w-full px-5">
      <h3 className="text-xl font-semibold mt-3">Kết quả của "{q}"</h3>

      <div className="flex flex-wrap  w-full mt-6 ">{renderMovies()}</div>
    </div>
  );
}

export default Search;
