import React, { useEffect, useState } from 'react'
import HeaderNav from '../general/HeaderNav/HeaderNav'
import Footer from '../general/Footer/Footer';
import getSearch from '../../services/getSearch';
import "./SearchSection.css"
import TableRow from '../general/TableRow/TableRow';

function SearchSection() {
    const [tvShows, setTvShows] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        getSearch(search).then(res => {
            setTvShows(res);
        })
    }, [search])



    return (
        <>
            <div className='container_page'>
                <HeaderNav />

                <div className='container_input__search'>
                    <h3 className='title_section'>Resultados de { }</h3>
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder='Buscar...'
                        type="text"
                    />
                </div>

                <div className='container_section container_section__search'>
                    <TableRow data={tvShows} />
                </div>

            </div>

            <Footer />
        </>
    )
}

export default SearchSection