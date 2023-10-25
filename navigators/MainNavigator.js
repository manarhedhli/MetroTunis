import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useContext } from "react"; 
import HomeNavigator from "./HomeNavigator";
import FavoriteScreen from "../screens/FavoriteScreen";
import SettingsScreen from "../screens/SettingsScreen";
import { Ionicons } from "@expo/vector-icons";
import AppHeader from "../components/AppHeader";
import { ThemeContext } from "../theme/ThemeContext";

const Tab = createBottomTabNavigator();


const MainNavigator = () => {
    const { isLight} = useContext(ThemeContext);
        return (
        <Tab.Navigator
            initialRouteName="HomeStack" 
            screenOptions={{
                tabBarActiveTintColor: "green",
                headerStyle: {                    
                    height: 100,
                    backgroundColor: isLight ? '#FFF' : '#101010'
                },
                tabBarStyle: {
                    backgroundColor: isLight ? '#FFF' : '#101010'
                },
                headerTitle: () => (
                    <AppHeader/>
                ),                
            }}
        >
            <Tab.Screen
                name="HomeStack" 
                component={HomeNavigator}
                options={{
                    tabBarLabel: "Accueil",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Favorite"
                component={FavoriteScreen}
                options={{
                    tabBarLabel: "Favories",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="heart" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    tabBarLabel: "Paramètres",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="settings-sharp" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
export default MainNavigator;

