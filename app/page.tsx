// app/page.tsx

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
<header className="bg-white shadow sticky top-0 z-50">
  <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
    <h1 className="text-2xl font-bold text-blue-700">常石工程科技</h1>

    <nav className="flex items-center gap-6 text-lg overflow-x-auto whitespace-nowrap md:overflow-visible md:whitespace-normal">
      <a href="#services" className="hover:text-blue-600 shrink-0">
        服務項目
      </a>
      <a href="#about" className="hover:text-blue-600 shrink-0">
        關於我們
      </a>
      <a href="#cases" className="hover:text-blue-600 shrink-0">
        案例分享
      </a>
      <a href="/gypsum" className="hover:text-blue-600 shrink-0">
        石膏磚工程
      </a>
      <a href="#contact" className="hover:text-blue-600 shrink-0">
        聯絡我們
      </a>
    </nav>
  </div>
</header>


      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-700 to-blue-500 text-white py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            結構安全 × 工程鑑定 × 工程糾紛判定
          </h2>
          <p className="text-xl opacity-90 mb-8">
            讓工程變清楚，讓安全更可靠。
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-xl shadow hover:bg-gray-100"
          >
            預約查核 / 專業諮詢
          </a>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-10 text-center">主要服務項目</h3>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-2xl shadow">
              <h4 className="text-xl font-semibold mb-4 text-blue-700">
                結構安全查核
              </h4>
              <p>
                梁柱裂縫判斷、樓板變形評估、老屋結構風險分析、耐震能力初步檢核，
                提供清楚的安全等級與建議。
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow">
              <h4 className="text-xl font-semibold mb-4 text-blue-700">
                公寓屋況鑑定
              </h4>
              <p>
                買屋前檢查、漏水與壁癌成因判定、磁磚隆起與裝修風險評估，
                協助買方與屋主做出正確決策。
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow">
              <h4 className="text-xl font-semibold mb-4 text-blue-700">
                工程糾紛鑑定
              </h4>
              <p>
                工程瑕疵、施工品質爭議、鄰損事件、契約爭議，
                提供訴訟可用之專業鑑定報告與技師意見。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-8 text-center">關於常石工程科技</h3>
          <p className="text-lg leading-relaxed text-gray-700">
            常石工程科技由土木技師常惟綱創立，專注於結構安全查核、工程鑑定及工程爭議處理。
            以科學化檢測、專業判斷與清晰報告，協助民眾、建築師、律師及機關單位釐清工程問題，
            讓每一次工程判斷都更透明、更可靠。
          </p>
          <p className="text-lg leading-relaxed text-gray-700 mt-4">
            我們擅長將複雜的工程現象，用一般人聽得懂的語言說明，
            並提供具體的風險評估與處理建議，是結構安全與工程糾紛之間的重要橋樑。
          </p>
        </div>
      </section>

      {/* Cases */}
      <section id="cases" className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-10 text-center">案例分享</h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow">
              <h4 className="text-lg font-semibold mb-2">舊公寓結構裂縫鑑定</h4>
              <p className="text-gray-700">
                現勘紀錄裂縫位置、長度與寬度，判定裂縫類型與可能成因，
                評估安全等級並提出補強建議。
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow">
              <h4 className="text-lg font-semibold mb-2">施工鄰損爭議鑑定</h4>
              <p className="text-gray-700">
                釐清施工行為與損害之關聯性，提供責任判斷依據，
                並出具可供訴訟或和解使用之專業報告。
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow">
              <h4 className="text-lg font-semibold mb-2">買屋前安全查核</h4>
              <p className="text-gray-700">
                對結構、樓板、牆面、管線與既有裝修進行全面檢視，
                提出潛在風險清單與整體評估等級。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-6">聯絡我們</h3>
          <p className="text-lg mb-8">
            預約查核、鑑定或工程諮詢，歡迎與我們聯繫，提供案件基本資訊有助於加速評估。
          </p>

          <div className="text-left max-w-xl mx-auto space-y-3 text-gray-700">
            <p>
              <strong>公司：</strong>常石工程科技有限公司
            </p>
            <p>
              <strong>技師：</strong>常惟綱
            </p>
            <p>
              <strong>Email：</strong>abcdef741@gmail.com
            </p>
            <p>
              <strong>電話：</strong>0988-157-517
            </p>
            <p>
              <strong>line：</strong>abcdef7410
            </p>
            <p>
              <strong>服務區域：</strong>台北 / 新北（可視案件需求全台服務）
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-20 text-center text-sm">
        <p>© {year} 常石工程科技有限公司｜結構安全與工程鑑定</p>
      </footer>
    </div>
  );
}
