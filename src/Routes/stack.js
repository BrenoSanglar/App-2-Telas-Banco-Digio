import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";
import EsqueciMinhaSenha from "../screens/EsqueciMinhaSenha";
import Login from "../screens/Login";
import Home from '../screens/Home';
import Senha from '../screens/Senha';

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Screen
                name="Login"
                component={Login}
            />

            <Screen
                name="Home"
                component={Home}
            />

            <Screen
                name="Senha"
                component={Senha}
            />

            <Screen
                name="EsqueciMinhaSenha"
                component={EsqueciMinhaSenha}
            />
        </Navigator>
    )
}