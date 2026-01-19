import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Ambient Background */}
      <div className="absolute inset-0 bg-linear-to-br from-sky-50 via-white to-emerald-50" />
      <div className="absolute inset-0 bg-linear-to-tr from-sky-200/60 via-transparent to-emerald-200/60 animate-hero-glow" />
      <div className="absolute inset-0 opacity-80 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.25),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(16,185,129,0.2),_transparent_55%)]" />

      {/* Accent Color Shapes */}
      <div className="absolute top-0 right-0 w-150 h-150 bg-sky-100 rounded-full blur-3xl opacity-70 -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-100 h-100 bg-emerald-100 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/3" />
      <div className="absolute top-1/2 left-1/2 w-75 h-75 bg-amber-50 rounded-full blur-3xl opacity-70" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-24 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1]">
              Global Textile
              <span className="block text-transparent bg-clip-text bg-linear-to-r from-sky-600 to-emerald-500">
                Sourcing
              </span>
              Simplified
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-xl">
              Premium recycled clothing, footwear, and vintage goods.
              Quality-graded, export-ready shipments for wholesale buyers worldwide.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-sky-600 to-emerald-500 px-8 py-4 text-base font-semibold text-white hover:from-sky-700 hover:to-emerald-600 transition-all shadow-lg shadow-sky-500/30 hover:shadow-emerald-500/40 hover:-translate-y-0.5"
              >
                Get a Quote
                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="#supply"
                className="inline-flex items-center justify-center rounded-full border-2 border-slate-200 px-8 py-4 text-base font-semibold text-slate-700 hover:border-sky-300 hover:text-sky-700 hover:bg-sky-50 transition-all"
              >
                Explore Products
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-3 gap-8">
              <div className="text-center sm:text-left">
                <p className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-sky-600 to-emerald-500">40+</p>
                <p className="mt-1 text-sm text-slate-500">Countries Served</p>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-sky-600 to-emerald-500">100K+</p>
                <p className="mt-1 text-sm text-slate-500">Tons Annually</p>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-sky-600 to-emerald-500">15+</p>
                <p className="mt-1 text-sm text-slate-500">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="hidden lg:block relative">
            <div className="grid grid-cols-2 gap-5">
              <div className="space-y-4">
                {/* Warehouse Ready */}
                <div className="relative h-60 rounded-2xl overflow-hidden group shadow-xl shadow-slate-200/60">
                  <Image
                    src="/images/hero/warehousready.jpg"
                    alt="Warehouse logistics"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/70 via-slate-900/20 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <p className="text-white font-semibold">Warehouse Ready</p>
                    <p className="text-white/80 text-sm">Sorted & packaged</p>
                  </div>
                </div>
                {/* Global Network */}
                <div className="relative h-80 rounded-2xl overflow-hidden group shadow-xl shadow-slate-200/60">
                  <Image
                    src="/images/hero/global.png"
                    alt="Global export network"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 animate-hero-pan"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/70 via-slate-900/20 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <p className="text-white font-semibold">Global Network</p>
                    <p className="text-white/80 text-sm">Trusted export routes</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                {/* Clothing / Textiles */}
                <div className="relative h-80 rounded-2xl overflow-hidden group shadow-xl shadow-slate-200/60">
                  <Image
                    src="/images/hero/quality.jpg"
                    alt="Recycled textile materials"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/70 via-slate-900/20 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <p className="text-white font-semibold">Quality Textiles</p>
                    <p className="text-white/80 text-sm">Graded materials</p>
                  </div>
                </div>
                {/* Canada Card */}
                <div className="relative h-60 rounded-2xl overflow-hidden group shadow-xl shadow-slate-200/60">
                  <Image
                    src="/images/hero/globe.png"
                    alt="Global reach"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/75 via-slate-900/30 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <p className="text-white font-semibold">Based in Canada</p>
                    <p className="text-white/85 text-sm">Shipping worldwide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-slate-400 font-medium">Scroll</span>
          <svg className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </div>
    </section>
  );
}
