import React, { useState, useEffect } from 'react';
import Photo from '../../images/photo.png';
import { NavLink } from 'react-router-dom';
import { ROUTE_PROFILE_EDIT, ROUTE_MY_PROFILE } from '../../constants/Routes';
import { connect } from 'react-redux';
import firebase from '../../firebase';
import './Profile.sass';

const Profile = ( props: any ) => {
  const { userId } = props.userId;

  const [userName, setUserName] = useState("");
  const [inputName, setInputName] = useState(false);

  console.log(userId)

  // useEffect(() => {
  //   firebase.database().ref('users/' + userId + '/nickname').on('value', function (snapshot) {
  //     if(snapshot.val() != '' && !inputName)
  //       setInputName(!inputName);
  //   });
  // }, [])

  const handleChangeName = () => (e: { target: { value: string; }; }) => {
    // setUserName(e.target.value);
  }

  const saveName = () => {
  //   firebase.database().ref('/users').child(userId).set({
  //     nickname: userName
  //   })
  }



  // if(!inputName)
  // {
  //   return (
  //     <div>
  //       <p>Введите имя</p>
  //       <input placeholder='Имя :' onChange={handleChangeName()} />
  //       <button onClick={saveName}></button>
  //     </div>
  //   )
  // }
  // else
  // {
    return (
      <div className='Profile'>
        <div className='ProfileHead'>
          <p className='ProfileHeadNick'>
            19.19.2000
          </p>
          <div className='ProfileHeadHamburger' />
        </div>
        <div className='ProfileInformation'>
          <div className='ProfileInformationAvatar'>
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
          <div className='ProfileSavedHistoryAdd'><p className='ProfileSavedHistoryAddPlus'>+</p></div>
          <div className='ProfileSavedHistoryAdd'><img className='ProfileSavedHistoryAddImage' alt="photo" src={Photo} /></div>
        </div>
        {/* <div className='ProfileAndMarked'>
          <NavLink className='ProfileAndMarkedProfile' to={ROUTE_MY_PROFILE}>
            <img alt='Grid pane' src={Photo} />
          </NavLink>
          <NavLink className='ProfileAndMarkedProfile' to={ROUTE_MY_PROFILE}>
            <img alt='Marked pane' src={Photo} />
          </NavLink>
        </div>
        <div className='ProfileImages'>
          <img alt='My photo' src={Photo} />
          <img alt='My photo' src={Photo} />
          <img alt='My photo' src={Photo} />
          <img alt='My photo' src={Photo} />
          <img alt='My photo' src={Photo} />
          <img alt='My photo' src={Photo} />
          <img alt='My photo' src={Photo} />
          <img alt='My photo' src={Photo} />
          <img alt='My photo' src={Photo} />
        </div>
        <div className='ProfileFooterBlock'>
          <img alt='My photo' src={Photo} />
          <img alt='My photo' src={Photo} />
          <img alt='My photo' src={Photo} />
          <img alt='My photo' src={Photo} />
          <img alt='My photo' src={Photo} />
        </div> */}
      </div>
    );
  // }
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