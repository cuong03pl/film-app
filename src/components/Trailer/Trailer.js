import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { getTrailer } from "~/apiServices/apiServices";
function Trailer({ id }) {
  const [trailer, setTrailer] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      await getTrailer(id)
        .then((res) => {
          setTrailer(res.slice(0, 3));
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchApi();
  }, []);
  return (
    // khi an vao video trailer se hien ra modal
    <div className="mt-10">
      <h3 className="text-white font-bold text-xl mb-8">Phim tương tự</h3>

      <div className="flex gap-4">
        {trailer.map((item, index) => {
          return (
            <ReactPlayer
              className="!max-w-[33%]"
              url={`https://www.youtube.com/watch?v=${item.key}`}
              width="100%"
              height="100%"
              controls={true}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Trailer;
