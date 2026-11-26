import Image from "next/image";
import ContactPanel from "./components/ContactPanel";
import { pageMetadata } from "./lib/site";
import type { Metadata } from "next";
import Link from "next/link";
import ProjectCards from "./cases/ProjectCards";
import { projects } from "./cases/projects";

export const metadata: Metadata = pageMetadata(
  "常石工程科技 | 土木工程與防潮石膏磚",
  "常石工程科技結合土木技師背景與現場施工經驗，提供土木工程、排水改善、基地整地與防潮石膏磚隔間，服務北部地區。",
  "/",
);

const services = [
  {
    title: "土木工程與排水改善",
    text: "針對基地逕流、雨水滯留、邊坡排水與既有排水瓶頸，提供現場評估、施工配置與完工整理。",
    href: "/detention-basin",
  },
  {
    title: "防潮石膏磚隔間工程",
    text: "適用住宅、商辦、廠辦與室內隔間，重視放樣、垂直度、接縫處理與收邊細節。",
    href: "/gypsum",
  },
  {
    title: "基地整地與修繕",
    text: "包含地坪整理、局部修補、施工動線安排與後續維護建議，讓工程成果更穩定耐用。",
    href: "/detention-basin#site-work",
  },
];

const process = [
  ["01", "現場會勘", "確認基地狀況、排水方向、施工限制與業主需求。"],
  ["02", "工程規劃", "整理施工項目、材料方式、工期節點與安全注意事項。"],
  ["03", "進場施作", "依現場條件調整工序，重視排水、結構與收邊品質。"],
  ["04", "完工交付", "整理現場、拍攝完工紀錄，提供後續維護建議。"],
];

export default function Home() {

  return (
    <div className="bg-[#f7f9fc] text-slate-900">

      <main id="main-content">
        <section className="bg-gradient-to-br from-[#003b98] via-[#0757c2] to-[#0b4fb3] text-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-20">
            <div>
              <p className="mb-5 inline-flex rounded-full border border-white/25 px-4 py-1 text-sm text-white">
                土木技師背景・現場評估・施工管理
              </p>
              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
                土木工程與防潮石膏磚，從規劃到完工。
              </h1>
              <p className="mb-8 max-w-2xl text-lg leading-8 text-white">
                常石工程科技結合土木技師背景與現場施工經驗，協助業主整理基地條件、安排施工工序，完成排水、景觀土木與室內隔間工程。
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
              <Image
                src="/images/detension/civil-project-01/20260528/LINE_ALBUM_2026528-29模板收尾-施作排水管_260531_20.jpg"
                width={1477} height={1108} preload sizes="(max-width: 767px) calc(100vw - 40px), 520px"
                alt="土木工程模板收尾與排水管施工照片"
                className="h-80 w-full rounded-md object-cover sm:col-span-2"
              />
              <Image
                src="/images/gypsum/keelung/2026051509.jpg"
                width={1477} height={1108} sizes="(max-width: 639px) calc(100vw - 40px), 260px"
                alt="石膏磚工程完工照片"
                className="h-40 w-full rounded-md object-cover"
              />
              <div className="rounded-md border border-white/10 bg-white/10 p-5">
                <div className="text-2xl font-bold">施工有紀錄</div>
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
                <Link
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
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="about-title" className="border-y border-[#d9e2f1] bg-blue-50/60 py-12 md:py-16">
          <div className="mx-auto grid max-w-6xl gap-6 px-5 md:grid-cols-2 md:items-center">
            <div>
              <p className="mb-2 font-semibold text-[#003b98]">關於常石</p>
              <h2 id="about-title" className="text-3xl font-bold leading-snug">土木技師背景，重視每一道施工細節。</h2>
            </div>
            <div className="space-y-4 text-base leading-8 text-slate-700">
              <p>從基地排水、滯洪設施到防潮石膏磚隔間，常石將工程判斷與現場施作結合，先確認圖說、工序與材料，再安排進場施工。</p>
              <p>以現勘溝通、施工照片與階段檢查，協助業主掌握施作範圍、進度及收邊品質。服務北部地區，依案件條件討論工程做法。</p>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-5">
            <div className="mb-6 flex flex-wrap items-baseline justify-between gap-4">
              <h2 className="text-3xl font-bold md:text-4xl">工程案例</h2>
              <Link href="/cases" className="font-semibold text-[#003b98] underline underline-offset-4">查看全部案例</Link>
            </div>
            <ProjectCards projects={projects.slice(0, 3)} />
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

        <ContactPanel title="有土木、排水或隔間工程需求嗎？" />
      </main>

    </div>
  );
}
