import { Link, NavLink } from "react-router-dom";

function HeaderItem({ to, Icon, title }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "flex items-center px-2 py-3 text-[#5985FF]"
          : "flex items-center px-2 py-3 text-textPrimary"
      }
    >
      {Icon}
      <span className="font-medium text-base">{title}</span>
    </NavLink>
  );
}

export default HeaderItem;
