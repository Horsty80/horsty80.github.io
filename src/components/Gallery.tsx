import React from "react";
import styles from "./Gallery.module.css";
import Layout from "@theme/Layout";
import { Content } from "@theme/BlogPostPage";
// @ts-expect-error
import { BlogPostProvider } from "@docusaurus/theme-common/internal";

interface GalleryProps {
  readonly blogPosts: readonly { readonly content: Content }[];
}

function Gallery({ blogPosts }: GalleryProps): JSX.Element {
  return (
    <Layout>
      <div className="container margin-top--xl margin-bottom--lg">
        <div className="row">
          <div className="col col--9 col--offset-1">
            <h1>Articles</h1>
            <section className={styles.projetCard}>
              {blogPosts.map(({ content }, index) => (
                <BlogPostProvider key={content.metadata.permalink} content={content}>
                  {/* <a href={content.metadata.permalink} style={{textDecoration: "none", cursor:'pointer' }} target="_blank" rel="noopener noreferrer"> */}
                    <div
                      className={`${styles[`card${index}`]} ${styles.card}`}
                      key={`${content.metadata.date}-${index}`}
                    >
                      <div className="card__header">
                        <img
                          src={content.metadata.frontMatter.image}
                          alt={content.metadata.title}
                          width="100"
                        />
                      </div>
                      <div className="card__body">
                        <h2>{content.metadata.title}</h2>
                        <p>{content.metadata.description}</p>
                        <a
                          href={content.metadata.permalink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Accéder à l'article
                        </a>
                      </div>
                    </div>
                  {/* </a> */}
                </BlogPostProvider>
              ))}
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Gallery;
