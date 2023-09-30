import Cookies from "js-cookie";
import { LoggedOut, clearUser, removeToken } from "../Feature/User/userSlice";
import { useDispatch } from "react-redux";

export function parseJwt(token) {
    if (!token) { return; }
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');

    return JSON.parse(window.atob(base64));
}


export function setCookie(name, value) {
    Cookies.set(name, value);
}

export function getCookie(name) {
    return Cookies.get(name);
}

export function removeCookie(name) {
    Cookies.remove(name);
}

export function Logout() {
    const dispatch = useDispatch();

    dispatch(clearUser());
    dispatch(removeToken());
    dispatch(LoggedOut());
}

export function setJwt(name, value, exp) {
    const expirationDate = new Date(exp * 1000);
    // console.log(expirationDate);
    // const utcExpDate = expirationDate.toUTCString;
    Cookies.set(name, value, { expires: expirationDate });
}

