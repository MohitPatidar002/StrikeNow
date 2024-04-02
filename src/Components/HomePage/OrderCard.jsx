
import React from 'react';

const OrderCard = ({ borderColor, image, heading, description }) => {
  const cardStyle = {
    borderColor: borderColor
  };

  return (
    <div>
      <div style={cardStyle} className="border-2 rounded-lg py-8 px-3 flex flex-col gap-5 justify-center items-center w-[250px] h-[400px]">
        <img src={image} loading='lazy' height={150} width={150}/>

        <h2 style={{ color: borderColor }} className="text-xl font-semibold">{heading}</h2>

        <p>{description}</p>
      </div>
    </div>
  );
};

export default OrderCard;
