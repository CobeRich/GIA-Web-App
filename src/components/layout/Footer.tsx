import Link from "next/link";
import { footerLinks } from "@/lib/navigation";
import { institution } from "@/lib/siteConfig";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-gray-200 bg-gia-blue text-gia-light">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div className="col-span-2">
            <span className="text-lg font-semibold text-white">
              {institution.fullName}
            </span>
            <p className="mt-2 max-w-sm text-sm text-gia-light/80">
              Advancing groundwater intelligence through research, education,
              platform engineering, and partnership across Africa.
            </p>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white">
              Explore
            </h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white">
              Legal & Access
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/forms/newsletter" className="hover:underline">
                  Subscribe to Newsletter
                </Link>
              </li>
              <li>
                <Link href="/platform/access" className="hover:underline">
                  Request Platform Access
                </Link>
              </li>
              <li>
                <Link href="/auth/signin" className="hover:underline">
                  Portal Sign In
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-gia-light/70">
          © {year} {institution.fullName}. All rights reserved. {" "}
          {/* TODO: Replace with real legal/registration details */}
        </div>
      </div>
    </footer>
  );
}
