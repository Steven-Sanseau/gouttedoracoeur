module.exports = {
  siteMetadata: {
    title: "Goutte d'or à coeur",
    siteUrl: 'https://www.gouttedoracoeur.fr',
    author: 'Steven Sanseau',
    description: "Site Internet du film Goutte d'or à Coeur.",
    twitter: '@StevenSanseau',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-netlify`,
    `gatsby-plugin-flow`,
    // 'gatsby-plugin-offline',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'goutte-or-a-coeur',
        short_name: 'gouttedor',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/Blob.png',
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {},
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.gouttedoracoeur.fr',
        policy: [{ userAgent: '*' }],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Palanquin`,
            variants: [`400`, `600`, `700`],
          },
          {
            family: `Palanquin Dark`,
            variants: [`700`],
          },
        ],
      },
    },
  ],
}
