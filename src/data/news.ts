interface NewsEntry {
  date: string; // YYYY-MM
  text: string;
}

export const showNews = false;
export const visibleNewsLimit = 5;

export const news: readonly NewsEntry[] = [
  {
    date: '2026-11',
    text: 'Presented our work on linguistic and arithmetic circuits at AACL-IJCNLP 2026.',
  },
  {
    date: '2026-10',
    text: 'Our paper was accepted to AACL-IJCNLP 2026 (Oral & Poster).',
  },
];
