import Button from "../Button/Button";

function MenuItem({ data, onClick }) {
  return (
    <Button
      menuBtn
      to={data.to}
      href={data.href}
      leftIcon={data.icon}
      onClick={onClick}
    >
      {data.title}
    </Button>
  );
}

export default MenuItem;
