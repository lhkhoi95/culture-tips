import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="mx-2 my-4">
      <div className="rounded-full border px-2 py-2 shadow-md shadow-slate-200 md:container">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-1 hover:brightness-125">
            <img src={`/images/logo.png`} alt="logo" className="h-10 w-10" />
            <h1 className="text-2xl font-bold">Culture Share</h1>
          </Link>
          <div className="hidden md:flex md:gap-2">
            <Button className="rounded-full" variant="outline">
              Log In
            </Button>
            <Button className="rounded-full">Sign Up</Button>
          </div>
          <div className="md:hidden">
            <Button variant="ghost" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>
      {isMenuOpen && <MobileNav />}
    </nav>
  );
}

function MobileNav() {
  return (
    <div className="mt-1 flex flex-col gap-2 rounded-lg border bg-white p-4 text-center shadow-md md:hidden">
      <Button className="w-full rounded-full" variant="outline">
        Login
      </Button>
      <Button className="w-full rounded-full">Sign Up</Button>
    </div>
  );
}
