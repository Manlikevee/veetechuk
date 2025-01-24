import CustomMarquee from '@/components/reusable/CustomMarquee';
import React from 'react';

const Hero = () => {
  const sampleData = [
    'Digital Marketing',
    'Website Design',
    'Branding',
    'Website Development',
    'Mobile App Development',
    'SEO',
    'Website Hosting',
    'App Development',
  ];

  return (
    <div className="contentcontainer">
      <div className="heroflex">
        <div className="heroflextop">
          <div className="bgcontainer w-100 p20">
            <div className="herodata p20 mblock50">
              <div className="herotitle">
                Digital Solutions{' '}
                <div className="red">
                  <span className="roundedarrow material-symbols-outlined">
                    arrow_forward
                  </span>{' '}
                  <small>Start a Project</small>
                </div>
              </div>
              <div className="herotitle">That Drive Success</div>

              <div className="accenttext">
                At VeeTechNG, we harness the power of cutting-edge technology to
                drive innovation and growth. Our passionate team delivers
                tailored digital solutions that empower businesses to excel in
                today’s competitive digital ecosystem. Together, let’s shape the
                future of your business with technology that truly makes a
                difference.
              </div>
            </div>
            <div>
        
              <CustomMarquee items={sampleData} />
            </div>
          </div>
          <div className="bgcontainer w-50 nopadding fullheight">
            <div className="projectbox">
              
            <div className="projectimg">
       
    </div>
    <div className="projectdesc">
        <div className="bgcontainer">
            <div className="projecttitle">
            Estatein Real Estate
            </div>
            <div className="projectbody">
            Web Development. 
            </div>
        </div>
    </div>
            </div>

          </div>
        </div>

        <div className="heroflexbtm">

        <div className="content">
  <div className="contentbox">
    <div className="contenttitle">Clients</div>
    <div className="contentbody">200+</div>
  </div>
  <div className="contentbox">
    <div className="contenttitle">Projects</div>
    <div className="contentbody">280+</div>
  </div>
  <div className="contentbox">
    <div className="contenttitle">Happy Clients</div>
    <div className="contentbody">100%</div>
  </div>
  <div className="contentbox">
    <div className="contenttitle">Followers</div>
    <div className="contentbody">420K</div>
  </div>
  <div className="contentbox">
    <div className="contenttitle">Years Of Experience</div>
    <div className="contentbody">10+</div>
  </div>
  <div className="contentbox">
    <div className="contenttitle">Know More</div>
    <div className="contentbody">
      <small href="#" style={{ textDecoration: 'underline', color: 'inherit' }}>
      10+
      </small>
    </div>
  </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
