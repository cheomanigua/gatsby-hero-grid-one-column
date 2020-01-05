import React from "react"
import {mobile, charts, teamcollab} from '../components/images' 

const About = () => <section id="about">
  
  <div className="flyer">
    <div className="twoColumns">
      <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ea maxime animi incidunt quisquam ducimus enim. Quod illo quo quas?</div>
      <div className="illustration"><img src={mobile} alt="mobile phone"/></div>  
    </div>
    <div className="twoColumns">
      <div className="illustration"><img src={charts} alt="charts"/></div> 
      <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ea maxime animi incidunt quisquam ducimus enim. Quod illo quo quas?</div>             
    </div>
    <div className="twoColumns">
      <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ea maxime animi incidunt quisquam ducimus enim. Quod illo quo quas?</div>
      <div className="illustration"><img src={teamcollab} alt="team collaborating"/></div>  
    </div>
  </div>

</section>

export default About;
