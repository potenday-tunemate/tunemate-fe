interface HeaderProps {
  children: React.ReactNode;
}

export default function Header({ children }: HeaderProps) {
  return <header className="flex items-center h-58 px-24">{children}</header>;
}
