import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import TramwayScreen from '../screens/TramwayScreen';
import MapScreen from '../screens/MapScreen';

const Stack = createStackNavigator();
const HomeNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Home" component={HomeScreen} options={{ tabBarVisible: false }} />
            <Stack.Screen name="Tramway" component={TramwayScreen} options={{ tabBarVisible: false }} />
            <Stack.Screen name="Map" component={MapScreen} options={{ tabBarVisible: false }} />
        </Stack.Navigator>
    );
}
export default HomeNavigator;
