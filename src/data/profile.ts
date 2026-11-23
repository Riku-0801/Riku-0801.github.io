interface ProfilePhoto {
  src: string;
  alt: string;
  crop?: { width: string; left: string; top: string };
}

interface AcademicProfile {
  name: string;
  publicationNameAliases: readonly string[];
  affiliation: string;
  laboratory: string;
  researchArea: string;
  biography: string;
  researchInterests: string;
  description: string;
  photo: ProfilePhoto | null;
  email: string | null;
  githubUrl: string;
  xUrl: string | null;
  linkedinUrl: string | null;
  scholarUrl: string | null;
  semanticScholarUrl: string | null;
  cvPath: string | null;
  lastUpdated: string | null;
}

export const profile: AcademicProfile = {
  name: 'Riku Kisako',
  publicationNameAliases: ['木迫 璃玖'],
  affiliation: 'Graduate School of Informatics, Nagoya University, Japan',
  laboratory: 'Sasano Laboratory',
  researchArea: 'Natural Language Processing / Large Language Models',
  biography:
    'I am a graduate student studying the internal mechanisms of large language models.',
  researchInterests:
    'I use mechanistic interpretability and circuit analysis to investigate whether large language models rely on shared or distinct mechanisms for linguistic and arithmetic processing.',
  description:
    'Riku Kisako is a graduate student at Nagoya University researching natural language processing, mechanistic interpretability, and circuits in large language models.',
  photo: {
    src: '/images/profile.jpg?v=e504c59c',
    alt: 'Riku Kisako beside his conference poster',
    crop: { width: '230%', left: '-17%', top: '-79%' },
  },
  email: 'kisako.riku.n3[at]s.mail.nagoya-u.ac.jp',
  githubUrl: 'https://github.com/Riku-0801',
  xUrl: 'https://x.com/riku_kisako',
  linkedinUrl: 'https://www.linkedin.com/in/riku-kisako-59562835b/',
  scholarUrl: 'https://scholar.google.co.jp/citations?user=H5dqOJwAAAAJ&hl=ja&oi=ao',
  semanticScholarUrl: 'https://www.semanticscholar.org/author/Riku-Kisako/2345922495',
  cvPath: null, // Set to '/files/cv.pdf' after adding the PDF.
  lastUpdated: null, // Set to a maintained YYYY-MM-DD date.
};
