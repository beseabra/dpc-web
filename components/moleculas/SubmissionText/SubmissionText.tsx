"use client";
import { useState } from "react";

import "react-quill/dist/quill.snow.css";

export default function SubmissionText() {
  const myColors = [
    "purple",
    "#785412",
    "#452632",
    "#856325",
    "#963254",
    "#254563",
    "white",
  ];
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ align: ["right", "center", "justify"] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["image"],
      [{ color: myColors }],
      [{ background: myColors }],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "color",
    "image",
    "background",
    "align",
  ];
  const ReactQuill =
    typeof window === "object" ? require("react-quill") : () => false;
  const [code, setCode] = useState("");
  const handleProcedureContentChange = (content: any) => {
    setCode(content);
  };
  return (
    <>
      <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        value={code}
        onChange={handleProcedureContentChange}
      />
      {code && <div dangerouslySetInnerHTML={{ __html: code }}></div>}
    </>
  );
}
