import { useState } from "react";
import image from "~/assets/img/img";
import config from "~/config";
import Images from "../Images/Images";

import PropTypes from "prop-types";

function CommentItem({ item, imageUserAuth }) {
  const [like, setLike] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const handleLike = () => {
    setLike(true);
    setLikeCount((pre) => pre + 1);
  };

  const handleUnlike = () => {
    setLikeCount((pre) => pre - 1);
    setLike(false);
  };

  // demo

  return (
    <div className="flex ml-2 mt-4  ">
      <Images
        className={"rounded-[50%] h-[40px] w-[40px] object-cover"}
        src={
          imageUserAuth
            ? item?.author_details.avatar_path
            : `${config.api.IMG_API}${item?.author_details.avatar_path}`
        }
        fallBack={image.actingFallBack}
      ></Images>

      <div className="flex flex-col   text-textPrimary w-full ml-[20px]">
        <div className="bg-[#8b7b7b3b] w-full px-3 py-2 rounded-3xl ">
          <div>{item?.author_details.username}</div>
          <div className="text-[#ccc]">{item?.content}</div>
        </div>

        <div className="flex ml-2">
          <div className="mr-4 ">
            {!like ? (
              <span className="mr-1 cursor-pointer" onClick={handleLike}>
                Like
              </span>
            ) : (
              <span
                className="mr-1 cursor-pointer text-[#5151cb]"
                onClick={handleUnlike}
              >
                Unlike
              </span>
            )}

            <span>{likeCount}</span>
          </div>
          <div className="cursor-pointer">Reply</div>
        </div>
      </div>
    </div>
  );
}
CommentItem.propsType = {
  item: PropTypes.object,
  imageUserAuth: PropTypes.bool,
};
export default CommentItem;
