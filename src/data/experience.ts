interface ExperienceEntry {
  organization: string;
  role: string;
  dates: string;
  description?: string;
}

export const experience: readonly ExperienceEntry[] = [
  {
    organization: 'NEC Corporation',
    role: 'Research Intern',
    dates: 'Aug 2025 – Sep 2025',
  },
  {
    organization: 'Human Dataware Lab. Co., Ltd.',
    role: 'Part-time Employee · Software/ML Engineer',
    dates: 'Jan 2024 – Present',
  },
  {
    organization: 'FORCIA, Inc.',
    role: 'Web Engineering Intern',
    dates: 'Sep 2023',
  },
  {
    organization: 'Media Studio, Nagoya University',
    role: 'Part-time Employee · Software Engineer',
    dates: 'Apr 2022 – Dec 2025',
  },
];
