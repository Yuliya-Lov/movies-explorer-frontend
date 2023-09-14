import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';
import SubmitButton from '../SubmitButton/SubmitButton';
import ControlledInput from '../ControlledInput/ControlledInput';
import FormValidator from '../../utils/FormValidator';
import { validationSettings } from '../../utils/validationSettings';

function Profile({ currentUser, onExit, onUpdate, reqError, cleanMessage }) {
  const navigate = useNavigate();
  const [isEditMode, setIsEditMode] = useState(false);
  const [userInfo, setUserInfo] = React.useState(
    {
      name: currentUser.name,
      email: currentUser.email,
    });

  function handleInputChange(e) {
    cleanMessage();
    setUserInfo({
      ...userInfo,
      [e.target.id]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdate(userInfo)
      .then(() => {
        setIsEditMode(false)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const handleExitClick = () => {
    navigate('/signout', { replace: true })
    onExit();
  }

  const profileForm = React.useRef();

  React.useEffect(() => {
    if (isEditMode) {
      const validatedForm = new FormValidator(validationSettings, profileForm.current);
      validatedForm.enableValidation();
      validatedForm.setInitialFormState();

    }
  }, [profileForm, isEditMode])

  return (
    <main className='profile'>
      <section className='profile__section'>
        <h1 className='profile__greeting'>Привет, {currentUser.name}!</h1>
        <form className='profile__form' name='profile-form' ref={profileForm}>
          <div className='profile__input-container'>
            <label className='profile__form-field profile__form-field_type_key'>Имя</label>
            <ControlledInput
              id='name'
              type='text'
              labelName=''
              placeHolder='Введите имя'
              value={userInfo.name}
              isDisabled={!isEditMode}
              isRequired={true}
              minLengthValue='2'
              maxLengthValue='30'
              pattern='^[A-Za-zА-Яа-я\sё\-]*$'
              onChange={handleInputChange}
              slim={true} />
          </div>
          <div className='profile__input-container'>
            <label className='profile__form-field profile__form-field_type_key'>E-mail</label>
            <ControlledInput
              id='email'
              type='email'
              labelName=''
              placeHolder='Введите email'
              value={userInfo.email}
              isDisabled={!isEditMode}
              isRequired={true}
              onChange={handleInputChange}
              slim={true} />
          </div>
          {isEditMode &&
            <div className='profile__actions'>
              <span className='profile__form-error'>{reqError}</span>
              <SubmitButton buttonText="Сохранить" buttonAction={handleSubmit} />
            </div>}
        </form>
        {!isEditMode &&
          <div className='profile__actions'>
            <button
              type='button'
              className='profile__button profile__button_type_edit'
              onClick={() => setIsEditMode(true)}
            >Редактировать</button>
            <button
              type='button'
              className='profile__button profile__button_type_exit'
              onClick={handleExitClick}
            >Выйти из аккаунта</button>
          </div>
        }
      </section>
    </main>
  );
}

export default Profile;
