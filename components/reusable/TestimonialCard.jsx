import React from 'react'

const TestimonialCard = ({ testimonial }) => {
      const members = [
    "https://static.vecteezy.com/system/resources/thumbnails/004/511/281/small/default-avatar-photo-placeholder-profile-picture-vector.jpg",
  ]

  return (
    <div className="testimonialcard">
    
    <div className="p20 gap10">
          <div className="whytitle">
NexGen turned our business around!
        </div>
        <div className="whydesc">
Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!
        </div>
        
    </div>  
        <div className="testimonialauthor p10">
            <div className="testimonialauthorimage">
          <img 
            src={members[0]} 
            alt={`Member 1`}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              objectFit: 'cover'
            }}
          />
            </div>
            <div className="authorname">VICTOR ODAH</div>
        </div>

    </div>
  )
}

export default TestimonialCard