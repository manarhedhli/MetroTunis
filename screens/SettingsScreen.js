import { 
    Text, 
    View, 
    TouchableOpacity 
} from "react-native";
import { globalStyles } from "../theme/styles";
import { Ionicons } from '@expo/vector-icons'; 
import { Switch } from "react-native";




import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from "../theme/ThemeContext";
import { StatusBar } from "expo-status-bar";




const SettingsScreen = ()=>{    
    const { isLight, setIsLight} = useContext(ThemeContext);
    const styles = globalStyles(isLight);
    
    const toggleSwitch = () => {
        setIsLight(previousState => !previousState);
        
    }
    
    return (
        <View style={[styles.container, {padding: 30}]}>    
            <StatusBar
                barStyle={isLight ? "dark-content" : "light-content"}
                backgroundColor={isLight ? "#fff" : "#191919"}
            />
            <View style={{ marginVertical: 10 }}>
                <Text style={styles.title1}>Préferences</Text>
            </View>
            
            <View style={{flexDirection:'row', marginTop:20, justifyContent:'space-between'}}>
                <Ionicons name="moon" size={40} style={[styles.txtColor]} />
                <Text style={[styles.text,  { width:220, paddingTop:10}]}>Mode sombre</Text>
                <Switch
                    trackColor={{false: '#767577', true: '#81b0ff'}}
                    thumbColor={setIsLight ? '#fff' : '#000'}                    
                    onValueChange={toggleSwitch}
                    value={isLight}
                />
            </View>
            <View style={{flexDirection:'row', marginTop:20, justifyContent:'space-between'}}>
                <Ionicons name="language-sharp" size={40} style={[styles.txtColor]} />
                <Text style={[styles.text, {fontWeight:'normal', width:140, padding:10}]}>Langue</Text>
                <TouchableOpacity style={[styles.btnLarge, {width:60}]}>
                    <Text style={[styles.title2, {color: "#101010"}]}>Fr</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btnLarge, {width:60}]}>
                    <Text style={[styles.title2, {color: "#101010"}]}>Ar</Text>
                </TouchableOpacity>
            </View>         
        </View>
    )
}

export default SettingsScreen;