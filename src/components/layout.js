import React from 'react'
import {Helmet} from 'react-helmet'
import Header from './header'
import SEO from './SEO'
import Footer from './footer'
import '../css/style.css'
import '../css/header.css'
import '../css/navbar.css'
import '../css/about.css'
import '../css/services.css'
import '../css/contact.css'

const Layout = ({children}) => (
  <div>
    <SEO />
    <Helmet>
      {/* <script src="https://use.fontawesome.com/88991bc059.js"></script>
      <script src="https://kit.fontawesome.com/ca56e255a4.js" crossorigin="anonymous"></script> */}
    </Helmet>
    <Header />
    <main>
      {children}
    </main>
    <Footer />
  </div>
)

export default Layout;