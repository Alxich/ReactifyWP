"use client";

import { Dispatch, FC, SetStateAction, useCallback, useEffect } from "react";

import { useEditor, EditorContent } from "@tiptap/react";

// Extensions for tiptap editor
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Link from "@tiptap/extension-link";

interface TipTapProps {
  boldSelected: boolean;
  italicSelected: boolean;
  setLinkSelected: Dispatch<SetStateAction<boolean>>;
  linkWritted: string | null | undefined;
  setLinkWritted: Dispatch<SetStateAction<string | null | undefined>>;
  linkButtonClicked: boolean;
  setLinkButtonClicked: Dispatch<SetStateAction<boolean>>;
}

const TipTap: FC<TipTapProps> = ({
  boldSelected,
  italicSelected,
  setLinkSelected,
  linkWritted,
  setLinkWritted,
  linkButtonClicked,
  setLinkButtonClicked,
}: TipTapProps) => {
  const runErrorNoEditor = () =>
    console.error(
      "TipTap editor is not loaded or had an Error while passing data ! Please check if editor working and code is not corrupted",
    );

  const editor = useEditor({
    extensions: [
      StarterKit,
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

  const setLink = useCallback(
    (e?: React.MouseEvent<HTMLButtonElement>) => {
      e?.preventDefault();

      const url = linkWritted;

      // cancelled
      if (url === null) {
        return;
      }

      // empty
      if (url === "" || url === undefined) {
        editor?.chain().focus().extendMarkRange("link").unsetLink().run();

        return;
      }

      // update link
      if (editor) {
        editor
          .chain()
          .focus()
          .extendMarkRange("link")
          .setLink({ href: url })
          .run();

        setLinkWritted(null);
        setLinkSelected(false);
        setLinkButtonClicked(false);
      } else {
        runErrorNoEditor();
      }
    },
    [editor],
  );

  useEffect(() => {
    console.log(boldSelected, italicSelected);
    if (editor) {
      boldSelected
        ? () => editor.chain().focus().setBold().run()
        : () => editor.chain().focus().unsetBold().run();

      italicSelected
        ? () => editor.chain().focus().setItalic().run()
        : () => editor.chain().focus().unsetItalic().run();

      linkButtonClicked && setLink();

      console.log(linkButtonClicked);
    }
  }, [editor, boldSelected, italicSelected, linkButtonClicked]);

  return <EditorContent editor={editor} />;
};

export default TipTap;
