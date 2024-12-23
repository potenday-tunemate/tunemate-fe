import { Link } from "react-router-dom";

interface LinkButtonProps {
  children: string;
  variant?: "primary" | "gray" | "outlined" | string;
  disabled?: boolean;
  path: string;
}

export default function LinkButton({
  children,
  variant = "primary",
  disabled = false,
  path,
}: LinkButtonProps) {
  return (
    <Link
      to={path}
      className={`flex justify-center items-center w-full rounded-10 text-white font-semibold h-40 ${
        variant === "gray" ? "bg-customGray-800" : "bg-tunemate"
      } ${disabled && "bg-customGray-700 text-customGray-500"}
      transition duration-300 ease-in-out`}
    >
      {children}
    </Link>
  );
}
