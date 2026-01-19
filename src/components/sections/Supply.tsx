"use client";

import Image from "next/image";
import { ScrollReveal } from "@/src/components/ui/ScrollReveal";

const categories = [
  {
    title: "Graded Clothing",
    description:
      "Clothing sorted by category, quality, and condition — packed in export-ready bales.",
    image: "/images/supply/gradedclothes.png",
  },
  {
    title: "Credential Clothing",
    description:
      "Original, unsorted clothing loads preserved in original packaging.",
    image: "/images/supply/credentials.png",
  },
  {
    title: "Mixed Textile Bales",
    description:
      "Bulk mixed garments from secondhand inventories ready for redistribution.",
    image: "/images/supply/mixedtextilebale.png",
  },
  {
    title: "Used Shoes",
    description:
      "Bulk used shoes grouped by quality — paired, institutional, and single lots.",
    image: "/images/supply/shoes.png",
  },
  {
    title: "Vintage & Premium Lots",
    description:
      "Curated vintage apparel and higher-grade garments for specialty markets.",
    image: "/images/supply/vintage.png",
  },
  {
    title: "Bric Brac",
    description:
      "Bulk miscellaneous household goods including small electronics, kitchenware, plastic items, glassware, and assorted home products packed for export.",
    image: "/images/supply/bric.jpg",
  },
  {
    title: "Hard Toys",
    description:
      "Pre-owned durable toys made primarily from plastic or rigid materials, packed in bulk containers for wholesale redistribution.",
    image: "/images/supply/htoys.jpg",
  },
  {
    title: "Soft Toys",
    description:
      "Pre-owned plush and fabric-based toys packed in bulk for secondary markets and resale channels.",
    image: "/images/supply/stoys.jpg",
  },
  {
    title: "Linens",
    description:
      "Bulk household textiles including bed sheets, blankets, pillowcases, towels, tablecloths, and curtains prepared for export distribution.",
    image: "/images/supply/linens.jpg",
  },
];

export default function Supply() {
  return (
    <section id="supply" className="py-12 lg:py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              What We Supply
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Comprehensive range of recycled textiles, graded and packaged for
              international wholesale distribution.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <ScrollReveal key={category.title} delay={(index % 3) + 1}>
              <div className="group relative bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 h-full">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900 group-hover:text-sky-700 transition-colors">
                    {category.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500">
          </p>
        </div>
      </div>
    </section>
  );
}
