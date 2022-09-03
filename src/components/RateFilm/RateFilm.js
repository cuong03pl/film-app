import { StarIcon } from "../Icon/Icon";

function RateFilm({ data }) {
  const rate = String(data).slice(0, 3);
  return (
    <div className="absolute right-5 flex items-center px-2 top-2  rounded-2xl bg-[#5985FF] text-[white]">
      <span className="font-semibold mr-1">{rate}</span>
      <StarIcon className={"h-4 w-4"} />
    </div>
  );
}

export default RateFilm;
