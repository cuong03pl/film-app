import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCast } from "~/apiServices/apiServices";

function Director({ id }) {
  const [director, setDirector] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const res = await getCast(`movie/${id}/credits`);

      setDirector(
        res.crew.filter((item) => item.known_for_department === "Directing")
      );
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
            <Link
              key={index}
              to=""
              className="font-bold hover:underline cursor-pointer text-[#dbdbdb] mr-3"
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Director;
