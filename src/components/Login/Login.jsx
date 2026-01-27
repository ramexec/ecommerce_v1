import { Lock, LogIn, Mail, TableRowsSplit, User } from 'lucide-react';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../services/Auth';
import './Login.css';
import {toast} from "react-toastify"

export const Login = () => {

    const [mode,setMode] = useState('login')

    const [firstName,setFirstName] = useState('');
    const [secondName,setSecondName] = useState('');
    const [email,setEmail] = useState('');

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const auth = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const redirectPath = location.state?.path || '/';
    
    const handleSubmitLogin = async () => {
        const data = {
            "username":username,
            "password":password
        }
        try{
            await auth.login(data);
            navigate(redirectPath, { replace: true });
        }catch(err){
            toast.error(err?.response?.data?.error);
        }
    
    };

    const handleSubmitRegister = async () =>
    {
        const data = {
            "firstName":firstName.trim(),
            "secondName":secondName.trim(),
            "email":email.trim(),
            "username":username.trim(),
            "password":password.trim()
        }

        try{
            await auth.signup(data)
            setMode("login")
        }catch(err){
            Object.values(err?.response?.data || {}).forEach((msg) => toast.error(msg))
        }
      
    }

    return (
        <div className="login-page">
            <div className="loginpanel">
                <div className="login-header">
                    <h1 className="login-title">Welcome Back</h1>
                    <p className="login-subtitle">Please login to your account</p>
                </div>
                {mode ==='register' && (
                <div className="register">
                    <div className="register-name">
                        <div className="section">
                            <label>First Name</label>
                            <div className="input-wrapper">
                                <User size={20} className="input-icon" />
                                <input
                                    type="text"
                                    placeholder="Enter your Firstname"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </div>
                        </div>
                        
                        <div className="section">
                            <label>Second Name</label>
                            <div className="input-wrapper">
                                <User size={20} className="input-icon" />
                                <input
                                    type="text"
                                    placeholder="Enter your Secondname"
                                    value={secondName}
                                    onChange={(e) => setSecondName(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="section">
                        <label>Email</label>
                        <div className="input-wrapper">
                            <Mail size={20} className="input-icon" />
                            <input
                                type="email"
                                placeholder="email@email.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                )}
                
                <div className="section">
                    <label>Username</label>
                    <div className="input-wrapper">
                        <User size={20} className="input-icon" />
                        <input
                            type="text"
                            placeholder="Enter your username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                </div>

                <div className="section">
                    <label>Password</label>
                    <div className="input-wrapper">
                        <Lock size={20} className="input-icon" />
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>

                <button className='login-btn' onClick={mode === 'login' ? handleSubmitLogin: handleSubmitRegister} disabled={auth.loading}>
                    {auth.loading ? (
                        'Loading...'
                    ) : (
                        <>
                            <LogIn size={20} />
                            {mode != 'register' ? "Login" : "Register"}
                        </>
                    )}
                </button>

                <div className="login-footer">{mode != 'register' ? "Don't have an account? " : "Have an account? "}
                     {mode !== 'register' && (<a className="register-btn" onClick={() => setMode('register')}>Register now</a>)}
                     {mode !== 'login' && (<a className="register-btn" onClick={() => setMode('login')}>Login now</a>)}
                </div>
            </div>
        </div>
    );
};