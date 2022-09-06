import { forwardRef, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

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

export default Images;
