const path=require("path");

 /*module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions
    if(node.internal.type==="MarkdownRemark"){
        const slug=path.basename(node.fileAbsolutePath,".md")
        console.log("##########",slug)
      createNodeField({
          node,
          name:"slug",
          value:slug
      })
   
   
    }
  }*/


  module.exports.createPages=async({graphql,actions})=>{
    const {createPage}=actions;
    const blogtemplate=path.resolve("./src/templates/blog.js");


   const res=await graphql(`
   query{
    allContentfulBlogPost{
      edges{
        node{
        slug
        }
      }
    }
    
  }
   `)
    res.data.allContentfulBlogPost.edges.forEach( (edge)=>{
      createPage({
        component:blogtemplate,
        path:`/page1/${edge.node.slug}`,
        context:{
          slug:edge.node.slug
        }
      })
    });

  }