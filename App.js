import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar as stb, Platform } from 'react-native';
import LoginScreen from './app/assets/screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import BottomBar from './app/assets/Component/BottomBar';
import ClassControlPanel from './app/assets/Component/ClassControlPanel';


export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <BottomBar />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? stb.currentHeight : 0,
  },
});
