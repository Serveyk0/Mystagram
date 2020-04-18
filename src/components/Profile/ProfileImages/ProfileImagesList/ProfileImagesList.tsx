import React, { useState } from 'react';
import './ProfileImagesList.sass';
import Photo from '../../../../images/photo.png';
import Heart from '../../../../images/Profile/heart.png';
import Speech from '../../../../images/Profile/speechBubble.png';
import Sent from '../../../../images/Profile/sent.png';
import Bookmark from '../../../../images/Profile/bookmark.png';

export const ProfileImagesList = ( props: any ) => {

    const { setView, imagesList, setImagesList } = props;

    const chooseView:any = () => {
        if(!imagesList)
        {
            setImagesList(!imagesList);
            setView(false);
        }
    }

    return (
        <>
        <div className={ imagesList ? 'ProfileImagesList' : 'ProfileImagesGrid' } >
            <div>
                { imagesList &&
                <div className='ProfileIAN'>
                    <img className='ProfileIANImages' alt='photo' src={Photo} />
                    <p className='ProfileIANText'>19.19.2000</p>
                    <div className='ProfilePointer'>
                        <div className='Point' />   
                        <div className='Point' />   
                        <div className='Point' />    
                    </div>
                </div> }
                <img className='ProfileImagesPhoto' alt='My photo' src={Photo} onClick={chooseView} />
                { imagesList && 
                <>
                <div className='IconsUnderThePhoto'>
                    <img className='Icon' alt='Heart' src={Heart} />
                    <img className='Icon' alt='Speech' src={Speech} />
                    <img className='Icon' alt='Sent' src={Sent} />
                    <img className='Icon' alt='Bookmark' src={Bookmark} />
                </div>
                <div className='ProfileComments'>
                    <div className='CommentsImages'>
                        <img className='Image' alt='photo' src={Photo} />
                        <img className='Image' alt='photo' src={Photo} />
                        <img className='Image' alt='photo' src={Photo} />
                    </div>
                    <p className='ProfileCommentsLikesCount'>Нравится sergo и ещё 93</p>
                    <p className='ProfileCommentsLikesSignature'>19.19.2000: Подпись</p>
                    <p className='AllCommentaries'>Посмотреть все комментарии (5)</p>
                    <p className='ProfileCommentaries'>sergo you so beautiful</p>
                </div>
                </> }
            </div>
            <img className='ProfileImagesPhoto' alt='My photo' src={Photo} onClick={chooseView} />
            <img className='ProfileImagesPhoto' alt='My photo' src={Photo} onClick={chooseView} />
            <img className='ProfileImagesPhoto' alt='My photo' src={Photo} onClick={chooseView} />
            <img className='ProfileImagesPhoto' alt='My photo' src={Photo} onClick={chooseView} />
            <img className='ProfileImagesPhoto' alt='My photo' src={Photo} onClick={chooseView} />
            <img className='ProfileImagesPhoto' alt='My photo' src={Photo} onClick={chooseView} />
            <img className='ProfileImagesPhoto' alt='My photo' src={Photo} onClick={chooseView} />
            <img className='ProfileImagesPhoto' alt='My photo' src={Photo} onClick={chooseView} />
            <img className='ProfileImagesPhoto' alt='My photo' src={Photo} onClick={chooseView} />
            <img className='ProfileImagesPhoto' alt='My photo' src={Photo} onClick={chooseView} />
            <img className='ProfileImagesPhoto' alt='My photo' src={Photo} onClick={chooseView} />
            <img className='ProfileImagesPhoto' alt='My photo' src={Photo} onClick={chooseView} />
            <img className='ProfileImagesPhoto' alt='My photo' src={Photo} onClick={chooseView} />
            <img className='ProfileImagesPhoto' alt='My photo' src={Photo} onClick={chooseView} />
            <img className='ProfileImagesPhoto' alt='My photo' src={Photo} onClick={chooseView} />
            <img className='ProfileImagesPhoto' alt='My photo' src={Photo} onClick={chooseView} />
            <img className='ProfileImagesPhoto' alt='My photo' src={Photo} onClick={chooseView} />
            <img className='ProfileImagesPhoto' alt='My photo' src={Photo} onClick={chooseView} />
            <img className='ProfileImagesPhoto' alt='My photo' src={Photo} onClick={chooseView} />
            <img className='ProfileImagesPhoto' alt='My photo' src={Photo} onClick={chooseView} />
            <img className='ProfileImagesPhoto' alt='My photo' src={Photo} onClick={chooseView} />
            <img className='ProfileImagesPhoto' alt='My photo' src={Photo} onClick={chooseView} />
            <img className='ProfileImagesPhoto' alt='My photo' src={Photo} onClick={chooseView} />
          </div>
        </>
    );
}