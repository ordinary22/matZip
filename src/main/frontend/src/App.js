import React, { Component } from 'react';
import Header from './component/layout/Header';
import { Routes, Route } from "react-router-dom";
import Main from './component/Main';
import Map from './pages/matzip/Map';
import NotFound from "./component/error/NotFound";

function App() {

    return (
        <div className='App'>
            <Header />
            <Routes>
                <Route path="/" element={<Main />}></Route>
                <Route path="/map/*" element={<Map />}></Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </div>
    )
}

export default App;