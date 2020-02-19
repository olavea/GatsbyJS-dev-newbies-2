module.exports = {
  siteMetadata: {
    title: `GatsbyJS-dev-newbies`,
    description: `GatsbyJS-dev-newbies.`,
    twitter: "@olaholstvea",
    image: "https://twitter.com/olaholstvea/photo"
  },

  plugins: [
    "gatsby-theme-docz",
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS-dev-newbies!`,
        short_name: `dev-newbies!`,
        start_url: `/`,

        icon: `src/images/LilliansUnicorns7.png`
      }
    }

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};
