import { Image } from "react-native";
import { StyleSheet, View, Text } from "react-native";
import {globalStyles, images} from '../theme/styles'
import { TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../theme/ThemeContext";

const TramwayContainer = ({navigation, num, depart, frequency,  arrivee, isFavorite = false}) => {
    const { isLight} = useContext(ThemeContext);
    const stylesG = globalStyles(isLight);

    const [favorite ,setFavorite] = useState(false);
    useEffect(() => {
        const checkStorage = async () => {
            const line = await AsyncStorage.getItem(`ligne${num}`);
            if (line !== null) {                
                setFavorite("bookmark")
            } else {                
                setFavorite("bookmark-o");
            }
    };
    checkStorage();
    }, []);

    const onPressHandler = async () => {
        try {
            if (favorite === 'bookmark-o') {     
                setFavorite('bookmark'); 
                await AsyncStorage.setItem(`ligne${num}`, num);                
            } else {                        // selected
                setFavorite('bookmark-o');
                await AsyncStorage.removeItem(`ligne${num}`);                
            }
        } catch (error) {
            console.log(error);
        }

    };
    return (
        <View style={styles.container} >            
            <TouchableOpacity style={styles.btn} onPress={()=>{navigation.navigate("Tramway", {ligne : "Ligne "+num, num: num, frequency: frequency}) }} >           
                <Image style={styles.img} source={images.tramway[num]}/>         
            </TouchableOpacity>
            <View style={styles.stationContainer}>               
                <View style={styles.row}>
                    <FontAwesome name="map-pin" size={20} style={stylesG.txtColor} />
                    <Text style={[stylesG.text, {marginHorizontal:10}]} >{depart}</Text>
                </View>
                <View style={styles.row}>
                    <FontAwesome name="map-pin" size={20} style={stylesG.txtColor} />
                    <Text style={[stylesG.text, {marginHorizontal:10}]} >{arrivee}</Text>
                </View>                               
            </View>
            <TouchableOpacity style={[styles.btn, {width: 40}]} onPress={()=>{navigation.navigate("Map", {ligne : "Ligne "+num, num: num, frequency: frequency}) }}>           
                <FontAwesome name="map" size={30} style={stylesG.txtColor} />
            </TouchableOpacity>
            <TouchableOpacity 
                style={[styles.btn, {width: 40}]} 
                onPress={isFavorite ? null : onPressHandler}
            >           
                <FontAwesome name={favorite} size={30} style={stylesG.txtColor} />
            </TouchableOpacity>
            
        </View>
    )
}

export default TramwayContainer;

const styles = StyleSheet.create({
    container : {
        height:100,
        flexDirection:'row', 
        justifyContent:'space-around',
        borderRadius:15, 
        borderColor:'#BCB8B8',
        borderWidth:3,  
        margin:10,   
    }, 
     
    btn: {
        width: 80,
        height: "100%",          
        borderRadius: 30,        
        alignItems: "center",
        paddingVertical: 8,
        justifyContent: "center",        
    },
    stationContainer: {
        width: "55%", 
        borderRadius: 30, 
        justifyContent: "center"
    },    
    row: {
        flexDirection: "row",
    }
    
})