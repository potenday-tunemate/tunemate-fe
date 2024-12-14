import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SplashPage from "./pages/Splash";
import OnboardingPage from "./pages/Onboard";
import SignupPage from "pages/Signup";
import SigninPage from "pages/Signin";

function App() {
  return (
    <div className="max-w-[600px] mx-auto h-[100vh] bg-black text-white">
      <Router>
        <Routes>
          <Route path="/" element={<SplashPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/onboarding" element={<OnboardingPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
