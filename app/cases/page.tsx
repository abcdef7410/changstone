import ContactPanel from "../components/ContactPanel";
import { pageMetadata } from "../lib/site";
import type { Metadata } from "next";
import ProjectCards from "./ProjectCards";
import { projects } from "./projects";

export const metadata: Metadata = pageMetadata(
  "工程案例 | 常石工程科技",
  "查看常石工程科技的臺大生醫景觀小土木、基地排水與基隆石膏磚隔間案例，每案附現場照片及工程詢價入口。",
  "/cases",
);

export default function CasesPage() {
  const categories = Array.from(new Set(projects.map((project) => project.category)));

  return (
    <div className="bg-[#f7f9fc] text-slate-900">

      <main id="main-content">
        <div className="bg-gradient-to-br from-[#003b98] via-[#0757c2] to-[#0b4fb3] text-white">
          <div className="mx-auto max-w-6xl px-5 py-12 md:py-16">
            <h1 className="text-4xl font-bold md:text-5xl">工程案例總覽</h1>
          </div>
        </div>
        {categories.map((category) => (
          <section key={category} className="mx-auto max-w-6xl px-5 pt-10 last:pb-14 md:pt-14">
            <h2 className="mb-5 text-2xl font-bold text-slate-950 md:text-3xl">{category}案例</h2>
            <ProjectCards projects={projects.filter((project) => project.category === category)} />
          </section>
        ))}
        <ContactPanel title="找到與需求相近的工程案例了嗎？" />
      </main>

    </div>
  );
}
