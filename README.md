# Riku Kisako

Personal academic website for Riku Kisako at Nagoya University. Astro renders the site as static HTML and CSS for GitHub Pages.

## Local development

Use Node.js 24 and npm. If you use nvm, run `nvm install` to select the version in `.nvmrc`.

```sh
npm ci
npm run dev
```

Open the local URL printed by Astro. The production output goes to `dist/`.

```sh
npm run check
npm run build
npm run preview
```

## Update site content

### Publications

Add an entry to [`src/data/publications.ts`](src/data/publications.ts). Set `visible: true` when the entry is ready to share. Each group shows the newest year first. Domestic Conference displays a heading for each year. Entries within a year follow the file order.

- Enter the title and verified authors in publication order. Set `authorListComplete: true` once the list is complete. The site underlines names listed in `profile.name` or `profile.publicationNameAliases`.
- Set `language` to `'ja'` for Japanese titles and author lists. Entries inherit English by default.
- Set `category` to `international-conference-refereed`, `preprint`, or `domestic-conference`.
- Use `venue` for the full display label, such as `AACL-IJCNLP 2026 (main long)` or `arXiv 2025`. Set `year` separately for sorting and `notes` for details such as the presentation format.
- Use `Paper`, `arXiv`, `Code`, `Slides`, or `Poster` under `links` to display the corresponding resource link.

### News, education, experience, and awards

- To display News, set `showNews` to `true` in [`src/data/news.ts`](src/data/news.ts). Each entry has a `date` in `YYYY-MM` format and a `text` field. The site sorts news newest first and displays up to `visibleNewsLimit` entries.
- Edit [`src/data/education.ts`](src/data/education.ts) to update degrees, affiliations, and date ranges.
- Add internships and other positions to [`src/data/experience.ts`](src/data/experience.ts). Enter the `organization`, `role`, and `dates`, plus an optional `description`. Entries appear in file order.
- Edit [`src/data/awards.ts`](src/data/awards.ts) to add awards.

### Profile, contact links, and CV

Update the biography, research interests, and external links in [`src/data/profile.ts`](src/data/profile.ts).

- To replace the placeholder, save a square image at `public/images/profile.jpg` and set `photo` to `{ src: '/images/profile.jpg', alt: 'Portrait of Riku Kisako' }`.
- Set `email` to the address you want to display. Use `[at]` for plain text or `@` for a clickable email link. Update `githubUrl`, `xUrl`, `linkedinUrl`, `scholarUrl`, and `semanticScholarUrl` to change the profile links.
- Save the CV PDF as `public/files/cv.pdf` and set `cvPath` to `'/files/cv.pdf'`. This enables the CV links in the header and profile.
- To show a last-updated date in the footer, set `lastUpdated` to a date in `YYYY-MM-DD` format and maintain it alongside content changes.

## Deploy to GitHub Pages

1. In the GitHub repository, open **Settings → Pages** and select **GitHub Actions** as the source.
2. Push your changes to `main`, including `package-lock.json`. You can also run **Deploy to GitHub Pages** manually from the **Actions** tab.
3. Once the workflow succeeds, open [riku-0801.github.io](https://riku-0801.github.io/).

The workflow uses the official Astro action to install dependencies, build the site, and upload the Pages artifact before deploying it. The site is configured for the root of `riku-0801.github.io`. See the [Astro GitHub Pages guide](https://docs.astro.build/en/guides/deploy/github/).
