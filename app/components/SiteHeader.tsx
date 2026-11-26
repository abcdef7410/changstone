"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { href: "/#services", label: "服務項目" },
  { href: "/cases", label: "工程案例" },
  { href: "/detention-basin", label: "土木工程" },
  { href: "/gypsum", label: "防潮石膏磚" },
  { href: "/#contact", label: "聯絡諮詢" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const active = (href: string) => !href.includes("#") && (pathname === href || pathname.startsWith(`${href}/`));

  return (
    <header className="sticky top-0 z-50 border-b border-[#d9e2f1] bg-white/95 backdrop-blur" onKeyDown={(event) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        button.current?.focus();
      }
    }}>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-3 focus:text-[#003b98]">跳至主要內容</a>
      <div className="mx-auto flex min-h-18 max-w-6xl items-center justify-between gap-3 px-5 py-3">
        <Link href="/" onClick={() => setOpen(false)} className="flex shrink-0 items-center gap-2 text-lg font-bold text-[#0b3f9f] md:text-xl">
          <Image src="/images/brand/mark.png" alt="" width={36} height={36} className="rounded-lg" />
          常石工程科技
        </Link>
        <nav aria-label="主選單" className="hidden items-center gap-1 text-sm text-slate-700 md:flex lg:gap-3">
          {navigation.map(({ href, label }) => (
            <Link key={href} href={href} aria-current={active(href) ? "page" : undefined} className={`inline-flex min-h-11 items-center rounded px-2 hover:bg-blue-50 hover:text-[#003b98] ${active(href) || href.includes("contact") ? "font-semibold text-[#003b98]" : ""}`}>{label}</Link>
          ))}
        </nav>
        <button ref={button} type="button" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)} className="inline-flex min-h-11 min-w-16 items-center justify-center gap-2 rounded-lg border border-[#d9e2f1] px-3 text-sm font-semibold text-[#003b98] md:hidden">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            {open ? <path d="m6 6 12 12M6 18 18 6" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
          {open ? "關閉" : "選單"}
        </button>
      </div>
      <nav id="mobile-navigation" aria-label="手機主選單" hidden={!open} className="max-h-[70dvh] overflow-y-auto border-t border-[#d9e2f1] bg-white px-5 py-3 md:hidden">
        {navigation.map(({ href, label }) => (
          <Link key={href} href={href} onClick={() => setOpen(false)} aria-current={active(href) ? "page" : undefined} className="flex min-h-12 items-center rounded-lg px-3 text-base font-medium text-slate-800 hover:bg-blue-50 hover:text-[#003b98]">{label}</Link>
        ))}
      </nav>
    </header>
  );
}
