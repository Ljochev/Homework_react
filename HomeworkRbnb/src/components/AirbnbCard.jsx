import React from 'react'
import InfoCard from './InfoCard'
import Image from './Image'

const AirbnbCard = ({myData , theImage}) => {
    console.log("This is the object transvered", myData)
    return (
        <>
        <div className='airbnbCard'>
            <Image myImage={theImage}/>
            <InfoCard location={myData.location} rating={myData.rating} distance={myData.distance} dates={myData.dates} price={myData.price}/>
            </div>
        </>
    )
}

export default AirbnbCard