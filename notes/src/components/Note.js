import React, { useState } from 'react'

const Note = () => {
    const [noteText, setNoteText] = useState('');
    const characterLimit = 200;

    const handleChange = (e) => {
        if(characterLimit - e.target.value.length >= 0){ 
            setNoteText(e.target.value)
        }
    }

    const handleSaveClick = () => {
        if(noteText.trim().lenght > 0){

        }
    }

    return (
        <div className="note new ">
            <textarea
                rows='8'
				cols='10'
                value={noteText}
                placeholder="Entre ta note"
                onChange={handleChange}
                >
            </textarea>
            <div className='note-footer'>
                <small>
                    {characterLimit - noteText.length}
                    Reste
                </small>
                <button
                    className='save'
                    onClick={handleSaveClick}
                    >
                    Save
                </button>
            </div>
        </div>
    )
}

export default Note
