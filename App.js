import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Buttons } from './Component/Buttons';
import { Card } from './Component/Card';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Profile from './assets/Profile (2).jpeg';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

// Separate components for Help and About screens
const HelpScreen = () => (
  <View style={styles.screen}>
    <Text style={styles.text}>Help Screen</Text>
  </View>
);

const AboutScreen = () => (
  <View style={styles.screen}>
    <Text style={styles.text}>About Screen</Text>
  </View>
);

export default function App() {
  const [result, setResult] = useState('');
  const [input, setInput] = useState('');
  const [memory, setMemory] = useState(0);
  const [lastInput, setLastInput] = useState(null);

  const handleButtonPress = (value) => {
    if (value === '=') {
      try {
        const evaluatedResult = eval(result.replace('x', '*').replace('√', 'Math.sqrt'));
        setResult(String(evaluatedResult));
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C/CE') {
      setResult('0');
    } else if (value === 'M+') {
      setMemory((prev) => prev + parseFloat(result));
      setResult('0');
    } else if (value === 'M-') {
      setMemory((prev) => prev - parseFloat(result));
      setResult('0');
    } else if (value === 'MRC') {
      setResult(String(memory));
    } else if (value === 'GTO') {
      setMemory(0);
    } else if (value === '√') {
      const evaluatedResult = Math.sqrt(parseFloat(result));
      setResult(String(evaluatedResult));
    } else if (value === '%') {
      const evaluatedResult = parseFloat(result) / 100;
      setResult(String(evaluatedResult));
    } else {
      if (lastInput === '=') {
        setResult(value);
      } else {
        setResult((prev) => (prev === '0' ? value : prev + value));
      }
    }

    setLastInput(value);
  };

  const CalculatorScreen = () => (
    <View style={styles.screen}>
      <Card result={result} />
      <Buttons onButtonPress={handleButtonPress} />
    </View>
  );
  const HomeScreen = () => (
    <View style={styles.screen}>
      <Text style={styles.text}>Welcome to the Home Screen</Text>
    </View>
  );

  const SettingsScreen = () => (
    <View style={styles.screen}>
      <Text style={styles.text}>Settings Screen</Text>
    </View>
  );

  // Function to create the bottom tab navigator
  const TabNavigator = () => (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home-outline';
          } else if (route.name === 'Calculator') {
            iconName = 'calculator-outline';
          } else if (route.name === 'Settings') {
            iconName = 'settings-outline';
          }
          return <Ionicons name={iconName} color={color} size={size} />;
        },
        tabBarActiveTintColor: '#673ab7',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: styles.tabBarStyle,
        tabBarLabelStyle: styles.tabBarLabelStyle,
        headerTitle: '', // Remove the title from the tab header
        headerLeft: () => <Text style={styles.headerText}>Asad Waseem</Text>, // Profile name on the left
        headerRight: () => (
          <Image
          source={Profile} // Use the imported image
          style={styles.profileImage}
        />
        ), // Profile image on the right
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Calculator" component={CalculatorScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen 
          name="Tabs" 
          component={TabNavigator} 
          options={{ 
            headerTitle: '', // Remove the "Tabs" label
            headerShown: true}}// Keep header shown for drawer
        />
        <Drawer.Screen name="Help" component={HelpScreen} />
        <Drawer.Screen name="About" component={AboutScreen} />
      </Drawer.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: '#333',
  },
  tabBarStyle: {
    backgroundColor: '#ffffff',
    borderTopWidth: 0,
    elevation: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 65,
    overflow: 'hidden',
  },
  tabBarLabelStyle: {
    fontSize: 14,
    fontWeight: '600',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 15,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 15,
  },
});
