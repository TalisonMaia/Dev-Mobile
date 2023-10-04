import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../modules/login";
import Profile from '../modules/profile';
import ViewItens from '../modules/view';
import Cart from '../modules/cart'
import Payment from '../modules/pay';

const { Screen, Navigator, Group } = createNativeStackNavigator()

export function StackNavigator() {
    return (
        <Navigator>
            <Group
                screenOptions={{
                    headerTintColor: 'navy'
                }}>
                <Screen name='Login' component={Login} options={{headerShown: false}}/>
                <Screen name='Profile' component={Profile} />
                <Screen name='View' component={ViewItens} options={{headerShown: false}}/>
                <Screen name='Cart' component={Cart} options={{headerShown: false}}/>
                <Screen name='Payment' component={Payment} options={{headerShown: false}}/>
            </Group>

        </Navigator>
    )
}