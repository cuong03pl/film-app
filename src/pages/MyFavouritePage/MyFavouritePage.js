import { doc, getDoc, setDoc } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import image from "~/assets/img/img";
import { CloseIcon } from "~/components/Icon/Icon";
import Images from "~/components/Images/Images";
import config from "~/config";

import { UserContext } from "~/context/AuthProvider";
import { db } from "~/firebase/config";
import "./MyFavouritePage.module.scss";
import Spinner from "~/components/Spinner/Spinner";
function MyFavouritePage() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  const user = useContext(UserContext);
  const [favourite, setFavourite] = useState([]);
  const [deleted, setDeleted] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const fetchApi = async () => {
      await getDoc(doc(db, "favourite", `${user?.uid}`))
        .then((data) => {
          setFavourite(data.data()?.favourite);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchApi();
  }, [id, user]);
  useEffect(() => {
    if (deleted && user) {
      setDoc(doc(db, "favourite", `${user?.uid}`), { favourite });
      setDeleted(false);
    }
    return () => {};
  }, [favourite]);
  const handleDelete = (item) => {
    const favouriteNew = favourite.filter((favouriteItem) => {
      return favouriteItem.id !== item.id;
    });
    setFavourite(favouriteNew);
    setDoc(doc(db, "favourite", `${user?.uid}`), { favourite });
    if (deleted) {
      setDeleted(false);
    } else setDeleted(true);
  };
  return (
    <div className="mt-[12px] w-full ">
      {isLoading && <Spinner />}
      {!isLoading && (
        <div className="flex relative w-full flex-wrap">
          {favourite?.map((item, index) => {
            return (
              <div className="max-w-[25%] w-[25%] flex flex-col items-center mt-6 ">
                <Link
                  className="flex flex-col items-center overflow-hidden relative hover:scale-105 hover:brightness-110 transition duration-300"
                  key={index}
                  to={`/movie/${item?.id}`}
                >
                  <Images
                    fallBack={image?.similarFilmFallBack}
                    className="w-[180px] h-[270px] rounded-xl "
                    src={`${config.api.IMG_API}${item?.poster_path}`}
                    alt=""
                  />
                  <p className="text-center font-semibold text-lg text-textPrimary text-ellipsis  line-clamp-1">
                    {item?.title}
                  </p>
                </Link>

                <div
                  onClick={() => handleDelete(item)}
                  className="cursor-pointer delete-btn w-[150px] mt-3"
                >
                  <div
                    className="border-[1px] mr-[10px] flex items-center justify-center border-solid
                   border-white text-[#b5b5b5] rounded-3xl  py-2 cursor-pointer hover:bg-[#007ACC] hover:text-white"
                  >
                    XÓA
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default MyFavouritePage;
