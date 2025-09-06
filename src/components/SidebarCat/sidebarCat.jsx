import "./sidebarCat.css"
import { useNavigate } from "react-router-dom"

export default function SidebarCat({cat , buttons}) {
    const navigate = useNavigate();

    return(
            <div className="sidebar-cat">
                <p>{cat}</p>
                <nav className="sidebar-submenu">
                    {buttons.map(btn => <button  onClick={() => navigate(btn.goToPath)}
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