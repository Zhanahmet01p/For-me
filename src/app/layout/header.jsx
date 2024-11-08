import React from 'react';
import Logo from "../../shared/assets/icons/Logo.jsx";
import Nav from "../../features/nav/index.jsx";
import Facebook from "../../shared/assets/icons/Facebook.jsx";
import {Instagram} from "../../shared/assets/icons/Instagram.jsx";
import {Twitter} from "../../shared/assets/icons/Twitter.jsx";

function Header({children}) {
    const navigations = [
        {id: 1, name: "Portfolio"},
        {id: 2, name: "Story"},
        {id: 3, name: "Contact"},
        {id: 4, name: "Career"},
        {id: 5, name: "Skillset"},
    ]

    return (
        <React.Fragment>
            <header className="flex justify-between items-center py-[36px]">
                <div className="flex items-center gap-[40px]">
                    <div className={'flex gap-[10px] items-center'}>
                        <Logo/>
                        <div className={'text-[22px] font-extrabold'}>Vijay Singh</div>
                    </div>
                    <div>
                        <Nav navigations={navigations}/>
                    </div>
                </div>
                <div className={'flex gap-[20px]'}>
                    <Facebook/>
                    <Instagram/>
                    <Twitter/>
                </div>
            </header>
        </React.Fragment>
    )
}


export default Header;