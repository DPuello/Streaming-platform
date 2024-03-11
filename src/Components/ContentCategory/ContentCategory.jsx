import React, { useEffect, useState } from 'react'
import "./ContentCategory.css"
import getCategory from '../../services/getCategory';
import { useParams } from 'react-router';
import HeaderNav from '../general/HeaderNav/HeaderNav';
import Footer from '../general/Footer/Footer';
import TableRow from '../general/TableRow/TableRow';

function ContentCategory() {
    const { id } = useParams()
    const [tvShows, setTvShows] = useState([]);

    useEffect(() => {
        getCategory(id).then(res => {
            setTvShows(res);
        })
    }, [])

    return (
        <>
            <div className='container_page'>
                <HeaderNav />

                <div className='container_section'>
                    <h1 className='title_section'><span>Categoría</span> {tvShows?.category}</h1>
                    <TableRow data={tvShows?.data}/>
                </div>

            </div>

            <Footer />
        </>
    )
}

export default ContentCategory