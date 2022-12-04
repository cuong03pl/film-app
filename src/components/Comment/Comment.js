import { doc, getDoc, setDoc } from "firebase/firestore";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "~/context/AuthProvider";
import { db } from "~/firebase/config";
import { SubmitIcon } from "../Icon/Icon";
import Images from "../Images/Images";
import CommentItem from "./CommentItem";
import PropTypes from "prop-types";

function Comment({ id }) {
  const user = useContext(UserContext);
  const [comments, setComments] = useState([
    {
      author_details: {
        avatar_path:
          "https://lh3.googleusercontent.com/a/AItbvmloBO_60-Lv9QJ4dBKLVknlcbtxswl-eRFKwSj0=s96-c",
        username: "Hoàng Kim Cường",
      },
      content: "Mời bạn test tính năng comment...",
      image: true,
    },
  ]);
  const [comment, setComment] = useState("");
  const [check, setCheck] = useState(false);
  const input = useRef();
  useEffect(() => {
    const fetchApi = async () => {
      await getDoc(doc(db, "comments", `${id}`))
        .then((data) => {
          setComments(data.data().comments);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchApi();
  }, [id, check]);
  useEffect(() => {
    if (check) {
      setDoc(doc(db, "comments", `${id}`), { comments });
      setCheck(false);
    } else {
      return;
    }
  }, [comments]);
  const handleSubmit = () => {
    setComments((pre) => [
      {
        author_details: {
          avatar_path: user?.photoURL,
          username: user?.displayName,
        },
        content: comment,
        image: true,
      },
      ...pre,
    ]);

    if (check) {
      setCheck(false);
    } else setCheck(true);
    setComment("");
    input.current.focus();
  };

  const onChangeInput = useCallback(
    (e) => {
      setComment(e.target.value);
    },
    [comment]
  );

  return (
    <div className="w-full mt-[24px]">
      <h3 className="text-[#fff] text-[24px] font-bold">Bình luận</h3>
      <div className="flex items-center h-[80px] py-5">
        <Images
          className={"rounded-[50%] h-[48px] w-[48px] "}
          src={`${user?.photoURL}`}
        ></Images>
        <input
          value={comment}
          ref={input}
          placeholder={"Nhập bình luận"}
          className="w-full mx-5 bg-[#8b7b7b3b] px-3 rounded-xl min-h-full block text-textPrimary outline-none border-none"
          onChange={onChangeInput}
        />
        <div onClick={handleSubmit}>
          <SubmitIcon
            className={"w-[40px] h-[40px] text-[blue] cursor-pointer"}
          />
        </div>
      </div>

      {/* cmt item */}
      {comments?.map((item, index) => {
        return (
          <CommentItem
            item={item}
            items={comments}
            imageUserAuth={item?.image}
            key={index}
          />
        );
      })}
    </div>
  );
}
Comment.propsType = {
  id: PropTypes.string.isRequired,
};
export default Comment;
