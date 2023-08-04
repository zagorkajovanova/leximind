import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from '../../axios/axios';

export function Login() {
    const [user, setUser] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setUser(e.target.value);
    }

    const handleLogin = () => {
        //Save nickname in cookie
        const cookieEnc = encodeURIComponent(user);
        const thirtyMinutesFromNow = new Date(new Date().getTime() + 30 * 60 * 1000);
        Cookies.set('nickname', cookieEnc, {expires: thirtyMinutesFromNow, path: '/'});

        saveUser().then(
            navigate('/games')
        )
    }

    const saveUser = async () => {
        try {
            await axios.post('/users', {nickname: user});
            console.log("User saved");
        } catch (error) {
            console.log("Error saving user:", error);
        }
    }

    return <div>
        <input type="text" value={user} onChange={handleInputChange}/>
        <button onClick={handleLogin}>Login</button>
    </div>
}