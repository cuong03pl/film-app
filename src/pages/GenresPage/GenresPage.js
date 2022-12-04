import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getGenresFilm } from "~/apiServices/apiServices";
import Paginate from "~/components/Paginate/Paginate";
import SearchResult from "~/components/SearchResult/SearchResult";

function GenresPage() {
  const [movies, setMovies] = useState([]);
  const { id } = useParams();
  const { name } = useParams();
  const [pages, setPages] = useState(1);
  const [page, setPage] = useState();
  useEffect(() => {
    const fetchApi = async () => {
      await getGenresFilm(id, page)
        .then((res) => {
          setMovies(res.results);
          {
            res.total_pages > 500 && setPages(500);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchApi();
  }, [id, page]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);
  useEffect(() => {
    document.title = `Film ${name}`;
  });

  const handlePageClick = (event = 0) => {
    setPage(event.selected + 1);
  };
  return (
    <>
      <div className="w-full px-5">
        <div className="flex flex-wrap  w-full mt-6 ">
          {<SearchResult data={movies} />}
        </div>
        <Paginate pageCount={pages} handlePageClick={handlePageClick} />
      </div>
    </>
  );
}

export default GenresPage;
