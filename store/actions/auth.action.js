import { URL_AUTH_API, URL_LOGIN_API } from '../../constants/database';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const SIGNUP = 'SIGNUP';
export const LOGIN = 'LOGIN';

export const signup = (email, password) => {
  return async dispatch => {
    const response = await fetch(URL_AUTH_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true,
      }),
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      const errorID = errorResponse.error.message;

      let message = 'Registration was not successful';
      if (errorID === 'EMAIL_EXISTS') message = 'This email is already registered';

      throw new error(message);
    }

    const data = await response.json();

    await AsyncStorage.setItem('@token', data.idToken);
    await AsyncStorage.setItem('@userId', data.localId);

    dispatch({
      type: SIGNUP,
      token: data.idToken,
      userId: data.localId,
    });
  }
}

export const login = (email, password) => {
  return async dispatch => {
    const response = await fetch(URL_LOGIN_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true,
      }),
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      const errorID = errorResponse.error.message;

      let message = 'Unsuccessful entry';
      if (errorID === 'EMAIL_NOT_FOUND') message = 'This email is not registered';

      throw new error(message);
    }

    const data = await response.json();

    dispatch({
      type: LOGIN,
      token: data.idToken,
      userId: data.localId,
    });
  }
}

export const initAuthentication = () => {
  return async dispatch => {
    const token = await AsyncStorage.getItem('@token')
    const userId = await AsyncStorage.getItem('@userId');

    if (token !== null && userId !== null) {
      dispatch({
        type: SIGNUP,
        token,
        userId,
      });
    }
  }
}