import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';
import './login.css';
import { SiGithub } from "react-icons/si";
import Typewriter from "typewriter-effect";
import { SiLeetcode } from "react-icons/si";
import { BASE_URL } from '../../MIsc/Helpers';
const Login = () => {
    const loggedin = useSelector((state) => state.user.isloggedIn);
    if (loggedin) {
        return <Navigate to='/' />
    }
    const loginURI = `${BASE_URL}/oauth2/authorization/github`;
    return (
        <div className='login__container'>
            < SiLeetcode size='90px' />
            <div className='typewritter__container'>
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .typeString("Leetcodrz")
                            .start();
                    }} />
            </div>
            <div className='login__github__container'>
                <div>Login</div>
                <p><a className="github__icon" href={loginURI}><SiGithub color='rgb(170, 255, 0)' size='96px' className='git_icon' /></a></p>
            </div>
        </div >
    )
}

export default Login
