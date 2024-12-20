import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import routes from "routes";
import BottomMenu from "shared/components/Layout/BottomMenu";

function App() {
  return (
    <div className="max-w-600 mx-auto h-[100vh] bg-black text-white">
      <Router>
        <AppContent />
      </Router>
    </div>
  );
}

function AppContent() {
  const location = useLocation();
  const bottomMenuVisiblePaths = ["/main", "/genre", "/my-page"];

  return (
    <>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
      {/* BottomMenu는 특정 경로에서만 렌더링 */}
      {bottomMenuVisiblePaths.includes(location.pathname) && <BottomMenu />}
    </>
  );
}

export default App;
