import React from 'react'
import "../general.css"
import BackArrowIcon from '../assets/BackArrowIcon'

function BackButton({color, style, ...props}) {
    return (
        <div {...props} className='aerobutton' style={{...style}}>
            <BackArrowIcon color={color}/>
        </div>
    )
}

export default BackButton