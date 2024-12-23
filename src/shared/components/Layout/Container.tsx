interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return <div className="relative w-full h-full px-24 pb-100">{children}</div>;
}
