import Image from "next/image";
import ContactPanel from "../components/ContactPanel";
import { pageMetadata } from "../lib/site";
import type { Metadata } from "next";
import ProjectCards from "../cases/ProjectCards";
import { projects } from "../cases/projects";

export const metadata: Metadata = pageMetadata(
  "土木工程與排水改善 | 常石工程科技",
  "常石工程科技提供基地排水、滯洪池、整地與修繕工程服務，從現勘、施工規劃到完工紀錄，服務北部地區。",
  "/detention-basin",
);

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

  return (
    <div className="bg-[#f7f9fc] text-slate-900">

      <main id="main-content">
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
            <Image
              src="/images/detension/civil-project-01/20260528/LINE_ALBUM_2026528-29模板收尾-施作排水管_260531_20.jpg"
              width={1477} height={1108} preload sizes="(max-width: 767px) calc(100vw - 40px), 600px"
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
                基地排水與施工品質的四個重點。
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

        <section id="site-work" className="bg-blue-50/60 py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="mb-5 text-3xl font-bold">基地整地與修繕</h2>
            <p className="max-w-3xl text-lg leading-8 text-slate-700">配合現場高低差、排水方向與施工動線，評估基地整地、地坪整理、局部修補及既有排水改善。先確認施作範圍、既有設施與後續使用需求，再提出工程配置與估價。</p>
            <a href="#contact" className="mt-5 inline-flex min-h-11 items-center font-semibold text-[#003b98] underline underline-offset-4">洽詢整地與修繕工程</a>
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

        <ContactPanel title="需要評估土木工程或基地排水改善？" />
      </main>

    </div>
  );
}
