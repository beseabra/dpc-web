"use client";

import { Article, Comment, User } from "@prisma/client";
import { useEffect, useState } from "react";

interface ArticleWithDetails extends Article {
  author: User;
  comments: Comment[];
  coAuthors: User[];
}

export default function useArticle(id: string) {
  const [articles, setArticles] = useState<Article[] | null>(null);
  const [articleById, setArticleById] = useState<ArticleWithDetails | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }

    fetch(`/api/articles?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setArticles(data.articles || []);
          setArticleById(data.articlesById || null);
        }
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log("Error", error);
      });
  }, [id]);

  return { articles, loading, articleById };
}
