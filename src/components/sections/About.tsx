import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-12 lg:py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              About Magnum Global
            </h2>
            <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
              <p>
                Magnum Global Inc. is a Canadian-based brokerage specializing in
                the international trade of bulk recycled textiles. We connect
                global buyers with quality-graded clothing, shoes, and
                accessories sourced through established North American supply
                chains.
              </p>
              <p>
                Our operations are built on transparency, consistency, and
                regulatory compliance. We understand that international buyers
                require reliable partners who can deliver on specifications,
                maintain quality standards, and handle export logistics
                professionally.
              </p>
              <p>
                With over 15 years of experience in the textile recycling
                industry, we have developed strong relationships with suppliers,
                sorting facilities, and logistics providers. This network allows
                us to offer competitive pricing and flexible volume arrangements
                to meet diverse market needs.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-8">
              <div>
                <p className="text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-sky-600 to-emerald-500">
                  2008
                </p>
                <p className="mt-1 text-sm text-slate-600">Established</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-sky-600 to-emerald-500">
                  Canada
                </p>
                <p className="mt-1 text-sm text-slate-600">Headquarters</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg shadow-slate-200/60">
              <Image
                src="/images/about.png"
                alt="Magnum Global operations"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 520px, 100vw"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/35 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-lg border border-slate-200 max-w-xs hidden lg:block">
              <p className="text-sm text-slate-600 italic">
                &quot;Committed to sustainable textile trade and building lasting
                partnerships with buyers worldwide.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
