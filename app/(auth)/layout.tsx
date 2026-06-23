"use client"
import type { Metadata } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./style.css"

const navLinks = [
  {name : "Register", href: "/register"},
  {name : "Login", href: "/login"},
  {name : "Forgot-password", href: "/forgot-password"},
]

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname()
  return (
    <div>
      {navLinks.map((link) => {
        const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== "/")
        return (
          <Link 
          className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
          href={link.href}>
            {link.name}
          </Link>
        )
      })}
      {children}
    </div>
  );
}
