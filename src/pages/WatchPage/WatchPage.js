import { useParams } from "react-router-dom";
import Comment from "~/components/Comment/Comment";
import FilmDetails from "~/components/FilmDetails/FilmDetails";
import { useContext, useEffect, useState } from "react";
import { getMovieDetails } from "~/apiServices/apiServices";
import { UserContext } from "~/context/AuthProvider";

function Watch() {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      await getMovieDetails(id)
        .then((res) => {
          setData(res);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchApi();

    return () => {};
  }, [id]);

  return (
    <div className="w-full ">
      <div className=" h-[500px]">
        {/* <iframe
          src={`https://2embed.org/embed/${id}`}
          width="100%"
          height="100%"
          allowfullscreen="allowfullscreen"
        ></iframe> */}
      </div>
      <div className="max-h-[20%]">
        <FilmDetails id={id} watchPage />
        {/* chon tap */}
        {/* comment */}
        <Comment id={id} />
      </div>
    </div>
  );
}

export default Watch;
