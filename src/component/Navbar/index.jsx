import React from 'react'
import { Link, useLocation } from 'react-router-dom'
const SideNavBar = () => {
    const location = useLocation()
   
    return (
        <>
            <div className="nav-left-sidebar sidebar-dark">
                <div className="menu-list">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav flex-column">
                                <li className="nav-divider">
                                    Menu
                                </li>
                                <li className="nav-item ">
                                    <Link to={'/dashboard'} className={location.pathname === '/dashboard' ? "nav-link active" : "nav-link"}>Dashboard</Link>
                                    <Link to={'/skillmanagement'} className={location.pathname === '/skillmanagement' ? "nav-link active" : "nav-link"}>Skill Management</Link>
                                    <Link to={'/studentmanagement'} className={location.pathname === '/studentmanagement' ? "nav-link active" : "nav-link"}>Student management</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}
export default SideNavBar