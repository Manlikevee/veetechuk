import React from 'react'

const TeamMembers = () => {
  const members = [
    "https://static.vecteezy.com/system/resources/thumbnails/004/511/281/small/default-avatar-photo-placeholder-profile-picture-vector.jpg",
    "https://static.vecteezy.com/system/resources/thumbnails/004/511/281/small/default-avatar-photo-placeholder-profile-picture-vector.jpg",
    "https://static.vecteezy.com/system/resources/thumbnails/004/511/281/small/default-avatar-photo-placeholder-profile-picture-vector.jpg",
    "https://static.vecteezy.com/system/resources/thumbnails/004/511/281/small/default-avatar-photo-placeholder-profile-picture-vector.jpg"
  ]

  return (
    <div className='team-members whybox'>
      <div className="whytitle">Team Members</div>

      <div className="teammembersimage" style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px'
      }}>
        {members.map((member, index) => (
          <img 
            key={index}
            src={member} 
            alt={`Member ${index + 1}`}
            style={{
              width: '45px',
              height: '45px',
              borderRadius: '50%',
              objectFit: 'cover'
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default TeamMembers