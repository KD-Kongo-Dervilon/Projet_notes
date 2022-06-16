import React from 'react'
import Note from '../Note/Note'
import "./NoteContainer.css"

const NoteContainer = () => {
    return (
        <div className="note-container">
            <h2 className='text-center'> Liste de note </h2>
            <div className='note-container_notes'>
                <Note note={{
                    text: "clement",
                    date: "16/06/2022",
                    color: "cyan",
                }}/>
                <Note note={{
                    text: "clement",
                    date: "16/06/2022",
                    color: "cyan",
                }}/>
                <Note note={{
                    text: "clement",
                    date: "16/06/2022",
                    color: "cyan",
                }}/>
                <Note note={{
                    text: "clement",
                    date: "16/06/2022",
                    color: "cyan",
                }}/>
                <Note note={{
                    text: "clement",
                    date: "16/06/2022",
                    color: "cyan",
                }}/>
                <Note note={{
                    text: "clement",
                    date: "16/06/2022",
                    color: "cyan",
                }}/>
            </div>
        </div>
    )
}

export default NoteContainer
