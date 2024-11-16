import React from "react";
import { View } from "react-native";  // 'Settings' n'est pas utilisé, donc on peut l'enlever
import { NavigationContainer } from "@react-navigation/native"; // Importation nécessaire pour la navigation
import { createNativeStackNavigator } from "@react-navigation/native-stack"; // Pour créer une pile de navigation
import Dashbord from "./Pages/Dashbord";
import Signup from "./Pages/Signup";
import Splash from "./Pages/SplashScreen";
import LoginScreen from "./Pages/Login";
import ForgotPassword from "./Pages/ForgotPassword";

// Création d'un Stack Navigator
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>  {/* Conteneur de navigation pour l'application */}
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}> 
        {/* Écran de connexion */}
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{
            headerShown: false  // Enlève l'en-tête par défaut
          }}
        />


        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{
            headerShown: false  // Enlève l'en-tête par défaut
          }}
        />

        {/* Écran d'accueil */}
        <Stack.Screen
          name="Dashbord"
          component={Dashbord}
          options={{
            headerShown: false
          }}
        />

        {/* Liste des transactions */}
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            headerShown: false
          }}
        />

        {/* Écran d'inscription */}
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: false
          }}
        />




      </Stack.Navigator>
    </NavigationContainer>
  );
}
