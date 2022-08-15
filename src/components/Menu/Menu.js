import { auth } from "~/firebase/config";
import { SignOutIcon, UserIcon } from "../Icon/Icon";
import MenuItem from "./MenuItem";

const MENU_ITEMS = [
  {
    icon: <UserIcon className={"w-[20px] h-[20px]"} />,
    title: "Thông tin cá nhân",
  },
  {
    icon: <SignOutIcon className={"w-[20px] h-[20px]"} />,
    title: "Đăng xuất",
    signOut: true,
  },
];

function Menu() {
  const handleRender = () => {
    return MENU_ITEMS.map((item, index) => {
      return (
        <MenuItem
          data={item}
          key={index}
          onClick={() => {
            if (item.signOut) {
              return handleLogOut();
            }
          }}
        />
      );
    });
  };
  const handleLogOut = () => {
    return auth.signOut().then(
      function () {
        window.location.reload(true);
      },
      function (error) {}
    );
  };
  return (
    <div className="w-[200px] rounded-[20px] bg-white">{handleRender()}</div>
  );
}

export default Menu;
