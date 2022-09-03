import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HomeIcon, Logo, SignOutIcon, UserIcon } from "~/components/Icon/Icon";
import LogOut from "~/components/LogOut/LogOut";
import config from "~/config";
import { UserContext } from "~/context/AuthProvider";

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
          <Link
            to={config.routes.home}
            className="flex items-center px-2 py-1 text-textPrimary"
          >
            <HomeIcon className={"w-[25px] h-[25px] mr-3"} />
            <span className="font-medium text-base text-textPrimary">
              Trang Chủ
            </span>
          </Link>
        </div>
      </div>
      <div className="">
        {login && (
          <>
            <Link
              to={config.routes.home}
              className="flex items-center px-2 py-3 text-textPrimary "
            >
              <UserIcon className={"w-[25px] h-[25px] mr-3"} />
              <span className="font-medium text-base text-textPrimary ">
                Tài khoản
              </span>
            </Link>
            <LogOut />
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
