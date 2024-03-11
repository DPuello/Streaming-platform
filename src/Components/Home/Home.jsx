import React, { useEffect, useRef, useState } from 'react'
import "./Home.css"
import getHomeData from '../../services/getHome'
import Auth from '../../hooks/Auth'
import HeaderNav from '../general/HeaderNav/HeaderNav';
import Footer from '../general/Footer/Footer';
import numbers from "./assets/numbers.gif"
import animation from "./assets/animation.gif"
import comedy from "./assets/comedy.gif"
import documentary from "./assets/documentary.gif"
import drama from "./assets/drama.gif"
import science from "./assets/science.gif"
import banner from "./assets/banner.jpg"
import { Link } from 'react-router-dom';

function Home() {
    const [categories, setCategories] = useState([]);

    const [MousePosition, setMousePosition] = useState([0, 0]);
    const ref = useRef();

    useEffect(() => {
        document.addEventListener('mousemove', (e) => {
            setMousePosition([e.pageX, e.pageY]);
        })
    }, [])

    useEffect(() => {
        let constrain = window.innerWidth * 2;

        let box = ref.current.getBoundingClientRect();
        let calcX = -(MousePosition[1] - box.y - (box.height / 2)) / constrain;
        let calcY = (MousePosition[0] - box.x - (box.width / 2)) / constrain;

        ref.current.style.transform = `perspective(100px) rotateX(${calcX}deg) rotateY(${calcY}deg) `;

    }, [MousePosition])




    useEffect(() => {
        getHomeData().then(res => {
            setCategories(Object.keys(res).map((key) => {
                return { id: key, name: res[key] }
            }));
        })
    }, [])

    function getGifPath(id) {
        switch (+id) {
            case 16:
                return animation
            case 18:
                return drama
            case 35:
                return comedy
            case 99:
                return documentary
            case 878:
                return science
            default:
                return numbers
        }
    }

    return (
        <>
            <HeaderNav />

            <div className='banner' ref={ref} id="ex1-layer">
                <img src={banner} alt="bemaster show banner" />
            </div>
            <main className='main'>
                <div className='container_category__home'>
                    {
                        categories?.length > 0 &&
                        categories?.map(category =>
                            <article key={`home category ${category.id}`} >
                                <Link className='card card_category__home' to={`/category/${category.id}`}>
                                    <img src={getGifPath(category.id)} />
                                    <h2>{category.name}</h2>
                                </Link>
                            </article>
                        )
                    }
                </div>
            </main>

            <Footer />
        </>
    )
}

export default Auth(Home);