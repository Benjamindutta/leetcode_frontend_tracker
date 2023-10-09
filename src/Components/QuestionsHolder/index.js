import React, { useEffect, useMemo, useState } from 'react'
import './qholder.css';
import Diff from '../Diff';
import YoutubeModal from '../YoutubeModal';
import { useSelector } from 'react-redux';
import Loading from '../Loading';
import { SiYoutube } from "react-icons/si";
import coding from '../../media/coding.svg'
import { BASE_URL } from '../../MIsc/Helpers';
const QuestionsHolder = ({ questions, type }) => {
    const [key, setKey] = useState(null);
    const [sortBy, setSortBy] = useState('');
    const [query, setQuery] = useState('');
    const loading = useSelector((state) => state.question.loading);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [question, setQuestion] = useState('');
    const difficultyLevels = {
        'Easy': 1,
        'Medium': 2,
        'Hard': 3
    }
    const handleChange = (e) => {
        setSortBy(e.target.value);
    }
    const filteredQs = useMemo(() => {
        let fq = questions.filter((question) => { return question.title.toLowerCase().includes(query) });
        if (sortBy === 'h-t-l') {
            return fq.sort((a, b) => difficultyLevels[a.difficulty] - difficultyLevels[b.difficulty]);
        }
        if (sortBy === 'l-t-h') {
            return fq.sort((a, b) => difficultyLevels[b.difficulty] - difficultyLevels[a.difficulty]);
        }
        return fq;
    }, [query, questions, sortBy])
    useEffect(() => {
        fetch(`${BASE_URL}/api/key/youtube`, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((response) => {
            return response.text();
        }).then((data) => {
            setKey(data);
        });
    }, []);

    const handleHelp = (q) => {
        setQuestion(q);
        setIsModalOpen(true);
    }

    if (loading === true) {
        return <Loading />
    }
    return (
        <>
            {
                questions.length !== 0 ?
                    <div className='holder__container'>
                        <div className='search_div'>
                            <input type='search' placeholder='Search' onChange={(e) => setQuery(e.target.value)} />
                        </div>
                        <div className='solve__class'>
                            <h3>Solved Questions :</h3>
                            <form>
                                <label htmlFor="sort">Sort by :  </label>
                                <select id='sort' value={sortBy} onChange={handleChange}>
                                    <option value='None'>None</option>
                                    <option value='#' disabled></option>
                                    <option value='h-t-l'>Difficulty ⬆️</option>
                                    <option value='#' disabled></option>
                                    <option value='l-t-h'>Difficulty ⬇️</option>
                                </select>
                            </form>
                        </div>
                        <div className='scrollable__list'>
                            <div className='questions__list__holder'>
                                {
                                    filteredQs.map((question) => (
                                        <div className='question__div' key={question.id}>
                                            <span className='id__span'>{question.id}</span>
                                            <span className='title__span'>{question.title.length > 15 ? question.title.substring(0, 15) + "..." : question.title}</span>
                                            <a className='link__span' href={question.url} target="_blank">Link</a>
                                            <span className='diff_class'><Diff difficulty={question.difficulty} /></span>
                                            <span className='action__span'>{type === "revision" ? "Revised✔️" : "To Revision🔁"}</span>
                                            <span className='youtube__img'><SiYoutube color='#FD1C03' className='youtubeicon' cursor='pointer' onClick={() => handleHelp(question.id + ". " + question.title)} /></span>
                                        </div>
                                    ))

                                }

                            </div>
                        </div>
                    </div> : <div className='No_question_container'>

                        <h3>{type === 'solve' ? "You have not solved questions yet" : "No question for revision"}🤕</h3>
                        <img className='empty__image ' src={coding} />
                    </div>
            }
            {
                isModalOpen && <YoutubeModal isModalOpen={isModalOpen} question={question} setIsModalOpen={setIsModalOpen} key_api={key} />
            }
        </>
    )
}

export default QuestionsHolder
