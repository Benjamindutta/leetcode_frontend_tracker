import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

const Login = () => {
    const loggedin = useSelector((state) => state.user.isloggedIn);
    if (loggedin) {
        return <Navigate to='/' />
    }

    return (
        <div>
            login page

        </div>
    )
}

export default Login
