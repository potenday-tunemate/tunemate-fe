import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import SplashPage from "./pages/Splash";
import OnboardingPage from "./pages/Onboarding";
import SignupPage from "pages/Signup";
import SigninPage from "pages/Signin";
import MainPage from "pages/Main";
import GenrePage from "pages/Genre";
import MyPage from "pages/MyPage";
import BottomMenu from "shared/components/Layout/BottomMenu";

function App() {
  return (
    <div className="max-w-[600px] mx-auto h-[100vh] bg-black text-white">
      <Router>
        <AppContent />
      </Router>
    </div>
  );
}

function AppContent() {
  const location = useLocation();
  const bottomMenuVisiblePaths = ["/main", "/genre", "/mypage"];

  return (
    <>
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/onboarding" element={<OnboardingPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/genre" element={<GenrePage />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
      {/* BottomMenu는 특정 경로에서만 렌더링 */}
      {bottomMenuVisiblePaths.includes(location.pathname) && <BottomMenu />}
    </>
  );
}

export default App;
