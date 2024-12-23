import Header from "shared/components/Layout/Header";
import SignInForm from "widgets/auth/sign-in/ui/SignInForm";

export default function SignInPage() {
  return (
    <div className="flex flex-col h-full">
      <Header backPath="/onboarding?step=3" />

      <div className="h-full pb-80 px-24">
        <div className="relative h-full mt-30">
          <h2 className="text-22 font-bold">로그인</h2>

          <div className="mt-34">
            <SignInForm />
          </div>
        </div>
      </div>
    </div>
  );
}
