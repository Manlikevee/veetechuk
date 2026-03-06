import ProjectImg from '@/components/reusable/ProjectImg'
import SectionContainer from '@/components/reusable/SectionContainer'
import SectionTitle from '@/components/reusable/SectionTitle'
import ServicesBox from '@/components/reusable/ServicesBox'
import TeamMembers from '@/components/reusable/TeamMembers'
import TechStack from '@/components/reusable/TechStack'
import TestimonialCard from '@/components/reusable/TestimonialCard'
import Link from 'next/link'
import React from 'react'


const Testimonial = () => {
  return (
    <SectionContainer>
      <div className="content">
        <div className="bgcontainer p20">
          <SectionTitle title="Our Testimonials" />
        </div>
      </div>
<div className="contentbox mygrid">
<TestimonialCard
  testimonial={{
    title: "NexGen turned our business around!",
    body: "Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!",
    author: {
      name: "John Doe",
      image: "https://via.placeholder.com/150"
    }
  }}
/> 

<TestimonialCard
  testimonial={{
    title: "NexGen turned our business around!",
    body: "Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!",
    author: {
      name: "John Doe",
      image: "https://via.placeholder.com/150"
    }
  }}
/> 

<TestimonialCard
  testimonial={{
    title: "NexGen turned our business around!",
    body: "Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!",
    author: {
      name: "John Doe",
      image: "https://via.placeholder.com/150"
    }
  }}
/> 

<TestimonialCard
  testimonial={{
    title: "NexGen turned our business around!",
    body: "Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!",
    author: {
      name: "John Doe",
      image: "https://via.placeholder.com/150"
    }
  }}
/> 

</div>

    </SectionContainer>
  )
}

export default Testimonial