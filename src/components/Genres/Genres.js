import { Link } from "react-router-dom";

function Genres({ genresList }) {
  return (
    <div className="mb-5 flex">
      {genresList.map((genre = [], index) => {
        return (
          <Link
            key={index}
            to={`/genres/${genre.id}`}
            className="border-[1px] mr-[10px] flex items-center justify-center border-solid border-white text-[#b5b5b5] rounded-3xl px-2 py-2 cursor-pointer hover:bg-[#007ACC] hover:text-white"
          >
            {genre.name}
          </Link>
        );
      })}
    </div>
  );
}

export default Genres;
