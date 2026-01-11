import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  // ⚠️ Tu też wpisz swoją domenę
  const baseUrl = 'https://ketelman.com';

  return {
    rules: {
      userAgent: '*', // Zasada dotyczy wszystkich robotów (Google, Bing, itp.)
      allow: '/',     // Pozwól indeksować wszystko
      disallow: '/private/', // (Opcjonalnie) Jeśli masz folder, którego nie chcesz w Google
    },
    sitemap: `${baseUrl}/sitemap.xml`, // Wskazujemy drogę do mapy
  };
}