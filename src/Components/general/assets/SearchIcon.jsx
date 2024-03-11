import React from 'react'

function SearchIcon({color}) {
    return (
        <svg viewBox="0 0 36 36" fill={color || "#fff"}>
            <g id="SVGRepo_iconCarrier">
                <path fill={color || "#fff"} d="M21.866 24.337c-3.933 2.762-9.398 2.386-12.914-1.13-3.936-3.936-3.936-10.318 0-14.255 3.937-3.936 10.32-3.936 14.256 0 3.327 3.327 3.842 8.402 1.545 12.27l4.56 4.558a2 2 0 0 1 0 2.829l-.174.173a2 2 0 0 1-2.828 0l-4.445-4.445zm-5.786-1.36a6.897 6.897 0 1 0 0-13.794 6.897 6.897 0 0 0 0 13.794z"></path>
            </g>
        </svg>
    )
}

export default SearchIcon