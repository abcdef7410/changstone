import { site } from "../lib/site";

export default function SiteFooter() {
  return (
    <footer className="bg-[#003b98] px-5 py-7 text-center text-sm leading-7 text-white">
      <p className="font-semibold">{site.legalName}</p>
      <p>服務範圍：北部地區，可依案件現場討論</p>
      <div className="my-2 flex flex-wrap justify-center gap-x-5 gap-y-1">
        <a href={`mailto:${site.email}`} className="break-all underline underline-offset-4">Email 聯絡</a>
        <a href={site.facebook} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Facebook</a>
      </div>
      <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
    </footer>
  );
}
