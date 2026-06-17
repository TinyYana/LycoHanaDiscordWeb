export interface PickType {
  label: string;
  description: string;
}

export const pickTypes: PickType[] = [
  {
    label: '動畫',
    description: '不分新番舊番，看完會想抓人一起看的那種就值得丟上來。',
  },
  {
    label: '漫畫',
    description: '長篇短篇都行，特別是會讓你想回去翻前面的那種。',
  },
  {
    label: '遊戲',
    description: '不一定要大作，玩到會截圖、會想講一句的就算。',
  },
  {
    label: '音樂',
    description: '單曲、歌單、循環到半夜的歌，想分享就丟。',
  },
  {
    label: '音遊',
    description: '手感好的或夠折磨的譜，總得有個地方喊一下。',
  },
  {
    label: '角色 / 二創',
    description: '喜歡的角色、看到的好圖或二創，想推就推。',
  },
];
