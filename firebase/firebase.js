import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCcXYMbnLi1pPAof2bAadh7S8uTvJACfdY",
    authDomain: "ensight-4e055.firebaseapp.com",
    projectId: "ensight-4e055",
    storageBucket: "ensight-4e055.appspot.com",
    messagingSenderId: "105025809023",
    appId: "1:105025809023:web:45e2b76b08eead82342d4a",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

const provider = new GoogleAuthProvider();

export { db, auth, provider };
