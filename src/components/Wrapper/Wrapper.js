import classNames from "classnames/bind";
import styles from "./Wrapper.module.scss";
import PropTypes from "prop-types";

const cx = classNames.bind(styles);

function Wrapper({ children }) {
  return <div className={cx("wrapper")}>{children}</div>;
}
Wrapper.propsType = {
  children: PropTypes.node.isRequired,
};
export default Wrapper;
