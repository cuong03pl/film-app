import { Link } from "react-router-dom";
import config from "~/config";

function FavoriteItem({ data }) {
  return (
    <div className="flex mt-4">
      <img
        className="w-[80px] h-[120px] rounded-xl mr-3"
        src={`${config.api.IMG_API}${data.poster_path}`}
        alt=""
      />
      <div className="flex flex-col justify-between">
        <div>
          <Link to={`/watch/${data.id}`} className="font-semibold mt-1 block">
            {data.title}
          </Link>
          {/* <span className="text-[#a2a2be]"> Action, Horror</span> */}
        </div>
        <div className="flex items-center">
          <div className="font-bold text-black bg-[#f5c518] py-1 px-2  flex justify-center items-center rounded-xl">
            IMDb
          </div>
          <span className="text-[#a2a2be] ml-2  font-bold">
            {data.vote_average}
          </span>
        </div>
      </div>
    </div>
  );
}

export default FavoriteItem;
