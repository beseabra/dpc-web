"use client";

import { getPublicUrl } from "@/app/api/urlImage/getPublicUrl";
import { Article } from "@prisma/client";
import { useEffect, useState } from "react";

export default function useArticles() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("/api/articles")
      .then((res) => res.json())
      .then(async (data) => {
        const articlesWithImageUrls = data.articles.map((article: Article) => ({
          ...article,
          imageUrl: article.image ? getPublicUrl(article.image, "profileImage") : null,
        }));
        setArticles(articlesWithImageUrls);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
        setLoading(false);
      });
  }, []);

  return { articles, loading };
}
