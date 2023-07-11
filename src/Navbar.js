import React, { useEffect, useRef, useState } from 'react';
import { PiWebhooksLogoFill } from "react-icons/pi";
import { FaBars, FaTimes } from "react-icons/fa";
import { links, socials} from "./data";

const Navbar = () => {

    const [showLinks, setShowLinks] = useState(false);
    const containerRef = useRef(null);
    const linksRef = useRef(null);

    useEffect(() => {

        const linksHeigth = linksRef.current.getBoundingClientRect().height;

        if (showLinks) {
            containerRef.current.style.height = `${linksHeigth}px`;
        } else {
            containerRef.current.style.height = "0px";
        };

    }, [showLinks]);

    const clickHandler = () => {

        setShowLinks(!showLinks);

    };

    return (
        <nav>
            <div className='container'>
                <div className='nav-logo'>
                    <button className='nav-toggle' onClick={clickHandler}>
                        {
                            showLinks ? <FaTimes /> : <FaBars className='bars' />
                        }
                    </button>
                    <PiWebhooksLogoFill size={50} className='logo' />
                </div>
                
                <div className="nav-links" ref={containerRef}>
                    <ul className='list' ref={linksRef}>
                        {
                            links.map(link => {
                                const { id, text, url } = link;
                                return (
                                    <li key={id}>
                                        <a href={url}>{text}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                
                <ul className='nav-social'>
                    {
                        socials.map(social => {
                            const { id, url, icon } = social;
                            return (
                                <li key={id}>
                                    <a href={url}>{icon}</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;