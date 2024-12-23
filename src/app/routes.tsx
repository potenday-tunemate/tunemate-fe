import SigninPage from "pages/auth/signin";
import SignupPage from "pages/auth/signup";
import GenrePage from "pages/genre";
import MainPage from "pages/main";
import MyPage from "pages/my-page";
import FollowerPage from "pages/my-page/follower";
import FollowingPage from "pages/my-page/following";
import HistoryPage from "pages/my-page/history";
import NotFoundPage from "pages/notFound";
import OnboardingPage from "pages/onboarding";
import RecentReviewsPage from "pages/recent-reviews";
import SplashPage from "pages/splash";
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
    path: "/recent-reviews",
    element: <RecentReviewsPage />,
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
    path: "/my-page/history",
    element: <HistoryPage />,
  },
  {
    path: "/my-page/following",
    element: <FollowingPage />,
  },
  {
    path: "/my-page/follower",
    element: <FollowerPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];

export default routes;
