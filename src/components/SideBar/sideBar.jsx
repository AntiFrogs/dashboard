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
                    {svg: <LuBrickWall className="sidebar-submenu-btn-svg" /> , name: "Home"},
                    {svg: <IoAnalyticsOutline className="sidebar-submenu-btn-svg" /> , name: "Analytics"},
                    {svg: <FaMoneyCheckAlt className="sidebar-submenu-btn-svg" /> , name: "Sales"},
                ]
            } />
            <SidebarCat cat="Quick menu" buttons={
                [
                    {svg: <FaUsers className="sidebar-submenu-btn-svg" /> , name: "Users"},
                    {svg: <FaRegUser className="sidebar-submenu-btn-svg" /> , name: "New User"},
                    {svg: <MdProductionQuantityLimits className="sidebar-submenu-btn-svg" /> , name: "Products"},
                    {svg: <MdOutlineAttachMoney className="sidebar-submenu-btn-svg" /> , name: "Transactions"},
                    {svg: <FaChartSimple className="sidebar-submenu-btn-svg" /> , name: "Reports"},
                ]
            } />
            <SidebarCat cat="Notifications" buttons={
                [
                    {svg: <IoMdMail className="sidebar-submenu-btn-svg" /> , name: "Mail"},
                    {svg: <MdOutlineDynamicFeed className="sidebar-submenu-btn-svg" /> , name: "Feedback"},
                    {svg: <TiMessages className="sidebar-submenu-btn-svg" /> , name: "Messages"},
                ]
            } />
            <SidebarCat cat="Staff" buttons={
                [
                    {svg: <FaBriefcase className="sidebar-submenu-btn-svg" /> , name: "Manage"},
                    {svg: <IoAnalyticsOutline className="sidebar-submenu-btn-svg" /> , name: "Analytics"},
                    {svg: <MdError className="sidebar-submenu-btn-svg" /> , name: "Reports"},
                ]
            } />
        </div>
    );
}