import { useContext } from "react";
import AccountMore from "~/components/AccountMore/AccountMore";
import Favorite from "~/components/Favorite/Favorite";
import Popular from "~/components/Popular/Popular";
import { UserContext } from "~/context/AuthProvider";
import Search from "~/Layouts/components/Search/Search";

function NavBar() {
  const data = useContext(UserContext);

  return (
    <div
      className={
        "min-w-[30%]  overflow-auto sticky top-0 h-screen  w-[25%] border-l-[1px] border-solid border-[#16182333] flex flex-col pt-5 px-[42px] pb-5"
      }
    >
      <AccountMore data={data} />
      <Search />
      <Popular />
      <Favorite />
    </div>
  );
}

export default NavBar;
