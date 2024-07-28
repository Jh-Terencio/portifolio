"use client";

import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci"
import { useState } from "react";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
]

const MobileNav = () => {
  const pathname = usePathname()

  const [isOpen, setIsOpen] = useState(false)
  const closeNav = () => {
    setIsOpen(false)
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" onClick={() => setIsOpen(!isOpen)}/>
      </SheetTrigger>
      <SheetContent className="flex flex-col">

        <div className="mt-1 mb-16 text-center text-2xl">
          <Link href="/">
            <h1 className="text-2xl font-semibold">
              <span className="text-accent"> &lt;</span>Terêncio<span className="text-accent">&#47;&gt;</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            return <Link href={link.path} key={index} className={`${link.path === pathname && "text-accent border-b-2 border-accent"} capitalize text-xl hover:text-accent transition-all`} onClick={closeNav}>{link.name}</Link>
          })}
        </nav>
      </SheetContent>
    </Sheet>
  )
}
export default MobileNav