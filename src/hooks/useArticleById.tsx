"use client";

import { Article } from "@prisma/client";
import { useEffect, useState } from "react";

export default function useArticle(id: string) {
  const [article, setArticle] = useState<Article | null>();
  const [articleById, setArticleById] = useState<Article | null>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }

    fetch(`/api/articles?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setArticle(data.articles);
        setArticleById(data.articlesById);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log("Error", error);
      });
  }, [id]);

  return { article, loading, articleById };
}
