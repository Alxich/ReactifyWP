import { FC } from "react";

interface ButtonProps {
  type: "button" | "submit";
  formType: "form" | "post__action:breadcrumbs" | "post__action:post-actions";
  children: React.ReactNode;
}

const Button: FC<ButtonProps> = ({ type, children, formType }: ButtonProps) => {
  return formType == "form" ? (
    <button
      type={type}
      className="use-transition rounded-lg border-2 border-highlight bg-highlight px-lg py-sm text-white hover:bg-transparent hover:text-highlight"
    >
      {children}
    </button>
  ) : formType == "post__action:breadcrumbs" ? (
    <button
      type={"button"}
      className=" post__action border-black bg-black px-xxs py-xxs text-white hover:bg-transparent hover:text-black"
    >
      {children}
    </button>
  ) : formType == "post__action:post-actions" ? (
    <button
      type={"button"}
      className=" post__action border-black bg-transparent px-xxs py-xxs text-black hover:bg-black hover:text-white"
    >
      {children}
    </button>
  ) : (
    <button
      type={type}
      className="use-transition rounded-lg border-2 border-highlight bg-highlight px-lg py-sm text-white hover:bg-transparent hover:text-highlight"
    >
      {children}
    </button>
  );
};

export default Button;
