import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import  {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from 'firebase/auth';

export const AuthContexts = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const createUser =(email,password)=>{
            setLoading(true)
            return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }

    const updateUser = (userInfo) =>{
       return updateProfile(auth.currentUser,userInfo);
    }
    
    const logOut =() =>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect ( ()=>{
       const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log(currentUser);
            setUser(currentUser)
            setLoading(false)
        })
        return () => unsubscribe();
    },[])
     
    const authInfo = {createUser,signIn,logOut,updateUser,user,loading}

    return (
        <AuthContexts.Provider value={authInfo}>
            {children}
        </AuthContexts.Provider>
    );
};

export default AuthProvider;