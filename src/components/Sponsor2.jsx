import React, {useEffect} from "react";
import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

function Sponsor2(){
    useEffect(() => {
        new Splide('#sponsors-slider', {
            type: 'loop',
            perPage: 5,
            gap: '1rem',
            autoScroll: {
                speed: 1, // Customize the scroll speed
            },
            breakpoints: {
                640: { perPage: 2 },
                1024: { perPage: 3 },
            },
        }).mount({ AutoScroll });
    }, []);

    return(
        <div className="splide" id="sponsors-slider" >
                <div className="splide__track">
                    <ul className="splide__list">
                        <li className="splide__slide"><a href="https://gen.xyz/about" target="_blank"><img src="./sponsors/xyz-logo-color.png" alt="Partner 1" /></a></li>
                        <li className="splide__slide"><a href="https://interviewbuddy.net/" target="_blank"><img src="./sponsors/InterviewBuddy-logo1.png" alt="Partner 2" /></a></li>
                        <li className="splide__slide"><img src="./sponsors/bci-logo.png" alt="Partner 3" /></li>
                        <li className="splide__slide"><img src="./sponsors/uipath-logo.png" alt="Partner 4" /></li>
                        <li className="splide__slide"><img src="./sponsors/idp-logo.png" alt="Partner 5" /></li>
                        <li className="splide__slide"><img src="./sponsors/rgpv-logo.png" alt="Partner 6" /></li>
                        <li className="splide__slide"><img src="./sponsors/devdock1-logo.png" alt="Partner 7" /></li>
                        <li className="splide__slide"><img src="./sponsors/hacktour-logo.png" alt="Partner 8" /></li>
                        <li className="splide__slide"><img src="./sponsors/ieee-logo.png" alt="Partner 9" /></li>
                        <li className="splide__slide"><img src="./sponsors/pankajxerox-logo.png" alt="Partner 10" /></li>
                        <li className="splide__slide"><img src="./sponsors/shreedhi-logo.png" alt="Partner 11" /></li>
                    </ul>
                </div>
            </div>
    )
}
export default Sponsor2;