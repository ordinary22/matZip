import React from "react";
import Header from '../Header';
import { Routes, Route } from "react-router-dom";
import Main from "../../Main";
import SideBar from "../SideBar";

const MainLayout = () => {
    return (
        <>
            <SideBar />
            <div className="main-content">
                <Header />

                <Routes>
                    <Route path="/" element={<Main />} />
                </Routes>

            </div>
        </>
    )
}

export default MainLayout;