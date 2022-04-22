import React, { useEffect, useState } from 'react';
import { saveUser } from '../service/saveStorage';
import ProfileEdit from '../Components/ProfileEdit';
import ProfileView from '../Components/ProfileView';
import '../css/Profile.css';
import Header from '../Components/Header';

function Profile() {
  const getUser = JSON.parse(localStorage.getItem('user'));
  const [nameUser, setNameUser] = useState(getUser.name);
  const [emailUser, setEmailUser] = useState(getUser.email);
  const [profileImage, setProfileImage] = useState(getUser.imgProfile);
  const [isEdit, setIsEdit] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    const validateEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (validateEmail.test(emailUser) && nameUser.length >= 3) {
      return setIsDisabled(false);
    }
    return setIsDisabled(true);
  }, [nameUser, emailUser]);

  const editProfileItems = () => {
    setIsEdit(!isEdit);
    saveUser(nameUser, emailUser, profileImage);
  };

  return (
    <>
      <Header gallery={[]} setGallery={() => null} />
      <main className="main-profile">
        <div className="container-profile">
          {isEdit
            ? (
              <ProfileEdit
                name={{ nameUser, setNameUser }}
                email={{ emailUser, setEmailUser }}
                image={{ profileImage, setProfileImage }}
              />
            )
            : <ProfileView />}
          <button
            className="btn-user"
            disabled={isDisabled}
            onClick={editProfileItems}
            type="button"
          >
            Editar Perfil
          </button>
        </div>
      </main>
    </>
  );
}

export default Profile;
