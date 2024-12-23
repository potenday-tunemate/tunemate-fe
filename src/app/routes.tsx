import SignInPage from "pages/auth/sign-in";
import SignUpPage from "pages/auth/sign-up";
import WelcomePage from "pages/auth/sign-up/welcome";
import GenrePage from "pages/genre";
import AlbumDetailPage from "pages/genre/album-detail";
import AlbumReviewPage from "pages/genre/album-review";
import MainPage from "pages/main";
import MyPage from "pages/my-page";
import FollowerPage from "pages/my-page/follower";
import FollowingPage from "pages/my-page/following";
import HistoryPage from "pages/my-page/history";
import NotFoundPage from "pages/not-found";
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
    path: "/auth/sign-in",
    element: <SignInPage />,
  },
  {
    path: "/auth/sign-up",
    element: <SignUpPage />,
  },
  {
    path: "/auth/sign-up/welcome",
    element: <WelcomePage />,
  },
  {
    path: "/genre",
    element: <GenrePage />,
  },
  {
    path: "/genre/album-review/:albumId",
    element: <AlbumReviewPage />,
  },
  {
    path: "/genre/album-detail/:albumId",
    element: <AlbumDetailPage />,
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
