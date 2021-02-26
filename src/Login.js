import React, { useState } from 'react'
import './Login.css'
import Linkedin from "./img/Linkedin-Logo.png"
import {auth} from "./firebase"
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';

function Login() {

    const [name, setName] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();


    const loginToApp = (e) =>{
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then((userAuth) =>{
            dispatch((login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                profileUrl: userAuth.user.photoURL
            })))
        }).catch((error) => alert(error))
    }

    const register = () =>{
        
        if(!name){
            alert("Please enter your full name")
        }

        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth)=> {
            userAuth.user.updateProfile({
                displayName: name,
                photoUrl: profilePic
            })
            .then(() => {
                dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: profilePic
                }))

            })
        })
        .then((error) => alert(error))

    }
    return (
        <div className="login">
            <img src={Linkedin} alt="Linked-in"/>

            <form>
            <input type="text" value={name} onChange={e=> setName(e.target.value)} placeholder="Full Name (If Register)"/>
            <input type="text" value={profilePic} onChange={e=> setProfilePic(e.target.value)} placeholder="Profile Picture URL (OPTIONAL) "/>

            <input type="email" value={email} onChange={e=> setEmail(e.target.value)} placeholder="Enter Email Address "/>

            <input type="password" value={password} onChange={e=> setPassword(e.target.value)} placeholder="Type Password "/>

            <button type="submit" onClick={loginToApp}>Sign In</button>
  
            </form>
            <p> Don't have an account? <span onClick={register} className="login__register">Register Now</span></p>
        </div>
    )
}

export default Login
