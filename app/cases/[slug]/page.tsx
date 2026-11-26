import ContactPanel from "../../components/ContactPanel";
import { pageMetadata } from "../../lib/site";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../projects";

type CasePageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

function getProject(slug: string) {
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  return project;
}

export async function generateMetadata({ params }: CasePageProps): Promise<Metadata> {
  const project = getProject((await params).slug);
  return pageMetadata(`${project.title} | 常石工程科技`, project.summary, `/cases/${project.slug}`);
}

export default async function CasePage({ params }: CasePageProps) {
  const project = getProject((await params).slug);
  const photos = project.photos ?? [];

  return (
    <div className="bg-[#f7f9fc] text-slate-900">

      <main id="main-content" className="mx-auto max-w-5xl px-5 py-10 md:py-16">
        <p className="mb-3 text-sm font-semibold text-[#003b98]">
          {[project.location, project.category].filter(Boolean).join(" · ")}
        </p>
        <h1 className="mb-4 text-3xl font-bold leading-tight text-balance text-slate-950 md:text-5xl">{project.title}</h1>
        <p className="max-w-3xl text-lg leading-8 text-slate-700">{project.summary}</p>

        {photos.length > 0 && (
          <section id="photos" aria-label="工程照片" className="mt-8 grid scroll-mt-20 grid-cols-[repeat(auto-fit,minmax(min(100%,20rem),1fr))] gap-5">
            {photos.map((photo, index) => (
              <figure key={photo.src} className="w-full max-w-3xl overflow-hidden rounded-md border border-[#d9e2f1] bg-white">
                <a href={photo.src} aria-label={`查看大圖，${photo.caption ?? photo.alt}`} className="relative block aspect-[4/3] cursor-zoom-in bg-slate-100 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[#003b98]">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes={photos.length === 1 ? "(max-width: 768px) 100vw, 768px" : "(max-width: 700px) 100vw, (max-width: 1024px) 50vw, 480px"}
                    loading={index === 0 ? "eager" : "lazy"}
                    className="object-contain"
                  />
                </a>
                {photo.caption && <figcaption className="px-4 py-3 text-sm font-medium text-slate-700">{photo.caption}</figcaption>}
              </figure>
            ))}
          </section>
        )}

        <Link href="/cases" className="mt-8 inline-block font-semibold text-[#003b98] underline underline-offset-4">返回全部工程案例</Link>
      </main>
      <ContactPanel title="詢問類似工程" description={`正在規劃與「${project.title}」相近的工程嗎？傳送位置、照片或圖說，讓我們協助確認需求與估價範圍。`} />
    </div>
  );
}
