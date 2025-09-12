import "./sidebarCat.css"
import { useNavigate } from "react-router-dom"

export default function SidebarCat({setShowSideBar , cat , buttons}) {
    const navigate = useNavigate();

    function sideBarBtnClickHandler(goToPath) {
        navigate(goToPath , {replace: true});
        setShowSideBar(false)
    }

    return(
            <div className="sidebar-cat">
                <p>{cat}</p>
                <nav className="sidebar-submenu">
                    {buttons.map(btn => <button  onClick={() => sideBarBtnClickHandler(btn.goToPath)}
                                            key={btn.id}
                                            className="sidebar-submenu-btn">
                                            {btn.svg}
                                            <span>{btn.name}</span>
                                    </button>)
                    }
                </nav>
            </div> 
    )
}