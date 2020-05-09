const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Techqueria Podcast`,
    description: 'Sharing stories for ',
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
    `gatsby-plugin-sharp`,
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
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
