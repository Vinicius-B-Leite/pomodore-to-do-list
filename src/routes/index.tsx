import React from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home";
import CreateTask from "../screens/createTask";
import { useTheme } from "styled-components/native";
import Pomodoro from "../screens/pomodoro";



const Stack = createNativeStackNavigator()

export default function Routes(){
    const theme = useTheme()
    return(
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
                <Stack.Screen name="CreateTask" component={CreateTask} options={{headerStyle: {backgroundColor: theme.background}, headerTintColor: theme.text}}/>
                <Stack.Screen name="Pomodoro" component={Pomodoro} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}