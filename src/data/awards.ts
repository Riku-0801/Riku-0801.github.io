interface Award {
  event: string;
  prizes: readonly string[];
}

export const awards: readonly Award[] = [
  { event: 'JPHACKS 2024', prizes: ['Best Hack Award', 'Best Audience Award'] },
  { event: 'GEEKCAMP 2022 vol.4', prizes: ['Grand Prize'] },
];
