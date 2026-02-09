import React from 'react'

const HeroImage = ({imageId}) => {
    return (
        <>
            {/* Hero Image */}
            <img
                className="absolute h-full w-full overflow-hidden transition-all duration-700 object-cover"
                src={imageId}
                alt=""
            />

            {/* overlays */}
            <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent"></div>
        </>
    )
}

export default HeroImage