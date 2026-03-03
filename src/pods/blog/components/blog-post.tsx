import React from "react";
import { BlogPostModel } from "@/common/model";
import styles from "./blog-post.module.scss";

interface Props {
  post: BlogPostModel;
}

export const BlogPost: React.FC<Props> = ({ post }) => {
  return (
    <article className={styles.post}>
      <div className={styles.header}>
        <h3 className={styles.title}>{post.title}</h3>
        <span className={styles.date}>{post.date}</span>
      </div>

      <div className={styles.content}>
        <p className={styles.excerpt}>{post.excerpt}</p>
        {post.image && (
          <div className={styles.imageContainer}>
            <img src={post.image} alt={post.title} className={styles.image} />
          </div>
        )}

        <div className={styles.tags}>
          {post.tags.map((tag, index) => (
            <span key={index} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      {post.linkedinUrl && (
        <div className={styles.footer}>
          <a
            href={post.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkedinLink}
          >
            Ver en LinkedIn
          </a>
        </div>
      )}
    </article>
  );
};
