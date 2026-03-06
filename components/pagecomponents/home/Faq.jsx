import ContactForm from '@/components/reusable/ContactForm'
import Faqblock from '@/components/reusable/Faqblock'
import SectionContainer from '@/components/reusable/SectionContainer'
import SectionTitle from '@/components/reusable/SectionTitle'
import React from 'react'

const Faq = () => {
  return (
    <SectionContainer>
      <div className="content">
        <div className="bgcontainer p20">
          <SectionTitle title="Frequently Asked Questions" />
        </div>


   

      </div>

     <div className="contentbox mygrid-2">

              <div className="faqitem">
    <Faqblock />
              </div>

              <div className="faqitem bgcontainer p20 ">
                <div className="contact-form">
       <h3 className='whytitle'>Ask your question</h3>
                </div>
    
        

        <ContactForm />
              </div>        
              </div>


    </SectionContainer>
  )
}

export default Faq