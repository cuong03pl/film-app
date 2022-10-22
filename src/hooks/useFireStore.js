import { db } from "~/firebase/config";
import {
  collection,
  doc,
  setDoc,
  addDoc,
  getDocs,
  getDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";

function useFireStore(path = "comments", comments, id) {
  // const [cmts, setCmts] = useState([]);
  // console.log(comments);
  // console.log(cmts);
  // return cmts;
}

export default useFireStore;
