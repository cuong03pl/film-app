import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMoviesParticipated, getPerson } from "~/apiServices/apiServices";
import image from "~/assets/img/img";
import Images from "~/components/Images/Images";
import SearchResult from "~/components/SearchResult/SearchResult";
import SkeletonItem from "~/components/Skeleton/Skeleton";
import config from "~/config";

function PersonPage() {
  const { id } = useParams();
  const [person, setPerson] = useState({});
  const [moviesParticipated, setMoviesParticipated] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const fetchApi = async () => {
      await getPerson(id)
        .then((res) => {
          setPerson(res);
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
  }, [id]);
  useEffect(() => {
    const fetchApi = async () => {
      await getMoviesParticipated(id)
        .then((res) => {
          setMoviesParticipated(res.cast);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchApi();
    return () => {};
  }, [id]);
  useEffect(() => {
    if (person.name) {
      document.title = `${person.name}`;
    } else {
      document.title = "CFilm";
    }
    return () => {};
  }, [person.name]);
  return (
    <div className=" mt-[40px] px-[10px] w-full">
      <div className="flex">
        <div className="text-textPrimary">
          {isLoading ? (
            <SkeletonItem className={" min-w-[300px] w-[300px] h-[450px] "} />
          ) : (
            <Images
              fallBack={`${image?.similarFilmFallBack}`}
              className="min-w-[300px] w-[300px] object-cover "
              src={`${config.api.IMG_API}${person.profile_path}`}
              alt=""
            />
          )}
        </div>
        <div className="text-textPrimary ml-[20px] w-full">
          {isLoading ? (
            <SkeletonItem className={" min-w-[300px] w-[100%] h-[60px] "} />
          ) : (
            <h1 className="text-[40px] mb-[24px] font-[600]">{person.name}</h1>
          )}

          <div>
            <h3 className="mb-[32px] text-[20px] font-[600 mt-[20px]">
              {isLoading ? (
                <SkeletonItem className={" min-w-[300px] w-[100%] h-[30px] "} />
              ) : (
                " Thông tin cá nhân"
              )}
            </h3>

            <div className="mb-[20px]">
              {isLoading ? (
                <>
                  <SkeletonItem
                    className={" min-w-[300px] w-[100%] h-[24px] "}
                  />
                  <SkeletonItem
                    className={" min-w-[300px] w-[100%] h-[24px] "}
                  />
                </>
              ) : (
                <>
                  <p className="font-[600]">Nghề nghiệp</p>
                  <p className="text-[#b5b5b5]">
                    {person.known_for_department}
                  </p>
                </>
              )}
            </div>
            <div className="mb-[20px]">
              {isLoading ? (
                <>
                  <SkeletonItem
                    className={" min-w-[300px] w-[100%] h-[24px] "}
                  />
                  <SkeletonItem
                    className={" min-w-[300px] w-[100%] h-[24px] "}
                  />
                </>
              ) : (
                <>
                  <p className="font-[600]">Giới tính</p>
                  <p className="text-[#b5b5b5]">
                    {person.gender === 2 ? "Nam" : "Nữ"}
                  </p>
                </>
              )}
            </div>
            <div className="mb-[20px]">
              {isLoading ? (
                <>
                  <SkeletonItem
                    className={" min-w-[300px] w-[100%] h-[24px] "}
                  />
                  <SkeletonItem
                    className={" min-w-[300px] w-[100%] h-[24px] "}
                  />
                </>
              ) : (
                <>
                  <p className="font-[600]">Ngày sinh</p>
                  <p className="text-[#b5b5b5]">{person.birthday}</p>
                </>
              )}
            </div>

            <div className="mb-[20px]">
              {isLoading ? (
                <>
                  <SkeletonItem
                    className={" min-w-[300px] w-[100%] h-[24px] "}
                  />
                  <SkeletonItem
                    className={" min-w-[300px] w-[100%] h-[24px] "}
                  />
                </>
              ) : (
                <>
                  <p className="font-[600]">Nơi sinh</p>
                  <p className="text-[#b5b5b5]">{person.place_of_birth}</p>
                </>
              )}
            </div>
          </div>
          {isLoading ? (
            <>
              <SkeletonItem className={" min-w-[300px] w-[100%] h-[24px] "} />
              <SkeletonItem className={" min-w-[300px] w-[100%] h-[300px] "} />
            </>
          ) : (
            <>
              <h4 className="text-[20px]  mb-[24px] font-[600]">Tiểu sử</h4>
              <p className="text-[#b5b5b5]">{person.biography}</p>
            </>
          )}
        </div>
      </div>
      <div className="mt-5 ">
        <h3 className="text-textPrimary text-[20px] font-[600]">
          Phim đã tham gia
        </h3>
        <SearchResult data={moviesParticipated} />
      </div>
    </div>
  );
}

export default PersonPage;
