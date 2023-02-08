import { AuthContext } from "./AuthContext"
import { ReactNode } from 'react';
import { useState } from 'react';
import { User } from "../../types/User";
import { useApi } from "../../hooks/useApi";
import { useEffect } from 'react';


type AuthPtoviderProps = {
    children: ReactNode;
}


export const AuthProvider = ({children}: AuthPtoviderProps) => {
    const [user, setUser] = useState<User | null>(null);
    const api = useApi();

    useEffect(() => {
        const validadeToken = async () => {
            const storageData = localStorage.getItem('authToken');
            if (storageData) {
                const data = await api.validateToken(storageData)
                if (data.user) {
                    setUser(data.user)
                }
            }
        }
        validadeToken();
    }, [api])

    const signIn = async (email: string, passowrd: string) => {
        const data = await api.signin(email, passowrd)
        if (data.user && data.token) {
            setUser(data.user);
            setToken(data.token);
            return true;
        }
        return false;
    } 

    const signOut = async () => {
        await api.logout();
        setUser(null);
        setToken('')
    }

    function setToken(token: string) {
        localStorage.setItem('authToken', token);
    }
    
    return (
        <AuthContext.Provider value={{user, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    )
}