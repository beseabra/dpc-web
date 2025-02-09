"use client";
import { supabase } from "@/app/api/actions/supabase";
import Bold from "@tiptap/extension-bold";
import BulletList from "@tiptap/extension-bullet-list";
import Heading from "@tiptap/extension-heading";
import Image from "@tiptap/extension-image";
import Italic from "@tiptap/extension-italic";
import ListItem from "@tiptap/extension-list-item";
import OrderedList from "@tiptap/extension-ordered-list";
import Strike from "@tiptap/extension-strike";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useState } from "react";
import "./SubmissionText.module.css";

interface SubmissionTextProps {
  onChange: (content: string) => void;
}

export default function SubmissionText({ onChange }: SubmissionTextProps) {
  const [content, setContent] = useState("");

  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Bold,
      Italic,
      Underline,
      Strike,
      BulletList,
      OrderedList,
      ListItem,
      Heading.configure({ levels: [1, 2, 3] }),
    ],
    content: "",
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      setContent(html);
      onChange(html);
    },
  });

  const addImage = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const fileName = `${Date.now()}-${file.name}`;
    const { data, error } = await supabase.storage
      .from("profileImage") 
      .upload(fileName, file);

    if (error) {
      console.error("Erro ao enviar imagem:", error.message);
      return;
    }

    const { data: publicUrl } = supabase.storage.from("profileImage").getPublicUrl(fileName);
    if (publicUrl.publicUrl) {
      editor?.chain().focus().setImage({ src: publicUrl.publicUrl }).run();
    }
  };

  if (!editor) {
    return <p>Carregando editor...</p>;
  }

  return (
    <div className="editor-container">
      <div className="toolbar">
        <button onClick={() => editor.chain().focus().toggleBold().run()}><b>B</b></button>
        <button onClick={() => editor.chain().focus().toggleItalic().run()}><i>I</i></button>
        <button onClick={() => editor.chain().focus().toggleUnderline().run()}><u>U</u></button>
        <button onClick={() => editor.chain().focus().toggleStrike().run()}><s>S</s></button>
        <button onClick={() => editor.chain().focus().setTextAlign("left").run()}>⬅</button>
        <button onClick={() => editor.chain().focus().setTextAlign("center").run()}>⬜</button>
        <button onClick={() => editor.chain().focus().setTextAlign("right").run()}>➡</button>
        <button onClick={() => editor.chain().focus().toggleBulletList().run()}>• Lista</button>
        <button onClick={() => editor.chain().focus().toggleOrderedList().run()}>1. Lista</button>

        <input type="file" accept="image/*" onChange={addImage} style={{ display: "none" }} id="upload-image" />
        <label htmlFor="upload-image" className="upload-button">🖼️ Upload</label>
      </div>

      <EditorContent editor={editor} />
    </div>
  );
}
