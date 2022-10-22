import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMoviesParticipated, getPerson } from "~/apiServices/apiServices";
import SearchResult from "~/components/SearchResult/SearchResult";
import config from "~/config";

function PersonPage() {
  const { id } = useParams();
  const [person, setPerson] = useState({});
  const [moviesParticipated, setMoviesParticipated] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      await getPerson(id)
        .then((res) => {
          setPerson(res);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchApi();
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
    <div className=" mt-[40px] px-[10px]">
      <div className="flex">
        <div className="text-textPrimary">
          <img
            className="min-w-[300px] w-[300px] object-cover "
            src={`${config.api.IMG_API}${person.profile_path}`}
            alt=""
          />
        </div>
        <div className="text-textPrimary ml-[20px]">
          <h1 className="text-[40px] mb-[24px] font-[600]">{person.name}</h1>
          <div>
            <h3 className="mb-[32px] text-[20px] font-[600 mt-[20px]">
              Thông tin cá nhân
            </h3>
            <div className="mb-[20px]">
              <p className="font-[600]">Nghề nghiệp</p>
              <p className="text-[#b5b5b5]">{person.known_for_department}</p>
            </div>
            <div className="mb-[20px]">
              <p className="font-[600]">Giới tính</p>
              <p className="text-[#b5b5b5]">
                {person.gender === 2 ? "Nam" : "Nữ"}
              </p>
            </div>
            <div className="mb-[20px]">
              <p className="font-[600]">Ngày sinh</p>
              <p className="text-[#b5b5b5]">{person.birthday}</p>
            </div>
            <div className="mb-[20px]">
              <p className="font-[600]">Nơi sinh</p>
              <p className="text-[#b5b5b5]">{person.place_of_birth}</p>
            </div>
          </div>
          <h4 className="text-[20px]  mb-[24px] font-[600]">Tiểu sử</h4>
          <p className="text-[#b5b5b5]">{person.biography}</p>
        </div>
      </div>

      <SearchResult data={moviesParticipated} />
    </div>
  );
}

export default PersonPage;
