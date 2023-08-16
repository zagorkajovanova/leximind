import Cookies from 'js-cookie';

export const checkUserAuthentication = () => {
    const nicknameCookie = Cookies.get('nickname');
    if(nicknameCookie) {
        return nicknameCookie;
    }
    return null;
}