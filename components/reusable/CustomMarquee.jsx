import React from 'react';

const CustomMarquee = ({ items }) => {
  return (
    <div
      style={{
        background: '#0F0F0F',
        padding: '10px 5px',
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        alignItems:'center',
        borderRadius: '8px',
      }}
    >
      <marquee
        behavior="scroll"
        direction="left"
        scrollamount="5"
        style={{
          width: '100%',
          whiteSpace: 'nowrap',
        }}
      >
        {items.map((item, index) => (
          <span
            key={index}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              marginRight: '20px',
            }}
          >
            {/* Icon as a colored dot */}
            <span
              style={{
                width: '5px',
                height: '5px',
                backgroundColor: '#CE7D63',
                borderRadius: '50%',
                display: 'inline-block',
                marginRight: '10px',
              }}
            ></span>
            {/* Text content */}
            <span
              style={{
                fontFamily: 'Roboto Mono',
                fontSize: '17px',
                fontWeight: '400',
                lineHeight: '22px',
                textAlign: 'left',
                color: '#676665',
              }}
            >
              {item}
            </span>
          </span>
        ))}
      </marquee>
    </div>
  );
};

export default CustomMarquee;
