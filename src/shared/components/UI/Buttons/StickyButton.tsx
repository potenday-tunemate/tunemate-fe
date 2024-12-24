interface ButtonProps {
  children: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "gray" | "outlined" | string;
  disabled?: boolean;
  onClick?: () => void;
}

export default function StickyButton({
  children,
  type = "button",
  variant = "primary",
  disabled = false,
  onClick,
}: ButtonProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 w-full max-w-600 mx-auto pt-10 pb-50 px-24 bg-black">
      <button
        type={type}
        disabled={disabled}
        onClick={disabled ? undefined : onClick}
        className={`flex justify-center items-center w-full max-w-327 mx-auto rounded-10 text-white font-semibold h-40 ${
          variant === "gray" ? "bg-customGray-800" : "bg-tunemate"
        } ${disabled && "bg-customGray-700 text-customGray-500"}
      transition duration-300 ease-in-out`}
      >
        {children}
      </button>
    </div>
  );
}
