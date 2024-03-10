import { FC } from "react";
import { Editor } from "@tiptap/react";

declare type Level = 1 | 2 | 3 | 4 | 5 | 6;

interface IMenuBarProps {
  editor: Editor;
}

const MenuBar: FC<IMenuBarProps> = ({ editor }) => {
  const generateHeaders = () => {
    if (!editor) return null;

    const headerButtons = [];

    for (let i = 1; i < 7; i++) {
      headerButtons.push(
        <button
          onClick={() =>
            editor
              .chain()
              .focus()
              .toggleHeading({ level: i as Level })
              .run()
          }
          className={
            editor.isActive("heading", { level: i })
              ? "is-active underline"
              : ""
          }
        >
          H{i}
        </button>,
      );
    }

    return headerButtons;
  };

  return (
    <div className="menu-bar flex items-center gap-1.5">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={editor.isActive("bold") ? "is-active underline" : ""}
      >
        Bold
      </button>
      {" | "}
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={editor.isActive("italic") ? "is-active underline" : ""}
      >
        Italic
      </button>
      {" | "}
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={editor.isActive("strike") ? "is-active underline" : ""}
      >
        Strike
      </button>
      {" | "}
      {generateHeaders()?.map((item) => (
        <>
          {item}
          {" | "}
        </>
      ))}
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={
          editor.isActive("orderedList")
            ? "is-active text-nowrap underline"
            : "text-nowrap"
        }
      >
        Bullet List
      </button>
      {" | "}
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={
          editor.isActive("bulletList")
            ? "is-active text-nowrap underline"
            : "text-nowrap"
        }
      >
        Queue List
      </button>
    </div>
  );
};

export default MenuBar;
