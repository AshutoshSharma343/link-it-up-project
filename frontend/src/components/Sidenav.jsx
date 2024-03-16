import React, { useState } from 'react';
import { AccountCircle, Search, Chat } from '@mui/icons-material';
import { Link } from 'react-router-dom';



const SideNav = () => {
    const [expanded, setExpanded] = useState(false);

    const handleMouseEnter = () => {
        setExpanded(true);
    };

    const handleMouseLeave = () => {
        setExpanded(false);
    };

    return (
        
        <nav
            className={`side-nav fixed top-0 left-0 h-screen flex flex-col items-center justify-center bg-black text-white px-2 ${expanded ? 'w-64' : 'w-16'
                }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ zIndex: "50" }}
        >
            <Link to="/" >
            <h2 className={`${expanded ? "": "hidden"} `} style={{fontSize: "24px", color: "white", paddingBottom: "30px"}}>Link it up</h2>
            </Link>
            <ul>
                <li className="mb-4 flex items-center">
                    <AccountCircle />
                    <span className={`ml-2  ${expanded ? '' : 'hidden'
                        }`}>
                        Profile
                    </span>
                </li>
                <li className="mb-4 flex items-center">
                    <Link to="/search">
                        <Search />
                        <span className={`ml-2  ${expanded ? '' : 'hidden'
                            }`}>
                            Creator Search
                        </span>
                    </Link>
                </li>
                <li className="flex items-center">
                    <Link to="/chat">
                    <Chat />
                    <span className={`ml-2  ${expanded ? '' : 'hidden'
                        }`}>
                        Chat
                    </span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default SideNav;
