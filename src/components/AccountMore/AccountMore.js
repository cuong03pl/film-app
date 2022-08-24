import Button from "~/components/Button/Button";
import config from "~/config";
import { useEffect, useState } from "react";

function AccountMore({ data }) {
  const [login, setLogin] = useState(false);
  useEffect(() => {
    if (data) {
      setLogin(true);
    }
  }, [data]);

  return (
    <div className="flex items-center justify-end mb-5 w-full ">
      {login ? (
        <div className="flex items-center">
          <span className="mr-2 text-base ">{data.displayName}</span>
          <img
            src={data.photoURL}
            alt=""
            className="w-[30px] cursor-pointer h-[30px] rounded-[50%]"
          />
        </div>
      ) : (
        <>
          <Button loginBtn to={config.routes.login}>
            Đăng nhập
          </Button>
        </>
      )}
    </div>
  );
}

export default AccountMore;
