import { useEffect, useState } from "react";
import { getMovieRightBar } from "~/apiServices/apiServices";
import RightBarItem from "./RightBarItem";
function RightBarList({ path, title }) {
  const [favorite, setFavorite] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const res = await getMovieRightBar(path);
      setFavorite(res);
    };
    fetchApi();
  }, []);

  return (
    <div className="mt-4">
      <h3 className="font-bold text-xl text-textPrimary">{title}</h3>
      {favorite.slice(0, 3).map((item, index) => {
        return <RightBarItem data={item} key={index} />;
      })}
    </div>
  );
}

export default RightBarList;
