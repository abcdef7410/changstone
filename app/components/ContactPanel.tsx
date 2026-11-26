import { site } from "../lib/site";

export default function ContactPanel({ title = "有類似工程需求嗎？", description = "提供工程位置、現場照片、圖說或大約尺寸，我們可以先協助了解施作範圍與估價需求。" }: { title?: string; description?: string }) {
  return (
    <section id="contact" className="bg-gradient-to-br from-[#003b98] via-[#0757c2] to-[#0b4fb3] px-5 py-14 text-white md:py-16">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold leading-snug md:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-8">{description}</p>
        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
          <a href={site.line} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-8 py-3 font-semibold text-[#003b98] hover:bg-blue-50">LINE 工程詢價</a>
          <a href={site.phoneHref} className="inline-flex min-h-12 items-center justify-center rounded-full border border-white px-8 py-3 font-semibold hover:bg-white/10">電話 {site.phone}</a>
        </div>
        <a href={`mailto:${site.email}`} className="mt-5 inline-block break-all text-sm underline underline-offset-4">{site.email}</a>
      </div>
    </section>
  );
}
