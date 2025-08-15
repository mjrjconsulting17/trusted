"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";
import {
  Menu,
  ShoppingBag,
  Search,
  User,
  X
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useStore } from "@/lib/store";

export function Header() {
  const pathname = usePathname();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { cart } = useStore();
  const itemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/products", label: "SHOP" },
    { href: "/about", label: "ABOUT" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-black border-b-4 border-yellow-400 shadow-[0_4px_0_rgba(0,0,0,1)]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 group"
          >
            <span
              className="text-3xl font-black text-yellow-400 group-hover:scale-110 transition-transform"
              style={{
                fontFamily: 'Black Ops One',
                textShadow: '2px 2px 0 #dc2675, 4px 4px 0 #3b82f6',
                letterSpacing: '0.05em',
                transform: 'rotate(-2deg)',
              }}
            >
              TRUSTED
            </span>
            <div className="hidden sm:block">
              <span
                className="text-pink-500 text-sm font-bold"
                style={{
                  fontFamily: 'Permanent Marker',
                  transform: 'rotate(5deg)',
                  display: 'inline-block'
                }}
              >
                GRAFFITI
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    relative px-2 py-1 text-lg font-bold transition-all
                    ${isActive
                      ? 'text-yellow-400'
                      : 'text-white hover:text-yellow-400'
                    }
                  `}
                  style={{
                    fontFamily: 'Bebas Neue',
                    letterSpacing: '0.1em',
                  }}
                >
                  {link.label}
                  {isActive && (
                    <div
                      className="absolute -bottom-2 left-0 right-0 h-1 bg-pink-500"
                      style={{
                        clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)'
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Search Button */}
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:text-yellow-400 hover:bg-transparent"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              {isSearchOpen ? <X className="h-6 w-6" /> : <Search className="h-6 w-6" />}
            </Button>

            {/* User Button */}
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:text-yellow-400 hover:bg-transparent"
            >
              <User className="h-6 w-6" />
            </Button>

            {/* Cart Button */}
            <Button
              variant="ghost"
              size="icon"
              className="relative text-white hover:text-yellow-400 hover:bg-transparent"
            >
              <ShoppingBag className="h-6 w-6" />
              {itemCount > 0 && (
                <span
                  className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold border-2 border-black"
                  style={{
                    fontFamily: 'Russo One',
                  }}
                >
                  {itemCount}
                </span>
              )}
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:text-yellow-400 hover:bg-transparent"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] sm:w-[400px] bg-black border-l-4 border-yellow-400"
              >
                <SheetHeader>
                  <SheetTitle
                    className="text-yellow-400 text-2xl"
                    style={{
                      fontFamily: 'Black Ops One',
                      letterSpacing: '0.05em',
                    }}
                  >
                    MENU
                  </SheetTitle>
                  <SheetDescription className="text-white/70">
                    Navigate the streets
                  </SheetDescription>
                </SheetHeader>
                <nav className="flex flex-col space-y-4 mt-8">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`
                          text-2xl font-bold transition-all px-4 py-2
                          ${isActive
                            ? 'text-yellow-400 bg-yellow-400/10 border-l-4 border-pink-500'
                            : 'text-white hover:text-yellow-400 hover:translate-x-2'
                          }
                        `}
                        style={{
                          fontFamily: 'Bebas Neue',
                          letterSpacing: '0.1em',
                        }}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </nav>
                <div className="mt-auto pt-8 border-t border-white/20">
                  <div className="space-y-4">
                    <Button
                      className="w-full bg-yellow-400 text-black hover:bg-yellow-300 font-bold border-2 border-black"
                      style={{
                        fontFamily: 'Bebas Neue',
                        letterSpacing: '0.1em',
                      }}
                    >
                      SIGN IN
                    </Button>
                    <div className="text-center">
                      <span
                        className="text-pink-500 text-sm"
                        style={{
                          fontFamily: 'Permanent Marker',
                        }}
                      >
                        Stay Fresh
                      </span>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="pb-4 animate-slide-down">
            <div className="relative">
              <input
                type="text"
                placeholder="Search the streets..."
                className="w-full px-6 py-3 bg-white text-black border-4 border-yellow-400 focus:outline-none focus:border-pink-500 font-bold"
                style={{
                  fontFamily: 'Russo One',
                }}
                autoFocus
              />
              <Button
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-pink-500 hover:bg-pink-400 text-white px-4 py-1 font-bold"
                style={{
                  fontFamily: 'Bebas Neue',
                  letterSpacing: '0.05em',
                }}
              >
                SEARCH
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
