import { getApps, initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import useAuth from "~~/store/user-auth";

export default defineNuxtPlugin((nuxtApp) => {
    debugger;

    const firebaseConfig = {

    }

    console.log("in plugin");


    // Initialize Firebase
    const firebaseApp = initializeApp(firebaseConfig);
    const auth = getAuth(firebaseApp);



    // // wait until auth is ready
    const unsub = onAuthStateChanged(getAuth(getApps()[0]), (user) => {
        debugger;
        useAuth().authIsReady = true;
        useAuth().user = user;
        unsub()
    })


    return {
        provide: {
            auth: auth
        }
    }
});