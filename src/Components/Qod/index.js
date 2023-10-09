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
            <img className='giffy' src='https://media.giphy.com/media/ewh4ipgPw1bBVj4HI5/giphy.gif' loading='lazy' />
            <h3 className='question__text'>Question of the day</h3>
            <div className='solve__text'><span>click here to </span><a className='prob_link' href={question} target='_blank'>Solve🚀</a></div>
        </div>
    )
}

export default Qod;