import React, { useState } from 'react'
import NavBar from './components/NavBar'
import HomePage from './components/Home'
import RegisterationPage from './components/RegisterationPage'
import ContactPage from './components/ContactPage'
import Footer from './components/Footer'

const App = () => {
  const [page,setPage]=useState('home')
  const navigateTo = (pageName)=>{
    setPage(pageName);
  }
  const renderPage = ()=>{
    if(page==='home'){
     return < HomePage />
  }else if(page==='contact'){
    return <ContactPage />
  } else if(page==='register'){
    return <RegisterationPage />
  }else{
    <div>Page Not Found</div>
  }
  }
    
  return (
    <div>
      <NavBar navigateTo={navigateTo} currentPage={page} />
      <main className='min-h-screen flex flex-col'>{renderPage()}</main>
      <Footer />
    </div>
  )
}

export default App
