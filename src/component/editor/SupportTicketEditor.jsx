"use client";
import React, { useRef, useState } from "react";
import Editor from "./Editor";
import Quill from "quill";

const Delta = Quill.import("delta");

const SupportTicketEditor = () => {
  const [range, setRange] = useState();
  const [lastChange, setLastChange] = useState();

  // Use a ref to access the quill instance directly
  const quillRef = useRef();
  const toolbarOptions = [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image"],
  ];
  return (
    <div>
      <Editor
        ref={quillRef}
        defaultValue={new Delta()}
        onSelectionChange={setRange}
        onTextChange={setLastChange}
        toolbarOptions={toolbarOptions}
        wrapperClass="quill-support-wrapper"
      />
    </div>
  );
};

export default SupportTicketEditor;
