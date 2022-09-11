import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
  getDoc,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDRiIWwrqKAy1RDAlenqDrEtZchRzgQIUI",
  authDomain: "meriolx.firebaseapp.com",
  projectId: "meriolx",
  storageBucket: "meriolx.appspot.com",
  messagingSenderId: "1010132726930",
  appId: "1:1010132726930:web:27bd97ac25ca93372a224b",
  measurementId: "G-T910SW9B1H",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage();

async function register(form) {
  const { email, password, name } = form;

  const result = await createUserWithEmailAndPassword(auth, email, password);
  const uid = result.user.uid;
  console.log("---------> Register is ok");

  await setDoc(doc(db, "users", uid), {
    email,
    name,
    uid,
  });
}

async function SignIn(email, password) {
  await signInWithEmailAndPassword(auth, email, password);
  const uid = auth.currentUser.uid;
  const q = query(collection(db, "users"), where("uid", "==", uid));
  const querySnapshot = await getDocs(q);
  let data = [];
  querySnapshot.forEach((doc) => {
    data = [...data, doc.data()];
  });

  return data;
}

async function getUserInfo() {
  const uid = auth.currentUser.uid;
  const q = query(collection(db, "users"), where("uid", "==", uid));
  const querySnapshot = await getDocs(q);
  let data = [];
  querySnapshot.forEach((doc) => {
    data = [...data, doc.data()];
  });
  return data;
}

async function getUserAdd() {
  const uid = auth.currentUser.uid;
  const q = query(collection(db, "Add"), where("user", "==", uid));
  const querySnapshot = await getDocs(q);
  let data = [];
  querySnapshot.forEach((doc) => {
    data = [...data, doc.data()];
    console.log("firebase", data);
  });
  return data;
}

async function getAdds() {
  const q = query(collection(db, "Add"));
  const querySnapshot = await getDocs(q);
  let data = [];
  querySnapshot.forEach((doc) => {
    // data = [...data, doc.data()]
    const ad = { ...doc.data(), id: doc.id };
    console.log("ad", ad);
    data.push(ad);
  });
  console.log("firebase", data);
  return data;
}

async function getAdById(id) {
  const docRef = doc(db, "Add", id);
  const docSnap = await getDoc(docRef);
  console.log("id mili", docSnap);
  return docSnap.data();
}

async function getSearchAdd(title) {
  const q = query(collection(db, "Add"), where("add.title", "==", title));
  const querySnapshot = await getDocs(q);
  let data = [];
  querySnapshot.forEach((doc) => {
    data = [...data, doc.data()];
  });
  return data;
}

async function getuserData(userid) {
  const docRef = doc(db, "users", userid);
  const docSnap = await getDoc(docRef);
  // setDocsnap2(docSnap.data())
  console.log("mydata", docSnap.data());
  return docSnap.data();
}

async function uploadImage(file) {
  console.log("file", file);
  const imageRef = ref(storage, "profileImages/" + file.name);
  const uploadedImage = await uploadBytes(imageRef, file);
  const url = await getDownloadURL(uploadedImage.ref);
  return url;
}

async function updateProfile(data) {
  console.log("currentUser --->", auth.currentUser.uid);
  const uid = auth.currentUser.uid;
  await setDoc(doc(db, "users", uid), data, { merge: true });
}

export {
  register,
  SignIn,
  getUserInfo,
  getUserAdd,
  getAdds,
  getSearchAdd,
  uploadImage,
  updateProfile,
  storage,
  ref,
  db,
  getAdById,
  getuserData,
};
