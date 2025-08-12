import React, { useState } from 'react'
import NavBar from './components/NavBar'
import HomePage from './components/Pages/Home'
import RegisterationPage from './components/Pages/RegisterationPage'
import ContactPage from './components/Pages/ContactPage'
import Footer from './components/Footer'
import About_us from './components/Pages/About_us'

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
  }else if(page==='about_us'){
    return <About_us />
  }else
    {
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
