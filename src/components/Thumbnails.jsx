const Thumbnails = ({ allData, active, setActive }) => {
    return (
        <div className="
absolute bottom-18 left-1/2 -translate-x-1/2
flex gap-4 md:gap-6
w-full px-4 md:px-12
overflow-x-auto md:overflow-visible
whitespace-nowrap
scrollbar-hide
">
            {allData.map((elem, idx) => (
                <img
                    key={idx}
                    src={`https://picsum.photos/id/${elem.id}/300/200`}
                    loading="lazy"
                    onClick={() => setActive(idx)}
                    draggable='false'
                    className={`w-28 md:w-40 h-20 md:h-28 object-cover rounded cursor-pointer shrink-0 transition-all duration-300
          ${active === idx
                            ? "scale-120 border-2 border-white"
                            : "opacity-60 hover:opacity-100"}`}
                    alt=""
                />
            ))}
        </div>
    );
};

export default Thumbnails;
