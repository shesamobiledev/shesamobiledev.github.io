import React from "react";
import {CCarousel, CCarouselItem, CImage} from "@coreui/react";
import arrayInsertCorrect from '../array/assets/Array_InsertCorrect.svg'
import arrayFindCorrect from '../array/assets/Array_FindCorrect.svg';
import arrayGetCorrect from '../array/assets/Array_GetCorrect.svg';
import TestArraySvg from '../array/assets/SvgArrayFindCorrect';

export default function HomeScreen() {
    return (
        <div className="Carousel">
            <CCarousel
                wrap={false}
                controls indicators
                dark={true}
                interval={false}
                pause="hover"
            >
                <CCarouselItem>
                    <CImage className="d-block w-100" src={arrayFindCorrect} alt="slide 1"/>
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className="d-block w-100" src={arrayGetCorrect} alt="slide 2"/>
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className="d-block w-100" src={arrayInsertCorrect} alt="slide 3"/>
                </CCarouselItem>
                <CCarouselItem>
                    <TestArraySvg />
                    {/*<CImage className="d-block w-100" src={arrayInsertCorrect} alt="slide 3"/>*/}
                </CCarouselItem>
            </CCarousel>
        </div>
    );
}
