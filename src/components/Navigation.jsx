const Navigation = ({ nextImage, prevImage, nextPage, prevPage }) => {
    return (
        <>
            {/* image navigation */}
            <button
                onClick={prevImage}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-black/50 px-3 py-2 rounded cursor-pointer">
                Prev
            </button>

            <button
                onClick={nextImage}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-black/50 px-3 py-2 rounded cursor-pointer">
                Next
            </button>

            {/* page navigation */}
            <div className="absolute bottom-3 w-full flex justify-center gap-4">
                <button
                    onClick={prevPage}
                    className="bg-white text-black px-4 py-2 rounded">
                    Prev Page
                </button>

                <button
                    onClick={nextPage}
                    className="bg-white text-black px-4 py-2 rounded">
                    Next Page
                </button>
            </div>
        </>
    );
};

export default Navigation;
