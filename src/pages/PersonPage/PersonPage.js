import { async } from "@firebase/util";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPerson } from "~/apiServices/apiServices";
import MoviesParticipated from "~/components/MoviesParticipated/MoviesParticipated";
import config from "~/config";

function PersonPage() {
  const { id } = useParams();
  const [person, setPerson] = useState({});
  useEffect(() => {
    const fetchApi = async () => {
      const res = await getPerson(id);
      setPerson(res);
    };
    fetchApi();
  }, [id]);
  console.log(person);
  return (
    <div className=" mt-[40px] px-[10px]">
      <div className="flex">
        <div className="text-textPrimary">
          <img
            className="min-w-[300px] object-cover "
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

      <MoviesParticipated id={id} />
    </div>
  );
}

export default PersonPage;
