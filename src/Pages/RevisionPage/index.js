import React, { useEffect } from 'react';
import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import { getRevisionQuestion } from '../../Feature/Question/questionSlice';
import Navbar from '../../Components/Navbar';
import Qod from '../../Components/Qod';
import Difficulty from '../../Components/Difficulty';
import QuestionsHolder from '../../Components/QuestionsHolder';
const RevisionPage = () => {
    const revisedQuestions = useSelector((state) => state.question.revisionQuestions);

    const user = useSelector((state) => state.user.user);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getRevisionQuestion(user.preferred_username))
    }, []);

    return (
        <>
            <div className='container'>
                <div className='navbar'>
                    <Navbar />
                </div>
                <div className='main'>
                    <QuestionsHolder questions={revisedQuestions} type={"revision"} />
                </div>
                <div className='qod-box'>
                    <Qod />
                </div>
                <div className='difficulty-box'>
                    <Difficulty />
                </div>
            </div>
        </>
    )
}

export default RevisionPage
