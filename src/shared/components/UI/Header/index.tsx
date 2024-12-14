interface HeaderProps {
  children: React.ReactNode;
}

export default function Header({ children }: HeaderProps) {
  return <header className="flex items-center h-14 px-6">{children}</header>;
}
