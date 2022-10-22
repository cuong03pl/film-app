import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { search } from "~/apiServices/apiServices";
import Paginate from "~/components/Paginate/Paginate";

import SearchResult from "~/components/SearchResult/SearchResult";

function Search() {
  const [movies, setMovies] = useState([]);
  const { q } = useParams();
  const [pages, setPages] = useState(1);
  const [page, setPage] = useState();
  useEffect(() => {
    const fetchApi = async () => {
      await search(q, page)
        .then((res) => {
          setMovies(res.results);
          setPages(res.total_pages);

          {
            res.total_pages > 500 && setPages(500);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchApi(movies);
  }, [q, page]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);
  useEffect(() => {
    if (q) {
      document.title = `Kết quả của "${q}"`;
    } else {
      document.title = "CFilm";
    }
    return () => {};
  }, [q]);
  const handlePageClick = (event) => {
    setPage(event.selected + 1);
  };
  const renderMovies = () => {
    return <SearchResult data={movies} />;
  };
  return (
    <div className="w-full px-5">
      <h3 className="text-xl font-semibold mt-3 text-textPrimary">
        Kết quả của "{q}"
      </h3>

      <div className="flex flex-wrap  w-full mt-6 ">{renderMovies()}</div>
      <Paginate pageCount={pages} handlePageClick={handlePageClick} />
    </div>
  );
}

export default Search;
