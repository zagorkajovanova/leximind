import {useState, useEffect} from "react";
import Cookies from 'js-cookie';
import {Navbar} from "../common/Navbar";
import {Container} from "@mui/material";

export function Profile() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        getUser();
    })

    const getUser = () => {
        const cookieNickname = Cookies.get('nickname');
        if(cookieNickname) {
            setUser(cookieNickname);
        }
    }

    return <div>
        <Navbar />

        <Container>
            <h4>Корисник: {user}</h4>
        </Container>
    </div>
}