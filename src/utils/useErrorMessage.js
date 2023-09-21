import React, { useCallback } from 'react';
import { useLocation } from 'react-router-dom';


const useErrorMessage = () => {
  const location = useLocation();
  const [message, setMessage] = React.useState({ message: '' });

  function changeError(e) {
    console.log(e);
    const statusCode = (e.statusCode || e.status || 0).toString();
    console.log(statusCode);
    setMessage({ message: 'На сервере произошла ошибка.' })
    if (statusCode === '500') {
      if (location.pathname === '/movies' || location.pathname === '/saved-movies') {
        return setMessage({ message: 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.' })
      } else {
        return setMessage({ message: 'На сервере произошла ошибка.' })
      }
    }
    if (statusCode === '400') {
      if (location.pathname === '/signup') {
        return setMessage({ message: 'При регистрации пользователя произошла ошибка.' })
      }
      if (location.pathname === '/signin') {
        return setMessage({ message: 'Вы ввели неправильный логин или пароль.' })
      }
      if (location.pathname === '/profile') {
        return setMessage({ message: 'При обновлении профиля произошла ошибка.' })
      }
      else {
        return setMessage({ message: 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.' })
      }
    }

    if (statusCode === '401') {
      if (location.pathname === '/signin') {
        return setMessage({ message: 'Вы ввели неправильный логин или пароль.' })
      }
    }
    if (statusCode === '409') {
      return setMessage({ message: 'Пользователь с таким email уже существует.' })
    }
    if (statusCode === '404') {
      return setMessage({ message: 'Страница по указанному маршруту не найдена.' })
    } else {
      console.log('statusCode === 0')
      return setMessage({ message: '' })
    }
  }

  const resetMessage = useCallback(
    (newMessage = {}) => {
      setMessage(newMessage);
    },
    [setMessage]
  );

  return { message, changeError, resetMessage };
}

export default useErrorMessage;
