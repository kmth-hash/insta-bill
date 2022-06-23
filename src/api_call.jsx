import { app, rtdb, db } from "./config";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { onValue, ref, set, child, get } from "firebase/database";

const getID = async () => {
  const dbRef = doc(db, "insta-bill", "items");
  const res = await (await getDoc(dbRef)).data();
  return ("000000" + (parseInt(res.count) + 1)).slice(-6);
};

const addNewEntry = async (obj) => {
  const dbRef = ref(rtdb, `items/${obj.orderNo}`);
  // delete obj['orderNo'];
  set(dbRef, obj);
  updateID(obj.orderNo);
};

const updateID = async (ID) => {
  await setDoc(doc(db, "insta-bill/items"), {
    count: parseInt(ID),
  }).catch((err) => {
    console.log(err);
  });
};

const getallnotes = async() => {  
  
  // console.log(res);
};

export { getID, addNewEntry, updateID, getallnotes };
