/* eslint-disable @next/next/no-html-link-for-pages, @next/next/no-img-element */
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "石膏磚隔間工程 | 常石工程科技",
  description:
    "石膏磚隔間工程案例展示，包含施工照片、工程特色、施工流程與聯絡諮詢。",
};

const featuredCaseImages = [
  {
    src: "/images/gypsum/keelung/2026051301.jpg",
    alt: "石膏磚隔間放樣與牆面起始施工",
    label: "放樣定位",
  },
  {
    src: "/images/gypsum/keelung/2026051303.jpg",
    alt: "石膏磚牆面堆疊施工中",
    label: "牆面施作",
  },
  {
    src: "/images/gypsum/keelung/2026051509.jpg",
    alt: "石膏磚隔間完成後牆面狀態",
    label: "完工牆面",
  },
  {
    src: "/images/gypsum/keelung/2026051513.jpg",
    alt: "石膏磚隔間收邊與門框周邊整理",
    label: "收邊整理",
  },
];

const allCaseImages = [
  "/images/gypsum/keelung/2026051505.jpg",
  "/images/gypsum/keelung/2026051307.jpg",
  "/images/gypsum/keelung/2026051305.jpg",
  "/images/gypsum/keelung/2026051508.jpg",
  "/images/gypsum/keelung/2026051514.jpg",
  "/images/gypsum/keelung/2026051509.jpg",
  "/images/gypsum/keelung/2026051513.jpg",
];

const advantages = [
  ["施工效率", "適合需要快速完成隔間、控制現場濕作與工期的空間。"],
  ["牆面平整", "重視放樣、水平、垂直與接縫處理，降低後續修補成本。"],
  ["空間彈性", "住宅、辦公、廠辦或局部隔間皆可依現場條件配置。"],
  ["完工紀錄", "施工過程與完工狀態以照片保存，方便業主確認。"],
];

export default function GypsumPage() {
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
            <a href="/detention-basin" className="hover:text-[#003b98]">
              土木工程
            </a>
            <span className="font-semibold text-[#003b98]">石膏磚工程</span>
            <a href="#contact" className="hover:text-[#003b98]">
              聯絡
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="bg-gradient-to-br from-[#003b98] via-[#0757c2] to-[#0b4fb3] text-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[0.95fr_1.05fr] md:items-center md:py-20">
            <div>
              <p className="mb-5 inline-flex rounded-full border border-white/25 px-4 py-1 text-sm text-white">
                石膏磚隔間・室內工程・案例展示
              </p>
              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
                石膏磚隔間工程，兼顧施工效率與牆面品質。
              </h1>
              <p className="mb-8 text-lg leading-8 text-white">
                適用於住宅、辦公室、廠辦與商業空間隔間，施工過程重視放樣、垂直度、牆面平整與收邊細節。
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="#case-gallery"
                  className="rounded-full bg-white px-8 py-3 text-center font-semibold text-[#003b98] shadow-sm hover:bg-blue-50"
                >
                  查看案例
                </a>
                <a
                  href="https://lin.ee/UqhmIYE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/40 px-8 py-3 text-center font-semibold text-white hover:bg-white/10"
                >
                  LINE 諮詢
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img
                src="/images/gypsum/keelung/2026051509.jpg"
                alt="石膏磚隔間完工照片"
                className="col-span-2 h-80 w-full rounded-md object-cover"
              />
              {featuredCaseImages.slice(0, 2).map((image) => (
                <img
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  className="h-40 w-full rounded-md object-cover"
                />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-5">
            <div className="mb-10 max-w-3xl">
              <p className="mb-2 font-semibold text-[#003b98]">工程特色</p>
              <h2 className="text-3xl font-bold md:text-4xl">
                把客戶最在意的工期、平整度與完工狀態放在前面。
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-4">
              {advantages.map(([title, text]) => (
                <div key={title} className="rounded-md border border-[#d9e2f1] bg-white p-6 shadow-sm">
                  <h3 className="mb-3 text-lg font-bold">{title}</h3>
                  <p className="leading-7 text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="case-gallery" className="bg-[#ffffff] py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-5">
            <div className="mb-10 grid gap-6 md:grid-cols-[0.85fr_1.15fr] md:items-end">
              <div>
                <p className="mb-2 font-semibold text-[#003b98]">精選案例</p>
                <h2 className="text-3xl font-bold md:text-4xl">
                  用階段式照片呈現施工可信度。
                </h2>
              </div>
              <p className="leading-8 text-slate-600">
                從放樣定位、牆面施作到收邊整理，透過實際案例照片呈現工程細節與完成品質。
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {featuredCaseImages.map((image) => (
                <figure key={image.src} className="overflow-hidden rounded-md border border-[#d9e2f1] bg-white">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-56 w-full object-cover transition duration-500 hover:scale-105"
                  />
                  <figcaption className="p-4">
                    <div className="font-semibold text-slate-950">{image.label}</div>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{image.alt}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-5">
            <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="mb-2 font-semibold text-[#003b98]">完整照片</p>
                <h2 className="text-3xl font-bold md:text-4xl">
                  更多工程紀錄
                </h2>
              </div>
              <p className="max-w-xl leading-7 text-slate-600">
                這區可以放更多現場照片，不需要每張都寫長文，重點是整齊、清楚、速度快。
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {allCaseImages.map((src, index) => (
                <figure key={src} className="overflow-hidden rounded-md border border-[#d9e2f1] bg-white">
                  <img
                    src={src}
                    alt={`石膏磚工程照片 ${index + 1}`}
                    className="h-64 w-full object-cover"
                  />
                  <figcaption className="p-4 text-sm text-slate-600">
                    石膏磚工程紀錄 {index + 1}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-gradient-to-br from-[#003b98] via-[#0757c2] to-[#0b4fb3] py-16 text-white md:py-20">
          <div className="mx-auto max-w-4xl px-5 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              需要石膏磚隔間估價或現場評估？
            </h2>
            <p className="mb-8 text-lg leading-8 text-white">
              傳送空間照片、施作位置與大約尺寸，我們可以協助初步判斷施工方式。
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
