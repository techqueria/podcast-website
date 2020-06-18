import React from "react";
import { Link } from "gatsby";
import SquaredLogo from '../../images/techqueria.png';
import Styles from './comingsoon.module.scss';


const ComingSoonPageComponent = () => (
    <div>
        <img className={ Styles.logo } src={ SquaredLogo } alt="techqueria logo" aria-hidden/>
        <h1 className={ Styles.title }>Podcast coming soon!</h1>
        <h2 className={ Styles.subtitle }>Sneak peak</h2>
        <div className={ Styles.iframeContainer }>
            <iframe className={ Styles.player }
                src="https://art19.com/shows/93a23989-31e3-4181-9766-94b2429a5868/episodes/d0dabd43-b1f2-4c2b-bf57-4dd1b7fee726/embed?theme=dark-custom&primary_color=%23d374f5&type=micro"
                scrolling="no"
            />
        </div>
    </div>
);

export default ComingSoonPageComponent;
