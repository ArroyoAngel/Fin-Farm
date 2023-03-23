import { NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './src/app/application/interface/Login/Login'
import Home from './src/app/application/interface/Home/Home'
import Activity from './src/app/application/interface/Activity/Activity'

export const AppHandler = () => {
    const Stack = createNativeStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="login" component={Login} options={{ title: "Login", headerShown: false }} />
                <Stack.Screen name="home" component={Home} options={{ title: "Home", headerShown: false }} />
                <Stack.Screen name="activity" component={Activity} options={{ title: "Actividades", headerShown: true }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppHandler