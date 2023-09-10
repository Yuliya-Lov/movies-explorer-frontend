import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';
import SubmitButton from '../SubmitButton/SubmitButton';
import ControlledInput from '../ControlledInput/ControlledInput';
import FormValidator from '../../utils/FormValidator';
import { validationSettings } from '../../utils/validationSettings';

function Profile({ currentUser, handleExit, onUpdate }) {
  const navigate = useNavigate();
  const [isEditMode, setIsEditMode] = useState(false);
  const [userInfo, setUserInfo] = React.useState(
    {
      name: currentUser.name,
      email: currentUser.email,
    });

  function handleInputChange(e) {
    setUserInfo({
      ...userInfo,
      [e.target.id]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(userInfo);
    setIsEditMode(false);
    onUpdate(userInfo);
  }

  const handleExitClick = () => {
    handleExit(false);
    navigate('/signin', { replace: true })
  }

  const profileForm = React.useRef();

 React.useEffect(() => {
  console.log(profileForm.current);
    if (isEditMode) {
      const validatedForm = new FormValidator(validationSettings, profileForm.current);
      validatedForm.enableValidation();
      validatedForm.setInitialFormState();
    }
  }, [profileForm, isEditMode])

  return (
    <section className='profile'>
      <h2 className='profile__greeting'>Привет, {currentUser.name}!</h2>
      <form className='profile__form' name='profile-form' ref={profileForm}>
        <div className='profile__input-container'>
          <label className='profile__form-field profile__form-field_type_key'>Имя</label>
          <ControlledInput
            id='name'
            type='text'
            labelName=''
            placeHolder=''
            value={userInfo.name}
            isDisabled={!isEditMode}
            isRequired={true}
            minLengthValue='2'
            maxLengthValue='30'
            onChange={handleInputChange}
            slim={true} />
        </div>
        <div className='profile__input-container'>
          <label className='profile__form-field profile__form-field_type_key'>E-mail</label>
          <ControlledInput
            id='email'
            type='email'
            labelName=''
            placeHolder=''
            value={userInfo.email}
            isDisabled={!isEditMode}
            isRequired={true}
            onChange={handleInputChange}
            slim={true} />
        </div>
        {isEditMode &&
          <div className='profile__actions'>
            <span className='profile__form-error'></span>
            <SubmitButton buttonText="Сохранить" buttonAction={handleSubmit} isDisabled={false} />
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
  );
}

export default Profile;
