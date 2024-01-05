import React, { useState } from 'react'

const TextForm = (props) => {

    const handleUpClick = () => {
        // console.log('Uppercase was clicked')
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to uppercase",'success')
    }

    const handleOnChanged = (event) => {
        // console.log('On change')
        setText(event.target.value)
    }

    const handleLowerClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase",'success')
    }

    const handleClear = () => {
        let newText = ''
        setText(newText)
        props.showAlert("Text is cleared",'success')
    }

    const [text, setText] = useState('');

    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" rows="8" value={text} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} onChange={handleOnChanged}></textarea>
                </div>
                <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to uppercase</button>
                <button className="btn btn-primary mx-3" onClick={handleLowerClick}>Convert to lowercase</button>
                <button className="btn btn-primary mx-3" onClick={handleClear}>Clear text</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something in the textbox above for preview"}</p>
            </div>
        </>
    )
}

export default TextForm