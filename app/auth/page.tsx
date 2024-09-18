"use client"
import { auth } from "@/utils/firebase";
import { GithubAuthProvider, signInWithPopup, signInWithRedirect } from "firebase/auth";
import { useEffect, useState } from "react";

const provider = new GithubAuthProvider();

export default function Auth(){
    const [user, setUser] = useState<any>(null);
    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            setUser(user);
        });

    }, []);
    const signIn = async() => signInWithRedirect(auth, provider);;
    return(
        <div className='w-full h-screen '>
            {JSON.stringify({user})}
            <div className='mx-auto'>
                <button onClick={()=>signIn()}>
                auth with github
                </button>
            </div>
        </div>
    )
}