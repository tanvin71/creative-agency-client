import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import './Login.css'
import logo from '../../../images/logos/logo.png'
import img from'../../../images/google.png';
import firebaseConfig from './firebase.config';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {
    const {loggedInUser, setLoggedInUser} = useContext(UserContext);
     
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    if(firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const provider = new firebase.auth.GoogleAuthProvider();
    const handleSignIn = () =>{
        firebase.auth().signInWithPopup(provider)
        .then(res =>  {
            const {displayName, email} = res.user;
            const signedInUser = {
                isSignedIn: true,
                name: displayName,
                email: email
            }
            setLoggedInUser(signedInUser);
            history.replace(from);
            storeAuthToken()
        })
        .catch(err=> {
            console.log(err)
            console.log(err.message)
        })
    }
    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem('token', idToken);
      }).catch(function (error) {
      });
    }
    return (
        <div>
            <div className="logo text-center ">
              <img src={logo} alt="" className="img-fluid"/>
            </div>
            <div className="text-center login">
            <h2>Login with</h2>
            <button className="mb-3 mt-3 w-75"onClick={handleSignIn} ><img src={img} className="icon-img" alt=""/> Continue with google</button>
            <p>Don't have an account?<span onClick={handleSignIn}>create an account</span> </p>
        </div>
        </div>
    );
};

export default Login;