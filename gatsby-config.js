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
        icon: `content/assets/img/logo.png`,
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
    title: `MuleJS - Save TIME configuring your web apps and build REAL projects`,
    author: `Reuben Ellis`,
    description: `MuleJS utilizes GatsbyJS Themes for code reuse, faster project builds and easy and modern web development
    Gatsby Theme Contentul utilizes GatsbyJS, Contentful CMS, Auth0, TailwindCSS and Storybook. Bridge the GAP to being a Software Engineer!`,
    greeting: ``,
    copyright: `Copyright © 2020 Reuben Ellis LLC`,
    loginDesc: '',
    isAuthApp: false,
    newsletterTitle: '',
    social: {
      facebook: 'https://www.facebook.com/reuben.ellis.338',
      twitter: '',
      instagram: '',
      github: 'https://www.github.com/ethriel3695/mule.js',
      email: 'mailto:ethriel3695@gmail.com',
    },
    externalLinks: [{ label: '', link: '' }],
    hasNotifications: false,
    categories: [
      'react',
      'gatsby',
      'gatsbyjs',
      'themes',
      'web development',
      'contentful',
      'production',
      'tailwindcss',
      'storybook',
    ],
    hasCTA: true,
  },
};
