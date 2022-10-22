import { doc, getDoc, setDoc } from "firebase/firestore";
import { useContext, useEffect, useLayoutEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getMovieDetails } from "~/apiServices/apiServices";
import Button from "~/components/Button/Button";
import FilmDetails from "~/components/FilmDetails/FilmDetails";
import { PlayIcon } from "~/components/Icon/Icon";
import MovieCast from "~/components/MovieCast/MovieCast";
import SimilarFilm from "~/components/SimilarFilm/SimilarFilm";
import config from "~/config";
import { UserContext } from "~/context/AuthProvider";
import { db } from "~/firebase/config";

function MovieDetail() {
  const { id } = useParams();
  const [data, setData] = useState([]);

  const user = useContext(UserContext);
  const [favourite, setFavourite] = useState([]);
  const [check, setCheck] = useState(false);

  useEffect(() => {
    if (data.title) {
      document.title = `${data.title}`;
    } else {
      document.title = "CFilm";
    }
    return () => {};
  }, [id, data.title]);
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
  // xu ly

  useEffect(() => {
    const fetchApi = async () => {
      await getDoc(doc(db, "favourite", `${user?.uid}`))
        .then((data) => {
          setFavourite(data.data().favourite);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchApi();
    return () => {};
  }, [data]);
  const handleAddFavourite = () => {
    setFavourite((pre) => [...pre, data]);
    if (check) {
      setCheck(false);
    } else setCheck(true);
  };
  useEffect(() => {
    if (check) {
      setDoc(
        doc(db, "favourite", `${user?.uid}`),
        { favourite },
        { merge: true }
      );
    }
  }, [check]);
  return (
    <div className="">
      <div className="relative">
        <div
          className="h-[400px] bg-no-repeat bg-center bg-cover"
          style={{
            backgroundImage: `url(${config.api.ORIGINAL_IMG}${data.backdrop_path})`,
          }}
        />
      </div>
      <div className=" bg-[#06121E] w-full px-5 py-8">
        <div className="flex">
          <div className="mr-4">
            <img
              className="min-w-[300px] object-cover mb-8"
              src={`${config.api.IMG_API}${data.poster_path}`}
              alt=""
            />
            <Button
              watchBtn
              to={`/watch/${data.id}`}
              leftIcon={<PlayIcon className={"h-5 w-5"} />}
            >
              Xem Phim
            </Button>
          </div>
          <FilmDetails
            onClick={handleAddFavourite}
            id={id}
            selected
            movieDetailPage
            favourite
          />
        </div>
        {/* dien vien */}
        <MovieCast id={id} />
        {/* phim tuong tu */}
        <SimilarFilm id={id} />
        {/* cmt */}
      </div>
    </div>
  );
}

export default MovieDetail;
