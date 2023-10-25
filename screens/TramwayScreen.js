import { useContext, useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { globalStyles } from "../theme/styles";
import { getStations } from "../firebase/requests";
import { FontAwesome } from '@expo/vector-icons';
import Station from "../components/Station";
import { ThemeContext } from "../theme/ThemeContext";
import { StatusBar } from "expo-status-bar";



const TramwayScreen = ({route})=>{
    const { isLight} = useContext(ThemeContext);
    const styles = globalStyles(isLight);

    const { ligne, num, frequency} = route.params;    
    
    const [stations, setStations] = useState(null);

    useEffect(() => {
        async function fetchStations() {
            const res = await getStations({ ligne: 'ligne '+num  });
            res.sort((a, b) => a.num - b.num); 
            setStations(res);                                          
        }
        fetchStations();
    }, []);

    return (
        <View style={[styles.container ]}>    
            <StatusBar
                barStyle={isLight ? "dark-content" : "light-content"}
                backgroundColor={isLight ? "#fff" : "#191919"}
            />
            <View style={{ marginVertical: 10 }}>
                <Text style={styles.title1}>{ligne}</Text>
            </View>            
            <View style={{flexDirection:'row'}}>
                <View style={[styles.borderBottom,{width:70, paddingStart:25, paddingTop:5}]} >
                    <FontAwesome name="arrow-down" size={20}  />
                </View>
                <Text style={[styles.title2, styles.borderBottom, {width:210}] }>Station</Text>
                <Text style={[styles.title2, styles.borderBottom, {width:110}]} >Départ</Text>
            </View>
             <ScrollView 
                showsVerticalScrollIndicator={false}            
                style={{marginVertical:10}}>   
                {stations &&
                    stations.map((item, index )=> (                    
                        <Station key={index} frequency={frequency}  name={item.Station} firstDep={item.firstdep} />    
                    ))
                }
            </ScrollView> 
        </View>
    )
}

export default TramwayScreen;
