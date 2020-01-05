import React from "react"
import Services from '../sections/services'
import About from '../sections/about'
import Contact from '../sections/contact'
import Layout from '../components/layout'
import SectionA from '../sections/sectiona'
import SectionB from '../sections/sectionb'
import SectionC from '../sections/sectionc'

export default () => 
<Layout>

  <SectionA/>
  <Services />
  <SectionB/>
  <About />
  <SectionC/>  
  <Contact />  

</Layout>
