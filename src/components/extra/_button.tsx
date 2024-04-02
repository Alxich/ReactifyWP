import classNames from "classnames";
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
    | "btn__action:load-more"
    | "btn_action:post";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
  className?: string;
}

const Button: FC<ButtonProps> = ({
  id,
  type,
  children,
  formType,
  onClick,
  className,
}: ButtonProps) => {
  switch (formType) {
    case "form" || "btn_action:post":
      return (
        <button
          id={id}
          type={type}
          className={classNames(
            "use-transition rounded-lg border-2 border-highlight bg-highlight px-lg py-sm text-white hover:bg-transparent hover:text-highlight",
            {
              [className as string]:
                typeof className === "string" && className !== undefined,
            },
          )}
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
          className={classNames(
            "use-transition rounded-lg border-2 border-vitalred bg-vitalred px-lg py-sm text-white hover:bg-transparent hover:text-vitalred",
            {
              [className as string]:
                typeof className === "string" && className !== undefined,
            },
          )}
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
          className={classNames(
            " post__action border-black bg-black px-xxs py-xxs text-white hover:bg-transparent hover:",
            {
              [className as string]:
                typeof className === "string" && className !== undefined,
            },
          )}
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
          className={classNames(
            " post__action border-black bg-transparent px-xxs py-xxs hover:bg-black hover:text-white",
            {
              [className as string]:
                typeof className === "string" && className !== undefined,
            },
          )}
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
          className={classNames(
            "use-transition rounded-lg border-2 border-black bg-black px-lg py-xs text-normal font-semibold text-white hover:bg-transparent hover:text-black",
            {
              [className as string]:
                typeof className === "string" && className !== undefined,
            },
          )}
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
          className={classNames(
            "use-transition hover:text-light-gray w-[220px] rounded-md border-2 border-light-border bg-transparent px-xs py-xs text-gray hover:bg-light-border",
            {
              [className as string]:
                typeof className === "string" && className !== undefined,
            },
          )}
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
          className={classNames(
            "use-transition rounded-lg border-2 border-highlight bg-highlight px-lg py-sm text-white hover:bg-transparent hover:text-highlight",
            {
              [className as string]:
                typeof className === "string" && className !== undefined,
            },
          )}
          onClick={onClick}
        >
          {children}
        </button>
      );
  }
};

export default Button;
