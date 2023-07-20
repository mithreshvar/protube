import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
} from 'firebase/auth';

import { auth } from '../Firebase';

const UserContext = createContext();

export const AuthContextProvider = ({children}) =>  {

    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true)

    const createUser = async (email, password) => {
        return createUserWithEmailAndPassword (auth, email, password);
        // try {
        //     let user = await createUserWithEmailAndPassword (auth, email, password);
        //     let idToken = await user.user.getIdToken(true);
        //     let response = await fetch('/api/user/login', {
        //         method: "POST",
        //         headers: { 'Authorization': `Bearer ${idToken}` },
        //     });
        //     const json = await response.json();

        //     if (response.ok) {
        //         setCredits(json.credits);
        //     }
        //     else {
        //         console.log(json.error)
        //     }
        // }
        // catch(err) {
        //     console.log(err.message);
        // }
    }

    const login = async (email, password) => {
        return signInWithEmailAndPassword (auth, email, password);
        // try {
        //     let user = await signInWithEmailAndPassword (auth, email, password);
        //     let idToken = await user.user.getIdToken(true);
        //     let response = await fetch('/api/user/login', {
        //         method: "POST",
        //         headers: { 'Authorization': `Bearer ${idToken}` },
        //     });
        //     const json = await response.json();

        //     if (response.ok) {
        //         setCredits(json.credits);
        //     }
        //     else {
        //         console.log(json.error)
        //     }
        // }
        // catch(err) {
        //     console.log(err.message);
        // }
    }

    const logout = () => {
        return signOut(auth);
    }

    const googleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
        // try {
        //     let user = await signInWithPopup(auth, provider);
        //     let idToken = await user.user.getIdToken(true);
        //     let response = await fetch('/api/user/login', {
        //         method: "POST",
        //         headers: { 'Authorization': `Bearer ${idToken}` },
        //     });
        //     const json = await response.json();

        //     if (response.ok) {
        //         setCredits(json.credits);
        //     }
        //     else {
        //         console.log(json.error)
        //     }
        // }
        // catch(err) {
        //     console.log(err.message);
        // }
    }

    // const count = useRef(0); //! remove on production

    useEffect(() => {
        // if (count.current !== 0) { //! remove on production
            const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
                if (currentUser){
                    try {
                        let idToken = await currentUser.getIdToken(true);
                        let response = await fetch('https://protube-backend.onrender.com/api/user/login', {
                            method: "POST",
                            headers: { 'Authorization': `Bearer ${idToken}` },
                        });
                        const json = await response.json();
            
                        if (response.ok) {
                            console.log(currentUser)
                            currentUser.credits = json.credits;
                            setUser(currentUser);
                            setLoading(false);
                        }
                        else {
                            console.log(json.error)
                        }
                    }
                    catch(err) {
                        console.log(err.message);
                    }
                }
                else {
                    setUser(currentUser);
                    setLoading(false);
                }
            });
            return unsubscribe
        // }
        // count.current++; //! remove on production
    }, []);


    return (
        <UserContext.Provider value={{ user, createUser, logout, login, googleSignIn }}>
          { !loading && children }
        </UserContext.Provider>
      );
}

export const UserAuth = () => {
    return useContext(UserContext);
}
