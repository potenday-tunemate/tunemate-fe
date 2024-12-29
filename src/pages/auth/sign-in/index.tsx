import Container from "shared/components/Layout/Container";
import Header from "shared/components/Layout/Header";
import PageLayout from "shared/components/Layout/PageLayout";
import SignInForm from "widgets/auth/sign-in/ui/SignInForm";

export default function SignInPage() {
  return (
    <PageLayout>
      <Header backPath="/onboarding?step=3" />

      <div className="mt-30">
        <Container>
          <h2 className="text-22 font-bold">로그인</h2>

          <div className="mt-34">
            <SignInForm />
          </div>
        </Container>
      </div>
    </PageLayout>
  );
}
