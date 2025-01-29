import SectionContainer from '@/components/reusable/SectionContainer'
import SectionTitle from '@/components/reusable/SectionTitle'
import ServicesBox from '@/components/reusable/ServicesBox'
import React from 'react'

const OurServices = () => {
  return (
    <SectionContainer>
           <div className="content">
    <div className="bgcontainer p20">


<SectionTitle title="Our Services" />
    </div>


   </div>

    <div className="contentbox mysmallgrid">
    <ServicesBox
  title="Web Design"
  body="Our Web Design service is all about creating visually stunning and user-friendly websites that leave a lasting impression."
  price="Starts From $1,500"
  imagepath={'/1.svg'}
/>
<ServicesBox
  title="Mobile App Development"
  body="With our Mobile App Development service, we harness the power of mobile technology to create cutting-edge applications that engage your customers on-the-go."
  price="Starts From $2,500"
  imagepath={'/2.svg'}
/>
<ServicesBox
  title="Web Development"
  body="Our Web Development service is focused on turning your website into a powerful digital asset. We utilize the latest technologies and industry best practices to build websites."
  price="Starts From $1,800"
  imagepath={'/3.svg'}
/>
<ServicesBox
  title="Digital Marketing"
  body="In the digital age, marketing is a critical aspect of your business's success. Our Digital Marketing service employs data-driven strategies to enhance your brand's visibility."
  price="Starts From $1,200"
  imagepath={'/4.svg'}
/>

      </div>
    </SectionContainer>
  )
}

export default OurServices