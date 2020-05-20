const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Techqueria Podcast`,
    description: 'Sharing stories for and about latinx in Tech!',
    siteUrl: `https://podcast.techqueria.org`,
    author: `@techqueria`,
  },
  plugins: [
    'gatsby-plugin-sass',
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    'gatsby-plugin-sass',
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-88917358-3",
        head: false,
        anonymize: true,
        respectDNT: true,
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        pageTransitionDelay: 0,
        // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        defer: false,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`, `/404`, '/about'],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Techqueria Podcast`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#5a4640`,
        theme_color: `#fabf67`,
        display: `minimal-ui`,
        icon: `src/images/techqueria.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@components": path.resolve(__dirname, 'src/components'),
          "@images": path.resolve(__dirname, 'src/images'),
        },
        extensions: []
      }
    },
    // TODO: maybe add guessJS to prefetch assets and increase performance
    // https://www.gatsbyjs.org/packages/gatsby-plugin-guess-js
  ],
}
