import "./header.css"
import { MdSpaceDashboard } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import { IoIosGlobe } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { useState } from "react";

export default function Header() {
    const [count , setCount] = useState(new Map([["messages" , 3] , ["network" , 1] , ["settings" , 0]])); 


    return(
        <header className="header">
            <div className="header-logo">
                <span>Dashboard</span>
                <MdSpaceDashboard />
            </div>
            <nav className="header-nav">
                <button className={"header-nav-btn" + (count.get("messages") === 0 ? " no-badge" : "")} data-count={count.get("messages")}>
                    <FaRegBell className="header-nav-btn-svg" />
                </button>
                <button className={"header-nav-btn" + (count.get("network")  === 0 ? " no-badge" : "")} data-count={count.get("network")}>
                    <IoIosGlobe className="header-nav-btn-svg" />
                </button>
                <button className={"header-nav-btn" + (count.get("settings") === 0 ? " no-badge" : "")} data-count={count.get("settings")}>
                    <IoSettingsOutline className="header-nav-btn-svg" />
                </button>

                <div className="profile">
                    <img src="images/ayanami.jpg" alt="ayanami" />
                </div>
            </nav>
        </header>
    );
}