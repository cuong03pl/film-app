import { useEffect, useState } from "react";
import { getMovieRightBar } from "~/apiServices/apiServices";
import RightBarItem from "./RightBarItem";
import PropTypes from "prop-types";

function RightBarList({ path, title }) {
  const [favorite, setFavorite] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    const fetchApi = async () => {
      await getMovieRightBar(path)
        .then((res) => {
          setFavorite(res);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchApi();
  }, []);

  return (
    <div className="mt-10">
      <h3 className="font-bold text-xl text-textPrimary">{title}</h3>
      {favorite?.slice(0, 5).map((item, index) => {
        return <RightBarItem data={item} key={index} />;
      })}
    </div>
  );
}
RightBarList.propsType = {
  path: PropTypes.string,
  title: PropTypes.string,
};
export default RightBarList;
