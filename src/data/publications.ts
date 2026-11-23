export type PublicationResource = 'Paper' | 'arXiv' | 'Code' | 'Slides' | 'Poster';
type PublicationCategory = 'international-conference-refereed' | 'preprint' | 'domestic-conference';

export interface Publication {
  title: string;
  language?: 'en' | 'ja';
  authors: readonly string[];
  authorListComplete: boolean;
  category: PublicationCategory;
  year?: number;
  venue?: string;
  notes?: string;
  visible: boolean;
  links: Partial<Record<PublicationResource, string>>;
}

const axies2025Venue = '大学ICT推進協議会2025年度年次大会 (AXIES2025)';

export const publications: readonly Publication[] = [
  {
    title: 'Are Linguistic and Arithmetic Circuits Dissociated in LLMs?',
    authors: ['Riku Kisako', 'Tatsuki Kuribayashi', 'Ryohei Sasano'],
    authorListComplete: true,
    category: 'international-conference-refereed',
    venue: 'AACL-IJCNLP 2026 (main long)',
    year: 2026,
    notes: 'Oral & Poster',
    visible: true,
    links: {
      Paper: 'https://aclanthology.org/2026.aacl-long.8/',
      arXiv: 'https://arxiv.org/abs/2610.27790',
    },
  },
  {
    title: 'When Is 0.1% Enough? Analyzing the Combined Effects of Dimensionality Reduction and Quantization on Text Embedding Compression',
    authors: ['Riku Kisako', 'Hayato Tsukagoshi', 'Ryohei Sasano'],
    authorListComplete: true,
    category: 'preprint',
    venue: 'arXiv 2026',
    year: 2026,
    visible: true,
    links: { arXiv: 'https://arxiv.org/abs/2606.01074' },
  },
  {
    title: '大規模言語モデル内における文法回路と計算回路の重なり',
    language: 'ja',
    authors: ['木迫 璃玖', '栗林 樹生', '笹野 遼平'],
    authorListComplete: true,
    category: 'domestic-conference',
    venue: '言語処理学会第32回年次大会 (NLP2026)',
    year: 2026,
    visible: true,
    links: { Paper: 'https://www.anlp.jp/proceedings/annual_meeting/2026/pdf_dir/B5-17.pdf' },
  },
  {
    title: '名古屋大学における LMS 連携システムを一元管理するための Web アプリケーションの開発',
    language: 'ja',
    authors: ['鈴木 直樹', '木迫 璃玖', '槫林 優', '大平 茂輝', '戸田 智基'],
    authorListComplete: true,
    category: 'domestic-conference',
    venue: axies2025Venue,
    year: 2025,
    visible: true,
    links: { Paper: 'https://axies.jp/_files/conf/conf2025/paper/3AM2B-3.pdf' },
  },
  {
    title: '名古屋大学における受講状況の可視化を支援する LMS 連携システムの開発と運用',
    language: 'ja',
    authors: ['木迫 璃玖', '鈴木 直樹', '槫林 優', '大平 茂輝', '戸田 智基'],
    authorListComplete: true,
    category: 'domestic-conference',
    venue: axies2025Venue,
    year: 2025,
    visible: true,
    links: { Paper: 'https://axies.jp/_files/conf/conf2025/paper/3AM2B-4.pdf' },
  },
  {
    title: '名古屋大学における課題採点支援 LMS 連携 Web ツールの開発',
    language: 'ja',
    authors: ['槫林 優', '鈴木 直樹', '木迫 璃玖', '大平 茂輝', '戸田 智基'],
    authorListComplete: true,
    category: 'domestic-conference',
    venue: axies2025Venue,
    year: 2025,
    visible: true,
    links: { Paper: 'https://axies.jp/_files/conf/conf2025/paper/3AM2B-6.pdf' },
  },
  {
    title: '大規模言語モデル内部における言語と計算領域の区分',
    language: 'ja',
    authors: ['木迫 璃玖', '栗林 樹生', '笹野 遼平'],
    authorListComplete: true,
    category: 'domestic-conference',
    venue: '言語処理学会第31回年次大会 (NLP2025)',
    year: 2025,
    visible: true,
    links: { Paper: 'https://www.anlp.jp/proceedings/annual_meeting/2025/pdf_dir/P2-7.pdf' },
  },
  {
    title: 'On Representational Dissociation of Language and Arithmetic in Large Language Models',
    authors: ['Riku Kisako', 'Tatsuki Kuribayashi', 'Ryohei Sasano'],
    authorListComplete: true,
    category: 'preprint',
    venue: 'arXiv 2025',
    year: 2025,
    visible: true,
    links: { arXiv: 'https://arxiv.org/abs/2502.11932' },
  },
  {
    title: '名古屋大学における学生の利便性向上を目指した LMS 連携システムの開発',
    language: 'ja',
    authors: ['澤田 桂都', '山本 実央', '木迫 璃玖', '大平 茂輝', '後藤 明史', '戸田 智基'],
    authorListComplete: true,
    category: 'domestic-conference',
    venue: '大学ICT推進協議会2022年度年次大会 (AXIES2022)',
    year: 2022,
    visible: true,
    links: { Paper: 'https://axies.jp/_files/conf/conf2022/paper/15AM1B-1.pdf' },
  },
];
