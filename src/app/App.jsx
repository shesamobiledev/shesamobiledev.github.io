import React from 'react';

import {BrowserRouter as Router, Routes, Route, useLocation} from "react-router-dom";
import {
    CBadge,
    CNavItem,
    CSidebar,
    CSidebarHeader,
    CSidebarNav,
    CContainer,
    CNavTitle
} from "@coreui/react";
import '../scss/custom.scss';
import ArrayScreen from '../array/ArrayScreen'
import HomeScreen from "../home/HomeScreen";
import AppNavIcon from "./assets/AppNavIcon";
import HomeNavIcon from "./assets/HomeNavIcon"
import HashSetNavIcon from "../app/assets/HashSetNavIcon";
import ArrayNavIcon from "../app/assets/ArrayNavIcon";
import HashMapNavIcon from "./assets/HashMapNavIcon";
import QueueNavIcon from "./assets/QueueNavIcon";
import HashSetScreen from "../hashset/HashSetScreen";

export default function App() {
    return (<Router>
        <div className="App">
            <Nav />
            <div className="content fullHeight">
                <CContainer sm>
                    <Routes>
                        <Route path="/" element={<HomeScreen/>}/>
                        <Route path="/array" element={<ArrayScreen/>}/>
                        <Route path="/hashset" element={<HashSetScreen/>}/>
                        {/*<Route path="/hashmap" element={<HashMapScreen/>}/>*/}
                        {/*<Route path="/queue" element={<QueueScreen/>}/>*/}
                   </Routes>
                </CContainer>
            </div>
        </div>
    </Router>);
}

function Nav() {
    const location = useLocation()
    console.log(location)
    return (
        <div className="LeftNav">
            <CSidebar className="nav border-end">
                <CSidebarHeader className="border-bottom">
                    <CNavTitle><AppNavIcon/>ShesAMobileDev</CNavTitle>
                </CSidebarHeader>
                <CSidebarNav>
                    <CNavItem active={location.pathname === "/"} href="/"><HomeNavIcon/>Home</CNavItem>
                    <CNavItem active={location.pathname === "/array"} href="/array"><ArrayNavIcon/>Array</CNavItem>
                    <CNavItem active={location.pathname === "/hashset"} href="/hashset"><HashSetNavIcon/>HashSet</CNavItem>
                    <CNavItem active={location.pathname === "/hashmap"} href="/hashmap"><HashMapNavIcon/>HashMap</CNavItem>
                    <CNavItem active={location.pathname === "/queue"} href="/queue"><QueueNavIcon/>Queue <CBadge color="primary ms-auto">NEW</CBadge></CNavItem>
                </CSidebarNav>
            </CSidebar>
        </div>
    )
}
