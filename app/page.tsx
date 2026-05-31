/* eslint-disable @next/next/no-html-link-for-pages, @next/next/no-img-element */
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "常石工程科技 | 土木工程與石膏磚工程",
  description:
    "常石工程科技提供土木工程、排水改善、基地整地、石膏磚隔間與修繕工程，協助業主從現勘評估、施工規劃到完工交付。",
};

const services = [
  {
    title: "土木工程與排水改善",
    text: "針對基地逕流、雨水滯留、邊坡排水與既有排水瓶頸，提供現場評估、施工配置與完工整理。",
    href: "/detention-basin",
  },
  {
    title: "石膏磚隔間工程",
    text: "適用住宅、商辦、廠辦與室內隔間，重視放樣、垂直度、接縫處理與收邊細節。",
    href: "/gypsum",
  },
  {
    title: "基地整地與修繕",
    text: "包含地坪整理、局部修補、施工動線安排與後續維護建議，讓工程成果更穩定耐用。",
    href: "#contact",
  },
];

const process = [
  ["01", "現場會勘", "確認基地狀況、排水方向、施工限制與業主需求。"],
  ["02", "工程規劃", "整理施工項目、材料方式、工期節點與安全注意事項。"],
  ["03", "進場施作", "依現場條件調整工序，重視排水、結構與收邊品質。"],
  ["04", "完工交付", "整理現場、拍攝完工紀錄，提供後續維護建議。"],
];

const detentionImages = [
  {
    src: "/images/detension/林口合正欣永震滯洪池/20260530/LINE_ALBUM_2026530灌漿，灑水養護_260531_9.jpg",
    alt: "土木工程灌漿與養護施工照片",
    label: "灌漿養護",
  },
  {
    src: "/images/detension/林口合正欣永震滯洪池/20260527/LINE_ALBUM_2016527頂板鋼筋綁紮_260531_11.jpg",
    alt: "土木工程頂板鋼筋綁紮施工照片",
    label: "鋼筋綁紮",
  },
  {
    src: "/images/detension/林口合正欣永震滯洪池/20260518/S__18857997_0.jpg",
    alt: "土木工程鋼筋模板施工照片",
    label: "鋼筋模板",
  },
];

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-[#f7f9fc] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-[#d9e2f1] bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="/" className="text-lg font-bold text-[#0b3f9f] md:text-xl">
            常石工程科技
          </a>
          <nav className="flex items-center gap-4 overflow-x-auto whitespace-nowrap text-sm text-slate-700 md:gap-6">
            <a href="#services" className="hover:text-[#003b98]">
              服務項目
            </a>
            <a href="/cases" className="hover:text-[#003b98]">
              案例
            </a>
            <a href="/detention-basin" className="hover:text-[#003b98]">
              土木工程
            </a>
            <a href="/gypsum" className="hover:text-[#003b98]">
              石膏磚工程
            </a>
            <a href="#contact" className="font-semibold text-[#003b98]">
              聯絡諮詢
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="bg-gradient-to-br from-[#003b98] via-[#0757c2] to-[#0b4fb3] text-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-20">
            <div>
              <p className="mb-5 inline-flex rounded-full border border-white/25 px-4 py-1 text-sm text-white">
                土木工程、排水改善、室內隔間一次整合
              </p>
              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
                讓基地排水、空間隔間與工程收尾都更穩。
              </h1>
              <p className="mb-8 max-w-2xl text-lg leading-8 text-white">
                從土木工程、排水動線到石膏磚隔間，常石工程科技協助業主把現場條件整理清楚，規劃可施工、可維護、可交付的工程成果。
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://lin.ee/UqhmIYE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 font-semibold text-[#003b98] shadow-sm hover:bg-blue-50"
                >
                  LINE 諮詢
                </a>
                <a
                  href="tel:0988157517"
                  className="inline-flex items-center justify-center rounded-full border border-white bg-white px-8 py-3 font-semibold text-[#003b98] shadow-sm hover:bg-blue-50"
                >
                  0988-157-517
                </a>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <img
                src="/images/detension/林口合正欣永震滯洪池/20260528/LINE_ALBUM_2026528-29模板收尾-施作排水管_260531_20.jpg"
                alt="土木工程模板收尾與排水管施工照片"
                className="h-80 w-full rounded-md object-cover sm:col-span-2"
              />
              <img
                src="/images/gypsum/keelung/2026051509.jpg"
                alt="石膏磚工程完工照片"
                className="h-40 w-full rounded-md object-cover"
              />
              <div className="rounded-md border border-white/10 bg-white/10 p-5">
                <div className="text-3xl font-bold">4</div>
                <p className="mt-2 text-sm leading-6 text-white">
                  現勘、規劃、施作、交付，工程流程清楚紀錄。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-5">
            <div className="mb-10 max-w-3xl">
              <p className="mb-2 font-semibold text-[#003b98]">服務項目</p>
              <h2 className="text-3xl font-bold md:text-4xl">
                以現場條件為核心，安排真正能落地的工程做法。
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {services.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="rounded-md border border-[#d9e2f1] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
                >
                  <h3 className="mb-3 text-xl font-bold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="leading-7 text-slate-600">{item.text}</p>
                  <span className="mt-5 inline-block font-semibold text-[#003b98]">
                    查看服務
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#ffffff] py-16 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-[0.8fr_1.2fr] md:items-start">
            <div>
              <p className="mb-2 font-semibold text-[#003b98]">工程案例</p>
              <h2 className="mb-5 text-3xl font-bold md:text-4xl">
                土木工程與石膏磚工程案例一次整理。
              </h2>
              <p className="leading-8 text-slate-600">
                案例依工程類型整理，包含土木工程與石膏磚工程，方便業主依需求查看實際施工紀錄。
              </p>
              <a
                href="/cases"
                className="mt-6 inline-flex rounded-full bg-[#0b4fb3] px-7 py-3 font-semibold text-white shadow-sm hover:bg-[#063f96]"
              >
                查看全部案例
              </a>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {detentionImages.map((image) => (
                <figure key={image.src} className="overflow-hidden rounded-md border border-[#d9e2f1] bg-white">
                  <img src={image.src} alt={image.alt} className="h-56 w-full object-cover" />
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
          <div className="mx-auto max-w-6xl px-5">
            <div className="mb-10 max-w-3xl">
              <p className="mb-2 font-semibold text-[#003b98]">合作流程</p>
              <h2 className="text-3xl font-bold md:text-4xl">
                從現勘到完工，讓每一步都有依據。
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-4">
              {process.map(([num, title, text]) => (
                <div key={num} className="rounded-md border border-[#d9e2f1] bg-white p-6">
                  <div className="mb-5 text-sm font-bold text-[#003b98]">{num}</div>
                  <h3 className="mb-2 text-lg font-bold">{title}</h3>
                  <p className="leading-7 text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-gradient-to-br from-[#003b98] via-[#0757c2] to-[#0b4fb3] py-16 text-white md:py-20">
          <div className="mx-auto max-w-4xl px-5 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              有基地排水、土木或隔間工程需求嗎？
            </h2>
            <p className="mb-8 text-lg leading-8 text-white">
              歡迎提供現場照片、位置、預計施作範圍與需求，我們可以先協助判斷工程方向。
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
            <div className="mt-8 text-sm leading-7 text-white">
              <p>Email：changstonetech@gmail.com</p>
              <p>
                Facebook：
                <a
                  href="https://www.facebook.com/changstonetech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline decoration-white/50 underline-offset-4 hover:decoration-white"
                >
                  常石工程科技
                </a>
              </p>
              <p>服務範圍：北部地區，可依案件現場討論</p>
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
