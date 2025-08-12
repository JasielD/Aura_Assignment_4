import React from 'react'

const NavBar = ({navigateTo,currentPage}) => {
  const linkClasses = (pageName)=>{
    return `flex items-center px-3 py-2 rounded-md text-sm font-medium ${
      currentPage === pageName 
        ? 'bg-gray-700 text-white shadow-md' 
        : 'text-gray-700 '
    }`;

  }
  return (
    <header className='bg-white shadow-md sticky top-0 z-50'>
      <nav className='container mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='flex items-center justify-between h-16'>
        <div className='flex items-center'>
          <span className='ml-3 text-xl font-bold text-gray-800'> Sophia College </span>
        </div>
        <div className='hidden md:flex items-center space-x-4'>
          <button onClick={()=>navigateTo('home')} className={linkClasses('home')}>
            Home</button>
          <button onClick={()=>navigateTo('about_us')} className={linkClasses('about_us')}>
            About Us</button>
          <button onClick={()=>navigateTo('contact')} className={linkClasses('contact')}>
            Contact
          </button>
           <button onClick={()=>navigateTo('register')} className={linkClasses('register')}>
            Student Registeration
          </button>
        </div>
      </div>
      </nav>
    </header>
  )
}

export default NavBar
