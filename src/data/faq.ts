export interface FAQItem {
  label: string;
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    label: '潛水與自介',
    question: '可以先潛水，不急著自介嗎？',
    answer:
      '可以先看大家聊什麼，不用一進來就寫完整自介。不擅長主動開話題也沒關係，從一段看得懂的對話接起就好。',
  },
  {
    label: '興趣與接話',
    question: '只有部分興趣重疊，新人也能加入話題嗎？',
    answer:
      '有一點共同興趣就夠了，不需要每個坑都懂。看看正在聊的內容，有興趣就接話。小社群的回覆有快有慢，沒馬上接到話也不用急。',
  },
  {
    label: '分享與界線',
    question: '可以分享作品嗎，有哪些交流界線？',
    answer:
      '作品、專案都可以分享，先找合適的頻道。尊重彼此的喜好，不要洗頻、人身攻擊，或只把這裡當廣告板。完整規則在 Discord 裡。',
  },
  {
    label: '加入後的第一步',
    question: '加入後先看哪裡？',
    answer:
      '先閱讀規則和頻道說明，再看看身分組與有興趣的頻道。不確定發在哪裡可以問，想先逛一陣子也可以。',
  },
];
