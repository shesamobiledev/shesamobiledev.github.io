import React from 'react';

import {
    BrowserRouter as Router, Routes, Route, Link
} from "react-router-dom";

import {
    CBadge,
    CCarousel,
    CCarouselItem,
    CImage,
    CSidebarToggler,
    CNavGroup,
    CNavItem,
    CNavTitle,
    CSidebar,
    CSidebarBrand,
    CSidebarHeader,
    CSidebarNav, CButton
} from "@coreui/react";
import {CIcon} from '@coreui/icons-react';
import {cilSpeedometer, cilPuzzle, cilCloudDownload, cilLayers, cilHome} from '@coreui/icons';
import './scss/custom.scss';
import ArrayScreen from './array/ArrayScreen'
import HomeScreen from "./home/HomeScreen";

export default function App() {
    return (<Router>
        <div className="App" data-coreui-theme="dark">
            <div className="LeftNav">
                <CSidebar className="nav border-end">
                    <CSidebarNav>
                        <CNavTitle>ShesAMobileDev</CNavTitle>
                        <CNavItem href="/array"><CIcon customClassName="nav-icon" icon={cilHome}/>Home</CNavItem>
                        <CNavItem href="/"><CIcon customClassName="nav-icon" icon={cilPuzzle}/> With badge <CBadge color="primary ms-auto">NEW</CBadge></CNavItem>
                        <CNavGroup toggler={<><CIcon customClassName="nav-icon" icon={cilPuzzle}/> Nav dropdown</>}>
                            <CNavItem href="/array"><span className="nav-icon"><span
                                className="nav-icon-bullet"></span></span> Nav
                                dropdown item</CNavItem>
                            <CNavItem href="#"><span className="nav-icon"><span
                                className="nav-icon-bullet"></span></span> Nav
                                dropdown item</CNavItem>
                        </CNavGroup>
                        <CNavItem href="https://coreui.io"><CIcon customClassName="nav-icon"
                                                                  icon={cilCloudDownload}/> Download
                            CoreUI</CNavItem>
                        <CNavItem href="https://coreui.io/pro/"><CIcon customClassName="nav-icon"
                                                                       icon={cilLayers}/> Try CoreUI PRO</CNavItem>
                    </CSidebarNav>
                    <CSidebarHeader className="border-top">
                        <CSidebarToggler/>
                    </CSidebarHeader>
                </CSidebar>
            </div>
            <div className="content">
                <Routes>
                    <Route path="/" element={<HomeScreen />}/>
                    <Route path="/array" element={<ArrayScreen />}/>

                </Routes>

            </div>

        </div>
    </Router>);
}

//
// <div className="Carousel">
//     <CCarousel
//         wrap={false}
//         controls indicators
//         dark={true}
//         interval={false}
//         pause="hover"
//     >
//         <CCarouselItem>
//             <CImage className="d-block w-100" src={arrayFindCorrect} alt="slide 1"/>
//         </CCarouselItem>
//         <CCarouselItem>
//             <CImage className="d-block w-100" src={arrayGetCorrect} alt="slide 2"/>
//         </CCarouselItem>
//         <CCarouselItem>
//             <CImage className="d-block w-100" src={arrayInsertCorrect} alt="slide 3"/>
//         </CCarouselItem>
//     </CCarousel>
// </div>}