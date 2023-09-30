import React, { useEffect } from 'react';
import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../Loading';
import { getRevisionQuestion } from '../../Feature/Question/questionSlice';
import Navbar from '../../Components/Navbar';
import Qod from '../../Components/Qod';
const RevisionPage = () => {
    const revisedQuestions = useSelector((state) => state.question.revisionQuestions);
    const user = useSelector((state) => state.user.user);
    console.log(user.preferred_username)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getRevisionQuestion(user.preferred_username))
    }, []);

    console.log(revisedQuestions);
    return (
        <>
            <div className='container'>
                <div className='navbar'>
                    <Navbar />
                </div>
                <div className='main'>revision</div>
                <div className='qod-box'>
                    <Qod />
                </div>
                <div className='difficulty-box'>diff</div>
            </div>
        </>
    )
}

export default RevisionPage
