import React from 'react'

const QuestionCard = ({ id, title, url }) => {
    return (
        <div className='card__container'>
            <span>{id}</span>
            <span>{title}</span>
            <a href={url} >{url}</a>
            {/* <difficultyBAdge /> */}
        </div>
    )
}

export default QuestionCard
