import React from "react";

const SideBar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-brand">
                <h1>
                    <span>로고</span>
                    <span>맛집도</span>
                </h1>
            </div>
            <div className="sidebar-menu">
                <ul>
                    <li>
                        <a href="#" className="active">
                            <span className=""></span>
                            <span>Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className=""></span>
                            <span>Dashboard</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SideBar;