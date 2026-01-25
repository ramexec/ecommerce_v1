import { useState } from 'react';
import { useAuth } from '../../services/Auth';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { User, Lock, LogIn } from 'lucide-react';
import './Login.css';

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const auth = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const redirectPath = location.state?.path || '/';
    
    const handleLogin = async () => {
        await auth.login(username, password);
        navigate(redirectPath, { replace: true });
    };

    return (
        <div className="login-page">
            <div className="loginpanel">
                <div className="login-header">
                    <h1 className="login-title">Welcome Back</h1>
                    <p className="login-subtitle">Please login to your account</p>
                </div>

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

                <button onClick={handleLogin} disabled={auth.loading}>
                    {auth.loading ? (
                        'Loading...'
                    ) : (
                        <>
                            <LogIn size={20} />
                            Login
                        </>
                    )}
                </button>

                <div className="login-footer">
                    Don't have an account? <NavLink to="#">Sign up</NavLink>
                </div>
            </div>
        </div>
    );
};