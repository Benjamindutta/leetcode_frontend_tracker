import React, { useEffect, useState } from 'react'
import './qod.css'
const Qod = () => {
    const [question, setQuestion] = useState('');
    useEffect(() => {
        fetch('https://yjcyhb3mzf.execute-api.ap-south-1.amazonaws.com/default/qod').then(response => {
            return response.json();
        }).then(data => {
            setQuestion(data);
        })
    }, []);

    return (
        <div className='container__qod'>
            <img className='giffy' src='https://media.giphy.com/media/kMAsQuuEeQIwm4eSVJ/giphy.gif' />
            <h3 className='question__text'>Question of the day</h3>
            <div><span>click here to </span><a className='prob_link' href={question} target='_blank'>Solve🚀</a></div>
        </div>
    )
}

export default Qod;