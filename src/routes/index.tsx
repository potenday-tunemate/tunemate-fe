import SigninPage from "pages/Auth/Signin";
import SignupPage from "pages/Auth/Signup";
import GenrePage from "pages/Genre";
import MainPage from "pages/Main";
import MyPage from "pages/MyPage";
import NotFoundPage from "pages/NotFound/index.tsx";
import OnboardingPage from "pages/Onboarding";
import SplashPage from "pages/Splash";
import { RouteObject } from "react-router-dom";

const routes: RouteObject[] = [
  {
    path: "/splash",
    element: <SplashPage />,
  },
  {
    path: "/onboarding",
    element: <OnboardingPage />,
  },
  {
    path: "/main",
    element: <MainPage />,
    index: true, // 기본 경로
  },
  {
    path: "/auth/signin",
    element: <SigninPage />,
  },
  {
    path: "/auth/signup",
    element: <SignupPage />,
  },
  {
    path: "/genre",
    element: <GenrePage />,
  },
  {
    path: "/my-page",
    element: <MyPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];

export default routes;
