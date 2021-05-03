import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import LoginBg from '../../assets/images/LoginBg.png';
import googleImg from '../../assets/images/google.png';
import appleImg from '../../assets/images/apple.png';
import Logo from '../../assets/images/limofynder.png';



const Login = () => {

    const history = useHistory();
    const [adminLogin, setAdminLogin] = useState({
        email:"",password:""
    })

    let name,value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;
        setAdminLogin({...adminLogin, [name]:value});
    }
 
    const LoginAdmin = async (e) => {
        e.preventDefault();

        const { email, password } = adminLogin;

        const res = await fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                email , password
            })
        });
        const data = await res.json();

        if (data.status === 422 || !data) {
            window.alert("Invalid Credentials");
            console.log('data not received');
        }else {
            // window.alert("Login Successful");
            history.push("/");
        }
    }


    return (
        <>
            <div className="container">
                <div className="container-inner">
                    <div className="left-container" style={{backgroundImage: `url(${LoginBg})`}}>
                    <div className="content-container">
                            <div className="login-right-header">
                            <h1>LimoFinder</h1>
                            <p>MAKE YOUR LIFE EASY</p>
                            </div>
                            <h2>
                            Track Your
                            <br />
                            Drivers
                            </h2>
                            <div className="app-link">
                            <p>Download Our App</p>
                            <ul className="other_link">
                                <li>
                                <a href="/">
                                    <img src={googleImg} alt="GooogleImage"/>
                                </a>
                                </li>
                                <li>
                                <a href="/">
                                    <img src={appleImg} alt="appleImage"/>
                                </a>
                                </li>
                            </ul>
                            </div>
                    </div>
                    </div>
                    <div className="right-container">
                        <div className="left-content-container">
                            <img src={Logo} alt="limoImage"/>
                            <p className="welcome-to-para">
                                Welcome to
                                <br/>
                                <span>
                                    LimoFinder
                                </span>
                            </p>
                            <p className="left-container-login">
                                Login
                            </p>
                            <p className="logging-in-as">
                                You're logging in as an Administrator
                            </p>
                            <form method="POST" className="form_login">
                                <div className="input_email">
                                    <input type="email" name="email" placeholder="email address" value={adminLogin.email} onChange={handleInputs}/>
                                </div>
                                <div className="input_password">
                                    <input type="password" name="password" placeholder="password" value={adminLogin.password} onChange={handleInputs}/>
                                    <div className="input-icon">

                                    </div>
                                </div>
                                <button type="submit" onClick={LoginAdmin}>
                                    Login
                                </button>
                                <div className="forgot_pswd">
                                    <a href="/">Forgot Password?</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;