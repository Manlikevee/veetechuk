import React from 'react'

const ServicesBox = ({title, body, price, imagepath, category, time_taken}) => {
  return (
    <div className="whybox p30 w-100">
  <div className="servicesheader">
    <div className="serviceleft">
        <div className="servicelogo">
            <img src={imagepath} alt="" />
        </div>
        <div className="whytitle">{title}</div>
    </div>

    <div className="serviceright">
  
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span> 
               
        Book A Call</div>
  </div>
  {category && <div className="whydesc servicecategory"><label htmlFor="Category">Category</label>              <span
              style={{
                width: '5px',
                height: '5px',
                backgroundColor: '#CE7D63',
                borderRadius: '50%',
                display: 'inline-block',
                marginRight: '10px',
              }}
            ></span> {category}</div>}

  {time_taken && <div className="whydesc servicecategory"><label htmlFor="Time Taken">Time Taken</label>             <span
              style={{
                width: '5px',
                height: '5px',
                backgroundColor: '#CE7D63',
                borderRadius: '50%',
                display: 'inline-block',
                marginRight: '2px',
              }}
            ></span>  {time_taken}</div>}
  <div className="whydesc">
{body}
  </div>
  {price &&  <div className="servicepricing">{price}</div>}
 
  </div>
  )
}

export default ServicesBox