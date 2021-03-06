//react
import React, { useCallback, useReducer } from "react";
//native
import { Alert, StyleSheet, ImageBackground } from "react-native";
import { Button } from "react-native-elements";
//redux
import { useDispatch } from "react-redux";
import AuthScreenWrapper from "../../components/AuthScreenWrapper";
import { signup } from "../../store/actions/auth.action";
import { formReducer, FORM_INPUT_UPDATE } from "./fromReducer";
//components
import Input from "../../components/Input";
//constants
import { COLORS } from "../../constants/color";
import { BACK_IMAGE } from "../../constants/backImage";

const RegisterScreen = () => {
  const dispatch = useDispatch();
  const [formState, formDispatch] = useReducer(formReducer, {
    inputValues: {
      email: "",
      password: "",
      name:"",
    },
    inputValidities: {
      email: false,
      password: false
    },
    formIsValid: false
  });

  const handleSignUp = () => {
    if (formState.formIsValid) {
      dispatch(
        signup(formState.inputValues.email, formState.inputValues.password, formState.inputValues.name)
      );
    } else {
      Alert.alert("Invalid form", "Enter email and valid user", [
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
        title="REGISTER"
        message="Do you already have an account?"
        buttonText="Login"
        buttonPath="Login"
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
          errorText="The password must be at least 8 characters"
          required
          minLength={8}
          onInputChange={onInputChangeHandler}
        />
        <Input
          id="name"
          label="Name"
          secureTextEntry
          autoCapitalize="none"
          required
          onInputChange={onInputChangeHandler}
        />
        <Button
          title="SIGN IN"
          onPress={handleSignUp}
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

export default RegisterScreen;
