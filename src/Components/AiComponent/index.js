import React, { useEffect, useState } from 'react';
import './index.css'
import Typewriter from "typewriter-effect";
import { BASE_URL } from '../../MIsc/Helpers';
const AiComponent = () => {
    const [code, setCode] = useState('');
    const [language, setLanguage] = useState('');
    const [loading, setLoading] = useState(false);
    const [promptAns, setPromptAns] = useState('');
    const [aiKey, setAiKey] = useState('');
    const body = {
        "model": "gpt-3.5-turbo",
        "messages": [
            {
                "role": "system",
                "content": `You will be provided with ${language} code, and your task is to calculate its time complexity.`
            },
            {
                "role": "user",
                "content": code
            }
        ],
        "temperature": 0,
        "max_tokens": 256,
        "top_p": 1,
        "frequency_penalty": 0,
        "presence_penalty": 0
    }
    const fetchAnswer = async () => {
        try {
            setLoading(true);
            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${aiKey}`,
                    "Connection": "keep-alive",

                },
                body: JSON.stringify(body)
            })
            setLoading(false);
            const data = await response.json();
            setPromptAns(data.choices[0].message.content);
        } catch (e) {
            setLoading(false);
            setPromptAns("some error occured")
            // console.error("Erroe", e);
        }
    }
    useEffect(() => {
        fetch(`${BASE_URL}/api/key/openai`, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((response) => {
            return response.text();
        }).then((data) => {
            // console.log(data)
            setAiKey(data);
        });
    }, [])
    // console.log(code);
    // console.log(language);
    // console.log(promptAns)
    return (
        <div className='ai__container'>
            <h3>Calculate and explaination of time complexity</h3>
            <div className='code__container'>
                <textarea placeholder='Paste your code here' className='codeArea' onChange={(e) => setCode(e.target.value)} />
                <div className='form__container'>
                    <form className='form'>
                        <label htmlFor='language'>Select Language :  </label>
                        <select id='language' value={language} onChange={(e) => setLanguage(e.target.value)}>
                            <option value='None'>None</option>
                            < option value='Javascript'>JavaScript</option>
                            <option value='Python'>Python</option>
                            <option value='Java'>Java</option>
                        </select>
                    </form>
                    <button className='promptButton' onClick={() => fetchAnswer()}>Get O(n)</button>
                </div>
            </div>
            <div className='generate__container'>
                {
                    loading && <Typewriter
                        options={{
                            loop: true,
                            cursor: '🤖'
                        }}
                        onInit={(typewriter) => {
                            typewriter
                                .typeString('<span style="color: #27ae60;">Generating...</span>')
                                .pauseFor(100)
                                .deleteChars(3)
                                .typeString('<span style="color: #27ae60;>...</span>')
                                .start()
                        }} />
                }
            </div>

            <div className='promptans__container'>
                {
                    (promptAns.length != 0 && loading !== true) ?
                        <Typewriter
                            options={{
                                delay: 5,
                                cursor: '🤖'
                            }}
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString(promptAns)
                                    .pause()
                                    .start()
                            }} /> : <></>
                }
            </div>

        </div >
    )
}

export default AiComponent
