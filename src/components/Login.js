import React,{useState} from "react";
import StorefrontIcon from '@mui/icons-material/Storefront';

import "../Styles/Login.css";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div className="login">
            <div className="login__logo">
                <StorefrontIcon className="login__logoImage" fontSize="large" />
                <h2 className="login__logoTitle">eShop</h2>
            </div>
            <div className="login__container">
                <h1>Sign-In</h1>
                <form>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
                    <button type='submit' className='login__signInButton'>Sign In</button>
                </form>
                <p>
                    By signing-in you agree to the eShop Website Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
            </div>
        </div>
    );
}

export default Login;