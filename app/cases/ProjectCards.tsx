import Image from "next/image";
import Link from "next/link";
import type { Project } from "./projects";

export default function ProjectCards({ projects }: { projects: Project[] }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,17rem),1fr))] gap-6">
      {projects.map((project) => {
        const cover = project.photos?.[0];
        return (
          <Link
            key={project.slug}
            href={`/cases/${project.slug}`}
            className="group flex w-full max-w-xl flex-col overflow-hidden rounded-md border border-[#d9e2f1] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md focus-visible:outline-2 focus-visible:outline-[#003b98]"
          >
            {cover && (
              <div className="relative aspect-[16/10]">
                <Image src={cover.src} alt="" fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 560px" className="object-cover" />
              </div>
            )}
            <div className="flex flex-1 flex-col items-start p-5 md:p-6">
              <p className="mb-2 text-sm font-semibold text-[#003b98]">
                {[project.location, project.category].filter(Boolean).join(" · ")}
              </p>
              <h3 className="mb-3 text-2xl font-bold text-slate-950">{project.title}</h3>
              <p className="mb-5 leading-7 text-slate-600">{project.summary}</p>
              <span className="mt-auto font-semibold text-[#003b98] group-hover:underline">查看案例 <span aria-hidden="true">→</span></span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
