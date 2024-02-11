import { Extension } from "@tiptap/core";

const InterceptNewline = (callback: () => void) => {
  return Extension.create({
    name: "interceptNewline",

    addKeyboardShortcuts() {
      return {
        Enter: () => {
          callback();
          return true;
        },
      };
    },
  });
};

const InterceptNewSpace = (callback: () => void) => {
  return Extension.create({
    name: "interceptNewline",

    addKeyboardShortcuts() {
      return {
        Space: () => {
          callback();
          return true;
        },
      };
    },
  });
};

export default { InterceptNewSpace, InterceptNewline };
