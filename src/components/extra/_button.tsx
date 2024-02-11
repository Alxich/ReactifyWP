import { FC, MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
  type: "button" | "submit";
  formType:
    | "form"
    | "post__action:breadcrumbs"
    | "post__action:post-actions"
    | "comment";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({
  type,
  children,
  formType,
  onClick,
}: ButtonProps) => {
  switch (formType) {
    case "form":
      return (
        <button
          type={type}
          className="use-transition rounded-lg border-2 border-highlight bg-highlight px-lg py-sm text-white hover:bg-transparent hover:text-highlight"
          onClick={onClick}
        >
          {children}
        </button>
      );

    case "post__action:breadcrumbs":
      return (
        <button
          type={"button"}
          className=" post__action border-black bg-black px-xxs py-xxs text-white hover:bg-transparent hover:text-black"
          onClick={onClick}
        >
          {children}
        </button>
      );

    case "post__action:post-actions":
      return (
        <button
          type={"button"}
          className=" post__action border-black bg-transparent px-xxs py-xxs text-black hover:bg-black hover:text-white"
          onClick={onClick}
        >
          {children}
        </button>
      );

    case "comment":
      return (
        <button
          type={type}
          className="use-transition rounded-lg border-2 border-black bg-black px-lg py-xs text-normal font-semibold text-white hover:bg-transparent hover:text-black"
          onClick={onClick}
        >
          {children}
        </button>
      );

    default:
      return (
        <button
          type={type}
          className="use-transition rounded-lg border-2 border-highlight bg-highlight px-lg py-sm text-white hover:bg-transparent hover:text-highlight"
          onClick={onClick}
        >
          {children}
        </button>
      );
  }
};

export default Button;
