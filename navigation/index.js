//react
import React, { useEffect } from 'react';
//navigate
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from './tab/TabNavigator'
import AuthNavigator from './auth/AuthNavigator';
//redux
import { useSelector, useDispatch } from 'react-redux';
import { initAuthentication } from '../store/actions/auth.action';

const MainNavigator = () => {
  const dispatch = useDispatch();
  const userId = useSelector(state => state.auth.userId);

  useEffect(() => {
    dispatch(initAuthentication());
  }, []);

  return (
    <NavigationContainer>
      {userId
        ? <TabNavigator />
        : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default MainNavigator;