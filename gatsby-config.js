const config = require('./config');

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    title: config.siteTitle,
    description: 'Empresa de consultoría',
    keywords:
      "seguros, seguros de carro, seguros de automovil, seguro educativo, ahorro, inversión, responsabilidad civil, sura, seguros bolivar'",
    image: '/src/assets/folderImages/img/logoSC.jpeg',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `landingPage`,
        path: `${__dirname}/content/landingPage`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/folderImages`,
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    'gatsby-plugin-fontawesome-css',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.manifestName,
        short_name: config.manifestShortName,
        start_url: config.pathPrefix || config.manifestStartUrl,
        background_color: config.manifestBackgroundColor,
        theme_color: config.manifestThemeColor,
        display: config.manifestDisplay,
        icon: config.manifestIcon, // This path is relative to the root of the site.
      },
    },

    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        whitelist: [
          'slick-slider',
          'slick-initialized',
          'slick-list',
          'slick-track',
          'slick-slide',
          'slick-active',
          'slick-current',
          'slick-theme',
        ],
        ignore: [
          '/node_modules/slick-carousel/slick/slick.css',
          '/node_modules/slick-carousel/slick/slick-theme.css',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
    },
  ],
};
