module.exports = {
  plugins: [
    {
      resolve: 'gatsby-theme-contentful',
      options: {},
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `mulejs`,
        icon: `content/assets/img/logo.jpg`,
        short_name: `mulejs`,
        start_url: `/`,
        background_color: `#2C5282`,
        theme_color: `#2C5282`,
        display: `standalone`,
        scope: '/',
        crossOrigin: `use-credentials`,
        // theme_color_in_head: false
      },
    },
  ],
  siteMetadata: {
    title: `MuleJS`,
    author: `Reuben Ellis`,
    description: `Move your project from start to finish with speed, precision and less configuration!`,
    greeting: ``,
    copyright: `Copyright © 2020 Reuben Ellis LLC`,
    loginDesc: '',
    isAuthApp: false,
    newsletterTitle: '',
    social: {
      facebook: 'https://www.facebook.com/reuben.ellis.338',
      twitter: '',
      instagram: '',
      github: 'https://www.github.com/ethriel3695',
      email: 'mailto:ethriel3695@gmail.com',
    },
    externalLinks: [{ label: '', link: '' }],
    hasNotifications: false,
  },
};
