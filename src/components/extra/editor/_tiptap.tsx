"use client";

import { FC, useEffect, useState } from "react";

import { useEditor, EditorContent } from "@tiptap/react";

// Extensions for tiptap editor
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import Link from "@tiptap/extension-link";
import MenuBar from "./components/_menuBar";

interface TipTapProps {
  isPostEditor?: boolean;
  content?: string;
}

const TipTap: FC<TipTapProps> = ({ content, isPostEditor }: TipTapProps) => {
  const [isEditable, setIsEditable] = useState<boolean>(true);

  const runErrorNoEditor = () =>
    console.error(
      "TipTap editor is not loaded or had an Error while passing data ! Please check if editor working and code is not corrupted",
    );

  const editor = useEditor({
    extensions: [
      StarterKit,
      ListItem,
      TextStyle,
      Placeholder.configure({
        emptyEditorClass: "is-editor-empty",
        placeholder: "Please write your comment over there... ",
      }),
      Link.configure({
        validate: (href) => /^https?:\/\//.test(href),
        HTMLAttributes: {
          class: "underline underline-offset-2 text-highlight",
        },
      }),
    ],
    editorProps: {
      attributes: {
        class:
          "tiptap-editor-wrapper font-inter leading-normal focus:outline-none",
      },
    },
  });

  useEffect(() => {
    if (editor) {
      editor.setEditable(isEditable);
    } else {
      runErrorNoEditor();
    }
  }, [isEditable, editor]);

  return (
    <>
      {editor && <MenuBar editor={editor} isPostEditor={isPostEditor} />}
      <EditorContent editor={editor} content={content} />
    </>
  );
};

export default TipTap;
