import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { getFavorite } from "~/utils/request";
import FavoriteItem from "./FavoriteItem";
function Favorite() {
  const [favorite, setFavorite] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const res = await getFavorite();
      setFavorite(res);
    };
    fetchApi();
  }, []);
  return (
    <div className="mt-6">
      <h3 className="font-bold text-xl">Favorite Movies</h3>
      {favorite.slice(0, 3).map((item, index) => {
        return <FavoriteItem data={item} key={index} />;
      })}
    </div>
  );
}

export default Favorite;
