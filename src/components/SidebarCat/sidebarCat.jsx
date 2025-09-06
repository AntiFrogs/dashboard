import "./sidebarCat.css"

export default function SidebarCat({cat , buttons}) {
    return(
            <div className="sidebar-cat">
                <p>{cat}</p>
                <nav className="sidebar-submenu">
                    {buttons.map(btn => <button className="sidebar-submenu-btn">
                                            {btn.svg}
                                            <span>{btn.name}</span>
                                    </button>)
                    }
                </nav>
            </div> 
    )
}