import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SplashPage from "./pages/Splash";
import OnboardingPage from "./pages/Onboard";
import JoinPage from "pages/Join";
import LoginPage from "pages/Login";

function App() {
  return (
    <div className="max-w-[600px] mx-auto h-[100vh] bg-black text-white">
      <Router>
        <Routes>
          <Route path="/" element={<SplashPage />} />
          <Route path="/join" element={<JoinPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/onboarding" element={<OnboardingPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
