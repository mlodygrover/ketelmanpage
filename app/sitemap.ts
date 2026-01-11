import { MetadataRoute } from 'next';
import { ALL_PROJECTS } from '@/lib/projects';
import { ALL_ARTICLES } from '@/lib/articles';

export default function sitemap(): MetadataRoute.Sitemap {
  // Twoja domena
  const baseUrl = 'https://ketelman.com';

  // 1. Strony statyczne
  const staticPages = [
    '',
    '/o-nas',
    '/oferta',
    '/portfolio',
    '/blog',
    '/kontakt',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // 2. Projekty
  const projectUrls = ALL_PROJECTS.map((project) => ({
    url: `${baseUrl}/portfolio/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // 3. Artykuły (TUTAJ BYŁ BŁĄD - dodajemy zabezpieczenie)
  const articleUrls = ALL_ARTICLES.map((article) => {
    // Próbujemy sparsować datę
    let articleDate = new Date(article.date);
    
    // Sprawdzamy, czy data jest prawidłowa (czy nie jest "Invalid Date")
    if (isNaN(articleDate.getTime())) {
      // Jeśli data jest błędna, używamy dzisiejszej daty jako fallback
      articleDate = new Date();
    }

    return {
      url: `${baseUrl}/blog/${article.slug}`,
      lastModified: articleDate,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    };
  });

  return [...staticPages, ...projectUrls, ...articleUrls];
}