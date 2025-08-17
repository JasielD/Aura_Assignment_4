import React from 'react'
import { coursesData,facultyData } from './data'


const About_us = () => {
  return (
     <div className="space-y-1 m-8">
    {/* About the College Section */}
    <div>
      <h2 className='text-3xl font-bold text-gray-800 mb-4'>About Sophia College</h2>
      <p className='text-gray-600 mb-4 leading-relaxed'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis asperiores quibusdam consectetur fugit enim iste dolorem perferendis. Autem facilis ipsum sapiente dolor et esse, culpa animi porro, ab vitae molestiae!
      </p>
      <p className='text-gray-600 mb-4 leading-relaxed'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint optio et iusto consequatur neque laudantium, hic veritatis accusamus dolore culpa vitae cum deleniti. Impedit voluptate aperiam sit velit mollitia ea!
      </p>
    </div>

     <div>
        <h2 className='text-3xl font-bold text-gray-800 mb-6 border-t pt-8'>A Message from the Principal</h2>
        <div className="flex flex-col md:flex-row items-center gap-8 bg-gray-50 p-6 rounded-full">
          <img 
            src="src\Public\Principal.jpg" 
            alt="College Principal" 
            className="w-40 h-40 rounded-full object-cover border-4 border-white"
          />
          <div>
            <h3 className="text-2xl font-semibold text-gray-700">Dr. Anagha Parag</h3>
            
            <p className='text-gray-600 leading-relaxed'>
              It is my pleasure to welcome you to our institution. I believe education is not only about academic success but also about building values, confidence, and character. Together, let us create an environment where every learner is inspired to explore, grow, and achieve their dreams.</p>
          </div>
        </div>
    </div>

    <div>
        <h2 className='text-3xl font-bold text-gray-800 mb-6 border-t pt-8'>Our Courses</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {coursesData.map((course, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">{course.name}</h3>
              <p className="text-blue-600 font-medium mb-3">{course.duration}</p>
              <p className="text-gray-600">{course.description}</p>
            </div>
          ))}
        </div>
    </div>

    <div>
        <h2 className='text-3xl font-bold text-gray-800 mb-6 border-t pt-8'>Meet Our Faculty</h2>
        <div className="grid md:grid-cols-2 gap-4">
            {facultyData.map((member, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-full flex items-center gap-4">
                    <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-xl font-bold text-gray-500 flex-shrink-0">
                        {member.name.charAt(5)}
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
                        <p className="text-gray-600">{member.department}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>


    </div>
    )
}

export default About_us
