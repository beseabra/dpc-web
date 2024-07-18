"use client";

import { Post } from "@prisma/client";
import { useEffect, useState } from "react";

export default function useArticles() {
  const [articles, setArticles] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("/api/articles")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.articles);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
        setLoading(false);
      });
  }, []);

  return { articles, loading };
}
