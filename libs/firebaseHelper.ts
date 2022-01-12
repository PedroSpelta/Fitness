import {
  collection,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../utils/firebase";

export const getUserDocsHelper = async (email: string) => {
  //finding user by id
  console.log(email);
  if(!email) return;
  const userRef = collection(db, "users");
  const userQuery = query(userRef, where("email", "==", email));

  return (await getDocs(userQuery)).docs[0];
};
