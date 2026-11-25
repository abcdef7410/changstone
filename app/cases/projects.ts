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
        alt: "施工中的室內石膏磚隔間牆。",
        caption: "隔間牆砌築",
      },
    ],
  },
];
