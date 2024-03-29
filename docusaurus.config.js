// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// @ts-ignore
const lightCodeTheme = require("prism-react-renderer").themes.github;
// @ts-ignore
const darkCodeTheme = require("prism-react-renderer").themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Horsty - site d'un développeur web",
  tagline: "site d'un développeur web",
  favicon: "img/uhue-logo.svg",

  // Set the production url of your site here
  url: "https://horsty80.github.io/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Horsty80", // Usually your GitHub org/user name.
  projectName: "horsty80.github.io", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "fr",
    locales: ["fr"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  plugins: [
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        indexDocs: true,
        indexBlog: true,
        language: "fr",
        maxSearchResults: 8,
      },
    ],
    [
      'ideal-image',
      /** @type {import('@docusaurus/plugin-ideal-image').PluginOptions} */
      ({
        quality: 70,
        max: 1030,
        min: 640,
        steps: 2,
        // Use false to debug, but it incurs huge perf costs
        disableInDev: true,
      }),
    ],
    [
      "./plugins/blog-plugin",
      {
        id: "blog",
        routeBasePath: "blog",
        path: "./blog",
        showReadingTime: true,
        postsPerPage: 8,
        feedOptions: {
          type: "all",
          copyright: `Copyright © ${new Date().getFullYear()} -  Horsty\'s site.`,
          createFeedItems: async (params) => {
            const { blogPosts, defaultCreateFeedItems, ...rest } = params;
            return defaultCreateFeedItems({
              // keep only the 10 most recent blog posts in the feed
              blogPosts: blogPosts.filter((item, index) => index < 10),
              ...rest,
            });
          },
        },
      },
    ],
  ],

  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/open-graph-blog.jpg",
      navbar: {
        title: "Horsty",
        logo: {
          alt: "Blue letter U inside chat bubble",
          src: "img/uhue-logo.svg",
        },
        items: [
          { to: "/blog", label: "Blog", position: "left" },
          { to: "/articles", label: "Articles", position: "left" },
          { to: "/interventions", label: "Interventions", position: "left" },
          { to: "/projets", label: "Projets", position: "left" },
          { to: "/docs/category/godot", label: "Docs", position: "left" },
          { to: "/blog/tags", label: "Tags", position: "left" },
          {
            href: "https://github.com/Horsty80",
            // label: 'GitHub',
            className: "header-github-link",
            "aria-label": "GitHub repository",
            position: "right",
          },
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            title: "Contenu",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "Articles",
                to: "/articles",
              },
              {
                label: "Archives",
                to: "/blog/archive",
              }
            ],
          },
          {
            title: "Contact",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/Horsty80",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/cy_hue",
              },
            ],
          },
          {
            title: "Plus",
            items: [
              {
                label: "Ancien blog",
                href: "https://horsty.fr/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Horsty's site. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
