import { site } from "../lib/site";

export default function MobileContactBar() {
  return (
    <nav aria-label="快速聯絡" className="mobile-contact-bar fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-3 border-t border-[#d9e2f1] bg-white px-5 pt-3 shadow-[0_-4px_20px_#0b3f9f0d] md:hidden">
      <a href={site.line} target="_blank" rel="noopener noreferrer" className="flex min-h-11 items-center justify-center rounded-full bg-[#003b98] px-3 text-sm font-semibold text-white">LINE 詢價</a>
      <a href={site.phoneHref} className="flex min-h-11 items-center justify-center rounded-full border border-[#003b98] px-3 text-sm font-semibold text-[#003b98]">電話諮詢</a>
    </nav>
  );
}
