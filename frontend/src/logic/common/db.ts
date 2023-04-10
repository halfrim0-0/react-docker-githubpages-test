import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

export async function post(text: string) {
  await addDoc(collection(db, "posts"), {
    text: text,
  });
}
