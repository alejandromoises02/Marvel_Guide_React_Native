//react
import React, { useCallback, useReducer } from "react";
//native
import { Alert, StyleSheet, ImageBackground } from "react-native";
import { Button } from "react-native-elements";
//redux
import { useDispatch } from "react-redux";
import { login } from "../../store/actions/auth.action";
//components
import AuthScreenWrapper from "../../components/AuthScreenWrapper";
import Input from "../../components/Input";
import { formReducer, FORM_INPUT_UPDATE } from "./fromReducer";
//constants
import { COLORS } from "../../constants/color";
import { BACK_IMAGE } from "../../constants/backImage";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const [formState, formDispatch] = useReducer(formReducer, {
    inputValues: {
      email: "",
      password: ""
    },
    inputValidities: {
      email: false,
      password: false
    },
    formIsValid: false
  });

  const handleLogIn = () => {
    if (formState.formIsValid) {
      dispatch(
        login(formState.inputValues.email, formState.inputValues.password)
      );
    } else {
      Alert.alert("Invalid form", "Enter email and valid username", [
        { text: "Ok" }
      ]);
    }
  };

  const onInputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      formDispatch({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier
      });
    },
    [formDispatch]
  );

  return (
    <ImageBackground
      source={BACK_IMAGE}
      resizeMode="cover"
      style={styles.container}
    >
      <AuthScreenWrapper
        title="LOG IN"
        message="Don't have an account yet?"
        buttonText="Go to Register"
        buttonPath="Register"
      >
        <Input
          id="email"
          label="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          errorText="Please enter a valid email"
          required
          email
          onInputChange={onInputChangeHandler}
        />
        <Input
          id="password"
          label="Password"
          secureTextEntry
          autoCapitalize="none"
          errorText="Enter password"
          required
          onInputChange={onInputChangeHandler}
        />
        <Button
          title="LOGIN"
          onPress={handleLogIn}
          buttonStyle={styles.button}
        />
      </AuthScreenWrapper>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  button: {
    backgroundColor: COLORS.redSecondMarvel,
    marginVertical: 20
  }
});

export default LoginScreen;
