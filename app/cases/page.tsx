/* eslint-disable @next/next/no-html-link-for-pages, @next/next/no-img-element */
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "工程案例 | 常石工程科技",
  description:
    "常石工程科技工程案例，包含土木工程、基地排水、石膏磚隔間與相關施工紀錄。",
};

const civilCases = [
  {
    title: "林口合正欣永震滯洪池工程",
    category: "土木工程",
    href: "/detention-basin",
    image:
      "/images/detension/林口合正欣永震滯洪池/20260528/LINE_ALBUM_2026528-29模板收尾-施作排水管_260531_20.jpg",
    summary:
      "基地排水、模板收尾、鋼筋綁紮、排水管線與混凝土澆置施工紀錄。",
    tags: ["基地排水", "鋼筋模板", "混凝土澆置"],
  },
];

const gypsumCases = [
  {
    title: "基隆石膏磚隔間工程",
    category: "石膏磚工程",
    href: "/gypsum",
    image: "/images/gypsum/keelung/2026051509.jpg",
    summary:
      "室內隔間牆施作，包含放樣定位、牆面施工、收邊整理與完工紀錄。",
    tags: ["石膏磚隔間", "室內工程", "完工紀錄"],
  },
];

function CaseCard({
  item,
}: {
  item: {
    title: string;
    category: string;
    href: string;
    image: string;
    summary: string;
    tags: string[];
  };
}) {
  return (
    <a
      href={item.href}
      className="group overflow-hidden rounded-md border border-[#d9e2f1] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <img
        src={item.image}
        alt={item.title}
        className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
      />
      <div className="p-6">
        <p className="mb-2 text-sm font-semibold text-[#003b98]">
          {item.category}
        </p>
        <h3 className="mb-3 text-2xl font-bold text-slate-950">
          {item.title}
        </h3>
        <p className="mb-5 leading-7 text-slate-600">{item.summary}</p>
        <div className="mb-6 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-[#003b98]"
            >
              {tag}
            </span>
          ))}
        </div>
        <span className="inline-flex rounded-full bg-[#0b4fb3] px-6 py-2 font-semibold text-white group-hover:bg-[#063f96]">
          查看案例
        </span>
      </div>
    </a>
  );
}

export default function CasesPage() {
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-[#f7f9fc] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-[#d9e2f1] bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="/" className="text-lg font-bold text-[#0b3f9f] md:text-xl">
            常石工程科技
          </a>
          <nav className="flex items-center gap-4 overflow-x-auto whitespace-nowrap text-sm text-slate-700 md:gap-6">
            <a href="/" className="hover:text-[#003b98]">
              首頁
            </a>
            <span className="font-semibold text-[#003b98]">案例</span>
            <a href="/detention-basin" className="hover:text-[#003b98]">
              土木工程
            </a>
            <a href="/gypsum" className="hover:text-[#003b98]">
              石膏磚工程
            </a>
            <a href="/#contact" className="hover:text-[#003b98]">
              聯絡
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="bg-gradient-to-br from-[#003b98] via-[#0757c2] to-[#0b4fb3] text-white">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
            <p className="mb-5 inline-flex rounded-full border border-white/25 px-4 py-1 text-sm text-white">
              土木工程・石膏磚工程・施工案例
            </p>
            <h1 className="mb-6 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
              工程案例總覽
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-white">
              依工程類型整理實際施工紀錄，協助業主了解常石工程科技的施工內容、現場條件與完成品質。
            </p>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-5">
            <div className="mb-10">
              <p className="mb-2 font-semibold text-[#003b98]">土木工程案例</p>
              <h2 className="text-3xl font-bold md:text-4xl">
                基地排水、結構施作與現場工程紀錄
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {civilCases.map((item) => (
                <CaseCard key={item.title} item={item} />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-5">
            <div className="mb-10">
              <p className="mb-2 font-semibold text-[#003b98]">石膏磚工程案例</p>
              <h2 className="text-3xl font-bold md:text-4xl">
                室內隔間、牆面施工與收邊完成紀錄
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {gypsumCases.map((item) => (
                <CaseCard key={item.title} item={item} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#003b98] py-6 text-center text-sm text-white">
        © {year} 常石工程科技有限公司. All rights reserved.
      </footer>
    </div>
  );
}
