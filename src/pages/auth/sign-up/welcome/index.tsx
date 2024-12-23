import { Link } from "react-router-dom";
import Container from "shared/components/layout/Container";
import Header from "shared/components/layout/Header";
import Button from "shared/components/ui/buttons/Button";
import LinkButton from "shared/components/ui/buttons/LinkButton";

export default function WelcomePage() {
  return (
    <div className="h-full">
      <Header />
      <div className="mt-74">
        <Container>
          <div className="relative flex flex-col items-center h-full">
            <p>가입 완료</p>
            <p>
              <span className="text-tunemate">아름다운 멜로디</span>님,
              튠메이트에 오신걸 환영해요
            </p>

            <div className="absolute bottom-0">
              <LinkButton path="/main">로그인 화면으로 이동</LinkButton>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
