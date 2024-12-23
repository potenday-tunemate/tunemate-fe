import { useNavigate } from "react-router-dom";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import FormInput from "shared/components/forms/FormInput";
import Button from "shared/components/ui/buttons/Button";
import { PostSignUpRequestBody } from "entities/auth/index.type";
import { usePostSignUpMutation } from "features/auth/mutations/usePostSignUpMutation";

export default function SignUpForm() {
  const navigate = useNavigate();

  const { mutateAsync: signUpMutate } = usePostSignUpMutation();

  const methods = useForm({
    mode: "all",
    defaultValues: {
      email: "",
      password: "",
      nickname: "",
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;

  const onSubmit: SubmitHandler<PostSignUpRequestBody> = async (data) => {
    try {
      const body: PostSignUpRequestBody = {
        email: data.email,
        password: data.password,
        nickname: data.nickname,
      };

      const response = await signUpMutate(body);

      if (response.ok) {
        navigate("/auth/sign-in");
      } else {
        alert(response.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormProvider {...methods}>
      <div className="flex flex-col space-y-32">
        <div>
          <FormInput
            label="아이디"
            name="email"
            register={register}
            errors={errors.email}
            placeholder="이메일 주소를 입력해 주세요."
            required
            validationOptions={{
              required: "이메일 주소를 입력해 주세요.",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "올바른 이메일 형식을 입력해 주세요.",
              },
            }}
          />
        </div>

        <div>
          <FormInput
            label="비밀번호"
            type="password"
            name="password"
            register={register}
            errors={errors.password}
            placeholder="비밀번호"
            required
            validationOptions={{
              required: "비밀번호를 입력해 주세요.",
              minLength: {
                value: 8,
                message: "비밀번호는 최소 8자 이상이어야 합니다.",
              },
              maxLength: {
                value: 20,
                message: "비밀번호는 최대 20자 이내여야 합니다.",
              },
              pattern: {
                value:
                  /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/,
                message: "비밀번호는 영어, 숫자 및 특수문자를 포함해야 합니다.",
              },
            }}
            desc="최소 8글자, 최대 20글자 /영어 + 숫자 + 특수문자 조합 구성"
          />
        </div>

        <div>
          <FormInput
            label="닉네임"
            name="nickname"
            register={register}
            errors={errors.nickname}
            placeholder="아름다운 멜로디"
            required
            validationOptions={{
              required: "닉네임을 입력해 주세요.",
            }}
          />
          {/* <FormInput
              label="닉네임"
              name="nickname"
              register={register}
              errors={errors.nickname}
              placeholder="아름다운 멜로디"
              required={false}
              readOnly
              desc="자동 생성됩니다."
            /> */}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full px-24">
        <Button
          type="submit"
          onClick={handleSubmit(onSubmit)}
          disabled={isSubmitting || Object.keys(errors).length > 0}
        >
          가입
        </Button>
      </div>
    </FormProvider>
  );
}
