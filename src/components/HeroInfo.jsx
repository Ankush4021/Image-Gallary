import React from 'react'

const HeroInfo = ({ author, url }) => {

    const openSource = () => {
        window.open(url, "_blank");
    };


    return (
        <div className="absolute left-36 top-1/3 max-w-xl">
            {/* Text */}
            <h2 className="text-zinc-300 text-xl mb-3 font-semibold"> Author: {author} </h2>

            <button
                onClick={openSource}
                className="px-6 active:scale-98 py-2 bg-zinc-300 border-none rounded text-slate-900 font-semibold text-xl cursor-pointer hover:scale-95">
                Source
            </button>
        </div>
    )
}

export default HeroInfo