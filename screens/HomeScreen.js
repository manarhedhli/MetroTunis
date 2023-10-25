import React, { useContext } from "react";
import { View, ScrollView, StatusBar } from "react-native";
import { globalStyles } from "../theme/styles";
import TramwayContainer from "../components/TramwayContainer";
import { ThemeContext } from "../theme/ThemeContext";

const HomeScreen = ({navigation}) => {
    const { isLight} = useContext(ThemeContext);
    const styles = globalStyles(isLight);
    
    return (
        <View style={[styles.container ]}>    
            <StatusBar
                barStyle={isLight ? "dark-content" : "light-content"}
                backgroundColor={isLight ? "#fff" : "#191919"}
                />
            <ScrollView>                
                <TramwayContainer navigation={navigation} num={"1"} depart={"Place de barchelone"} frequency = {80} arrivee={"Ben Arous"} />
                <TramwayContainer navigation={navigation} num={"2"} depart={"Place de Barcelone"} frequency = {80} arrivee={"Ariana"} />
                <TramwayContainer navigation={navigation} num={"3"} depart={"Tunis Marine"} frequency = {80} arrivee={"Ibn Khaldoun"}/>
                <TramwayContainer navigation={navigation} num={"4"} depart={"Place de Barcelone"} frequency = {80} arrivee={"Khairedine"}/>
                <TramwayContainer navigation={navigation} num={"5"} depart={"Place de Barcelone"} frequency = {80} arrivee={"Intilaka"}/>
                <TramwayContainer navigation={navigation} num={"6"} depart={"Tunis Marine"} frequency = {80} arrivee={"El Mourouj 4"}/>
            </ScrollView>                
        </View>
    );
}

export default HomeScreen;
