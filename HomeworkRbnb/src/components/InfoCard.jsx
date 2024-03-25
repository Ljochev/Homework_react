import React from 'react'

const InfoCard = ({location, rating, distance, dates, price}) => {
    return (
        <>
         <p>{location} ⭐️ {rating}</p>
         <p>{distance}</p>
         <p>{dates}</p>
         <p>{price}</p>
        </>
    )
}

export default InfoCard