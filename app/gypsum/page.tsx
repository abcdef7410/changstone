// app/gypsum/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "石膏磚牆工程｜常石工程科技施工部",
  description:
    "常石工程科技施工部，專業石膏磚牆工程，重視垂直度、平整度與細部收邊，適用於住宅、辦公室與商業空間隔間調整。",
};

export default function GypsumPage() {
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header（跟首頁風格一致，多標記施工部） */}
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="text-2xl font-bold text-blue-700">
            常石工程科技
          </a>
          <nav className="space-x-6 text-lg hidden md:block">
            <a href="/" className="hover:text-blue-600">
              首頁
            </a>
            <a href="/#services" className="hover:text-blue-600">
              服務項目
            </a>
            <a href="/#about" className="hover:text-blue-600">
              關於我們
            </a>
            <a href="/#cases" className="hover:text-blue-600">
              案例分享
            </a>
            {/* 自己這頁 */}
            <span className="text-blue-700 font-semibold">
              石膏磚工程
            </span>
            <a href="/#contact" className="hover:text-blue-600">
              聯絡我們
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-700 to-blue-500 text-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <p className="inline-block px-4 py-1 rounded-full border border-white/60 text-sm mb-4">
            常石施工部・石膏磚牆工程
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            石膏磚牆工程｜以工程師標準完成每一道隔間牆
          </h2>
          <p className="text-lg opacity-90 mb-4">
            專業石膏磚牆施作，重視垂直度、平整度與細部收邊。
            適用於住宅、辦公室與商業空間，從需求溝通、丈量規劃到完工驗收，由工程背景團隊統一把關。
          </p>
          <p className="text-sm opacity-80 mb-8">
            服務範圍：北北基桃為主，其他地區可另議｜
            適用空間：住宅・辦公・店面・診所等室內隔間
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-xl shadow hover:bg-gray-100"
            >
              預約丈量與估價
            </a>
            <a
              href="#faq"
              className="inline-block border border-white/80 text-white font-semibold px-8 py-3 rounded-xl hover:bg-white/10"
            >
              查看常見問題
            </a>
          </div>
        </div>
      </section>

      {/* 內容區 */}
      <main className="py-16">
        <div className="max-w-6xl mx-auto px-6 space-y-16">
          {/* 為何石膏磚 */}
          <section>
            <h3 className="text-2xl font-bold mb-4">
              為什麼選擇石膏磚牆？
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              對於重視質感、穩定性與耐用性的空間，石膏磚牆是介於傳統磚牆與輕隔間之間的理想選擇。
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow p-6">
                <h4 className="text-xl font-semibold text-blue-700 mb-2">
                  乾式施工，效率與品質兼具
                </h4>
                <p className="text-gray-700 mb-3">
                  減少傳統濕作帶來的施工時間與現場髒亂，縮短工期又兼顧施工精度。
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>施工速度較傳統磚牆更快</li>
                  <li>減少大量濕作與砂漿使用</li>
                  <li>現場整理相對容易、影響鄰居較小</li>
                </ul>
              </div>
              <div className="bg-white rounded-2xl shadow p-6">
                <h4 className="text-xl font-semibold text-blue-700 mb-2">
                  隔音、防火與固定性表現穩定
                </h4>
                <p className="text-gray-700 mb-3">
                  石膏磚具一定厚度與密度，適合用於需要分隔且重視使用感受的空間。
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>隔音與防火性能較一般輕隔間穩定</li>
                  <li>牆體較紮實，較有利於日後掛設設備</li>
                  <li>表面平整，方便後續批土與油漆</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 適用情境 + 品質控管 */}
          <section className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-bold mb-4">適用空間與情境</h3>
              <p className="text-gray-700 mb-4">
                從住家到辦公室，石膏磚牆都能提供穩定、俐落的空間分隔效果。
              </p>
              <div className="flex flex-wrap gap-3 text-sm">
                <span className="px-3 py-1 rounded-full bg-white shadow border border-blue-100">
                  兩房改三房・增加書房
                </span>
                <span className="px-3 py-1 rounded-full bg-white shadow border border-blue-100">
                  新成屋交屋後隔間調整
                </span>
                <span className="px-3 py-1 rounded-full bg-white shadow border border-blue-100">
                  辦公室會議室與工作區分隔
                </span>
                <span className="px-3 py-1 rounded-full bg-white shadow border border-blue-100">
                  診所、事務所、教室隔間
                </span>
                <span className="px-3 py-1 rounded-full bg-white shadow border border-blue-100">
                  老屋室內格局重新規劃
                </span>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">我們如何把關施工品質？</h3>
              <p className="text-gray-700 mb-4">
                我們把每一道牆，當成工程的一部分，而不是單純裝修項目。
              </p>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li>
                  <h4 className="font-semibold">精準放樣與垂直度檢查</h4>
                  <p>
                    施工前利用放樣、拉線與水平雷射，確認牆位與垂直基準，施工中與完工後再複查。
                  </p>
                </li>
                <li>
                  <h4 className="font-semibold">接縫、轉角與門邊強化</h4>
                  <p>
                    特別留意石膏磚轉角、門框與管線開孔等容易產生裂縫的區域，採取適當補強與收邊方式。
                  </p>
                </li>
                <li>
                  <h4 className="font-semibold">與其他工種的銜接</h4>
                  <p>
                    能配合設計師、水電、木作與油漆工種，協調施工順序，避免互相破壞或重工。
                  </p>
                </li>
              </ul>
            </div>
          </section>

          {/* 施工流程 */}
          <section>
            <h3 className="text-2xl font-bold mb-4">石膏磚牆標準施工流程</h3>
            <p className="text-gray-700 mb-6">
              有明確流程，才有穩定品質。以下是常石施工部執行石膏磚牆工程的一般步驟。
            </p>
            <ol className="space-y-4 text-gray-700">
              {[
                [
                  "初步溝通與丈量",
                  "了解空間用途、家具配置與管線需求，至現場丈量牆長、高度與施工動線，評估可行性與限制。",
                ],
                [
                  "平面配置與牆位確認",
                  "與屋主或設計方確認牆位置、門洞、開口尺寸與設備預留，必要時提供簡易平面示意。",
                ],
                [
                  "保護與放樣定位",
                  "對地坪、既有家具與設備施作必要保護，並放樣、拉線或使用雷射定位，確保施工基準。",
                ],
                [
                  "石膏磚砌築與管線預留",
                  "依照圖面與現場放樣砌築石膏磚牆，途中預留插座、開關、空調排水與設備位置，注意牆體整體穩定。",
                ],
                [
                  "收邊與表面處理",
                  "修整牆面、處理轉角與門邊，預留後續批土與油漆空間，讓下個工種能順利接手。",
                ],
                [
                  "清潔與驗收說明",
                  "完工後進行基本清潔與廢料清運，並向屋主說明牆體配置、可能掛設區域與後續施工注意事項。",
                ],
              ].map(([title, text], index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{title}</h4>
                    <p>{text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* 費用 + FAQ */}
          <section className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-bold mb-4">費用與工期說明</h3>
              <p className="text-gray-700 mb-4">
                實際金額會依現場條件與需求而不同，我們會在丈量與溝通後提供明確報價。
              </p>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li>
                  <h4 className="font-semibold">費用主要取決於？</h4>
                  <p>
                    牆長度與高度、是否有門洞或特殊造型、是否需搭配管線與設備預留、工程所在地點與搬運條件等，皆會影響總費用。
                  </p>
                </li>
                <li>
                  <h4 className="font-semibold">工期大約需要多久？</h4>
                  <p>
                    一般住宅單純石膏磚牆工程，工期通常為數日至一週不等；若需搭配多種工種或較複雜設計，則會再與你說明預估工期。
                  </p>
                </li>
              </ul>
            </div>
            <div id="faq">
              <h3 className="text-2xl font-bold mb-4">常見問題 Q&A</h3>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li>
                  <h4 className="font-semibold">石膏磚牆會不會容易裂？</h4>
                  <p>
                    若施工工法正確、基底穩定、轉角與接縫處理得當，石膏磚牆並不特別容易裂。
                    常石會特別加強門邊、轉角與管線開孔等容易產生裂縫的位置。
                  </p>
                </li>
                <li>
                  <h4 className="font-semibold">可以掛電視、吊櫃嗎？</h4>
                  <p>
                    相較一般輕隔間，石膏磚牆較有利於掛設設備，但仍需依實際位置與重量評估。
                    若有掛電視牆或吊櫃需求，建議在施工前先告知，以便預作補強。
                  </p>
                </li>
                <li>
                  <h4 className="font-semibold">施工會很吵或很髒嗎？</h4>
                  <p>
                    施工過程會有敲打、切割與粉塵產生，我們會盡量做好現場保護與基本清潔，並配合大樓管委會規定的施工時段，降低對鄰居的影響。
                  </p>
                </li>
              </ul>
            </div>
          </section>

          {/* 公正性說明 */}
          <section>
            <div className="bg-yellow-50 border border-yellow-200 text-yellow-900 rounded-2xl p-4 text-sm">
              ※ 如涉既有施工品質爭議之工程鑑定案件，為維持第三方客觀與公正性，
              常石可視情況協助介紹其他獨立鑑定單位，施工部不介入相關鑑定作業。
            </div>
          </section>

          {/* Contact CTA */}
          <section id="contact">
            <div className="bg-blue-600 text-white rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-3">
                想規劃一面順眼又耐用的隔間牆？歡迎和我們聊聊。
              </h3>
              <p className="text-lg mb-6 opacity-95">
                若你正打算調整室內格局、增加房間或規劃辦公／商業空間隔間，
                歡迎將平面圖或現場照片提供給我們，我們可以先給你初步建議與估價方向。
              </p>
              <p className="text-sm opacity-90">
                此處可直接沿用首頁的聯絡方式（電話、Email、LINE ID / QR Code），
                或者嵌入專屬的石膏磚丈量預約表單。
              </p>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-20 text-center text-sm">
        <p>© {year} 常石工程科技有限公司｜石膏磚牆工程・施工部</p>
      </footer>
    </div>
  );
}
