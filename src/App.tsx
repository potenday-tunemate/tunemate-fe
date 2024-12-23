import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import routes from "app/routes";
import BottomMenu from "shared/components/layout/BottomMenu";

function App() {
  return (
    <div className="relative max-w-600 mx-auto min-h-screen bg-black text-white">
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
    "/auth/sign-up/welcome",
  ];

  // 현재 경로에서 해시와 쿼리 제거
  const cleanPath = location.pathname.replace(/\/+$/, "");

  const isHiddenPath = bottomMenuHiddenPaths.some((path) =>
    cleanPath.endsWith(path)
  );

  return (
    <>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
      {/* BottomMenu는 특정 경로에서만 렌더링 */}
      {!isHiddenPath && <BottomMenu />}
    </>
  );
}

export default App;
