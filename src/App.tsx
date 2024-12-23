import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import routes from "app/routes";
import BottomMenu from "shared/components/Layout/BottomMenu";

function App() {
  return (
    <div className="max-w-600 mx-auto h-screen bg-black text-white">
      <Router>
        <AppContent />
      </Router>
    </div>
  );
}

function AppContent() {
  const location = useLocation();
  const bottomMenuHiddenPaths = [
    "/splash",
    "/onboarding",
    "/auth/sign-in",
    "/auth/sign-up",
  ];

  return (
    <>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
      {/* BottomMenu는 특정 경로에서만 렌더링 */}
      {!bottomMenuHiddenPaths.includes(location.pathname) && <BottomMenu />}
    </>
  );
}

export default App;
