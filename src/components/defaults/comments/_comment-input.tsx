"use client";

import { FC, useCallback, useState } from "react";
import Image from "next/image";
import classNames from "classnames";

import { useEditor, EditorContent } from "@tiptap/react";

// Extensions for tiptap editor
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Link from "@tiptap/extension-link";

import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/24/outline";

import thumbnail1 from "../../../../public/images/thumbnail-1.png";
import { Button, SvgIcons, Tiptap } from "@/components";

interface CommentWrapperProps {
  type: "edit" | "reg" | "answer";
  author: {
    thumbnail: string;
    name: string;
  };
  content: string;
}

const CommentInput: FC<CommentWrapperProps> = ({
  type,
  author,
  content,
}: CommentWrapperProps) => {
  const [linkSelected, setLinkSelected] = useState<boolean>(false);
  const [linkWritted, setLinkWritted] = useState<string | null | undefined>();

  const submitBtnText = () => {
    switch (type) {
      case "answer":
        return "Answer";

      case "edit":
        return "Comment";

      case "reg":
        return "Answer";

      default:
        break;
    }
  };

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

      console.log(url);

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
      } else {
        runErrorNoEditor();
      }
    },
    [editor],
  );

  return (
    <div className="comment-wrapper flex w-full flex-col items-start justify-center space-y-md rounded-lg border border-black border-opacity-25 p-xl child:w-full">
      <div className="author flex items-center justify-start space-x-xs">
        <div className="thumbnail h-5xl w-5xl cursor-pointer overflow-hidden rounded-full ">
          <Image src={thumbnail1} alt="author-comment-thumbnail" />
        </div>
        <div
          className={classNames(
            "name cursor-pointer text-large font-semibold text-black",
            {
              "flex w-full flex-row items-center justify-between":
                type === "answer",
            },
          )}
        >
          <p className="text-inherit">
            {type === "answer" ? "Your answer to this..." : author.name}
          </p>
          {type === "answer" && (
            <div className="item cursor-default text-black">
              <ArrowUpIcon width={20} height={20} />
            </div>
          )}
        </div>
      </div>
      <div
        className="content text-normal font-normal text-black"
      >
       <EditorContent editor={editor} />
      </div>
      <div className=" flex w-full flex-row items-center justify-between space-x-sm border-t border-t-gray/20 pt-md">
          <div className="actions comment-actions svg-animated-stroke">
            <div
              className={classNames("item", {
                active: editor?.isActive("bold"),
              })}
              onClick={() => editor?.chain().focus().toggleBold().run()}
            >
              <SvgIcons type="Bold" />
            </div>
            <div
              className={classNames("item", {
                active: editor?.isActive("italic"),
              })}
              onClick={() => editor?.chain().focus().toggleItalic().run()}
            >
              <SvgIcons type="Italic" />
            </div>
            <div
              className={classNames("item", {
                active: linkSelected,
              })}
              onClick={() => setLinkSelected(linkSelected ? false : true)}
            >
              <SvgIcons type="Link" />
            </div>
            <div
              className={classNames(
                "flex flex-row items-stretch justify-between space-x-xs rounded-md border border-black bg-white p-md",
                {
                  hidden: !linkSelected,
                },
              )}
            >
              <input
                type="text"
                className="w-full rounded-lg border border-gray px-xs py-xxxs focus:outline-none"
                placeholder="Enter a link ..."
                onChange={(e: React.FormEvent<HTMLInputElement>) => {
                  setLinkWritted(e.currentTarget.value);
                }}
              />
              <Button formType="comment" type="button" onClick={setLink}>
                Done
              </Button>
            </div>
          </div>
        <div className="btn-submit">
          <Button type="button" formType="comment">
            {submitBtnText()}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CommentInput;

