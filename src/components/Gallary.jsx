import React, { useEffect, useState } from 'react'
import axios, { all } from 'axios'
import Hero from './Hero'

const Gallary = () => {

    const [allData, setAllData] = useState([])
    const [pages, setPages] = useState(1)

    const getData = async () => {
        const response = await axios.get(`https://picsum.photos/v2/list?page=${pages}&limit=8`)
        const data = response.data
        setAllData(data)
    }

    useEffect(() => {
        getData()
    }, [pages])


    return (
        <div className='h-screen w-full relative' >
            <Hero allData={allData}
                nextPage={() => setPages(pages + 1)}
                prevPage={() => pages > 1 && setPages(pages - 1)}
            />
        </div>
    )
}

export default Gallary