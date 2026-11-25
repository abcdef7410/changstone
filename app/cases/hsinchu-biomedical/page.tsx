import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { hsinchuBiomedical as project } from "./project";

export const metadata: Metadata = {
  title: `${project.title} | 常石工程科技`,
  description: project.summary,
};

const photoDirectory = "/images/cases/hsinchu-biomedical";
const stages = [
  {
    title: "滯洪池開挖與邊坡整形",
    period: "10 月 7 日至 26 日",
    text: "挖土機開挖池底，配合場內車輛調運土方。隨著邊坡成形，工班同步核對池底與草溝高程。",
    photos: [
      { file: "basin-excavation", label: "池底開挖", alt: "挖土機在滯洪池內開挖，露出原地層的卵礫石。" },
      { file: "earth-hauling", label: "場內土方調運", alt: "挖土機將開挖的土石裝上停靠在池底的工程車。" },
    ],
  },
  {
    title: "北側明溝放樣與開挖",
    period: "10 月 27 日、11 月 5 日",
    text: "明溝位在建物與既有混凝土牆之間。現場先放樣確認溝線，再以小型挖土機沿牆開挖溝底。",
    photos: [
      { file: "drain-layout", label: "北側明溝放樣", alt: "測量儀架設在建物與混凝土牆之間的預定溝線上。" },
      { file: "drain-excavation", label: "沿牆開挖溝底", alt: "小型挖土機的挖斗緊鄰既有混凝土牆，沿線挖除土石。" },
    ],
  },
  {
    title: "溝底級配與混凝土墊層",
    period: "11 月 13 日至 14 日",
    text: "溝底先鋪設級配粒料，再澆置素混凝土墊層（PC），整平後作為明溝鋼筋綁紮的工作面。",
    photos: [
      { file: "aggregate-base", label: "溝底鋪設級配粒料", alt: "細碎的級配粒料鋪在狹長溝底，可見連續的基底面。" },
      { file: "concrete-blinding", label: "素混凝土墊層整平", alt: "作業人員在溝內以長柄工具整平新澆置的混凝土墊層。" },
    ],
  },
  {
    title: "管材進場與明溝鋼筋綁紮",
    period: "11 月 16 日至 19 日",
    text: "鋼筋混凝土管（RCP）運抵工地後集中堆置。明溝內則在墊層上配置底板鋼筋，並綁紮兩側溝壁鋼筋。",
    photos: [
      { file: "concrete-pipes", label: "鋼筋混凝土管進場", alt: "多支鋼筋混凝土管在工地整齊堆放，承口朝向鏡頭。" },
      { file: "channel-rebar", label: "底板與溝壁鋼筋", alt: "從明溝內沿縱向可見底板與兩側溝壁連續的鋼筋網。" },
    ],
  },
];

export default function HsinchuBiomedicalCasePage() {
  return (
    <div className="min-h-screen bg-[#f7f9fc] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-[#d9e2f1] bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
          <Link href="/" className="shrink-0 text-lg font-bold text-[#0b3f9f] md:text-xl">常石工程科技</Link>
          <nav aria-label="主選單" className="flex gap-4 whitespace-nowrap text-sm text-slate-700 md:gap-6">
            <Link href="/cases" className="font-semibold text-[#003b98] hover:underline">工程案例</Link>
            <Link href="/#contact" className="hover:text-[#003b98]">聯絡諮詢</Link>
          </nav>
        </div>
      </header>

      <main>
        <section className="border-b border-[#d9e2f1] bg-white">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 md:grid-cols-[0.9fr_1.1fr] md:items-center md:gap-12 md:py-16">
            <div>
              <p className="mb-4 text-sm font-semibold text-[#003b98]">新竹縣竹北市</p>
              <h1 className="mb-5 text-4xl font-bold leading-tight text-balance text-slate-950 md:text-5xl">
                {project.title}
              </h1>
              <p className="text-lg leading-8 text-slate-700">
                常石工程科技承攬「臺大新竹生醫園區分院第二期研究大樓新建工程」的景觀小土木工程。施工範圍包含滯洪池整地與北側明溝，兩處工區的地形與作業空間各有不同。
              </p>
              <dl className="mt-6 border-l-2 border-[#0b4fb3] pl-4">
                <dt className="text-sm font-semibold text-slate-600">施工照片紀錄期間</dt>
                <dd className="mt-1 text-slate-900">
                  <time dateTime="2026-10-07">2026 年 10 月 7 日</time>至<time dateTime="2026-11-19">11 月 19 日</time>
                </dd>
              </dl>
              <a href="#photos" className="mt-6 inline-flex rounded-full bg-[#0b4fb3] px-6 py-2.5 font-semibold text-white hover:bg-[#063f96]">
                查看施工照片
              </a>
            </div>
            <figure>
              <Image src={project.image} alt="從邊坡俯瞰滯洪池工區，挖土機正在研究大樓旁整理池坡。" width={1400} height={1050} unoptimized preload className="h-auto w-full rounded-md" />
              <figcaption className="mt-2 text-sm text-slate-600">10 月 26 日，從池緣俯瞰滯洪池與邊坡整形現場。</figcaption>
            </figure>
          </div>
        </section>

        <section id="photos" aria-labelledby="photos-title" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-12 md:py-16">
          <div className="mb-6 flex flex-wrap items-baseline justify-between gap-2">
            <h2 id="photos-title" className="text-3xl font-bold text-slate-950">分階段施工紀錄</h2>
            <p className="text-sm text-slate-600">點選照片可查看大圖。</p>
          </div>
          {stages.map((stage) => (
            <article key={stage.title} className="grid gap-5 border-t border-[#d9e2f1] py-8 lg:grid-cols-[1fr_2fr] lg:gap-10">
              <div>
                <p className="mb-2 text-sm font-semibold text-[#003b98]">{stage.period}</p>
                <h3 className="mb-3 text-2xl font-bold text-slate-950">{stage.title}</h3>
                <p className="leading-7 text-slate-600">{stage.text}</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {stage.photos.map((photo) => {
                  const src = `${photoDirectory}/${photo.file}.webp`;
                  return (
                    <figure key={photo.file} className="overflow-hidden rounded-md border border-[#d9e2f1] bg-white">
                      <a href={src} aria-label={`查看大圖，${photo.label}`} className="block cursor-zoom-in focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-blue-700">
                        <Image src={src} alt={photo.alt} width={1120} height={840} unoptimized className="h-auto w-full" />
                      </a>
                      <figcaption className="px-4 py-3 font-medium text-slate-800">{photo.label}</figcaption>
                    </figure>
                  );
                })}
              </div>
            </article>
          ))}
          <Link href="/cases" className="inline-block font-semibold text-[#003b98] underline underline-offset-4">返回全部工程案例</Link>
        </section>
      </main>
      <footer className="bg-[#003b98] py-6 text-center text-sm text-white">
        © {new Date().getFullYear()} 常石工程科技有限公司. All rights reserved.
      </footer>
    </div>
  );
}
