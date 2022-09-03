import { useContext } from "react";
import AccountMore from "~/components/AccountMore/AccountMore";
import RightBarList from "~/components/RightBarList/RightBarList";
import { UserContext } from "~/context/AuthProvider";
import Search from "~/Layouts/components/Search/Search";

function RightBar() {
  const data = useContext(UserContext);

  return (
    <div
      className={
        "min-w-[30%] bg-bgPrimary  overflow-auto sticky top-0 h-screen  w-[25%] border-l-[1px] border-solid border-[#16182333] flex flex-col pt-5 px-[42px] pb-5"
      }
    >
      <AccountMore data={data} />
      <Search />
      <RightBarList path={"movie/popular"} title={"Popular Movies"} />
      <RightBarList path={"trending/movie/day"} title={"Favourite Movies"} />
    </div>
  );
}

export default RightBar;
