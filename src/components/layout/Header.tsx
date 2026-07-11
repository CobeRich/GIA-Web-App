import Link from "next/link";
import Image from "next/image";
import Navigation from "./Navigation";
import MobileMenu from "./MobileMenu";
import { assetPaths, institution, utilityAnnouncement } from "@/lib/siteConfig";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-600/80 bg-[linear-gradient(100deg,#0a2744_0%,#1d3f66_55%,#0f2f54_100%)] text-white backdrop-blur">
      <Link
        href={utilityAnnouncement.href}
        className="block border-b border-slate-500/60 bg-[#08213b]/95 px-4 py-1.5 text-center text-[11px] font-medium tracking-wide text-slate-200 hover:text-white sm:px-6"
      >
        {utilityAnnouncement.text}
      </Link>
      <div className="relative mx-auto flex h-[62px] max-w-[1240px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Home">
          <Image
            src={assetPaths.logo}
            alt={`${institution.shortName} logo`}
            width={132}
            height={44}
            className="h-8 w-auto"
            priority
          />
          <span className="hidden max-w-[178px] text-[13px] font-semibold leading-tight text-slate-100 lg:block">
            {institution.academyName}
          </span>
        </Link>

        <div className="hidden items-center gap-5 lg:flex">
          <Navigation />
          <div className="h-5 w-px bg-slate-400/60" />
          <div className="flex items-center gap-1.5 text-slate-100">
            <Link
              href="/knowledge-hub"
              aria-label="Search"
              className="inline-flex h-8 w-8 items-center justify-center rounded-md text-sm transition hover:bg-white/12"
            >
              ⌕
            </Link>
            <Link
              href="/contact"
              aria-label="Contact"
              className="inline-flex h-8 w-8 items-center justify-center rounded-md text-sm transition hover:bg-white/12"
            >
              ✉
            </Link>
            <Link
              href="/auth/signin"
              className="ml-1 rounded-md border border-slate-300/70 bg-[#1b3f67]/70 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-[#2a527f]"
            >
              Portal Sign In
            </Link>
          </div>
        </div>
        <MobileMenu />
      </div>
    </header>
  );
}
