import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ASSET_PATHS } from "shared/constants/path";

export default function SplashLogo() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/onboarding");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex h-full items-center justify-center">
      <img
        src={`${ASSET_PATHS.ICONS}/logo/tunemate_logo.svg`}
        alt="TUNEMATE"
        className="opacity-0 animate-fade-in duration-1000"
      />
    </div>
  );
}
