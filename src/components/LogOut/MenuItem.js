import Button from "../Button/Button";
import PropTypes from "prop-types";

function MenuItem({ data, onClick }) {
  return (
    <Button
      menuBtn
      to={data?.to}
      href={data?.href}
      leftIcon={data?.icon}
      onClick={onClick}
    >
      {data?.title}
    </Button>
  );
}
MenuItem.propsType = {
  data: PropTypes.object,
  onClick: PropTypes.func,
};
export default MenuItem;
