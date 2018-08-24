module.exports = {
  siteMetadata: {
    title: 'Skadebyrån | Specialist på reglering av stora och komplexa skador',
    siteName: 'Skadebyrån',
    siteUrl: 'https://www.skadebyran.se',
    siteLogo: 'https://www.skadebyran.se/assets/identity/logotype.png',
    locale: 'sv_SE',
    contactInfo: {
      text: 'För kontakt med bolaget, vänd dig till VD Lars-Eric Langvardt.',
      email: 'lars-eric@skadebyran.se',
      phone: '+46 72-050 39 99'
    },
    email: 'lars-eric@skadebyran.se',
    adress: {
      streetAdress: 'Kiselvägen 41',
      postalCode: '746 41',
      adressLocality: 'Stockholm',
      adressCountry: 'SE'
    },
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-react-helmet',
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        precision: 8,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-plugin-sharp',
    },
    {
      resolve: 'gatsby-transformer-sharp',
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: 'gatsby-plugin-netlify', // make sure to keep it last in the array
    },
  ],
}
