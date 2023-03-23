import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native'
import { Text } from "native-base";

const Tab = createBottomTabNavigator();
const Home = () => <Text>HOME</Text>
const Settings = () => <Text>SETTINGS</Text>

function MyTabs(){
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Settings" component={Settings}/>
        </Tab.Navigator>
    )
};
export default function AppHandler() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
}