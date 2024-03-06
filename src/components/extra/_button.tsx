import { FC, MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
  id?: string;
  type: "button" | "submit";
  formType:
    | "form"
    | "form__error"
    | "post__action:breadcrumbs"
    | "post__action:post-actions"
    | "comment"
    | "btn__action:load-more";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({
  id,
  type,
  children,
  formType,
  onClick,
}: ButtonProps) => {
  switch (formType) {
    case "form":
      return (
        <button
          id={id}
          type={type}
          className="use-transition rounded-lg border-2 border-highlight bg-highlight px-lg py-sm text-white hover:bg-transparent hover:text-highlight"
          onClick={onClick}
        >
          {children}
        </button>
      );

    case "form__error":
      return (
        <button
          id={id}
          type={type}
          className="use-transition rounded-lg border-2 border-vitalred bg-vitalred px-lg py-sm text-white hover:bg-transparent hover:text-vitalred"
          onClick={onClick}
        >
          {children}
        </button>
      );

    case "post__action:breadcrumbs":
      return (
        <button
          id={id}
          type={type}
          className=" post__action border-black bg-black px-xxs py-xxs text-white hover:bg-transparent hover:text-black"
          onClick={onClick}
        >
          {children}
        </button>
      );

    case "post__action:post-actions":
      return (
        <button
          id={id}
          type={type}
          className=" post__action border-black bg-transparent px-xxs py-xxs text-black hover:bg-black hover:text-white"
          onClick={onClick}
        >
          {children}
        </button>
      );

    case "comment":
      return (
        <button
          id={id}
          type={type}
          className="use-transition rounded-lg border-2 border-black bg-black px-lg py-xs text-normal font-semibold text-white hover:bg-transparent hover:text-black"
          onClick={onClick}
        >
          {children}
        </button>
      );

    case "btn__action:load-more":
      return (
        <button
          id={id}
          type={type}
          className="use-transition hover:text-light-gray w-[220px] rounded-md border-2 border-light-border bg-transparent px-xs py-xs text-gray hover:bg-light-border"
          onClick={onClick}
        >
          {children}
        </button>
      );

    default:
      return (
        <button
          id={id}
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
