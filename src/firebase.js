import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyAmyt_asyS5Wq83Q_Ut178otTkricM2RA8",
  authDomain: "netflix-clone-f56e2.firebaseapp.com",
  projectId: "netflix-clone-f56e2",
  storageBucket: "netflix-clone-f56e2.appspot.com",
  messagingSenderId: "611918385158",
  appId: "1:611918385158:web:4521e50ac93ee35c8d7387"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signUp = async (name, email, password) => {

  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authPorvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" ").toUpperCase());
  }
}

const login = async(email, password) => {

  try {
    await signInWithEmailAndPassword(auth, email, password);

  } catch (error) {
    console.log(error);    
    toast.error(error.code.split('/')[1].split('-').join(" ").toUpperCase());
  }

}

const logout = () => {
  signOut(auth);
}

export {auth, db, login, signUp, logout}