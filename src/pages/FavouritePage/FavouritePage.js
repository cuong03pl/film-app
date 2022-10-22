import { doc, getDoc, setDoc } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SearchResult from "~/components/SearchResult/SearchResult";
import { UserContext } from "~/context/AuthProvider";
import { db } from "~/firebase/config";

function FavouritePage() {
  const { id } = useParams();

  const user = useContext(UserContext);
  const [favourite, setFavourite] = useState([[]]);
  const [check, setCheck] = useState(false);
  useEffect(() => {
    const fetchApi = async () => {
      await getDoc(doc(db, "favourite", `${user?.uid}`))
        .then((data) => {
          setFavourite([data.data()?.favourite]);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchApi();
  }, [id, user]);

  return (
    <>
      <SearchResult data={favourite[0]} />
    </>
  );
}

export default FavouritePage;
