'use client'

import React from "react";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";

const Faqblock = () => {
const accordionData = [
  {
    moduleTitle: "How long does it take to complete a web development project?",
    moduleBody:
      "The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards.",
  },
  {
    moduleTitle: "Can you handle large-scale mobile app development projects?",
    moduleBody:
      "Yes, our team has the expertise and experience to manage large-scale mobile app development projects. We use scalable architectures, modern technologies, and efficient workflows to ensure reliable performance and smooth delivery.",
  },
  {
    moduleTitle: "Can you integrate third-party APIs into our mobile app?",
    moduleBody:
      "Absolutely. We can integrate various third-party APIs such as payment gateways, social media platforms, mapping services, analytics tools, and more to enhance the functionality of your mobile application.",
  },
  {
    moduleTitle: "How do you ensure cross-platform compatibility for mobile apps?",
    moduleBody:
      "We use modern development frameworks and thorough testing processes to ensure that mobile apps perform consistently across different devices and operating systems such as iOS and Android.",
  },
  {
    moduleTitle: "What is your approach to user experience (UX) design?",
    moduleBody:
      "Our UX design process focuses on understanding user needs, creating intuitive interfaces, and delivering seamless interactions. We combine research, wireframing, prototyping, and user testing to create engaging and user-friendly digital experiences.",
  },
];
  return (
    <div className="faq-wrapper">
      <Accordion transition transitionTimeout={300} allowMultiple={false}>
        {accordionData.map((item, index) => (
          <AccordionItem
            key={index}
            header={({ state: { isEnter } }) => (
              <div className="faq-header ">
                <div className="faq-left">
                  {/* <div className="faq-number">
                    {String(index + 1).padStart(2, "0")}
                  </div> */}
                  <h3>{item.moduleTitle}</h3>
                </div>

                <div className="faq-icon">
                  {isEnter ? "−" : "+"}
                </div>
              </div>
            )}
          >
            <div className="faq-content">
      
              <div className="accenttext">{item.moduleBody}</div>
            </div>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Faqblock;