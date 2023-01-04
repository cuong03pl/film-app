import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCast } from "~/apiServices/apiServices";
import PropTypes from "prop-types";
import SkeletonItem from "../Skeleton/Skeleton";
import { Fragment } from "react";

function Director({ id, isLoading }) {
  const [director, setDirector] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      await getCast(`movie/${id}/credits`)
        .then((data) => {
          setDirector(
            data.crew.filter(
              (item) => item?.known_for_department === "Directing"
            )
          );
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchApi();
  }, [id]);
  return (
    <div className="flex ">
      <span className="w-[120px] min-w-[120px] block text-[#7a7a7a] ">
        ĐẠO DIỄN:
      </span>
      <div className="flex flex-wrap">
        {director.map((item, index) => {
          return (
            <Fragment key={index}>
              <Link
                to={`/person/${item?.id}`}
                className="font-bold hover:underline cursor-pointer text-[#dbdbdb] mr-3"
              >
                {item.name}
              </Link>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}
Director.propsTypes = {
  id: PropTypes.string,
};
export default Director;
