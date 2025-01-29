import ProjectImg from '@/components/reusable/ProjectImg'
import SectionContainer from '@/components/reusable/SectionContainer'
import SectionTitle from '@/components/reusable/SectionTitle'
import ServicesBox from '@/components/reusable/ServicesBox'
import React from 'react'
const OurWorks = () => {
  return (
    <SectionContainer>
    <div className="content">
<div className="bgcontainer p20">


<SectionTitle title="Our Works" />
</div>


</div>

<div className="ourworks">
    <div className="ourworksblock">
    <ServicesBox
  title="Zenith Fitness App"
  body="Our Web Design service is all about creating visually stunning and user-friendly websites that leave a lasting impression."
  category="Mobile App Development"
  time_taken="3 Months"
  imagepath={'/1.svg'}
/>
<ProjectImg/>
<ServicesBox
  title="Web Design"
  body="Our Web Design service is all about creating visually stunning and user-friendly websites that leave a lasting impression."

  imagepath={'/1.svg'}
/>
    </div>
</div>
</SectionContainer>
  )
}

export default OurWorks