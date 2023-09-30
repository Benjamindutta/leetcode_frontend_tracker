import React, { useEffect, useState } from 'react'
import './aipage.css'
import { useDispatch, useSelector } from 'react-redux';
import { getPromptAnswer } from '../../Feature/Question/questionSlice';
import Loading from '../Loading/index'
import Navbar from '../../Components/Navbar';
const AIpage = () => {


    return (
        <>
            <div className='container'>
                <div className='navbar'>
                    <Navbar />
                </div>
                <div className='main'>ai page</div>
                <div className='qod-box'>qod</div>
                <div className='difficulty-box'>diff</div>
            </div>
        </>
    )
}

export default AIpage
