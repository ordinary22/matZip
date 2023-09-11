import React from "react";
import Header from '../Header';
import { Routes, Route } from "react-router-dom";
import Main from "../../Main";

const MainLayout = () => {
    return (
        <>
            <Header />

            <Routes>
                <Route path="/" element={<Main />} />
            </Routes>
        </>
    )
}

export default MainLayout;