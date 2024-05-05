"use client";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface SubmissionTextProps {
  onChange: (content: string) => void;
}

export default function SubmissionText({ onChange }: SubmissionTextProps) {
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

  const [code, setCode] = useState("");

  useEffect(() => {
    setCode("");
  }, []);

  const handleProcedureContentChange = (content: string) => {
    setCode(content);
    onChange(content);
  };

  return (
    <div style={{ marginTop: "1rem" }}>
      <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        value={code}
        onChange={handleProcedureContentChange}
      />
    </div>
  );
}
