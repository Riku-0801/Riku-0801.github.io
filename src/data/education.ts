interface EducationEntry {
  degree: string;
  department: string;
  school: string;
  university: string;
  dates: string;
  laboratory?: string;
}

export const education: readonly EducationEntry[] = [
  {
    degree: 'Master’s Degree',
    department: 'Department of Intelligent Systems',
    school: 'Graduate School of Informatics',
    university: 'Nagoya University, Japan',
    dates: 'Apr 2025 – Mar 2027 (expected)',
    laboratory: 'Sasano Laboratory',
  },
  {
    degree: 'Bachelor’s Degree',
    department: 'Department of Computer Science',
    school: 'School of Informatics',
    university: 'Nagoya University, Japan',
    dates: 'Apr 2021 – Mar 2025',
  },
];
