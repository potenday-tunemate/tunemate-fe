import Container from "shared/components/layout/Container";
import LinkButton from "shared/components/ui/buttons/LinkButton";

export default function WelcomePage() {
  return (
    <div className="flex flex-col h-screen px-24">
      <div className="pt-74">
        <p className="font-bold text-22 text-center">가입 완료</p>
      </div>

      <div className="flex items-center justify-center flex-grow mt-[-140px]">
        <p className="font-bold text-22 text-center">
          <span className="text-tunemate">아름다운 멜로디</span>님,
          <br />
          튠메이트에 오신걸 환영해요
        </p>
      </div>

      <div className="sticky bottom-80 p-4">
        <LinkButton path="/auth/sign-in">로그인 화면으로 이동</LinkButton>
      </div>
    </div>
  );
}
