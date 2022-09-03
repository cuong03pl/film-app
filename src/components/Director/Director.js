import { useEffect, useState } from "react";
import { getCast } from "~/apiServices/apiServices";

function Director({ id }) {
  const [director, setDirector] = useState([]);
  const [data, setData] = useState([]);
  // useEffect(() => {
  //   const fetchApi = async () => {
  //     const res = await getCast(id);
  //     setDirector(res.crew);
  //   };
  //   fetchApi();
  // }, [id]);
  return (
    <div className="flex ">
      <span className="w-[120px] block text-[#7a7a7a] ">ĐẠO DIỄN:</span>
      <span className="font-bold hover:underline cursor-pointer text-[#dbdbdb]">
        {director.known_for_department == "Directing"}
      </span>
    </div>
  );
}

export default Director;
