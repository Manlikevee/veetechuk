import React from 'react'
import Footer from './Footer'
import Header from './Header'
const Portfolio_layout = ({children}) => {
  return (
    <main>
        <Header/>
{children}
        <Footer/>
    </main>
  )
}

export default Portfolio_layout