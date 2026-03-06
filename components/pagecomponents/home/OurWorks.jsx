import ProjectImg from '@/components/reusable/ProjectImg'
import SectionContainer from '@/components/reusable/SectionContainer'
import SectionTitle from '@/components/reusable/SectionTitle'
import ServicesBox from '@/components/reusable/ServicesBox'
import TeamMembers from '@/components/reusable/TeamMembers'
import TechStack from '@/components/reusable/TechStack'
import Link from 'next/link'
import React from 'react'

const OurWorks = () => {
  const projects = [
    {
      title: "Zenith Fitness App",
      body: "Our Web Design service is all about creating visually stunning and user-friendly websites that leave a lasting impression.",
      category: "Mobile App Development",
      time_taken: "3 Months",
      imagepath: "/1.svg",
      projectLink: "#"
    },

    {
      title: "Veezitors Visitor Management",
      body: "An all-in-one solution for managing visitors, approvals, notifications, and reports efficiently.",
      category: "Web App",
      time_taken: "2 Months",
      imagepath: "/3.svg",
      projectLink: "#"
    }
    // Add more projects here
  ]

  return (
    <SectionContainer>
      <div className="content">
        <div className="bgcontainer p20">
          <SectionTitle title="Our Works" />
        </div>
      </div>

      <div className="ourworks">
        {projects.map((project, index) => (
          <SectionContainer key={index}>
            <div className="ourworksblock">
              <ServicesBox
                title={project.title}
                body={project.body}
                category={project.category}
                time_taken={project.time_taken}
                imagepath={project.imagepath}
              />
              <ProjectImg />
              <div className="coldiv">
                <TechStack />
                <TeamMembers />
                <Link href={project.projectLink} className="teammemberbtn">View Project</Link>
              </div>
            </div>
          </SectionContainer>
        ))}
      </div>
    </SectionContainer>
  )
}

export default OurWorks