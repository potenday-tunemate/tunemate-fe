import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SplashPage from "./pages/Splash";
import OnboardingPage from "./pages/Onboard";

function App() {
  return (
    <div className="max-w-[600px] mx-auto h-[100vh] bg-black text-white">
      <Router>
        <Routes>
          <Route path="/" element={<SplashPage />} />
          <Route path="/onboarding" element={<OnboardingPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
