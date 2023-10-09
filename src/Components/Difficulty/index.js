import React, { useEffect, useState } from 'react';
import './diff.css';
import { useSelector } from 'react-redux';
import Loading from '../Loading';
import { BASE_URL } from '../../MIsc/Helpers';
const Difficulty = () => {
    const user = useSelector((state) => state.user.user);
    const username = user.preferred_username;
    const [difficulty_qs, setDifficulty_qs] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch(`${BASE_URL}/api/difficulty/${username}`, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((response) =>
            response.json()
        ).then((data) => {
            setDifficulty_qs(data);
            setLoading(false);
        })
    }, []);

    if (loading) {
        return <Loading />
    }
    return (
        <div className='container__diff'>
            <div className='stats'>Stats</div>
            <div className='levels__diff'><span className='easy'>😎 Easy :</span><span>  {difficulty_qs.easy}</span></div>
            <div className='levels__diff'><span className='medium'>😉 Medium :</span><span>{difficulty_qs.medium}</span></div>
            <div className='levels__diff'><span className='hard'>😰 Hard :</span><span>  {difficulty_qs.hard}</span></div>
        </div>
    )
}

export default Difficulty
