import Container from "shared/components/Layout/Container";
import Header from "shared/components/Layout/Header";
import PageLayout from "shared/components/Layout/PageLayout";
import SignUpForm from "widgets/auth/sign-up/ui/SignUpForm";

export default function SignUpPage() {
  return (
    <div className="flex flex-col pt-68 h-screen">
      <Header backPath="/onboarding?step=3" />

      <div className="pt-30 px-24">
        <h2 className="text-22 font-bold">회원가입</h2>
        <div className="mt-34">
          <SignUpForm />
        </div>
      </div>
    </div>
  );
}
