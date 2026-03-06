import React from 'react'

const TechStack = () => {

  const stack = [
    "Next.js",
    "TypeScript",
    "CSS",
    "Django",
    "PostgreSQL",
    "JWT Authentication"
  ]

  return (
    <div className='techstack whybox'>
      <div className="whytitle">Tech Stack</div>

      <div className="techstackitems">
        {stack.map((tech, index) => (
          <div key={index} className="whydesc servicecategory">
            <span
              style={{
                width: '5px',
                height: '5px',
                backgroundColor: '#CE7D63',
                borderRadius: '50%',
                display: 'inline-block',
                marginRight: '2px',
              }}
            ></span>
            {tech}
          </div>
        ))}
      </div>
    </div>
  )
}

export default TechStack