import React, { useContext } from 'react';
import {Text, View, Image, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import {  globalStyles } from '../theme/styles'
import { ThemeContext } from '../theme/ThemeContext';



export default function Station(props) {

    const { isLight} = useContext(ThemeContext);
    const styles = globalStyles(isLight);
    
    const name = props.name;
    const frequency = props.frequency;
    const firstDep = props.firstDep;    const firstDepTime = new Date(firstDep*1000)
    // const lastdep = props.lastdep;    const lastdepDate = new Date(lastdep * 1000);
    const systemDate = new Date();
    nextdep = firstDepTime.getTime()  // Metro en repos 

    //  if (lastdepDate.getHours() > systemDate.getHours() || (lastdepDate.getHours() === systemDate.getHours() && lastdepDate.getMinutes() > systemDate.getMinutes())) {
    const diff = Math.floor( (systemDate.getTime() - firstDepTime.getTime() ) / (1000 * 60));
    n = Math.floor(diff/frequency)  
    nextdep = firstDepTime.getTime() + ((n+1)*frequency*60*1000);
    // } 
    const nextDepDate = new Date(nextdep);
    const test = Math.floor( (nextDepDate.getTime() - systemDate.getTime()  ) / (1000 * 60));
    timeString = nextDepDate.toLocaleTimeString('en-US', { hour12: false });

    return (
        <View key={props.id} style={{flexDirection:'row'}}>
            {test>0 && test < 4  ? (
                <View  style={{height:60, width:70}}>
                    <Image style={{height:60, width:40}} source={require('../assets/images/tramway.png')}/>
                </View>
                 ) : 
                <Text style={{borderRightWidth:1, height:60, width:30, marginRight:40, borderColor: isLight ? "#000" : "#FFF" }}></Text>} 
            <View style={[{flexDirection: "row" , padding:10, height:60,  width:210}]}>
                <FontAwesome name="map-pin" size={20} color="black" />   
                <Text style={[styles.text, {marginHorizontal: 10}]}>{name}</Text>
            </View>
            <Text style={[styles.text, {padding:10, height:60,  width:80}]}>{timeString} </Text>
        </View>
    )
}