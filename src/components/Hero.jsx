import { useState } from "react"
import HeroImage from "./HeroImage"
import HeroInfo from "./HeroInfo"
import Thumbnails from "./Thumbnails"
import Navigation from "./Navigation"



const Hero = ({ allData, nextPage, prevPage }) => {

    const [active, setActive] = useState(0)

    if (allData.length === 0) return null

    const btnclick = () => {
        window.open(allData[active].url, "_blank")
    }
    const nextImage = () => {
        setActive((prev) => (prev + 1) % allData.length);
    };

    const prevImage = () => {
        setActive((prev) => (prev - 1 + allData.length) % allData.length);
    };


    return (
        <div className="relative h-screen w-full overflow-hidden text-white">

            <HeroImage
                imageId={allData[active].download_url}
            />

            <HeroInfo
                author={allData[active].author}
                url={allData[active].url}
            />

            <Thumbnails
                allData={allData}
                active={active}
                setActive={setActive}
            />

            <Navigation
                nextImage={nextImage}
                prevImage={prevImage}
                nextPage={nextPage}
                prevPage={prevPage}
            />

        </div>
    )
}

export default Hero
