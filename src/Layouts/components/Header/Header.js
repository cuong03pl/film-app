import Tippy from "@tippyjs/react/headless";
import { useContext, useEffect, useState } from "react";
import Button from "~/components/Button/Button";
import { Logo } from "~/components/Icon/Icon";
import Menu from "~/components/Menu/Menu";
import Wrapper from "~/components/Wrapper/Wrapper";
import config from "~/config";
import { UserContext } from "~/context/AuthProvider";
import Search from "../Search/Search";

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
    <div className="w-[1492px] px-5 py-4 pr-8 flex items-center justify-between h-[80px]  border-b-[1px] border-solid border-[#16182333]">
      <div className="flex items-center">
        <Logo className={"h-[45px] w-[165px] fill-[#e50914]"}></Logo>
      </div>

      {/* search  */}
      <Search />
      {/* action */}

      <div className="flex items-center ">
        {login ? (
          <Tippy
            interactive
            placement="top-end"
            offset={[20, 10]}
            render={(attrs) => (
              <div className=" " tabIndex="-1" {...attrs}>
                <Wrapper>
                  <Menu />
                </Wrapper>
              </div>
            )}
          >
            <div>
              {/* <span className="mr-2 text-base ">{data.displayName}</span> */}
              <img
                src={data.photoURL}
                alt=""
                className="w-[30px] cursor-pointer h-[30px] rounded-[50%]"
              />
            </div>
          </Tippy>
        ) : (
          <>
            <Button loginBtn to={config.routes.login}>
              Đăng nhập
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
