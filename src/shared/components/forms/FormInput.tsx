import { ASSET_PATHS } from "shared/constants/path";
import { useState } from "react";
import {
  FieldError,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";

interface FormInputProps<T extends FieldValues> {
  label: string;
  type?: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  errors?: FieldError;
  placeholder?: string;
  required?: boolean;
  readOnly?: boolean;
  validationOptions?: RegisterOptions<T>;
  desc?: string;
  icon?: string;
}

export default function FormInput<T extends FieldValues>({
  label,
  type = "text",
  name,
  register,
  errors,
  placeholder,
  required = false,
  readOnly = false,
  validationOptions,
  desc,
  icon,
}: FormInputProps<T>) {
  const [showPassword, setShowPassword] = useState(false);

  // 비밀번호 보기 토글 함수
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="flex flex-col">
      <label className="text-sm">
        {label}{" "}
        {/* {required && (
          <span className="text-red text-[10px] lg:text-[13px]">필수</span>
        )} */}
      </label>

      <div className="relative mt-[10px]">
        <input
          id={name}
          type={showPassword && type === "password" ? "text" : type} // 비밀번호 보이기 상태에 따라 타입 변경
          {...register(name as Path<T>, validationOptions)}
          placeholder={placeholder}
          className={`w-full h-40 px-12 border border-customGray-800 bg-customGray-800 rounded-[10px] text-sm focus:outline-none transition-all 
          ${errors ? "border-red focus:border-red" : ""} 
          ${
            readOnly
              ? "bg-customGray-100 cursor-default text-customGray-600"
              : "text-white"
          }`}
          readOnly={readOnly}
        />

        {type === "password" ? (
          showPassword ? (
            <img
              src={`${ASSET_PATHS.ICONS}/basic/ico_password_show.svg`}
              alt="아이콘"
              width={16}
              height={16}
              className="absolute top-1/2 right-16 transform -translate-y-1/2"
            />
          ) : (
            <img
              src={`${ASSET_PATHS.ICONS}/basic/ico_password_hide.svg`}
              alt="아이콘"
              width={16}
              height={16}
              className="absolute top-1/2 right-16 transform -translate-y-1/2"
            />
          )
        ) : null}

        {icon && (
          <img
            src={icon}
            alt=""
            aria-hidden
            className="absolute top-1/2 right-16 transform -translate-y-1/2"
          />
        )}

        {/* 비밀번호 보기 */}
        {type === "password" && (
          <img
            src={
              showPassword
                ? `${ASSET_PATHS.ICONS}/basic/ico_password_show.svg`
                : `${ASSET_PATHS.ICONS}/basic/ico_password_hide.svg`
            }
            alt={showPassword ? "비밀번호 숨기기" : "비밀번호 보기"}
            width={21}
            height={21}
            className="absolute top-1/2 right-16 transform -translate-y-1/2 cursor-pointer"
            onClick={togglePasswordVisibility}
          />
        )}
      </div>

      {errors && <p className="mt-8 text-xs text-red">{errors.message}</p>}
      {desc && <p className="mt-8 text-white text-10">{desc}</p>}
    </div>
  );
}
