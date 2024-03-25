import React from 'react'
import Mark from './Mark'

const PackageList = ({isPacked, name, className}) => {
return (
    <div className={className}>
        {isPacked ? (
            <>
            <span>{name} </span>
            <Mark available={true}/>
            </>
        ) : (
            <>
            <span>{name} </span>
            <Mark available={false}/>
            </>
        )

        }
    </div>
)
}

export default PackageList