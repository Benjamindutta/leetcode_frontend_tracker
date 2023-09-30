import { useDispatch, useSelector } from 'react-redux';
import './solves.css';
import React, { useEffect } from 'react';
import { getSolvedQuestions } from '../../Feature/Question/questionSlice';
import Navbar from '../../Components/Navbar';
import Qod from '../../Components/Qod';
const SolvedProblemPage = () => {
    const solvedQuestions = useSelector((state) => state.question.solvedQuestions);
    const user = useSelector((state) => state.user.user);
    const dispatch = useDispatch();
    console.log(solvedQuestions);
    useEffect(() => {
        dispatch(getSolvedQuestions(user.preferred_username));
    }, [])
    return (
        <>
            <div className='container'>
                <div className='navbar'>
                    <Navbar />
                </div>
                <div className='main'>solved</div>
                <div className='qod-box'>
                    <Qod />
                </div>
                <div className='difficulty-box'>diff</div>
            </div>

        </>
    )
}

export default SolvedProblemPage;
