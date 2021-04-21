import React from "react"
import Layout from "../components/layout";
import "./page1.scss";
import {graphql,useStaticQuery} from "gatsby";
import Blog from "../templates/blog";

const Page1=()=>{
  const data=useStaticQuery(graphql`
  query{
    allMarkdownRemark{
      edges{
        node{
        frontmatter{
          title
         
          
        }
          
        }
      }
    }
    
  }
  `)
    return(
        <div className="paragraph-container">
          <Blog/>
            <Layout><h1> {data.allMarkdownRemark.edges[0].node.frontmatter.title} {data.allMarkdownRemark.edges[1].node.frontmatter.title}</h1>
            <p className="paragraph">
Main articles: Seismic magnitude scales and Seismology
The instrumental scales used to describe the size of an earthquake began with the Richter magnitude scale in the 1930s. It is a relatively simple measurement of an event's amplitude, and its use has become minimal in the 21st century. Seismic waves travel through the Earth's interior and can be recorded by seismometers at great distances. The surface wave magnitude was developed in the 1950s as a means to measure remote earthquakes and to improve the accuracy for larger events. The moment magnitude scale not only measures the amplitude of the shock but also takes into account the seismic moment (total rupture area, average slip of the fault, and rigidity of the rock). The Japan Meteorological Agency seismic intensity scale, the Medvedev–Sponheuer–Karnik scale, and the Mercalli intensity scale are based on the observed effects and are related to the intensity of shaking.

Every tremor produces different types of seismic waves, which travel through rock with different velocities:

Longitudinal P-waves (shock- or pressure waves)
Transverse S-waves (both body waves)
Surface waves – (Rayleigh and Love waves)
Propagation velocity of the seismic waves through solid rock ranges from approx. 3 km/s (1.9 mi/s) up to 13 km/s (8.1 mi/s), depending on the density and elasticity of the medium. In the Earth's interior, the shock- or P-waves travel much faster than the S-waves (approx. relation 1.7:1). The differences in travel time from the epicenter to the observatory are a measure of the distance and can be used to image both sources of quakes and structures within the Earth. Also, the depth of the hypocenter can be computed roughly.

In the upper crust, P-waves travel in the range 2–3 km (1.2–1.9 mi) per second (or lower) in soils and unconsolidated sediments, increasing to 3–6 km (1.9–3.7 mi) per second in solid rock. In the lower crust, they travel at about 6–7 km (3.7–4.3 mi) per second; the velocity increases within the deep mantle to about 13 km (8.1 mi) per second. The velocity of S-waves ranges from 2–3 km (1.2–1.9 mi) per second in light sediments and 4–5 km (2.5–3.1 mi) per second in the Earth's crust up to 7 km (4.3 mi) per second in the deep mantle. As a consequence, the first waves of a distant earthquake arrive at an observatory via the Earth's mantle.

On average, the kilometer distance to the earthquake is the number of seconds between the P- and S-wave times 8.[54] Slight deviations are caused by inhomogeneities of subsurface structure. By such analyses of seismograms the Earth's core was located in 1913 by Beno Gutenberg.

S-waves and later arriving surface waves do most of the damage compared to P-waves. P-waves squeeze and expand material in the same direction they are traveling, whereas S-waves shake the ground up and down and back and forth.[55]

Earthquakes are not only categorized by their magnitude but also by the place where they occur. The world is divided into 754 Flinn–Engdahl regions (F-E regions), which are based on political and geographical boundaries as well as seismic activity. More active zones are divided into smaller F-E regions whereas less active zones belong to larger F-E regions.

Standard reporting of earthquakes includes its magnitude, date and time of occurrence, geographic coordinates of its epicenter, depth of the epicenter, geographical region, distances to population centers, location uncertainty, a number of parameters that are included in USGS earthquake reports (number of stations reporting, number of observations, etc.), and a unique event ID.[56]

Although relatively slow seismic waves have traditionally been used to detect earthquakes, scientists realized in 2016 that gravitational measurements could provide instantaneous detection of earthquakes, and confirmed this by analyzing gravitational records associated with the 2011 Tohoku-Oki ("Fukushima") earthquake.[57][58]</p>
       </Layout>
             </div>
    )
}
export default Page1;