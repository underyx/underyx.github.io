module.exports = {
  siteMetadata: {
    title: 'underyx',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/articles`,
        name: `articles`,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'underyx.me',
        short_name: 'underyx',
        start_url: '/',
        background_color: '#fbfbb6',
        theme_color: '#533c2d',
        display: 'browser',
        icon: 'src/images/favicon.png',
        crossOrigin: `use-credentials`,
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: { trackingId: 'UA-46190907-1' },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    'gatsby-plugin-offline',
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
  ],
}