import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";
const cx = classNames.bind(styles);
function Button({
  primary,
  followBtn,
  loginGoogleBtn,
  favouriteBtn,
  menuBtn,
  watchBtn,
  loginBtn,
  selectBtn,
  children,
  onClick,
  to,
  href,
  className,
  leftIcon,
  ...passprops
}) {
  let Comp = "button";

  const classes = cx({
    flex: "flex",
    primary,
    followBtn,
    selectBtn,
    loginBtn,
    watchBtn,
    loginGoogleBtn,
    favouriteBtn,
    menuBtn,
    className,
  });

  let props = { onClick, ...passprops };
  if (to) {
    props.to = to;
    Comp = Link;
  }
  if (href) {
    Comp = "a";
    props.href = href;
  }

  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span>{leftIcon}</span>}
      {<span className="text-center">{children}</span>}
    </Comp>
  );
}

export default Button;
