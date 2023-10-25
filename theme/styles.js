import { StyleSheet } from 'react-native';

export const globalStyles = (isLight) =>  StyleSheet.create({
    container:{
        flex: 1,
        padding:10, 
        backgroundColor: isLight ? '#FFF' : '#101010'
    },
    title1: {
        fontSize:30,
        fontWeight: 'bold',
        textAlign: 'center',         
        color: isLight ? '#000' : '#fff'
    },
    title2: {
        fontSize:24,
        fontWeight: 'bold',
        color: isLight ? '#000' : '#fff'
    },
    text: {
        fontSize:18,
        color: isLight ? '#000' : '#fff'
    },
    txtColor: {
        color: isLight ? '#000' : '#fff'
    }, 
    bgColor: {
        backgroundColor: isLight ? '#FFF' : '#101010'
    },
    colorPrimary: {
        color:'#05A553'
    }, 
    colorSecondary : {
        color:'#FFBF00',
    }, 
    colorLigt : {
        color: '#E9EFC0'
    }, 
    colorgray: {
        color: '#BCB8B8'
    }, 
    colorDark: {
        color: '#005BAA'
    },
    borderBottom: {
        borderBottomWidth:2,
        borderColor: '#BCB8B8'
    }, 
    btnLarge: {
        padding: 15,
        marginHorizontal: 5,
        borderRadius: 15,
        backgroundColor: '#E7EFCD',
    }, 
    btnActive: {
        padding: 15,
        paddingBottom: 5, 
        marginHorizontal: 5,
        marginBottom: 10,
        borderRadius: 15,
        backgroundColor: '#E7EFCD',
        borderWidth: 2,
        width: 170,
        height: 90, 
        borderColor: "#FFBF00"   
    },
    btnDisabled: {
        padding: 15,
        paddingBottom: 5, 
        marginHorizontal: 5,
        marginBottom: 10,
        borderRadius: 15,
        backgroundColor: '#F0F0F2',
        borderWidth: 2,
        width: 170,
        height: 90,
        borderColor:"#bbb" 

    },
    map: {
        width: '100%',
        height: '82%',
        marginTop: 10
    }

})
export const images ={
    tramway: {
        '1': require('../assets/images/tramwayNum1.png'),
        '2': require('../assets/images/tramwayNum2.png'),
        '3': require('../assets/images/tramwayNum3.png'),
        '4': require('../assets/images/tramwayNum4.png'),
        '5': require('../assets/images/tramwayNum5.png'),
        '6': require('../assets/images/tramwayNum6.png')
    }
};