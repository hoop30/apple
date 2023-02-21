import React, { useState } from 'react'
import NavList from '../../data/NavList.json'
import appleLogo from '../../assets/logo/apple-logo.png'
import loupe from '../../assets/logo/loupe.png'
import panier from '../../assets/logo/panier.png'
import ExpandNavBar from './ExpandNavBar'

export default function NavBar() {

    const [isOpen, setIsOpen] = useState(false)
    const [expandContent, setExpandContent] = useState(null)

    function close() {
        setIsOpen(false)
    }

    return (
        <div className="nav-bar">
            <nav>
                <ul className='nav-list'>
                    <li onMouseEnter={close}>
                        <a href="#">
                            <img src={appleLogo} alt="apple logo" />
                        </a>
                    </li>
                    {NavList && Object.keys(NavList).map(function (key, index) {
                        return <li key={index}>
                            <a 
                                href={NavList[key].path}
                                onMouseEnter={() => {
                                    setIsOpen(true)
                                    setExpandContent(NavList[key])
                                }}
                            >
                                {key}
                            </a>
                        </li>
                    })}
                    <li onMouseEnter={close}>
                        <img src={loupe} alt="recherche" />
                    </li>
                    <li onMouseEnter={close}>
                        <img src={panier} alt="panier" />
                    </li>
                </ul>
                {isOpen && <ExpandNavBar set={close} content={expandContent} />}
            </nav>
        </div>
    )
}
