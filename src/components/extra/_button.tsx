import { FC } from "react";

interface ButtonProps {
  type: "button" | "submit";
  formType: "form" | "breadcrumb";
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
  ) : formType == "breadcrumb" ? (
    <button
      type={"button"}
      className="use-transition w-max flex h-xl flex-row items-center justify-center space-x-xs rounded-default border-2 border-black bg-black px-xxs py-xxs text-white hover:bg-transparent hover:text-black"
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
