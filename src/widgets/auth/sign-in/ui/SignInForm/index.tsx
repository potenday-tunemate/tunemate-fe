import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import FormInput from "shared/components/forms/FormInput";
import Button from "shared/components/ui/buttons/Button";
import { PostSignInRequestBody } from "entities/auth/index.type";
import { usePostSignInMutation } from "features/auth/mutations/usePostSignInMutation";

export default function SignInForm() {
  const navigate = useNavigate();

  const { mutateAsync: signInMutate } = usePostSignInMutation();

  const methods = useForm({
    mode: "all",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;

  const onSubmit: SubmitHandler<PostSignInRequestBody> = async (data) => {
    try {
      const body: PostSignInRequestBody = {
        email: data.email,
        password: data.password,
      };

      const response = await signInMutate(body);

      if (response.ok && response.data) {
        sessionStorage.setItem("access_token", response.data.access_token);
        sessionStorage.setItem("refresh_token", response.data.refresh_token);
        navigate("/main");
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
            placeholder="가입 시 등록한 이메일 주소를 입력해 주세요."
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
            }}
          />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full">
        <div className="flex justify-center">
          <Link to="#" className="text-white text-10 hover:underline">
            아이디/비밀번호를 잊으셨나요?
          </Link>
        </div>

        <div className="absolute bottom-0 left-0 w-full px-24">
          <Button
            type="submit"
            onClick={handleSubmit(onSubmit)}
            disabled={isSubmitting || Object.keys(errors).length > 0}
          >
            로그인
          </Button>
        </div>
      </div>
    </FormProvider>
  );
}
