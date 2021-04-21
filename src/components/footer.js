import React from "react";
import "./footer.scss";
import {graphql,useStaticQuery} from "gatsby";

const Footer=()=>{

    const data=useStaticQuery(graphql`
    query{
        site{
            siteMetadata{
                description
              title
            }
        }
    }
    `)
    return(
        <div className="footer-container">
            this is footer created for test {data.site.siteMetadata.title}
        </div>
    )
}

export default Footer;