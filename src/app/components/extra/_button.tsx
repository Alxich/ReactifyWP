import { FC } from "react";

interface ButtonProps {
  type: "button" | "submit";
  children: React.ReactNode;
}

const Button: FC<ButtonProps> = ({ type, children }: ButtonProps) => {
  return (
    <button
      type={type}
      className="use-transition rounded-lg border-2 border-highlight bg-highlight px-lg py-sm text-white hover:bg-transparent hover:text-highlight"
    >
      {children}
    </button>
  );
};

export default Button;
