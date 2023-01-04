import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FavouriteIcon,
  HomeIcon,
  Logo,
  UserIcon,
} from "~/components/Icon/Icon";
import LogOut from "~/components/LogOut/LogOut";
import config from "~/config";
import { UserContext } from "~/context/AuthProvider";
import HeaderItem from "./HeaderItem/HeaderItem";

function Header() {
  const [login, setLogin] = useState(false);
  const data = useContext(UserContext);
  useEffect(() => {
    if (data) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, [data]);
  return (
    <div className=" bg-bgPrimary sticky top-0 h-screen px-5 py-4  flex justify-between flex-col  border-r-[1px] border-solid border-[#16182333]">
      <div>
        <Link to="/" className="flex items-center justify-center">
          <Logo className={"h-[45px] w-[165px] fill-[#e50914]"}></Logo>
        </Link>
        <div className="mt-10">
          <HeaderItem
            to={config.routes.home}
            Icon={<HomeIcon className={"w-[25px] h-[25px] mr-3"} />}
            title={"Trang Chủ"}
          />

          <HeaderItem
            to={config.routes.myfavourite}
            Icon={<FavouriteIcon className={"w-[25px] h-[25px] mr-3"} />}
            title={"Yêu Thích"}
          />
        </div>
      </div>
      <div className="">
        {login && (
          <>
            <HeaderItem
              to={config.routes.profile}
              Icon={<UserIcon className={"w-[25px] h-[25px] mr-3"} />}
              title={"Tài khoản"}
            />
            <LogOut />
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
