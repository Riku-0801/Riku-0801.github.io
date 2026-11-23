import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const homepage = new URL('/', site);
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${homepage}</loc></url>
</urlset>`;

  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
