/* eslint-disable @next/next/no-html-link-for-pages, @next/next/no-img-element */
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "土木工程 | 常石工程科技",
  description:
    "土木工程、基地排水、集水設施與現場施工案例展示，包含施工重點、流程、照片牆與聯絡諮詢。",
};

const gallery = [
  {
    src: "/images/detension/civil-project-01/20260528/LINE_ALBUM_2026528-29模板收尾-施作排水管_260531_20.jpg",
    alt: "土木工程模板收尾與排水管施工照片",
    label: "模板收尾",
  },
  {
    src: "/images/detension/civil-project-01/20260530/LINE_ALBUM_2026530灌漿，灑水養護_260531_9.jpg",
    alt: "土木工程灌漿與灑水養護施工照片",
    label: "灌漿養護",
  },
  {
    src: "/images/detension/civil-project-01/20260527/LINE_ALBUM_2016527頂板鋼筋綁紮_260531_11.jpg",
    alt: "土木工程頂板鋼筋綁紮施工照片",
    label: "鋼筋綁紮",
  },
  {
    src: "/images/detension/civil-project-01/20260518/S__18857997_0.jpg",
    alt: "土木工程鋼筋模板施工照片",
    label: "鋼筋模板",
  },
  {
    src: "/images/detension/civil-project-01/20260518/S__18858004_0.jpg",
    alt: "土木工程牆面模組立施工照片",
    label: "牆面組立",
  },
  {
    src: "/images/detension/civil-project-01/20260520/LINE_ALBUM_2026520滯洪池灌底板_260531_13.jpg",
    alt: "土木工程底板灌漿施工照片",
    label: "底板灌漿",
  },
  {
    src: "/images/detension/civil-project-01/20260519/S__18907148_0.jpg",
    alt: "土木工程基礎與側牆施作照片",
    label: "基礎施作",
  },
  {
    src: "/images/detension/civil-project-01/20260518/S__18858007.jpg",
    alt: "土木工程現場鋼筋與模板施工照片",
    label: "鋼筋模板",
  },
  {
    src: "/images/detension/civil-project-01/20260518/S__18858000_0.jpg",
    alt: "土木工程結構鋼筋細部照片",
    label: "結構細部",
  },
  {
    src: "/images/detension/civil-project-01/20260512/S__18677769_0.jpg",
    alt: "土木工程基地施工準備照片",
    label: "施工準備",
  },
  {
    src: "/images/detension/civil-project-01/20260512/S__105463831.jpg",
    alt: "土木工程前期整地施工照片",
    label: "前期整地",
  },
  {
    src: "/images/detension/civil-project-01/20260511/S__18645048_0.jpg",
    alt: "土木工程基地現況照片",
    label: "基地現況",
  },
];

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
                北部基地土木工程，從結構施作到排水配置完整紀錄。
              </h1>
              <p className="mb-8 text-lg leading-8 text-slate-600">
                本案配合基地條件進行模板、鋼筋、排水管線與混凝土澆置作業，施工過程重視現場安全、結構品質與後續維護需求。
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="#gallery"
                  className="inline-flex justify-center rounded-full bg-[#0b4fb3] px-8 py-3 font-semibold text-white shadow-sm hover:bg-[#063f96]"
                >
                  查看照片
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
            <div className="grid gap-4">
              <img
                src={gallery[0].src}
                alt={gallery[0].alt}
                className="h-[420px] w-full rounded-md object-cover"
              />
              <div className="grid grid-cols-3 gap-4">
                {gallery.slice(1, 4).map((image) => (
                  <img
                    key={image.src}
                    src={image.src}
                    alt={image.alt}
                    className="h-28 w-full rounded-md object-cover"
                  />
                ))}
              </div>
            </div>
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

        <section id="gallery" className="bg-[#ffffff] py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-5">
            <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="mb-2 font-semibold text-[#003b98]">照片紀錄</p>
                <h2 className="text-3xl font-bold md:text-4xl">
                  開挖、排水、邊坡、完工一次整理。
                </h2>
              </div>
              <p className="max-w-xl leading-7 text-slate-600">
                透過施工階段照片，呈現從前期整地、模板組立、鋼筋綁紮到灌漿養護的完整工程紀錄。
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {gallery.map((image) => (
                <figure key={image.src} className="overflow-hidden rounded-md border border-[#d9e2f1] bg-white">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-72 w-full object-cover transition duration-500 hover:scale-105"
                  />
                  <figcaption className="p-4">
                    <div className="font-semibold text-slate-950">{image.label}</div>
                    <p className="mt-1 text-sm text-slate-600">{image.alt}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
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
