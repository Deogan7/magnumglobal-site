import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/MagnumLogo.svg"
                alt="Magnum Global"
                width={220}
                height={70}
                className="h-12 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed max-w-md">
              Canadian brokerage specializing in bulk recycled clothing, shoes,
              and vintage goods for international wholesale buyers and
              suppliers.
            </p>
            <p className="mt-4 text-sm">
              Based in Canada. Shipping worldwide.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="#supply"
                  className="text-sm hover:text-sky-300 transition-colors"
                >
                  What We Supply
                </Link>
              </li>
              <li>
                <Link
                  href="#why"
                  className="text-sm hover:text-sky-300 transition-colors"
                >
                  Why Magnum
                </Link>
              </li>
              <li>
                <Link
                  href="#process"
                  className="text-sm hover:text-sky-300 transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-sm hover:text-sky-300 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-sm hover:text-sky-300 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="text-sm">
                <a
                  href="mailto:info@magnumglobal.ca"
                  className="hover:text-sky-300 transition-colors"
                >
                  info@magnumglobal.ca
                </a>
              </li>
              <li className="text-sm">Canada</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Magnum Global Inc. All rights
              reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-sm hover:text-sky-300 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm hover:text-sky-300 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
