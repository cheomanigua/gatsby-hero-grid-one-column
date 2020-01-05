import React from 'react'
import Header from './header'
import Footer from './footer'
import '../css/style.css'
import '../css/header.css'
import '../css/navbar.css'
import '../css/about.css'
import '../css/services.css'
import '../css/contact.css'

const Layout = ({children}) => (
  <div>
    <Header />
    <main>
      {children}
    </main>
    <Footer />
  </div>
)

export default Layout;