import React from 'react'

const Whybox = ({title, body}) => {
  return (
    <div className='whybox p20'>
        <div className="whytitle">{title}</div>
        <div className="whydesc">{body}</div>
        <div className="red blk">
                  <span className="roundedarrow material-symbols-outlined">
                    arrow_forward
                  </span>{' '}
                  <small>Start a Project</small>
                </div>
    </div>
  )
}

export default Whybox