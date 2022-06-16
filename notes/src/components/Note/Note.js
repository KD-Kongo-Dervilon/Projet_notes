import React from 'react';
import './Note.css';

function Note(props) {
    

    return (
        <div 
            style={{backgroundColor: props.note.color}}
            className='note'
            >
            <textarea
                className='note_text'
                defaultValue={props.note.text}
            />
            <small> {props.note.date} </small>
        </div>
    )
}

export default Note;
