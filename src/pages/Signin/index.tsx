import { ASSET_PATHS } from "entities/const/path";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { postSignin } from "shared/apis/signin/index.api";
import FormInput from "shared/components/forms/FormInput";
import Button from "shared/components/UI/Buttons/Button";
import Header from "shared/components/UI/Header";
import { PostSigninRequestBody } from "shared/types/signin/index.type";

export default function SigninPage() {
  const navigate = useNavigate();

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

  const onSubmit: SubmitHandler<PostSigninRequestBody> = async (data) => {
    try {
      const body: PostSigninRequestBody = {
        email: data.email,
        password: data.password,
      };

      await postSignin(body);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Header>
        <button
          className="flex w-[32px] h-[46px] p-[10px]"
          onClick={() => navigate("/onboarding?step=3")}
        >
          <img
            src={`${ASSET_PATHS.ICONS}/basic/ico_arrow_left.svg`}
            alt="뒤로가기"
            className="w-full"
          />
        </button>
      </Header>
      <div className="h-full pb-[50px] px-6">
        <div className="relative h-full">
          <div className="mt-[30px]">
            <h2 className="text-[22px] font-bold">회원가입</h2>

            <div className="mt-[34px]">
              <div className="h-full">
                <FormProvider {...methods}>
                  <div className="flex flex-col space-y-8">
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
                    <Button
                      type="submit"
                      onClick={handleSubmit(onSubmit)}
                      disabled={isSubmitting || Object.keys(errors).length > 0}
                    >
                      로그인
                    </Button>
                  </div>
                </FormProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
