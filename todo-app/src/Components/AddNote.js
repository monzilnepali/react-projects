import React from 'react';

function AddNote(props) {
    return (
        <input type="text" className={'add-note'} placeholder={'Add Note'} autoFocus={true} value={props.inputData} onChange={props.inputChangeHandler} onKeyPress={props.addNoteHandler} />
    );
}
export default AddNote;