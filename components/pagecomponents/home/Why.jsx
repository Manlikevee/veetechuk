import SectionContainer from '@/components/reusable/SectionContainer'
import SectionTitle from '@/components/reusable/SectionTitle'
import Whybox from '@/components/reusable/Whybox'
import React from 'react'

const Why = () => {
  return (
    <SectionContainer>
   <div className="content">
    <div className="bgcontainer p20">


<SectionTitle title="  Reasons to Choose Veetech for Your Digital Transformation" />
    </div>


   </div>

   <div className="contentbox mygrid">

   <Whybox 
        title="Expertise in Cutting-Edge Technologies" 
        body="At Veetech, we integrate state-of-the-art technologies into our solutions to ensure your projects are powered by innovation and are future-proof."
      />
      <Whybox 
        title="Proven Track Record of Success" 
        body="Veetech consistently exceeds client expectations, delivering reliable and effective web solutions tailored to meet diverse business needs."
      />
      <Whybox 
        title="Client-Centric Approach Planning" 
        body="At Veetech, we prioritize understanding your unique requirements, ensuring transparent communication and collaboration throughout development."
      />
      <Whybox 
        title="Dedicated Team of Professionals" 
        body="Our team at Veetech brings a wealth of expertise to the table, delivering top-notch, scalable, and secure web solutions for your business."
      />

        </div>
   
      </SectionContainer>
  )
}

export default Why