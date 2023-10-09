import React, { useEffect, useState } from 'react';
import "./main.css";
import { useSelector } from 'react-redux';
import Navbar from '../../Components/Navbar';
import Typewriter from "typewriter-effect";
import LoadingPage from '../LoadingPage';
import { BASE_URL } from '../../MIsc/Helpers';
const MainPage = () => {
    const loggedIn = useSelector((state) => state.user.isloggedIn);
    const [isFocused, setIsFocused] = useState(false);
    const [loading, setLoading] = useState(true);
    const [leetcodeusername, setleetusername] = useState('');
    const user = useSelector((state) => state.user.user);
    const [requestBody, setRequestBody] = useState({
        username: user ? user.preferred_username : "",
        leetcodeUsername: '*'
    });
    const handleSubmit = () => {
        setLoading(true);
        fetch(`${BASE_URL}/api/users/updateLeetcodeuser/${user.preferred_username}`, {
            method: 'PUT',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...requestBody, leetcodeUsername: leetcodeusername })
        }).then((response) => response.json())
            .then(data => {
                setRequestBody({ ...requestBody, leetcodeUsername: data.leetcodeUsername })
                setLoading(false);
            })
    }

    const handleinput = (e) => {
        e.preventDefault();
        setleetusername(e.target.value);
    }

    useEffect(() => {

        if (user !== null) {
            fetch(`${BASE_URL}/api/users/leetcode/${user.preferred_username}`, {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then(response => response.text())
                .then(data => {
                    setRequestBody({ ...requestBody, leetcodeUsername: data });
                    setLoading(false);
                })
        } else {
            setLoading(false);
        }

    }, [])

    if (loading) {
        return <LoadingPage />
    }
    return (
        <>
            <div className='main__container'>
                <div className='nav_container'><Navbar /></div>
                <div className='main__content__container'>
                    {
                        loggedIn && <div className='typewritter__container'>
                            <Typewriter
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString("Welcome " + user.preferred_username)
                                        .start();
                                }} />
                        </div>
                    }
                    {
                        (loggedIn && requestBody.leetcodeUsername === '*') && <div>
                            <div>
                                <input className='input__leetcode'
                                    onChange={(e) => handleinput(e)}
                                    type='text'
                                    placeholder='Enter Leetcode Username'
                                    onFocus={() => setIsFocused(true)}
                                    onBlur={() => setIsFocused(false)} />
                                <button type="button" className='button_leet' onClick={() => handleSubmit()}>Submit</button>
                                {
                                    isFocused && <div className='warning'><h5>Warning: Please enter exact Leetcode username</h5></div>
                                }
                            </div>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default MainPage