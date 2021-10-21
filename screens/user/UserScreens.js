import React from "react";
import { View, Button, Text} from "react-native"
import { useDispatch } from "react-redux";
import { logout } from '../../store/actions/auth.action'

const UserScreens = () =>{
    const dispatch = useDispatch();

    return (
        <View>
            <Text>HOLA MUNDO</Text>
        <Button title="salir" onPress={()=>{dispatch(logout())}}/>
        </View>
    )
}

export default UserScreens