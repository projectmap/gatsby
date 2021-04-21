import React from "react";
 import Layout from "../components/layout";
 import{graphql,useStaticQuery} from "gatsby";
 import {documentToReactComponent} from "@contentful/rich-text-react-renderer";
  /*export const query=graphql`
  query(
    $slug:String
  ){
    markdownRemark(
      fields:{
        slug:{
          eq:$slug
        }
      }
    ){
      frontmatter{
        title
      }
    }
  }
  `*/

 const Blog=()=>{
  const contentfulData=useStaticQuery(graphql`
  query{
    allContentfulBlogPost(
      sort:{
        fields:publishedDate
        order:DESC
      }
    ){
      edges{
       node{
        title
        publishedDate(formatString:"MMMM Do YYYY")
        slug
        body{
          raw
        }
      }
      }
    }
  }
  `)
     return(
         <div>
             <h1>{contentfulData.allContentfulBlogPost.edges[1].node.title}</h1>
             <h2>{contentfulData.allContentfulBlogPost.edges[0].node.publishedDate}</h2>
             <h3>{contentfulData.allContentfulBlogPost.edges[0].node.slug}</h3>
             

         <Layout>this is blog template</Layout>
         </div>
         
     )
 }
 export default Blog;