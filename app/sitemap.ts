import { MetadataRoute } from 'next';
// Importujemy Twoje dane, żeby wygenerować linki do każdego projektu i artykułu
import { ALL_PROJECTS } from '@/lib/projects';
import { ALL_ARTICLES } from '@/lib/articles';

export default function sitemap(): MetadataRoute.Sitemap {
  // ⚠️ WAŻNE: Tu wpisz swoją prawdziwą domenę, którą podepniesz na Netlify
  const baseUrl = 'https://ketelman.com';

  // 1. Strony statyczne (Te, które stworzyliśmy ręcznie)
  const staticPages = [
    '',           // Strona główna
    '/o-nas',
    '/oferta',
    '/portfolio',
    '/blog',
    '/kontakt',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8, // Strona główna najważniejsza
  }));

  // 2. Dynamiczne linki do PROJEKTÓW (z Portfolio)
  const projectUrls = ALL_PROJECTS.map((project) => ({
    url: `${baseUrl}/portfolio/${project.slug}`,
    lastModified: new Date(), // W idealnym świecie data modyfikacji projektu
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // 3. Dynamiczne linki do ARTYKUŁÓW (z Bloga)
  const articleUrls = ALL_ARTICLES.map((article) => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified: new Date(article.date), // Używamy daty publikacji artykułu
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  // Łączymy wszystko w jedną tablicę
  return [...staticPages, ...projectUrls, ...articleUrls];
}