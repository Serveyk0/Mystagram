import React, { useState, useEffect } from 'react';
import Photo from '../../images/photo.png';
import GridPane from '../../images/Profile/Grid.png';
import Marked from '../../images/Profile/Marked.png';
import { NavLink } from 'react-router-dom';
import { ROUTE_PROFILE_EDIT } from '../../constants/Routes';
import { connect } from 'react-redux';
import firebase from '../../firebase';
import './Profile.sass';
import Loader from '../Loader';
import FooterMenu from '../FooterMenu';
import ProfileImagesList from './ProfileImages/ProfileImagesList';

const Profile = ( props: any ) => {
  const { userId } = props.userId;

  const [userName, setUserName] = useState("");
  const [loadCheck, setLoadCheck] = useState(true);
  const [inputName, setInputName] = useState(false);
  const [tab, setTab] = useState(false);
  const [view, setView] = useState(true);
  const [imagesList, setImagesList] = useState(false);
  


  useEffect(() => {
    firebase.database().ref('users/' + userId + '/nickname').on('value', function (snapshot) {
      setUserName(snapshot.val());
      if(snapshot.val() != '' && !inputName)
        setInputName(!inputName);
      setLoadCheck(false);
    });
  }, [])

  const handleChangeName = () => (e: { target: { value: string; }; }) => {
    setUserName(e.target.value);
  }

  const saveName = () => {
    firebase.database().ref('/users').child(userId).set({
      nickname: userName
    })
  }

  if(loadCheck)
  {
    return <Loader />
  }
  else 
  {
    if(!inputName)
    {
      return (
        <div>
          <p>Введите имя</p>
          <input placeholder='Имя :' onChange={handleChangeName()} />
          <button onClick={saveName}></button>
        </div>
      )
    }
    else
    {
      return (
        <>
        <div className='Profile'>
          <div className='ProfileMain'>
          <div className='ProfileHead'>
            <p className='ProfileHeadNick'>
              {userName}
            </p>
            <div className='ProfileHeadHamburger' />
          </div>
          {view &&
          <>
          <div className='ProfileInformation'>
            <div className='ProfileInformationAvatar'>
              <img className='ProfileInformationAvatarPhoto' alt='photo' src={Photo} />
              <div className='ProfileInformationAvatarPlus'>+</div>
            </div>
            <div className='ProfileInformationAbout'>
              <div className='ProfileInformationAboutPublication'>
                <p className='ProfileInformationAboutPublicationCount'>53</p>
                <p className='ProfileInformationAboutPublicationText'>Публикации</p>
              </div>
              <div className='ProfileInformationAboutSubscribers'>
                <p className='ProfileInformationAboutSubscribersCount'>53</p>
                <p className='ProfileInformationAboutSubscribersText'>Подписчики</p>
              </div>
              <div className='ProfileInformationAboutSubscriptions'>
                <p className='ProfileInformationAboutSubscriptionsCount'>53</p>
                <p className='ProfileInformationAboutSubscriptionsText'>Подписки</p>
              </div>
            </div>
          </div>
          <div className='ProfileEdit'>
            <NavLink className='ProfileEditLink' to={ROUTE_PROFILE_EDIT}>Редактировать профиль</NavLink>
          </div>
          <div className='ProfileSavedHistory'>
            <div className='ProfileSavedHistoryAdd'>
              <div className='ProfileSavedHistoryAddNew'>
                <p className='ProfileSavedHistoryAddPlus'>+</p>
              </div>
              <p className='ProfileSavedHistoryAddText'>Новое</p>
            </div>
            <div className='ProfileSavedHistoryAdd'>
              <div className='ProfileSavedHistoryAddStories'>
                <img className='ProfileSavedHistoryAddStoriesImage' alt="photo" src={Photo} />
              </div>
              <p className='ProfileSavedHistoryAddText'>История</p>
          </div>
            <div className='ProfileSavedHistoryAdd'>
              <div className='ProfileSavedHistoryAddStories'>
                <img className='ProfileSavedHistoryAddStoriesImage' alt="photo" src={Photo} />
              </div>
              <p className='ProfileSavedHistoryAddText'>История</p>
          </div>
        </div>
          <div className='ProfileAndMarked'>
            <div className='ProfileAndMarkedProfile'>
              <div className='ProfileAndMarkedProfileHref' onClick={() => setTab(false)}>
                <img className='ProfileAndMarkedProfileHrefGrid' alt='Grid pane' src={GridPane} />
              </div>
              <div className={!tab ? 'ProfileAndMarkedActiveLine' : ''} />
            </div>
            <div className='ProfileAndMarkedProfile'>
              <div className='ProfileAndMarkedProfileHref' onClick={() => setTab(true)}>
                <img className='ProfileAndMarkedProfileHrefMarked' alt='Marked pane' src={Marked} />
              </div>
              <div className={tab ? 'ProfileAndMarkedActiveLine' : ''} />
            </div>
          </div> 
          </>
          }
          { !tab ? 
          <ProfileImagesList setView={setView} imagesList={imagesList} setImagesList={setImagesList} />
          :
          <div className='ProfileImages'>
            <img className='ProfileImagesPhoto' alt='My photo' src={Photo} />
          </div>}  
          </div>
        <FooterMenu />
        </div>
        </>
      );
    }
  }
};

const mapStateToProps = (state: any) => {
  return {
      userId: state.getUserId,
    }
};

const mapDispatchToProps = (dispatch: any) => {
  return {
      changeUserId: (uID: string) => {
          dispatch({ type: 'USER_ID', userId: uID });
        }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile); 