/* eslint-disable @next/next/no-html-link-for-pages, @next/next/no-img-element */
import type { Metadata } from "next";
import ProjectCards from "../cases/ProjectCards";
import { projects } from "../cases/projects";

export const metadata: Metadata = {
  title: "土木工程 | 常石工程科技",
  description:
    "常石工程科技提供基地排水、滯洪池與集水設施施工服務，附工程案例與聯絡方式。",
};

const highlights = [
  ["雨水滯留", "協助基地在豪雨時段降低瞬間排水負擔。"],
  ["排水動線", "整理進水、溢流、排放與維護動線，避免完工後難以清理。"],
  ["現場紀錄", "以照片呈現開挖、整形、排水設施與完工狀態。"],
  ["維護考量", "保留可檢查、可清淤、可確認水流方向的空間。"],
];

const steps = [
  "現場拍照與高低差初步確認",
  "確認集水方向、出水口與周邊排水條件",
  "安排開挖、池體整形、邊坡與底部整理",
  "施作排水設施、溢流或集水相關配置",
  "完工清理、拍攝紀錄並交付維護建議",
];

export default function DetentionBasinPage() {
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
            <a href="/cases" className="hover:text-[#003b98]">
              案例
            </a>
            <span className="font-semibold text-[#003b98]">土木工程</span>
            <a href="/gypsum" className="hover:text-[#003b98]">
              石膏磚工程
            </a>
            <a href="#contact" className="hover:text-[#003b98]">
              聯絡
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="bg-[#ffffff]">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[0.9fr_1.1fr] md:items-center md:py-20">
            <div>
              <p className="mb-5 inline-flex rounded-full bg-blue-50 px-4 py-1 text-sm font-semibold text-[#003b98]">
                土木工程・基地排水・雨水滯留
              </p>
              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
                基地排水與滯洪設施施工
              </h1>
              <p className="mb-8 text-lg leading-8 text-slate-600">
                常石依基地地形與排水方向安排整地、池體結構及管線施工，並預留後續檢查與清淤的空間。
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="#gallery"
                  className="inline-flex justify-center rounded-full bg-[#0b4fb3] px-8 py-3 font-semibold text-white shadow-sm hover:bg-[#063f96]"
                >
                  查看工程案例
                </a>
                <a
                  href="https://lin.ee/UqhmIYE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center rounded-full border border-[#b8c4d6] px-8 py-3 font-semibold text-slate-900 hover:bg-slate-100"
                >
                  LINE 諮詢
                </a>
              </div>
            </div>
            <img
              src="/images/detension/civil-project-01/20260528/LINE_ALBUM_2026528-29模板收尾-施作排水管_260531_20.jpg"
              alt="基地排水工程的模板與管線施工現場"
              className="h-auto w-full rounded-md"
            />
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-5">
            <div className="mb-10 max-w-3xl">
              <p className="mb-2 font-semibold text-[#003b98]">工程重點</p>
              <h2 className="text-3xl font-bold md:text-4xl">
                不只放照片，也把工程價值說清楚。
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-4">
              {highlights.map(([title, text]) => (
                <div key={title} className="rounded-md border border-[#d9e2f1] bg-white p-6 shadow-sm">
                  <h3 className="mb-3 text-lg font-bold">{title}</h3>
                  <p className="leading-7 text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="scroll-mt-16 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">土木工程案例</h2>
            <ProjectCards projects={projects.filter((project) => project.category === "土木工程")} />
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="mb-2 font-semibold text-[#003b98]">施工流程</p>
              <h2 className="mb-5 text-3xl font-bold md:text-4xl">
                施工流程清楚，工程品質才有依據。
              </h2>
              <p className="leading-8 text-slate-600">
                從現場條件確認到完工整理，每一階段都依照施工需求安排工序，讓業主能清楚掌握工程進度與施作品質。
              </p>
            </div>
            <ol className="space-y-4">
              {steps.map((step, index) => (
                <li key={step} className="flex gap-4 rounded-md border border-[#d9e2f1] bg-white p-5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0b4fb3] font-bold text-white">
                    {index + 1}
                  </span>
                  <p className="pt-1 leading-7 text-slate-700">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="contact" className="bg-gradient-to-br from-[#003b98] via-[#0757c2] to-[#0b4fb3] py-16 text-white md:py-20">
          <div className="mx-auto max-w-4xl px-5 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              需要評估土木工程或基地排水改善？
            </h2>
            <p className="mb-8 text-lg leading-8 text-white">
              歡迎提供現場照片、基地位置與預計施作項目，我們可先協助了解需求並安排後續評估。
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="https://lin.ee/UqhmIYE"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white px-8 py-3 font-semibold text-[#003b98] shadow-sm hover:bg-blue-50"
              >
                LINE 諮詢
              </a>
              <a
                href="tel:0988157517"
                className="rounded-full border border-white bg-white px-8 py-3 font-semibold text-[#003b98] shadow-sm hover:bg-blue-50"
              >
                電話 0988-157-517
              </a>
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
