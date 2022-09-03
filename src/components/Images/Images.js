import { useState } from "react";

function Images({ className, src, alt, fallBack }) {
  const [srcImg, setSrcImg] = useState(src);
  const handleError = () => {
    src ? setSrcImg(src) : setSrcImg(fallBack);
  };
  return (
    <img
      className={className}
      alt={alt}
      src={srcImg}
      onError={handleError}
    ></img>
  );
}

export default Images;
