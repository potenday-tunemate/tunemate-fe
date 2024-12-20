interface ButtonProps {
  children: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "gray" | "outlined" | string;
  disabled?: boolean;
  onClick?: () => void;
}

export default function Button({
  children,
  type = "button",
  variant = "primary",
  disabled = false,
  onClick,
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
      className={`flex justify-center items-center w-full rounded-10 text-white font-semibold h-40 ${
        variant === "gray" ? "bg-customGray-800" : "bg-tunemate"
      } ${
        variant === "gray"
          ? "hover:bg-customGray-700"
          : variant === "primary" && !disabled
          ? "hover:bg-tunemate-dark"
          : ""
      } ${
        disabled &&
        "bg-customGray-700 text-customGray-500 hover:bg-customGray-700"
      }
      
      transition duration-300 ease-in-out`}
    >
      {children}
    </button>
  );
}
