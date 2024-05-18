import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
export default function Navbar() {
  const { pathname } = useLocation();

  const navLinks = [
    { name: "Start", href: "/session" },
    { name: "Dashboard", href: "/dashboard" },
  ];

  if (pathname == "/session") return null;
  return (
    <nav className="fixed left-0 top-0 z-50 h-16 w-full bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 py-2">
        <Link to="/" className="text-xl font-extrabold tracking-wide">
          Dhairya
        </Link>
        <div className="flex items-center">
          {navLinks.map((link) => (
            <NavLink key={link.name} {...link} />
          ))}
        </div>
      </div>
    </nav>
  );
}

function NavLink({ name, href }: { name: string; href: string }) {
  return (
    <Button variant={"navigation"} asChild>
      <Link to={href}>{name}</Link>
    </Button>
  );
}
