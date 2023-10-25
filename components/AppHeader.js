import {
    Image, 
    View, 
    StyleSheet, 
    Dimensions
} from 'react-native';


const AppHeader = () => {
  return (
    <View style={styles.container}>
        <Image source={require('../assets/images/logo.png')} />
    </View>  
  );
};

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',      
    width: screenWidth - 30,    
  },  
});

export default AppHeader;