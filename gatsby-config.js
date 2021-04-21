/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata:{
    title:"dynamic data from graphql",
    author:"coder",
    description:"this is just a test"
  },
  plugins: ["gatsby-plugin-sass",
  {
    resolve:"gatsby-source-contentful",
    options:{
      spaceId:process.env.CONTENTFUL_SPACE_ID,
      accessToken:process.env.CONTENTFUL_ACCESS_TOKEN
    }

  },
  {
    resolve:"gatsby-source-filesystem",
    options:{
      name:"src",
      path:`${__dirname}/src/`
    }
  },
  "gatsby-transformer-remark"
  //"gatsby-plugin-sharp",
  //{
    //resolve:"gatsby-transformer-remark",
    //options:{
     // plugins:["gatsby-remark-relative-images",
    //{
      //resolve:"gatsby-remark-images",
      //options:{
        //maxWidth:750,
        //linkImagesToOriginal:false
      //}
    //}
    //]
    //}
  //}
]
}
