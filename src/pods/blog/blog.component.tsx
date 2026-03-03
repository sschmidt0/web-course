"use client";

import React from "react";
import { BLOG_POSTS } from "@/db/blog";
import { useLanguageStore } from "@/store";
import { Title } from "@/components";
import { BlogPost } from "./components/blog-post";
import styles from "./blog.module.scss";

export const Blog: React.FC = () => {
  const { language } = useLanguageStore();
  const content = BLOG_POSTS[language];

  return (
    <div className={styles.container}>
      <Title text={content.title} />
      <p className={styles.description}>{content.description}</p>
      
      <div className={styles.postsContainer}>
        {content.posts.map((post) => (
          <BlogPost key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};