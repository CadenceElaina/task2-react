import EditorNoQuill from "../components/EditorNoQuill";
import Navigation from "../components/navigation/Navigation";
import React from 'react'

const NoQuill = () => {
    return (
        <div className="containerNoQuill">
            <Navigation />
            <EditorNoQuill />
        </div>
    )
}

export default NoQuill
