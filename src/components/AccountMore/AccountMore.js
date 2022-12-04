import Button from "~/components/Button/Button";
import config from "~/config";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Images from "../Images/Images";
import image from "~/assets/img/img";
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
          <span className="mr-2 text-base text-textPrimary">
            {data?.displayName}
          </span>
          <Images
            fallBack={`${image.similarFilmFallBack}`}
            src={data?.photoURL}
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
AccountMore.propsTypes = {
  data: PropTypes.object,
};
export default AccountMore;
