import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";
const cx = classNames.bind(styles);
function Button({
  primary,
  followBtn,
  watchBtn,
  loginGoogleBtn,
  menuBtn,
  loginBtn,
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
    watchBtn,
    loginBtn,
    loginGoogleBtn,
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
      {
        <span className="text-center flex w-full  justify-center">
          {children}
        </span>
      }
    </Comp>
  );
}

export default Button;
