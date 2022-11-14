import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'

export const AuthContext = createContext();

const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user,setUser]= useState(null)
    // console.log(user)
    // create User email ans password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    };
    // log in email and password
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    //add user name
    const updateUserProfile = (profile) =>{
        return updateProfile(auth.currentUser,profile);
     }
    //logout
     const logOut =()=>{
       return signOut(auth);
     }
    //get user
     
    useEffect(()=>{
      const unsubscribe =  onAuthStateChanged(auth,currentUser=>{
        // console.log(currentUser)
            setUser(currentUser)
        });

        return ()=>unsubscribe();

    },[]);
    



    const authInfo = {
        createUser,
        logIn,
        user,
        logOut,
        updateUserProfile
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;