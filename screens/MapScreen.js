import { Text, View } from "react-native";
import { globalStyles } from "../theme/styles";
import { ScrollView, TouchableOpacity, StyleSheet, Image } from "react-native";
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { useContext, useEffect, useState } from "react";
import { FontAwesome } from '@expo/vector-icons';
import { getStations } from "../firebase/requests";
import { StatusBar } from "expo-status-bar";
import { ThemeContext } from "../theme/ThemeContext";

const MapScreen = ({route})=>{
    const { isLight} = useContext(ThemeContext);
    const styles = globalStyles(isLight);

    const { num, ligne} = route.params;  
    const [stations, setStations] = useState(null);
    const [mapRegion, setMapRegion] = useState(null)
    useEffect(() => {
        async function fetchStations() {
            const res = await getStations({ ligne: "ligne "+num });
            res.sort((a, b) => a.num - b.num); // trier les stations
            setStations(res);                                          
        }
        fetchStations();
        
    }, []);

    // const [position, setPosition ]= useState() // position en temps réel du métro ( real time database)

    useEffect(() => {
        if (stations && stations.length > 0) {
          setMapRegion({
            latitude: stations[0].Location.latitude,
            longitude: stations[0].Location.longitude,
            latitudeDelta: 0.0922 / 4,
            longitudeDelta: 0.0421 / 4,
          });          
        }
      }, [stations]);
    

    const zoomIn = () => {
        console.log(mapRegion.latitudeDelta/2)
        setMapRegion({
            latitude: mapRegion.latitude ,
            longitude: mapRegion.longitude ,
            latitudeDelta: mapRegion.latitudeDelta / 2,
            longitudeDelta: mapRegion.longitudeDelta /2
        })    
    };
    const zoomOut = () => {
        console.log(mapRegion.latitudeDelta)
        setMapRegion({
            latitude: mapRegion.latitude ,
            longitude: mapRegion.longitude ,
            latitudeDelta: mapRegion.latitudeDelta * 2,
            longitudeDelta: mapRegion.longitudeDelta *2
        })
    };
    
    function changeRegion(loc){
        setMapRegion({
            latitude: loc.latitude ,
            longitude: loc.longitude ,
            latitudeDelta: mapRegion.latitudeDelta,
            longitudeDelta: mapRegion.longitudeDelta
        })
    }
    


    return (
        <View style={[styles.container ]}>    
            <StatusBar
                barStyle={isLight ? "dark-content" : "light-content"}
                backgroundColor={isLight ? "#fff" : "#191919"}
            />
            <View style={{ marginVertical: 10 }}>
                <Text style={styles.title1}>{ligne}</Text>
            </View>            
            {stations && mapRegion && (
                <>
                <ScrollView 
                    horizontal={true} 
                    showsHorizontalScrollIndicator={false}                            
                    style={{marginBottom:10}}
                >                                    
                    {stations && stations.map((station, index) => (
                        <TouchableOpacity key = {index} style={Styles.btnStation} onPressIn={() => changeRegion(station.Location)} >
                            <Text style={[styles.text, {color: "#000"}]}>{station.Station}</Text>
                        </TouchableOpacity>
                    ))}                 
                </ScrollView>

                <MapView 
                    provider={PROVIDER_GOOGLE} 
                    style={{width: '100%', height: '82%'}}
                    region={mapRegion}
                >                                     
                    {stations.map((station, index) => (
                        <Marker
                            key={station.Station}
                            coordinate={{
                                latitude: station.Location.latitude,
                                longitude: station.Location.longitude
                            }}
                        >
                            <Callout>
                                <Text style={styles.text}>{station.name} </Text>
                            </Callout>
                        </Marker>
                    ))}

                    <Marker
                        coordinate={{
                            latitude: stations[3].Location.latitude,
                            longitude: stations[3].Location.longitude
                        }}                            
                    > 
                        <View >
                            <Image style={{height:100, width:100}} source={require('../assets/images/icon.png')}/>
                        </View>
                    </Marker>
                                                                                                            
                        
                </MapView>

                <View style={Styles.zoomButtons}>
                    <TouchableOpacity style={Styles.zoomButtonIN} onPressIn={zoomIn}>
                        <FontAwesome name="plus" size={20} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.zoomButtonOut} onPressIn={zoomOut} >
                        <FontAwesome name="minus" size={20} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.metroLocationbtn} >
                        <FontAwesome name="crosshairs" size={20} color="black" />
                    </TouchableOpacity>
                </View>
                </>
             )}

        </View>
        
    )
}

export default MapScreen;

const Styles = StyleSheet.create({
    zoomButtonIN: {
        position: 'absolute',
        bottom: 55,
        right: 20,
        backgroundColor: '#fff',
        borderRadius: 40,
        padding: 10,
        elevation: 5,
      },
      zoomButtonOut :{
        position: 'absolute',
        bottom: 10,
        right: 20,
        backgroundColor: '#fff',
        borderRadius: 40,
        padding: 10,
        elevation: 5,
      },
      metroLocationbtn:{
        position: 'absolute',
        bottom: 100,
        right: 20,
        backgroundColor: '#fff',
        borderRadius: 40,
        padding: 10,
        elevation: 5,
      },
      zoomButtons: {
        position: 'absolute',
        bottom: 50,
        right: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },
      btnStation: {
        padding: 15,
        marginHorizontal: 5,
        borderRadius: 15,
        backgroundColor: '#E7EFCD',
        justifyContent: "center"
    }

});