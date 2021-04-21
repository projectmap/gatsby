import React from "react";
//import headerStyle from "./header.module.scss";
import "./header.scss";
import {Link,graphql,useStaticQuery} from "gatsby";

const Header=()=>{
    const data=useStaticQuery(graphql`
    query{
        site{
            siteMetadata{
                title

            }
        }
    }
    `)
    return(
        <div className="contain">{data.site.siteMetadata.title}
            <span ><Link to="/page1"><p className="content">page1</p></Link></span>
            <span  ><Link to="/page2"><p className="content">page2</p></Link></span>
            <span  ><Link to="/page1"><p className="content">page3</p></Link></span>
        </div>
    )
}
 
export default Header;