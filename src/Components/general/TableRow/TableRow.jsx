import React from 'react'
import { Link } from 'react-router-dom'

function TableRow({data}) {
    function renderType(type) {
        switch (type) {
            case "movie":
                return "Película"
            case "series":
                return "Serie"
            default:
                return "Audiovisual"
        }
    }

    return (
        <ul>
            <li className='category_row__header'>
                <p>Nombre</p>
                <p>Tipo de contenido</p>
                <p>Año</p>
            </li>
            {
                data?.length > 0 &&
                data?.map((show) =>
                    <li key={`category row ${show?.tmdbId}`}>
                        <Link className='category_row' to={`/detail/${show?.tmdbId}`}>
                            <p>{show?.title}</p>
                            <p>{renderType(show?.type)}</p>
                            <p>{show?.year}</p>
                        </Link>
                    </li>
                )
            }

        </ul>
    )
}

export default TableRow