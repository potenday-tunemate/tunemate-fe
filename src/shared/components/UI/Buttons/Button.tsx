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
      className={`flex justify-center items-center w-full rounded-[10px] text-white font-semibold h-10 ${
        variant === "gray" ? "bg-customGray-800" : "bg-tunemate"
      } ${
        variant === "gray"
          ? "hover:bg-customGray-700"
          : "hover:bg-tunemate-dark"
      } transition duration-300 ease-in-out`}
    >
      {children}
    </button>
  );
}
