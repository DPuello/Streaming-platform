import React from 'react'

function BackArrowIcon({color}) {
    return (
        <svg viewBox="0 0 1024 1024" fill={color || "#fff"}>
            <g id="SVGRepo_iconCarrier">
                <path fill={color || "#fff"} d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"></path>
                <path fill={color || "#fff"} d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"></path>
            </g>
        </svg>
    )
}

export default BackArrowIcon