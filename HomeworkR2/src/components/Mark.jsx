import React from 'react'

const Mark = ({available}) => {
    return (
        <>
            {
                available ? <>✅</> : <>❌</>
            }
        </>
    )
}

export default Mark