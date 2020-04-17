import React, { useEffect, useState } from 'react'
import './FooterMenu.sass'
import Add from '../../images/FooterMenu/add.png';
import Heart from '../../images/FooterMenu/heart.png';
import HeartActive from '../../images/FooterMenu/heartActive.png';
import Home from '../../images/FooterMenu/home.png';
import HomeActive from '../../images/FooterMenu/homeActive.png';
import Search from '../../images/FooterMenu/search.png';
import SearchActive from '../../images/FooterMenu/searchActive.png';
import Photo from '../../images/photo.png';

export const FooterMenu = ( props: any ) => {


    const [activeHeart, setActiveHeart] = useState(false);
    const [activeSearch, setActiveSearch] = useState(false);
    const [activeHome, setActiveHome] = useState(false);

    const sets = [setActiveHeart, setActiveSearch, setActiveHome];

    const setActiveItem = (set: any) => 
    {
        for (let setItemNumber = 0; setItemNumber < sets.length; setItemNumber++)
            sets[setItemNumber](sets[setItemNumber] == set ? true : false);
    }

    return (
        <>
            <div className='FooterMenu'>
                <img className='FooterMenuIcon' alt='Home' onClick={ () => setActiveItem(setActiveHome)} src={activeHome ? HomeActive : Home} />
                <img className='FooterMenuIcon' alt='Search' onClick={ () => setActiveItem(setActiveSearch)} src={activeSearch ? SearchActive : Search} />
                <img className='FooterMenuIcon' alt='Add' src={Add} />
                <img className='FooterMenuIcon' alt='Home' onClick={ () => setActiveItem(setActiveHeart)} src={activeHeart ? HeartActive : Heart} />
                <div className='FooterMenuIcon'>
                    <img className='FooterMenuIconPhoto' alt='photo' src={Photo} />
                </div>
            </div>
        </>
    )
}