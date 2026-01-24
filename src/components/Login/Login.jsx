import {useState} from 'react'
import { useAuth } from '../../services/Auth';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const auth = useAuth();
    const navigate = useNavigate();

    const handleLogin = async () => {
        await auth.login(username, password)
        navigate("/ecommerce_v1/profile")
    }


  return (
    <div>
        <div className="loginpanel">
            <div className="section">
                <label>Username : </label>
                <input type='text' onChange={(e)=> setUsername(e.target.value)} />
            </div>
            <div className="section">
                <label>Password : </label>
                <input type='text' onChange={(e)=> setPassword(e.target.value)} />
            </div>
            <button onClick={handleLogin}>Click me </button>
        </div>

    </div>
  )
}
