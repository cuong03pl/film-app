import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";
import PropTypes from "prop-types";

const cx = classNames.bind(styles);
function Button({
  primary,
  followBtn,
  loginGoogleBtn,
  favouriteBtn,
  watchBtn,
  loginBtn,
  selectedBtn,
  seeMoreBtn,
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
    loginBtn,
    watchBtn,
    loginGoogleBtn,
    favouriteBtn,
    selectedBtn,
    seeMoreBtn,
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
Button.propsType = {
  primary: PropTypes.bool,
  followBtn: PropTypes.bool,
  loginGoogleBtn: PropTypes.bool,
  favouriteBtn: PropTypes.bool,
  watchBtn: PropTypes.bool,
  seeMoreBtn: PropTypes.bool,
  loginBtn: PropTypes.bool,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  to: PropTypes.string,
  href: PropTypes.string,
  className: PropTypes.bool,
  leftIcon: PropTypes.node,
};
export default Button;
