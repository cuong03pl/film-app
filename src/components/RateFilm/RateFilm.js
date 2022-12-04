import { StarIcon } from "../Icon/Icon";
import PropTypes from "prop-types";

function RateFilm({ data, sizeIcon, small }) {
  const rate = String(data).slice(0, 3);
  const smallSize =
    "absolute right-2 flex items-center px-1 top-2  rounded-2xl bg-[#5985FF] text-[white] text-[14px]";
  const bigSize =
    "absolute right-4 flex items-center px-2 top-2  rounded-2xl bg-[#5985FF] text-[white]";
  return (
    <div className={small ? smallSize : bigSize}>
      <span className="font-semibold mr-1">{rate}</span>
      <StarIcon className={sizeIcon} />
    </div>
  );
}
RateFilm.propsType = {
  data: PropTypes.number,
  sizeIcon: PropTypes.string,
  small: PropTypes.bool,
};
export default RateFilm;
