import { useEffect, useState } from "react";
import { getPopular } from "~/utils/request";
import PopularItem from "./PopularItem";
function Popular() {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const res = await getPopular();
      setPopular(res);
    };
    fetchApi();
  }, []);
  return (
    <div className="mt-4">
      <h3 className="font-bold text-xl">Popular Movies</h3>
      {popular.slice(0, 3).map((item, index) => {
        return <PopularItem data={item} key={index} />;
      })}
    </div>
  );
}

export default Popular;
