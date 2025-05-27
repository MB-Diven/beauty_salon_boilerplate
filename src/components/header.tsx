import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useBusinessInfo } from "@/lib/context/business-context";

export function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { businessInfo } = useBusinessInfo();
  console.log(businessInfo);
  if (!businessInfo) return null;
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <img
            src={businessInfo.logo}
            alt={businessInfo.businessName}
            width={40}
            height={40}
          />
          <span className="font-serif text-xl font-medium">
            {businessInfo.businessName}
          </span>
        </Link>
        <nav className="hidden md:flex md:gap-6">
          <Link
            href="#services"
            className="text-sm font-medium text-slate-700 hover:opacity-80"
          >
            Services
          </Link>
          <Link
            href="#about"
            className="text-sm font-medium text-slate-700 hover:opacity-80"
          >
            About
          </Link>
          <Link
            href="#testimonials"
            className="text-sm font-medium text-slate-700 hover:opacity-80"
          >
            Testimonials
          </Link>
          <Link
            href="#reservation"
            className="text-sm font-medium text-slate-700 hover:opacity-80"
          >
            Book Now
          </Link>
        </nav>
        <Button
          asChild
          style={{
            backgroundColor: businessInfo.primaryColor,
          }}
          size="sm"
          className={`hidden md:inline-flex hover:opacity-80`}
        >
          <Link href="#reservation">Book Appointment</Link>
        </Button>
        <Button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          variant="outline"
          size="icon"
          className="md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </Button>
      </div>
      {dropdownOpen && (
        <div className="absolute right-0 top-16 z-50 w-48 rounded-md bg-white shadow-lg">
          <Link
            href="#services"
            onClick={() => setDropdownOpen(false)}
            className="block px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
          >
            Services
          </Link>
          <Link
            href="#about"
            onClick={() => setDropdownOpen(false)}
            className="block px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
          >
            About
          </Link>
          <Link
            href="#testimonials"
            onClick={() => setDropdownOpen(false)}
            className="block px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
          >
            Testimonials
          </Link>
          <Link
            href="#reservation"
            onClick={() => setDropdownOpen(false)}
            className="block px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
          >
            Book Now
          </Link>
        </div>
      )}
    </header>
  );
}
