import React, { useEffect, useState } from 'react'
import "./ContentDetails.css"
import { useParams } from 'react-router'
import getDetail from '../../services/getDetail';
import BackArrowIcon from '../general/assets/BackArrowIcon';
import { useNavigate } from 'react-router-dom';

function ContentDetails() {
    const { id } = useParams()
    const [detail, setDetail] = useState();
    const [url, setUrl] = useState("https://www.youtube.com/embed/aOC8E8z_ifw?si=KEx-72-jphcQF5f_?autoplay=1&mute=1");
    const navigate = useNavigate();

    useEffect(() => {
        getDetail(id).then(res => {
            setDetail(res);
            showURL(res);
        })
    }, [])

    function showURL(detail) {
        if (detail.genres.find(genre => genre.id == 16)) {
            setUrl("https://www.youtube.com/embed/B6uuIHpFkuo?si=Kd2iSJQzLMKmj0CO?autoplay=1&mute=1");
        } 
        else if(detail.genres.find(genre => genre.id == 878)){
            setUrl("https://www.youtube.com/embed/aOC8E8z_ifw?si=KEx-72-jphcQF5f_?autoplay=1&mute=1");
        }
        else if(detail.genres.find(genre => genre.id == 35)){
            setUrl("https://www.youtube.com/embed/yOo_ZUVU_O8?si=l_YIOhJYesD3c2B_?autoplay=1&mute=1");
        }
        else if(detail.genres.find(genre => genre.id == 18)){
            setUrl("https://www.youtube.com/embed/nqlROp1TIgo?si=cVRjSRWBZXk36vhi?autoplay=1&mute=1");
        }
        else if(detail.genres.find(genre => genre.id == 99)){
            setUrl("https://www.youtube.com/embed/cYDwFwsAVJk?si=HoGJY_Kn1ifhn2Oc?autoplay=1&mute=1");
        }
    }

    function renderType(type) {
        switch (type) {
            case "movie":
                return "película"
            case "series":
                return "serie"
            default:
                return "visual"
        }
    }


    return (
        <div className='container_details'>
            <div className='container_details__content'>
                <iframe
                    width="560"
                    height="315"
                    src={url || ""}
                    title="Video player"
                    frameBorder="0"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; encrypted-media"
                    allowFullScreen
                />
            </div>
            <div className='container_details__info'>
                <button className='btn_detail__back' onClick={() => navigate(-1)}>
                    <BackArrowIcon color={"#fff"} />
                    Volver
                </button>
                <h1>{detail?.title}</h1>
                <h4>
                    Dirigido por:
                    {detail?.directors?.map((director, index) =>
                        `${index > 0 ? ", " : ""} ${director}`
                    )}
                </h4>
                <h6>
                    {detail?.genres?.map((genre, index) =>
                        `${index > 0 ? ", " : ""} ${genre.name}`
                    )}
                </h6>
                <p>
                    Reparto:
                    {detail?.cast?.map((actor, index) =>
                        `${index > 0 ? ", " : ""} ${actor}`
                    )}
                </p>
                <a target='_blank'
                    href={detail?.streamingInfo.us[0].videoLink || detail?.streamingInfo.us[0].link}
                >
                    Disfruta la {renderType(detail?.type)} en {detail?.streamingInfo.us[0].service}
                </a>
            </div>
        </div>
    )
}

export default ContentDetails