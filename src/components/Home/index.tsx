import React from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "@site/src/components/Home/index.module.css";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import { GalleryCard } from "@site/src/components/Gallery";
import { Content } from "@theme/BlogPostPage";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx(styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

interface HomepageProps {
  homePageBlogMetadata: any;
  readonly recentPosts: readonly { readonly Preview: Content; metadata: any }[];
}

export default function Home({ homePageBlogMetadata, recentPosts }: HomepageProps): JSX.Element  {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout description={`${siteConfig.tagline}`}>
      <HomepageHeader />
      <main style={{ padding: 30 }}>
        <h1>{homePageBlogMetadata.blogTitle}</h1>
        <p>{homePageBlogMetadata.blogDescription}</p>
      
      {/* Recent Blog post section */}
        <section className={styles.recentBlogPosts}>
          <div className="container">
            <div className="row">
              {recentPosts.map(({ metadata }, index) => (
                <GalleryCard  key={`${metadata.date}-${index}-homepage`} index={index} metadata={metadata} context={'homepage'} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Separateur color band */}
        <div className={styles.colorBand}></div>


        {/* Features in the blog */}
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
