import React from 'react'

const ContactPage = () => {
  return (
    <div className='bg-white p-8 rounded-lg'>
      <h1 className='text-4xl font-bold text-gray-800 mb-6 text-center'>Contact & About</h1>
      <div className='grid md:grid-cols-2 gap-12'>
        <div>
            <h2 className='text-2xl font-semibold  mb-4'> About our College</h2>
            <p className='text-gray-600 mb-4'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure quos harum voluptate exercitationem eos doloribus architecto voluptatum. Accusamus enim, perspiciatis neque qui magnam voluptatibus dolorem, dolore, earum non eius iusto?</p>
            <p className='text-gray-600 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi eaque quidem possimus suscipit sunt? Dolorum accusantium deleniti quam laudantium, adipisci ab fuga natus voluptate doloremque ipsa nulla explicabo accusamus amet!</p>
        </div>
        <div>
            <h2 className='text-2xl font-semibold'>Get In Tounch </h2>
            <div className='space-y-4'>
                <p className='text-gray-600'>123 Park, City , IN 401209</p>
                <p className='text-gray-600'>+911234567890</p>
                <p className='text-gray-600'>Sophia.College@gmail.com</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
