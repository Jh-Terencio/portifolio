import Link from "next/link"
import { Button } from "./ui/button"

// Componemts
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:pt-10 xl:pb-4 text-white">
      <div className="container max-auto flex justify-between">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-2xl font-semibold">
          <span className="text-accent"> &lt;</span>Terêncio<span className="text-accent">&#47;&gt;</span>
          </h1>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav/>
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* Mobile nav */}
        <div className="xl:hidden">
          <MobileNav/>
        </div>

      </div>
    </header>
  )
}

export default Header