import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "常石工程科技｜石膏磚隔間・工程鑑定・土木修繕",
  description:
    "常石工程科技提供雙北地區石膏磚隔間、工程鑑定、結構安全查核、土木修繕與現場評估服務。",
};

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl md:text-2xl font-bold text-blue-700">
            常石工程科技
          </h1>

          <nav className="flex items-center gap-4 md:gap-6 text-sm md:text-lg overflow-x-auto whitespace-nowrap">
            <a href="#services" className="hover:text-blue-600 shrink-0">
              服務項目
            </a>
            <a href="/gypsum" className="hover:text-blue-600 shrink-0">
              石膏磚工程
            </a>
            <a href="#cases" className="hover:text-blue-600 shrink-0">
              案例
            </a>
            <a href="#contact" className="hover:text-blue-600 shrink-0">
              聯絡
            </a>
          </nav>
        </div>
      </header>

      <section className="bg-gradient-to-br from-blue-700 to-blue-500 text-white py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="inline-block px-4 py-1 rounded-full border border-white/60 text-sm mb-5">
            雙北工程服務｜現場評估｜LINE 詢問
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            石膏磚隔間・工程鑑定・土木修繕
          </h2>

          <p className="text-lg md:text-xl opacity-95 mb-8 leading-relaxed">
            常石工程科技提供雙北地區工程服務，從現場評估、施工規劃到工程問題判斷，
            協助屋主、公司行號與社區把工程問題處理清楚。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://lin.ee/UqhmIYE"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-xl shadow hover:bg-gray-100"
            >
              LINE 立即詢問
            </a>
            <a
              href="tel:0988157517"
              className="border border-white/80 text-white font-semibold px-8 py-3 rounded-xl hover:bg-white/10"
            >
              電話：0988-157-517
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-4 text-center">主要服務項目</h3>
          <p className="text-center text-gray-600 mb-10">
            先把需求說清楚，再安排合適的評估與施工方式。
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "石膏磚隔間施工",
                text: "住宅、辦公室、廠辦與商業空間隔間，重視垂直度、平整度、門框收邊與後續油漆銜接。",
                link: "/gypsum",
                cta: "查看石膏磚案例",
              },
              {
                title: "工程鑑定與安全查核",
                text: "裂縫、漏水、鄰損、施工瑕疵與工程爭議初步評估，協助釐清問題與後續處理方向。",
                link: "#contact",
                cta: "詢問鑑定服務",
              },
              {
                title: "土木修繕與小型工程",
                text: "水溝、人行道、混凝土修補、社區修繕與一般土木工程，可依現場狀況評估。",
                link: "#contact",
                cta: "詢問修繕工程",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white p-8 rounded-2xl shadow">
                <h4 className="text-xl font-semibold mb-4 text-blue-700">
                  {item.title}
                </h4>
                <p className="text-gray-700 mb-5 leading-relaxed">{item.text}</p>
                <a href={item.link} className="text-blue-700 font-semibold hover:underline">
                  {item.cta} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-8 text-center">為什麼選常石？</h3>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              ["工程背景", "由土木工程專業背景出發，重視現場條件、施工順序與品質控制。"],
              ["說明清楚", "把工程問題用一般人聽得懂的方式說明，避免業主只聽到模糊報價。"],
              ["雙北服務", "以台北、新北為主要服務區域，方便現場評估與後續溝通。"],
            ].map(([title, text]) => (
              <div key={title} className="bg-white rounded-2xl shadow p-6">
                <h4 className="text-blue-700 font-semibold text-lg mb-2">
                  {title}
                </h4>
                <p className="text-gray-700">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cases" className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-4 text-center">案例與處理方向</h3>
          <p className="text-center text-gray-600 mb-10">
            工程客戶最在意的不是口號，而是你是否真的能判斷問題、處理現場。
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              ["石膏磚隔間", "放樣、材料進場、牆體砌築、門框收邊與完成面檢查。"],
              ["裂縫與漏水評估", "協助判斷可能成因、風險程度與後續修繕方向。"],
              ["社區與小型土木修繕", "針對現場狀況評估工法、報價與施工安排。"],
            ].map(([title, text]) => (
              <div key={title} className="bg-white p-6 rounded-2xl shadow">
                <h4 className="text-lg font-semibold mb-2 text-blue-700">
                  {title}
                </h4>
                <p className="text-gray-700">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-8 text-center">詢問流程</h3>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              ["1", "LINE 詢問", "提供地點、照片、坪數與需求。"],
              ["2", "初步判斷", "確認是否適合承接或需現場會勘。"],
              ["3", "現場評估", "丈量、確認工法、施工條件與時程。"],
              ["4", "報價施工", "提供報價，確認後安排施工或後續服務。"],
            ].map(([num, title, text]) => (
              <div key={num} className="bg-white rounded-2xl shadow p-6 text-center">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  {num}
                </div>
                <h4 className="font-semibold text-blue-700 mb-2">{title}</h4>
                <p className="text-sm text-gray-700">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-6">需要工程評估或施工估價？</h3>
          <p className="text-lg mb-8 opacity-95">
            請先提供施工地點、現場照片、預計項目與大約坪數，我們會協助初步判斷。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="https://lin.ee/UqhmIYE"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-xl shadow hover:bg-gray-100"
            >
              LINE 立即詢問
            </a>
            <a
              href="tel:0988157517"
              className="border border-white/80 text-white font-semibold px-8 py-3 rounded-xl hover:bg-white/10"
            >
              撥打電話
            </a>
          </div>

          <div className="text-left max-w-xl mx-auto space-y-2 text-white/95">
            <p><strong>公司：</strong>常石工程科技有限公司</p>
            <p><strong>Email：</strong>changstonetech@gmail.com</p>
            <p><strong>電話：</strong>0988-157-517</p>
            <p><strong>LINE：</strong>@245jhftl</p>
            <p><strong>服務區域：</strong>台北 / 新北為主</p>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-6 text-center text-sm">
        <p>© {year} 常石工程科技有限公司｜石膏磚隔間・工程鑑定・土木修繕</p>
      </footer>
    </div>
  );
}