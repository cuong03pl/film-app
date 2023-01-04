import { doc, getDoc, setDoc } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "~/apiServices/apiServices";
import Button from "~/components/Button/Button";
import FilmDetails from "~/components/FilmDetails/FilmDetails";

import { PlayIcon } from "~/components/Icon/Icon";
import Images from "~/components/Images/Images";
import Cast from "~/components/Cast/Cast";
import SimilarFilm from "~/components/SimilarFilm/SimilarFilm";
import config from "~/config";
import { UserContext } from "~/context/AuthProvider";
import { db } from "~/firebase/config";
import Trailer from "~/components/Trailer/Trailer";
import SkeletonItem from "~/components/Skeleton/Skeleton";
import image from "~/assets/img/img";

function MovieDetail() {
  const user = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [favourite, setFavourite] = useState([]);
  const [check, setCheck] = useState(false);
  const [selected, setSelected] = useState(false);
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
      setIsLoading(true);

      await getMovieDetails(id)
        .then((res) => {
          setData(res);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchApi();
    // setTimeout(() => {
    //   setIsLoading(false);
    // }, 1000);

    return () => {};
  }, [id]);
  // xu ly

  // lay film favourite trong firestore
  useEffect(() => {
    const fetchApi = async () => {
      await getDoc(doc(db, "favourite", `${user?.uid}`))
        .then((res) => {
          res?.data() && setFavourite(res?.data().favourite);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchApi();
    return () => {};
  }, [data, check, id]);

  // sau khi an button yeu thich se duoc add vao danh sach
  useEffect(() => {
    if (check && user) {
      setDoc(doc(db, "favourite", `${user?.uid}`), { favourite });
    }
    return () => {};
  }, [check, id]);
  useEffect(() => {
    const added = favourite?.some((value) => {
      return value?.id === data?.id;
    });
    if (added) {
      setSelected(true);
    } else {
      setSelected(false);
    }
    return () => {};
  }, [data, id, check, favourite]);

  // thuc hien add film vao favourite
  const handleAddFavourite = () => {
    if (favourite) {
      // check xem film da them vao danh sach favourite chua
      const added = favourite?.some((value) => {
        return value.id === data.id;
      });
      // neu film da them roi thi khong them lai
      const favouriteNew = favourite?.filter((value, index) => {
        console.log(value);
        return value.id !== data.id;
      });
      setFavourite(favouriteNew);
      !added
        ? setFavourite((pre) => [...pre, data])
        : setDoc(doc(db, "favourite", `${user?.uid}`), { favourite });
    }

    if (check) {
      setCheck(false);
    } else setCheck(true);
  };

  return (
    <div className="">
      <div className="relative">
        {isLoading ? (
          <SkeletonItem className={"h-[400px] w-[889px]"} />
        ) : (
          <div
            className="h-[400px] bg-no-repeat bg-center bg-cover"
            style={{
              backgroundImage: `url(${config.api.ORIGINAL_IMG}${data.backdrop_path})`,
            }}
          />
        )}
      </div>

      <div className=" bg-[#06121E] w-full px-5 py-8">
        <div className="flex">
          <div className="mr-4">
            {isLoading ? (
              <SkeletonItem className={" min-w-[300px] h-[450px] mb-[32px]"} />
            ) : (
              <Images
                fallBack={`${image?.similarFilmFallBack}`}
                className="min-w-[300px] object-cover mb-8"
                src={`${config.api.IMG_API}${data.poster_path}`}
                alt=""
              />
            )}

            {isLoading ? (
              <SkeletonItem className={" min-w-[300px] h-[50px]"} />
            ) : (
              <Button
                watchBtn
                to={`/watch/${data.id}`}
                leftIcon={<PlayIcon className={"h-5 w-5"} />}
              >
                Xem Phim
              </Button>
            )}
          </div>

          <FilmDetails
            onClick={handleAddFavourite}
            id={id}
            favourite
            check={selected}
            movieDetailPage
          />
        </div>
        {/* dien vien */}
        <Cast id={id} />
        <Trailer id={id} />
        {/* phim tuong tu */}
        <SimilarFilm id={id} />
        {/* cmt */}
      </div>
    </div>
  );
}

export default MovieDetail;
