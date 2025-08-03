import React from 'react'

const Footer = () => {
  return (
     <footer className="bg-white mt-12 py-6 border-t">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600">
      <p>&copy; {new Date().getFullYear()} Sophia College. All Rights Reserved.</p>
    </div>
  </footer>
  )
}

export default Footer
