interface LayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: LayoutProps) {
  return <div className="h-screen pt-68">{children}</div>;
}
