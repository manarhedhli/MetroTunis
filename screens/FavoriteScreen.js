import React, { useContext, useEffect, useState } from "react";
import { ScrollView, View, RefreshControl } from "react-native";
import { globalStyles } from "../theme/styles";
import TramwayContainer from "../components/TramwayContainer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ThemeContext } from "../theme/ThemeContext";
import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";

const FavoriteScreen = ({navigation})=>{
    const { isLight} = useContext(ThemeContext);
    const styles = globalStyles(isLight);

    const [refreshing, setRefreshing] = useState(false);
    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }    
    //const { isLight, setIsLight} = useContext(ThemeContext);
    const [favo, setFavo] = useState([]);
    useEffect(() => {
        const checkStorage = async () => {
            const favoKeys = [];
            for (let i = 1; i < 7; i++) {
                const line = await AsyncStorage.getItem(`ligne${i}`);
                if (line !== null) {
                    console.log(i)
                    favoKeys.push(i);
                }
            }
            setFavo(favoKeys);
        };
        checkStorage();
    }, []);
    
    const checkStorage = async () => {
        const favoKeys = [];
        for (let i = 1; i < 7; i++) {
            const line = await AsyncStorage.getItem(`ligne${i}`);
            if (line !== null) {
                favoKeys.push(i);
            }
        }
        setFavo(favoKeys);
    };

    const onRefresh = async () => {
        setRefreshing(true);
        await checkStorage();
        wait(2000).then(() => {
            setRefreshing(false);
        });
    }
    return (
        <View style={[styles.container ]}>    
            <StatusBar
                barStyle={isLight ? "dark-content" : "light-content"}
                backgroundColor={isLight ? "#fff" : "#191919"}
            />
            <View style={{ marginVertical: 10 }}>
                <Text style={styles.title1}>Lignes enregistrées</Text>
            </View>
            <ScrollView                
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            >        
            <View> 
                {favo.map((num) => (
                    <>
                        {num === 1 && <TramwayContainer key={`tramway-${num}`} navigation={navigation} num={"1"} depart={"Place de barchelone"} frequency = {80} arrivee={"Ben Arous"} isFavorite={true} />}
                        {num === 2 && <TramwayContainer key={`tramway-${num}`} navigation={navigation} num={"2"} depart={"Place de Barcelone"} frequency = {80} arrivee={"Ariana"} isFavorite={true} />}
                        {num === 3 && <TramwayContainer key={`tramway-${num}`} navigation={navigation} num={"3"} depart={"Tunis Marine"} frequency = {80} arrivee={"Ibn Khaldoun"} isFavorite={true}/>}
                        {num === 4 && <TramwayContainer key={`tramway-${num}`} navigation={navigation} num={"4"} depart={"Place de Barcelone"} frequency = {80} arrivee={"Khairedine"} isFavorite={true}/>}
                        {num === 5 && <TramwayContainer key={`tramway-${num}`} navigation={navigation} num={"5"} depart={"Place de Barcelone"} frequency = {80} arrivee={"Intilaka"} isFavorite={true}/>}
                        {num === 6 && <TramwayContainer key={`tramway-${num}`} navigation={navigation} num={"6"} depart={"Tunis Marine"} frequency = {80} arrivee={"El Mourouj 4"}isFavorite={true} />}
                    </>
                ))}
            </View>        
       
        </ScrollView>
        </View>
    )
}

export default FavoriteScreen;