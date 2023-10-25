import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./navigators/MainNavigator";
import { ThemeProvider } from "./theme/ThemeContext";



export default function App() {
    return (
        <ThemeProvider>
            <NavigationContainer>
                <MainNavigator />
            </NavigationContainer>
        </ThemeProvider>
    );
}
