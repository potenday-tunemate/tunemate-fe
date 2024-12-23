import Header from "shared/components/Layout/Header";
import SignUpForm from "widgets/auth/sign-up/ui/SignUpForm";

export default function SignUpPage() {
  return (
    <div className="flex flex-col h-full">
      <Header backPath="/onboarding?step=3" />

      <div className="h-full pb-80 px-24">
        <div className="relative h-full mt-30">
          <h2 className="text-22 font-bold">회원가입</h2>
          <div className="mt-34">
            <SignUpForm />
          </div>
        </div>
      </div>
    </div>
  );
}
