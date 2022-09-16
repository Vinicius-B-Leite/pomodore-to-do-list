import React from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home";
import CreateTask from "../screens/createTask";



const Stack = createNativeStackNavigator()

export default function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
                <Stack.Screen name="CreateTask" component={CreateTask} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}