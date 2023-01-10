import React from "react";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./EditorToolbar";
import "react-quill/dist/quill.snow.css";


//https://medium.com/@mircea.calugaru/react-quill-editor-with-full-toolbar-options-and-custom-buttons-undo-redo-176d79f8d375

const Editor = () => {
    const [state, setState] = React.useState({ value: null });
    const handleChange = value => {
        setState({ value });
    };
    return (
        <div className="text-editor">
            <EditorToolbar />
            <ReactQuill
                theme="snow"
                value={state.value}
                onChange={handleChange}
                placeholder={"Write something great..."}
                modules={modules}
                formats={formats}
            />
        </div>
    );
};
export default Editor; 