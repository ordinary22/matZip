import React, { Component } from 'react';
import { Routes, Route } from "react-router-dom";

import MainLayout from "./component/layout/main/MainLayout";
import Map from './pages/matzip/Map';
import NotFound from "./component/error/NotFound";

function App() {

    return (
        <div className='body'>
            <Routes>
                <Route path="/" element={<MainLayout />}></Route>

                <Route path="/map/*" element={<Map />}></Route>

                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </div>
    )
}

export default App;