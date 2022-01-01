import {
  collection,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../utils/firebase";

export const getUserDocsHelper = async () => {
  const userId = 1;
  //finding user by id
  const userQuery = query(collection(db, "users"), where("id", "==", userId));
  return (await getDocs(userQuery)).docs[0];
  // console.log(dietData);
};

