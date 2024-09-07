import React, { useRef, useState } from "react";
import Editor from "./Editor";
import Quill from "quill";

const Delta = Quill.import("delta");

const MessageEditor = () => {
  const [range, setRange] = useState();
  const [lastChange, setLastChange] = useState();

  // Use a ref to access the quill instance directly
  const quillRef = useRef();
  const toolbarOptions = [["bold", "italic", "underline"], ["image"]];
  return (
    <div>
      <Editor
        ref={quillRef}
        defaultValue={new Delta()}
        onSelectionChange={setRange}
        onTextChange={setLastChange}
        toolbarOptions={toolbarOptions}
        wrapperClass="quill-wrapper"
      />
    </div>
  );
};

export default MessageEditor;
