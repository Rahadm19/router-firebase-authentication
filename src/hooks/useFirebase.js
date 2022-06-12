import { useEffect } from "react";
import { useState } from "react"
import {getAuth, onAuthStateChanged, signInWithPopup, signOut} from "firebase/auth"
import app from '../firebase.init'
import { GoogleAuthProvider } from "firebase/auth";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const useFirebase = () =>{
    const [user, setUser] = useState({});

   

    const signInWithGoogle = () =>{
        signInWithPopup(auth, provider)
        .then (result =>{
            const user = result.user;
            setUser(user);
            console.log(user)
        })
        .catch(error =>{
            console.log(error)
        })
    }

    useEffect( () => {
        onAuthStateChanged (auth, user =>{
            setUser(user);
        })
    },[]);

    const handleSignOut =()=>{
        signOut(auth)
        .then(()=>{

        })
    }

    // return [user, setUser];
    return {
        user,
        signInWithGoogle,
        handleSignOut
    }
}

export default useFirebase;