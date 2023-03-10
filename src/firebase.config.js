import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDaN45aM5eV9FxPGiw4VDO-PJyc4FqMYDY",
    authDomain: "sense-cb07f.firebaseapp.com",
    projectId: "sense-cb07f",
    storageBucket: "sense-cb07f.appspot.com",
    messagingSenderId: "450484974485",
    appId: "1:450484974485:web:bf7bc6f94b2e79773ffc9c",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
