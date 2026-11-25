export type Project = {
  slug: string;
  title: string;
  location?: string;
  category: string;
  summary: string;
  photos?: { src: string; alt: string; caption?: string }[];
};

export const projects: Project[] = [
  {
    slug: "hsinchu-biomedical",
    title: "臺大生醫景觀小土木工程",
    location: "新竹縣竹北市",
    category: "土木工程",
    summary: "常石承攬臺大新竹生醫園區分院第二期研究大樓的景觀小土木工程，施作滯洪池開挖、邊坡整形及北側明溝。",
    photos: [
      {
        src: "/images/cases/hsinchu-biomedical/basin-overview.webp",
        alt: "從池緣俯瞰研究大樓旁的滯洪池，挖土機正在整理邊坡。",
        caption: "滯洪池與邊坡整形",
      },
      {
        src: "/images/cases/hsinchu-biomedical/earth-hauling.webp",
        alt: "挖土機將池區開挖的土石裝入場內工程車。",
        caption: "池區土方調運",
      },
      {
        src: "/images/cases/hsinchu-biomedical/drain-excavation.webp",
        alt: "小型挖土機沿既有混凝土牆開挖北側明溝。",
        caption: "北側明溝開挖",
      },
      {
        src: "/images/cases/hsinchu-biomedical/concrete-blinding.webp",
        alt: "作業人員沿溝線整平素混凝土墊層。",
        caption: "溝底墊層整平",
      },
      {
        src: "/images/cases/hsinchu-biomedical/channel-rebar.webp",
        alt: "北側明溝內，底板與兩側溝壁的鋼筋沿溝線排列。",
        caption: "北側明溝鋼筋綁紮",
      },
    ],
  },
  {
    slug: "site-drainage",
    title: "土木工程施工案例",
    location: "北部地區",
    category: "土木工程",
    summary: "配合基地排水配置，常石施作池體鋼筋、模板與排水管線，並進行混凝土澆置及養護。",
    photos: [
      {
        src: "/images/detension/civil-project-01/20260528/LINE_ALBUM_2026528-29模板收尾-施作排水管_260531_20.jpg",
        alt: "基地排水工程的模板收尾與排水管線施工現場。",
        caption: "模板與排水管線施作",
      },
      {
        src: "/images/detension/civil-project-01/20260518/S__18858004_0.jpg",
        alt: "從池內可見底板及兩側池壁的鋼筋配置。",
        caption: "底板與池壁配筋",
      },
      {
        src: "/images/detension/civil-project-01/20260520/LINE_ALBUM_2026520滯洪池灌底板_260531_13.jpg",
        alt: "池底混凝土澆置後的表面，兩側留有池壁鋼筋。",
        caption: "池底混凝土澆置",
      },
      {
        src: "/images/detension/civil-project-01/20260527/LINE_ALBUM_2016527頂板鋼筋綁紮_260531_11.jpg",
        alt: "池體頂板的鋼筋網與邊緣彎鉤。",
        caption: "頂板鋼筋綁紮",
      },
      {
        src: "/images/detension/civil-project-01/20260530/LINE_ALBUM_2026530灌漿，灑水養護_260531_9.jpg",
        alt: "池體混凝土澆置與灑水養護施工現場。",
        caption: "混凝土澆置與養護",
      },
    ],
  },
  {
    slug: "keelung-gypsum",
    title: "基隆石膏磚隔間工程",
    location: "基隆市",
    category: "石膏磚工程",
    summary: "常石依室內隔間位置放樣、砌築石膏磚牆，並處理牆面接縫及門框周邊收邊。",
    photos: [
      {
        src: "/images/gypsum/keelung/2026051509.jpg",
        alt: "基隆室內隔間施作完成後的石膏磚牆面。",
        caption: "石膏磚隔間牆面",
      },
      {
        src: "/images/gypsum/keelung/2026051303.jpg",
        alt: "進場的空心石膏磚在室內工區成排堆放。",
        caption: "石膏磚備料",
      },
      {
        src: "/images/gypsum/keelung/2026051301.jpg",
        alt: "工班在室內沿隔間位置砌築首層石膏磚。",
        caption: "首層砌築",
      },
      {
        src: "/images/gypsum/keelung/2026051304.jpg",
        alt: "石膏磚在鋼柱旁切配，與既有構件銜接。",
        caption: "柱邊磚體切配",
      },
      {
        src: "/images/gypsum/keelung/2026051513.jpg",
        alt: "砌築成形的兩面隔間牆，在轉角旁預留門洞。",
        caption: "門洞與隔間轉角",
      },
    ],
  },
];
