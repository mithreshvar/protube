import { createContext, useContext, useEffect, useState } from 'react';
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup
} from 'firebase/auth';

import { auth } from '../Firebase';

const UserContext = createContext();

export const AuthContextProvider = ({children}) =>  {

    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword (auth, email, password)
    }

    const login = (email, password) => {
        return signInWithEmailAndPassword (auth, email, password);
    }

    const logout = () => {
        return signOut(auth);
    }

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false)
        });
        return unsubscribe
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
