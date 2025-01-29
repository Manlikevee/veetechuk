import Portfolio_layout from '@/components/mylayout/Portfolio_layout'
import Hero from '@/components/pagecomponents/home/Hero'
import OurServices from '@/components/pagecomponents/home/OurServices'
import OurWorks from '@/components/pagecomponents/home/OurWorks'
import Why from '@/components/pagecomponents/home/Why'
import CustomMarquee from '@/components/reusable/CustomMarquee'
import React from 'react'

const page = () => {
  const sampleData = [
    'E-commerce',
    'Blog Application',
    'Investment Application',
    'Social Media Platform',
    'Online Marketplace',
    'Job Search Portal',
    'Food Delivery Application',
    'Fitness Tracker',
    'Travel Booking System',
    'News Aggregator',
    'Educational Platform',
    'Real Estate Application',
    'Music Streaming Service',
    'Expense Tracker',
    'Event Management System',
    'Video Streaming Platform',
    'Task Management App',
    'Collaborative Workspace',
    'Online Learning Community',
    'Dating Application',
    'Health Monitoring System',
    'Online Banking System',
    'Project Management Tool',
    'File Sharing Platform',
    'Job Recruiting System',
    'Crowdfunding Platform',
    'Personal Finance App',
    'Language Learning App',
    'Property Management System',
    'Recipe Sharing App',
    'Virtual Reality Game',
    'Augmented Reality Shopping App',
    'Peer-to-Peer Lending Platform',
    'Subscription Box Service',
    'Mobile Gaming App',
    'News Blogging Platform',
    'Digital Portfolio Platform',
    'Customer Support System',
    'Influencer Marketing Platform',
    'Event Ticketing System',
    'Local Services Finder',
    'Online Auction Platform',
    'Supply Chain Management System',
    'Fleet Management System',
    'Delivery Tracking System',
    'Wedding Planning App',
    'Volunteer Coordination Platform',
    'Charity Fundraising Platform',
    'Sports Event Management System',
    'Online Music Lessons Platform',
    'Ticket Booking System',
    'Home Automation App',
    'Online Grocery Shopping App',
    'Community Forum Platform',
    'Time Tracking Application',
    'Nonprofit Donation Platform',
    'Online Survey Tool',
    'Real-Time Chat Application',
    'Recipe Generator App',
    'Freelancer Marketplace',
    'Personalized Shopping Assistant',
    'Online Dating App',
    'Group Video Call Platform',
    'Pet Adoption App',
    'Smartwatch Fitness App',
    'Content Management System',
    'Data Analytics Dashboard',
    'Car Rental Application',
    'Remote Team Collaboration Tool',
    'Digital Art Marketplace',
    'Inventory Management System',
    'SaaS Business Tool',
    'Cryptocurrency Tracker',
    'Online Quiz Platform',
    'Subscription Service for Digital Products',
    'Customizable Business Website Builder',
    'Remote Learning Platform',
    'Productivity Tool',
    'Augmented Reality Navigation App',
    'Smart Home Security System',
    'Language Translation App',
    'Freelancer Portfolio Website',
    'Cloud Storage Service',
    'Personal Blog Platform',
    'Online Resume Builder',
    'Custom Printing Service Platform',
    'Photography Portfolio Website',
    'Email Marketing Service',
    'Task Automation Tool',
    'Local Event Discovery App',
    'AI-Powered Content Generator',
    'Mobile Payment App',
    'Book Reading App',
    'Budgeting Tool',
    'Crowdsourced Delivery App',
    'Elderly Care App',
    'Volunteer Service Finder',
    'Employee Scheduling Tool',
    'Virtual Fitness Classes App'
  ];

  return (
    <Portfolio_layout>

      <div className="contentcontainer">
      <Hero/>
      <CustomMarquee items={sampleData} direction={'right'} />
      </div>
     
      <div className="contentcontainer">
      <Why/>
      </div>

      <br />
      <br />
<div className="contentcontainer">
<OurServices/>
</div>
  <br />
  <br />
<div className="contentcontainer">
<OurWorks/>
</div>
    </Portfolio_layout>
  )
}

export default page