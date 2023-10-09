import React from 'react'
import './diff.css'
const Diff = ({ difficulty }) => {
    return (
        <span className={difficulty === 'Easy' ? 'easy__diff' : (difficulty === 'Medium' ? 'medium__diff' : 'hard__diff')}>{difficulty}</span>
    )
}

export default Diff
