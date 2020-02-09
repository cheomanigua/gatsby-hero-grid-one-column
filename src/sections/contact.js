import React from "react"
import {html, css, javascript, nodejs, npm, react, gatsby, graphql, git, github, netlify} from '../components/images'

const Contact = () => <section id="contact">

  <div className="box">
    <h3>Contacto</h3>
    <table>
      <tr>
        <td>Móvil</td>
        <td>+3469696969</td>
      </tr>
      <tr>
        <td>Fijo</td>
        <td>+3469696969</td>
      </tr>
      <tr>
        <td>Email</td>
        <td>info@digitalrealm.es</td>
      </tr>
    </table>
  </div>
  <div className="box">
    <h3>Tecnologías</h3>
    <div className="technologies">
      <img src={html} alt="css"/>
      <img src={css} alt="html"/>
      <img src={javascript} alt="javascript"/>
      <img src={nodejs} alt="nodejs"/>
      <img src={npm} alt="npm"/>
      <img src={react} alt="react"/>
      <img src={gatsby} alt="gatsby"/>
      <img src={graphql} alt="graphql"/>
      <img src={git} alt="git"/>
      <img src={github} alt="github"/>
      <img src={netlify} alt="netlify"/>
    </div>
    {/* <span><i className="fab fa-html5 fa-2x"></i> </span>
    <span><i className="fab fa-css3-alt fa-2x"></i> </span>
    <span><i className="fab fa-js fa-2x"></i> </span>
    <span><i className="fab fa-react fa-2x"></i> </span>
    <span><i className="fab fa-vuejs fa-2x"></i> </span>
    <span><i className="fab fa-angular fa-2x"></i> </span>
    <span><i className="fab fa-node fa-2x"></i> </span>
    <span><i className="fab fa-npm fa-2x"></i> </span>
    <span><i className="fab fa-php fa-2x"></i> </span>
    <span><i className="fab fa-python fa-2x"></i> </span>
    <span><i className="fab fa-yarn fa-2x"></i> </span>
    <span><i className="fab fa-git-alt fa-2x"></i> </span>
    <span><i className="fab fa-github fa-2x"></i> </span>
    <span><i className="fab fa-digital-ocean fa-2x"></i> </span>
    <span><i className="fab fa-linode fa-2x"></i> </span>
    <span><i className="fab fa-aws fa-2x"></i> </span>
    <span><i className="fab fa-docker fa-2x"></i> </span> */}
  </div>

  {/* <div class="box">
    <h3>Tecnologías</h3>
    <span style="color: #F16529;"><i class="fab fa-html5 fa-2x"></i></span>
    <span style="color: #2965F1;"><i class="fab fa-css3-alt fa-2x"></i></span>
    <span style="color: #F7DF1E;"><i class="fab fa-js fa-2x"></i></span>
    <span style="color: #61DAFB;"><i class="fab fa-react fa-2x"></i></span>
    <span style="color: #41B883;"><i class="fab fa-vuejs fa-2x"></i></span>
    <span style="color: #DD0031;"><i class="fab fa-angular fa-2x"></i></span>
    <span style="color: #6EBD4C;"><i class="fab fa-node fa-2x"></i></span>
    <span style="color: #CB3837;"><i class="fab fa-npm fa-2x"></i></span>
    <span style="color: #777BB3;"><i class="fab fa-php fa-2x"></i></span>
    <span style="color: #FFCF3F;"><i class="fab fa-python fa-2x"></i></span>
    <span style="color: #2C8EBB;"><i class="fab fa-yarn fa-2x"></i></span>
    <span style="color: #CD613A;"><i class="fab fa-git-alt fa-2x"></i></span>
    <span style="color: #ffffff;"><i class="fab fa-github fa-2x"></i></span>
    <span style="color: #0080FF;"><i class="fab fa-digital-ocean fa-2x"></i></span>
    <span style="color: #00B259;"><i class="fab fa-linode fa-2x"></i></span>
    <span style="color: #FF9900;"><i class="fab fa-aws fa-2x"></i></span>
    <span style="color: #099CEC;"><i class="fab fa-docker fa-2x"></i></span>
  </div> */}

</section>

export default Contact;
