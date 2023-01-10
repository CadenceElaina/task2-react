import React from 'react'
import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
//import DropdownButton from 'react-bootstrap/DropdownButton';
import { FaBold, FaItalic, FaLink, FaListUl, FaListOl, FaQuoteLeft, FaPhotoVideo, FaUndo, FaRedo } from 'react-icons/fa'
import { BsTextIndentRight, BsTextIndentLeft, BsCardImage, BsTable } from 'react-icons/bs'
const EditorNoQuill = () => {
    const [selectedText, setSelectedText] = useState('')
    const [editedStart, setEditedStart] = useState('')
    const [boldText, setBoldText] = useState('')
    const [editedEnd, setEditedEnd] = useState('')
    const [selectedStart, setSelectedStart] = useState(0)
    const [selectedLength, setSelectedLength] = useState(0)
    const [selectedEnd, setSelectedEnd] = useState(0)
    const [input, setInput] = useState('')
    // const [edited, setEdited] = useState('')
    const currentSelection = e => {
        /* console.log(
            "current selection",
            e.target.value.substring(e.target.selectionStart, e.target.selectionEnd)
        ); */

        // setEdited(e.target.value.substring(0, e.target.selectionStart)
        //    + e.target.value.substring(e.target.selectionStart, e.target.selectionEnd).toUpperCase())
        setSelectedText(e.target.value.substring(e.target.selectionStart, e.target.selectionEnd))
        setSelectedStart(e.target.selectionStart)
        setSelectedLength(e.target.selectionEnd - e.target.selectionStart,)
        setSelectedEnd(e.target.selectionEnd)
    }
    console.log(selectedText)
    const getSelectionHandler = () => {
        const selection = window.getSelection();
        /*  console.log("Got selection", selection.toString()); */
        // let temp = select.toString()
        //setSelectedText(temp)
    };

    const setBold = () => {
        /* setEdited(e.target.value.substring(0, e.target.selectionStart)
            + e.target.value.substring(e.target.selectionStart, e.target.selectionEnd).toUpperCase()) */
        setEditedStart(input.substring(0, selectedStart))
        setBoldText(selectedText)
        setEditedEnd(input.substring(selectedEnd,))

        // setEdited(input.substring(0, selectedStart) + selectedText.toUpperCase() + input.substring(selectedEnd,))
    }

    const handleChange = (e) => {
        setInput(e.target.value)

    }
    return (
        <div className='editor-container'>
            <div className='toolbar'>
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                        Heading 1
                    </Dropdown.Toggle>

                    <Dropdown.Menu variant="dark">
                        <Dropdown.Item href="#/action-1" active>
                            Paragraph
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Heading 2</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Heading 3</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#/action-4">Heading 4</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <div className='icon' onClick={setBold}><FaBold /></div>
                <div className='icon'><FaItalic /></div>
                <div className='icon'><FaLink /></div>
                <div className='icon'><FaListUl /></div>
                <div className='icon'> <FaListOl /></div>
                <div className='icon'><BsTextIndentRight /></div>
                <div className='icon'><BsTextIndentLeft /></div>
                <div className='icon'><BsCardImage /></div>
                <div className='icon'> <FaQuoteLeft /></div>
                <div className='icon'><BsTable /></div>
                <div className='icon'><FaPhotoVideo /></div>
                <div className='icon'><FaUndo /></div>
                <div className='icon'><FaRedo /></div>
            </div>

            <textarea
                id='input'
                rows={15} cols={75}
                onSelect={currentSelection}
                name="input"
                value={input}
                onChange={handleChange}
            ></textarea>
            <div className='buttonContainer'>
                <button type="button" onClick={getSelectionHandler} >
                    Get Selection
                </button>
            </div>
            <div className='editText'>
                <p>{editedStart}<span className={boldText ? 'currentStyles bold' : 'currentStyles'}>{boldText}</span>{editedEnd}</p>
                <p>Text in editor: {input}</p>
                <p>Selected Text: {selectedText}</p>
            </div>

        </div>
    )
}

export default EditorNoQuill
