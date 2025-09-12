import "./sideBar.css"
import SidebarCat from "../SidebarCat/sidebarCat.jsx";
import { LuBrickWall } from "react-icons/lu";
import { IoAnalyticsOutline } from "react-icons/io5";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";
import { MdOutlineAttachMoney } from "react-icons/md";
import { FaChartSimple } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { MdOutlineDynamicFeed } from "react-icons/md";
import { TiMessages } from "react-icons/ti";
import { FaBriefcase } from "react-icons/fa";
import { MdError } from "react-icons/md";


export default function SideBar({showSideBar , setShowSideBar}) {
    
    return (
        <div style={showSideBar ? {left: "1rem"} : {}} className="sidebar">
            <SidebarCat setShowSideBar={setShowSideBar} cat="Dashboard" buttons={
                [
                    {id:1 , svg: <LuBrickWall className="sidebar-submenu-btn-svg" /> , name: "Home" , goToPath: "/"},
                    {id:2 , svg: <IoAnalyticsOutline className="sidebar-submenu-btn-svg" /> , name: "Analytics" , goToPath: "/analytics"},
                    {id:3 , svg: <FaMoneyCheckAlt className="sidebar-submenu-btn-svg" /> , name: "Sales" , goToPath: "sales"},
                ]
            } />
            <SidebarCat setShowSideBar={setShowSideBar} cat="Quick menu" buttons={
                [
                    {id:1 , svg: <FaUsers className="sidebar-submenu-btn-svg" /> , name: "Users" , goToPath: "/users"},
                    {id:2 , svg: <FaRegUser className="sidebar-submenu-btn-svg" /> , name: "New User" , goToPath: "/new_user"},
                    {id:3 , svg: <MdProductionQuantityLimits className="sidebar-submenu-btn-svg" /> , name: "Products" , goToPath: "/products"},
                    {id:4 , svg: <MdOutlineAttachMoney className="sidebar-submenu-btn-svg" /> , name: "Transactions" , goToPath: "/transactions"},
                    {id:5 , svg: <FaChartSimple className="sidebar-submenu-btn-svg" /> , name: "Reports" , goToPath: "/reports"},
                ]
            } />
            <SidebarCat setShowSideBar={setShowSideBar} cat="Notifications" buttons={
                [
                    { id:1 , svg: <IoMdMail className="sidebar-submenu-btn-svg" /> , name: "Mail" , goToPath: "/mail"},
                    { id:2 , svg: <MdOutlineDynamicFeed className="sidebar-submenu-btn-svg" /> , name: "Feedback" , goToPath: "/feedback"},
                    { id:3 , svg: <TiMessages className="sidebar-submenu-btn-svg" /> , name: "Messages" , goToPath: "/messages"},
                ]
            } />

        </div>
    );
}