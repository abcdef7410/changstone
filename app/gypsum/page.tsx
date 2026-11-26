import Image from "next/image";
import ContactPanel from "../components/ContactPanel";
import { pageMetadata } from "../lib/site";
import type { Metadata } from "next";
import ProjectCards from "../cases/ProjectCards";
import { projects } from "../cases/projects";

export const metadata: Metadata = pageMetadata(
  "防潮石膏磚隔間工程 | 常石工程科技",
  "常石工程科技提供住宅、商辦與廠辦防潮石膏磚隔間施工，附材料性能說明、聲學試驗依據與基隆施工案例。",
  "/gypsum",
);

const advantages = [
  ["施工效率", "適合需要快速完成隔間、控制現場濕作與工期的空間。"],
  ["牆面平整", "重視放樣、水平、垂直與接縫處理，降低後續修補成本。"],
  ["空間彈性", "住宅、辦公、廠辦或局部隔間皆可依現場條件配置。"],
  ["完工紀錄", "施工過程與完工狀態以照片保存，方便業主確認。"],
];

export default function GypsumPage() {

  return (
    <div className="bg-[#f7f9fc] text-slate-900">

      <main id="main-content">
        <section className="bg-gradient-to-br from-[#003b98] via-[#0757c2] to-[#0b4fb3] text-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[0.95fr_1.05fr] md:items-center md:py-20">
            <div>
              <p className="mb-5 inline-flex rounded-full border border-white/25 px-4 py-1 text-sm text-white">
                石膏磚隔間・室內工程・案例展示
              </p>
              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
                防潮石膏磚隔間，從材料規格到施工品質。
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

            <Image
              src="/images/gypsum/keelung/2026051509.jpg"
              width={1477} height={1108} preload sizes="(max-width: 767px) calc(100vw - 40px), 600px"
              alt="石膏磚隔間完工牆面"
              className="h-auto w-full rounded-md"
            />
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-5">
            <div className="mb-10 max-w-3xl">
              <p className="mb-2 font-semibold text-[#003b98]">工程特色</p>
              <h2 className="text-3xl font-bold md:text-4xl">
                重視工期、牆面平整與收邊品質。
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

        <section id="material-performance" aria-labelledby="performance-title" className="border-y border-[#d9e2f1] bg-blue-50/60 py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-5">
            <p className="mb-2 font-semibold text-[#003b98]">材料與檢測依據</p>
            <h2 id="performance-title" className="mb-6 text-3xl font-bold">以材料資料與施工條件確認隔間性能。</h2>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-md border border-[#d9e2f1] bg-white p-6">
                <h3 className="text-xl font-bold">聲學試驗參考</h3>
                <p className="my-4 text-3xl font-bold text-[#003b98]">Rw 40 dB</p>
                <p className="text-base leading-7 text-slate-700">Rw(C;Ctr) = 40(-1;-5) dB。試驗單位為國立屏東科技大學綠建材技術服務中心聲學實驗室，報告編號 A-2604-02。</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">上述為實驗室試件結果；現場隔音會受牆體組構、門窗、管線開孔及接縫影響，需依實際設計確認。</p>
              </div>
              <div className="rounded-md border border-[#d9e2f1] bg-white p-6">
                <h3 className="mb-4 text-xl font-bold">選材與施工前確認</h3>
                <ul className="list-disc space-y-3 pl-5 text-base leading-7 text-slate-700">
                  <li>依空間用途確認磚體厚度、防潮需求及材料規格。</li>
                  <li>防火、吊掛與特殊隔音需求，依對應材料文件及施作條件確認。</li>
                  <li>放樣、牆面垂直度、門框、管線與接縫收邊納入現場檢查。</li>
                </ul>
                <a href="#contact" className="mt-5 inline-flex min-h-11 items-center font-semibold text-[#003b98] underline underline-offset-4">洽詢材料與送審資料</a>
              </div>
            </div>
          </div>
        </section>

        <section id="case-gallery" className="scroll-mt-16 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">石膏磚工程案例</h2>
            <ProjectCards projects={projects.filter((project) => project.category === "石膏磚工程")} />
          </div>
        </section>

        <ContactPanel title="需要防潮石膏磚隔間估價或材料資料？" />
      </main>

    </div>
  );
}
