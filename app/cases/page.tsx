import type { Metadata } from "next";
import Link from "next/link";
import ProjectCards from "./ProjectCards";
import { projects } from "./projects";

export const metadata: Metadata = {
  title: "工程案例 | 常石工程科技",
  description: "常石工程科技的基地排水、景觀小土木與石膏磚隔間工程案例。",
};

export default function CasesPage() {
  const categories = Array.from(new Set(projects.map((project) => project.category)));

  return (
    <div className="min-h-screen bg-[#f7f9fc] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-[#d9e2f1] bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
          <Link href="/" className="shrink-0 text-lg font-bold text-[#0b3f9f] md:text-xl">常石工程科技</Link>
          <nav aria-label="主選單" className="flex min-w-0 items-center gap-4 overflow-x-auto whitespace-nowrap text-sm text-slate-700 md:gap-6">
            <Link href="/" className="hover:text-[#003b98]">首頁</Link>
            <span aria-current="page" className="font-semibold text-[#003b98]">案例</span>
            <Link href="/detention-basin" className="hover:text-[#003b98]">土木工程</Link>
            <Link href="/gypsum" className="hover:text-[#003b98]">石膏磚工程</Link>
            <Link href="/#contact" className="hover:text-[#003b98]">聯絡</Link>
          </nav>
        </div>
      </header>

      <main>
        <div className="bg-gradient-to-br from-[#003b98] via-[#0757c2] to-[#0b4fb3] text-white">
          <div className="mx-auto max-w-6xl px-5 py-12 md:py-16">
            <h1 className="text-4xl font-bold md:text-5xl">工程案例總覽</h1>
          </div>
        </div>
        {categories.map((category) => (
          <section key={category} className="mx-auto max-w-6xl px-5 pt-10 last:pb-14 md:pt-14">
            <h2 className="mb-5 text-2xl font-bold text-slate-950 md:text-3xl">{category}案例</h2>
            <ProjectCards projects={projects.filter((project) => project.category === category)} />
          </section>
        ))}
      </main>

      <footer className="bg-[#003b98] py-6 text-center text-sm text-white">
        © {new Date().getFullYear()} 常石工程科技有限公司. All rights reserved.
      </footer>
    </div>
  );
}
