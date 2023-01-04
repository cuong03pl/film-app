import { Link } from "react-router-dom";
import config from "~/config";
import PropTypes from "prop-types";
import Images from "~/components/Images/Images";
import image from "~/assets/img/img";

function SearchItem({ item, onHidden }) {
  return (
    <Link
      onClick={onHidden}
      to={`/movie/${item?.id}`}
      className={"flex hover:bg-[#16182308] py-2 px-3 cursor-pointer"}
    >
      <Images
        fallBack={`${image.similarFilmFallBack}`}
        className={"h-[36px] w-[36px] rounded-[50%]"}
        alt=""
        src={
          item?.poster_path && `${config.api.ORIGINAL_IMG}${item?.poster_path}`
        }
      />
      <div className={"flex items-center ml-3"}>
        <span>{item?.title}</span>
      </div>
    </Link>
  );
}
SearchItem.propsType = {
  item: PropTypes.object,
  onHidden: PropTypes.func,
};
export default SearchItem;
