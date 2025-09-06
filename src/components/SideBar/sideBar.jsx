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


export default function SideBar() {
    
    return (
        <div className="sidebar">
            <SidebarCat cat="Dashboard" buttons={
                [
                    {id:1 , svg: <LuBrickWall className="sidebar-submenu-btn-svg" /> , name: "Home"},
                    {id:2 , svg: <IoAnalyticsOutline className="sidebar-submenu-btn-svg" /> , name: "Analytics"},
                    {id:3 , svg: <FaMoneyCheckAlt className="sidebar-submenu-btn-svg" /> , name: "Sales"},
                ]
            } />
            <SidebarCat cat="Quick menu" buttons={
                [
                    {id:1 , svg: <FaUsers className="sidebar-submenu-btn-svg" /> , name: "Users"},
                    {id:2 , svg: <FaRegUser className="sidebar-submenu-btn-svg" /> , name: "New User"},
                    {id:3 , svg: <MdProductionQuantityLimits className="sidebar-submenu-btn-svg" /> , name: "Products"},
                    {id:4 , svg: <MdOutlineAttachMoney className="sidebar-submenu-btn-svg" /> , name: "Transactions"},
                    {id:5 , svg: <FaChartSimple className="sidebar-submenu-btn-svg" /> , name: "Reports"},
                ]
            } />
            <SidebarCat cat="Notifications" buttons={
                [
                    { id:1 , svg: <IoMdMail className="sidebar-submenu-btn-svg" /> , name: "Mail"},
                    { id:2 , svg: <MdOutlineDynamicFeed className="sidebar-submenu-btn-svg" /> , name: "Feedback"},
                    { id:3 , svg: <TiMessages className="sidebar-submenu-btn-svg" /> , name: "Messages"},
                ]
            } />
            <SidebarCat cat="Staff" buttons={
                [
                    { id:1 , svg: <FaBriefcase className="sidebar-submenu-btn-svg" /> , name: "Manage"},
                    { id:2 , svg: <IoAnalyticsOutline className="sidebar-submenu-btn-svg" /> , name: "Analytics"},
                    { id:3 , svg: <MdError className="sidebar-submenu-btn-svg" /> , name: "Reports"},
                ]
            } />
        </div>
    );
}