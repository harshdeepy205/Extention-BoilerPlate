import React from 'react'
import './login.css';

function Login() {
    return (
    <>
            <div className="container">
                <div className="brand-logo"></div>
                    <div className="brand-title">Terra Station</div>
                <div className="inputs">
                <label>EMAIL</label>
                    <input type="email" placeholder="example@test.com" />
                <label>PASSWORD</label>
                    <input type="password" placeholder="Min 6 charaters long" />
                <button type="submit">LOGIN</button>
                </div>
            </div>
    </>
    )
}

export default Login
