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
          item?.poster_path
            ? `${config.api.ORIGINAL_IMG}${item?.poster_path}`
            : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQoAAAC+CAMAAAD6ObEsAAAAflBMVEX////29vY0NDTo6OguLi7JyclLS0u4uLilpaVBQUHx8fEnJycQEBD8/Pzs7OwyMjKGhobf399ra2sAAAB0dHTPz89iYmIkJCQ5OTl+fn6oqKizs7OSkpKLi4tXV1fd3d1HR0dbW1sODg6RkZFwcHDAwMCdnZ0bGxvMzMwXFxclIZ6zAAAEZUlEQVR4nO3caXOqPACG4RhSFDFhEcK+uED1///BNwkW7XqmZ+ZV5+S5PnQcKAi3bFosIQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPB4fP2tRy/anfGkd79T80cv3V05jDL/KzSnLLSqhUPpOCw/G3bWtXAoO305ImFh47PCohYqxcuXIxK/IQWzqcUPKULCQ5u2ix+3CkJqdby47wI9zvcpAjdW8rxf3HmRHuXbFEefaTR3rU/RhVojKVJclAwpLlZI8QYpZkgxQ4oZUsysT3F932FnCh7GYnoUtYe38XamUA9b06Lz2PzGw84UpGKmRecFdB5maQrVImhFlAf5dZCtKXSLnRvQm4/4rE1BlpRSL70ZYG+KLs/zXtwMsDZF6lEvp65zHWJritQLgm7wAzeaB1maQpWg6jjxroWdKcRUYmph9yXWoqXd9Gjw47d3IXamIHxe6cX8fszSFF9BihlSzJBihhQzpJghxQwpZkgxsypFMPDFt7hNKYLc+5E991eInP3M31lzX1r3xf2r7zh/ngcAAAAAAAAAAMDfWE+3lgnxYTgXv/ykkgvjz1OJZPzdnO+l2JoFc/MPH0yettXvZnTanvf7/Xb44y8KWvxuzvcSBubPGzv3Q4p0s5we8PkHub3R/5P0tajKsvzuA87rHET+tCmoJy4pulAmlwAmhSPLQbqFWBSuVK+2GKUnSzVO1LIQsVohXsWyca4TGLxK4iYipNqpMWoWhMdjGveJvoGtkn2Res+awhuzIzcplmd3PJ6P03CTgvZe4fpHKWOWRWTwxkpuKrLu/TDsWUtInIWjd7mRNVVjOFdBd69F3WcvZLVVKx/5B8IDNyh2Wc9JudlVDc2f9BvbYS7qzahT8FxvGfV52ttNCnO/bpupo8nqdTp0rL2YVHu1S6V+S4a9+t01m46CaeZKKVtSnUt9D19LVhudgtWE56ojOfrd9AzV67OmoILLLJUuj/QqE7GpzXCTItBfvG82a7Xv6K1h1F89P5LG0zu+2ioOrFByOU1gUrikyPRJpKHCpHAClYLGasgq65y9eYbgWXcQ6pAob/s5xf42hf4OULNZTClkvxyW/ZGMmWrDdQq/VgfKcjlPoL1P0fkqRZAQk2LK7LAnTkEGn6pN13y/vj5Pfy//nGKhX1PHO+pzhRChSvFiXuXL/bz6WKEtN5cdpHxdEV5kNymI66odbsyedQdh+gxw0Ae1IXPrZH95ydLtUh3z9A4SbnWKbUkkPRxcFuv7B7KsztVhM9nEY0udywSXC5H4nNQeO6nDhL9zW1WT+/pQvDp36hn6Q9w/63VFWegTwCLU/7ena2TydonUxS/qulCvXRmrFFE8EKHOtWmjN4T1KSJMmvOmPHTXCQx9Mq31ppIWcRkV6rxiLi+Hoxp2KmQdFat7r+T/p4oIX53/oRX6a4s2c729Pf/a5ic8rZbdoxcCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwEb/AeyoTR+XS2l2AAAAAElFTkSuQmCC"
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
