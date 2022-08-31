import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import ConfirmEmailScreen from './screens/ConfirmEmailScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import NewPasswordScreen from './screens/NewPasswordScreen';
import ProfileScreen from './screens/ProfileScreen';
import PlaneScreen from './screens/PlaneScreen';
import AccomodationScreen from './screens/AccomodationScreen';
import ClinicSearchScreen from './screens/ClinicSearchScreen';
import IstanbulScreen from './screens/IstanbulScreen';
import Ankara from './screens/Ankara';
import Antalya from './screens/Antalya';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />
        <Stack.Screen options={{headerShown: false}} name="Register" component={RegisterScreen} />
        <Stack.Screen options={{headerShown: false}} name="Home" component={HomeScreen} />
        <Stack.Screen options={{headerShown: false}} name="Confirm" component={ConfirmEmailScreen} />
        <Stack.Screen options={{headerShown: false}} name="Forgot" component={ForgotPasswordScreen} />
        <Stack.Screen options={{headerShown: false}} name="newPassword" component={NewPasswordScreen} />
        <Stack.Screen options={{headerShown: false}} name="profile" component={ProfileScreen} />
        <Stack.Screen options={{headerShown: false}} name="plane" component={PlaneScreen} />
        <Stack.Screen options={{headerShown: false}} name="clinic" component={ClinicSearchScreen} />
        <Stack.Screen options={{headerShown: false}} name="hotel" component={AccomodationScreen} />
        <Stack.Screen options={{headerShown: true}} name="İstanbul" component={IstanbulScreen} />
        <Stack.Screen options={{headerShown: true}} name="Antalya" component={Antalya} />
        <Stack.Screen options={{headerShown: true}} name="Ankara" component={Ankara} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
