import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMovieDetails } from "~/apiServices/apiServices";
import PropTypes from "prop-types";
import SkeletonItem from "../Skeleton/Skeleton";
import { Fragment } from "react";

function Genres({ id, isLoading }) {
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      await getMovieDetails(id)
        .then((data) => {
          setGenres(data.genres);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchApi();
  }, [id]);
  return (
    <div className="mb-5 flex">
      {genres.map((genre = [], index) => {
        return (
          <Fragment key={index}>
            {isLoading ? (
              <SkeletonItem
                className={
                  " min-w-[100px] h-[40px] block rounded-3xl mt-[12px]"
                }
              />
            ) : (
              <Link
                key={index}
                to={`/genres/${genre.id}/${genre.name}`}
                className="border-[1px] mr-[10px] flex items-center justify-center border-solid border-white text-[#b5b5b5] rounded-3xl px-2 py-2 cursor-pointer hover:bg-[#007ACC] hover:text-white"
              >
                {genre.name}
              </Link>
            )}
          </Fragment>
        );
      })}
    </div>
  );
}
Genres.propsType = {
  id: PropTypes.string.isRequired,
};
export default Genres;
