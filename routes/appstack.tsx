
import {createNativeStackNavigator} from  "@react-navigation/native-stack" 
import React from "react"
import Cart from "../Pages/Cart";
import Maintab from "./maintab";
import User from "../Pages/User";

const Stack = createNativeStackNavigator();

export function Appstack(){
    return(
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="maintab" component={Maintab} />
                <Stack.Screen name="cart" component={Cart} /> 
                <Stack.Screen name="users" component={User} />
            </Stack.Navigator>
    )
}