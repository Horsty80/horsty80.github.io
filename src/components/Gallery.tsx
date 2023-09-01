import React from "react";
import styles from "@site/src/components/Gallery.module.css";
import Layout from "@theme/Layout";
import { Content } from "@theme/BlogPostPage";

interface GalleryProps {
  readonly blogPosts: readonly { readonly Preview: Content; metadata: any }[];
}

function Gallery({ blogPosts }: GalleryProps): JSX.Element {
  return (
    <Layout>
      <div className="container margin-top--lg margin-bottom--lg">
        <div className="row">
          <div className="col col--3 col--offset-1 ">
            <h1>Articles</h1>
          </div>
        </div>
        <div className="row">
          {blogPosts.map(({ metadata }, index) => (
            <GalleryCard   key={`${metadata.date}-${index}-gallery`} index={index} metadata={metadata} context={"gallery"} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Gallery;

import clsx from "clsx";

export function GalleryCard({ index, metadata, context }): JSX.Element {
  return (
    <div className={`${clsx("col col--3 col--offset-1")} ${styles.card}`}>
      <div className="text--center">
        <img src={metadata.image} alt={metadata.title} width="100" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{metadata.title}</h3>
        <p>{metadata.description}</p>
        <a href={metadata.link} target="_blank" rel="noopener noreferrer">
          Accéder à l'article
        </a>
      </div>
    </div>
  );
}
