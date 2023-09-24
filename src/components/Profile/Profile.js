import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';
import SubmitButton from '../SubmitButton/SubmitButton';
import ControlledInput from '../ControlledInput/ControlledInput';
import { useFormWithValidation } from '../../utils/useFormWithValidation';

function Profile({ currentUser, onExit, onUpdate, reqError, cleanMessage }) {
  const navigate = useNavigate();
  const [isEditMode, setIsEditMode] = useState(false);
  const useValidation = useFormWithValidation();
  const [notChanged, setNotChanged] = useState(false);
  const [succesMessage, setSuccesMessage] = useState('');

  function handleChange(e) {
    setSuccesMessage('')
    useValidation.handleChange(e);
    cleanMessage();
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdate(useValidation.values)
      .then(() => {
        setIsEditMode(false)
        setSuccesMessage('Изменение данных пользователя прошло успешно.')
      })
      .catch((e) => {
        setSuccesMessage('')
      })
  }

  const handleExitClick = () => {
    navigate('/signout', { replace: true })
    onExit();
  }

  React.useEffect(() => {
    useValidation.resetForm();
    useValidation.setValues({
      ...useValidation.values,
      name: currentUser.name,
      email: currentUser.email,
    });
  }, [])

  React.useEffect(() => {
    setNotChanged(Object.keys(useValidation.values).every(key => useValidation.values[key] === currentUser[key]));
  }, [useValidation.values, currentUser]);

  return (
    <main className='profile'>
      <section className='profile__section'>
        <h1 className='profile__greeting'>Привет, {currentUser.name}!</h1>
        <form className='profile__form' name='profile-form'>
          <div className='profile__form-container'>
            <div className={`profile__input-container ${isEditMode && 'profile__input-container_edit'}`}>
              <label className='profile__form-field profile__form-field_type_key'>Имя</label>
              <ControlledInput
                id='name'
                type='text'
                labelName=''
                pattern='^[A-Za-zА-Яа-я\sё\-]*$'
                placeHolder='Введите имя'
                value={useValidation.values['name'] || ''}
                isDisabled={!isEditMode}
                isRequired={false}
                minLengthValue='2'
                maxLengthValue='30'
                errorValue={useValidation.errors['name'] || ''}
                onChange={handleChange}
                slim={true} />
            </div>
            <div className={`profile__input-container ${isEditMode && 'profile__input-container_edit'}`}>
              <label className='profile__form-field profile__form-field_type_key'>E-mail</label>
              <ControlledInput
                id='email'
                type='email'
                pattern='^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$'
                labelName=''
                placeHolder='Введите email'
                value={useValidation.values['email'] || ''}
                isDisabled={!isEditMode}
                isRequired={false}
                errorValue={useValidation.errors['email'] || ''}
                onChange={handleChange}
                slim={true} />
            </div>
          </div>
          {isEditMode &&
            <div className='profile__actions'>
              <span className='profile__form-error'>{reqError}</span>
              <SubmitButton buttonText="Сохранить" buttonAction={handleSubmit} isDisabled={!useValidation.isValid || notChanged} />
            </div>}
          {!isEditMode &&
            <div className='profile__actions'>
              <span className='profile__form-succes'>{succesMessage}</span>
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
        </form>
      </section>
    </main>
  );
}

export default Profile;
