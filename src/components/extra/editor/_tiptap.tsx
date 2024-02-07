"use client";

import { FC } from "react";

import { useEditor, EditorContent } from "@tiptap/react";

// Extensions for tiptap editor
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";

interface TipTapProps {}

const TipTap: FC<TipTapProps> = ({}: TipTapProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        emptyEditorClass: "is-editor-empty",
        placeholder: "Please write your comment over there... ",
      }),
    ],
    editorProps: {
      attributes: {
        class:
          "tiptap-editor-wrapper font-inter leading-normal focus:outline-none",
      },
    },
  });

  return <EditorContent editor={editor} />;
};

export default TipTap;
