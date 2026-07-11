import Link from "next/link";
import Navigation from "./Navigation";
import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          {/* TODO: Replace with real logo asset */}
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gia-blue text-sm font-bold text-white">
            GIA
          </span>
          <span className="hidden text-sm font-semibold text-gia-blue sm:block">
            Groundwater Institute of Africa
          </span>
        </Link>

        <Navigation />

        <div className="flex items-center gap-3">
          <Link
            href="/portal"
            className="hidden rounded-md border border-gia-blue px-3 py-1.5 text-sm font-medium text-gia-blue hover:bg-gia-light sm:block"
          >
            Portal Sign In
          </Link>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
