import Cookies from 'js-cookie';

export const checkUserAuthenticaton = () => {
    const nicknameCookie = Cookies.get('nickname');
    if(nicknameCookie) {
        return nicknameCookie;
    }
    return null;
}