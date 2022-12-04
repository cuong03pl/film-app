import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import PropTypes from "prop-types";

function Images({ className, src, alt, fallBack, lazy }) {
  let Comp = "img";
  if (lazy) {
    Comp = LazyLoadImage;
  }
  const [srcImg, setSrcImg] = useState("");
  const handleError = () => {
    setSrcImg(fallBack);
  };
  return (
    <Comp
      className={className}
      alt={alt}
      src={srcImg ? srcImg : src}
      onError={handleError}
    ></Comp>
  );
}
Images.propsType = {
  className: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  fallBack: PropTypes.string,
  lazy: PropTypes.bool,
};
export default Images;
