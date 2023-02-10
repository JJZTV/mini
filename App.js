import React from "react";
import { View, Text } from "react-native";
import Homepage from "./src/screens/Homepage";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeArea } from "./src/components/utility/safe-area.component";
import { Ionicons } from "@expo/vector-icons";


const Tab = createBottomTabNavigator();

const Profile = () => (
    <SafeArea>
        <Text>Profile</Text>
    </SafeArea>
);

const Like = () => (
    <SafeArea>
        <Text>Like</Text>
    </SafeArea>
);



export default function App() {
    return (
        <>
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ color, size }) => {
                            let iconName;
                            if (route.name === "HOME") {
                                iconName = "ios-home-outline";
                            } else if (route.name === "Profile") {
                                iconName = "person-outline";
                            } else if (route.name === "Like") {
                                iconName = "heart-outline";
                            }
                            // You can return any component that you like here!
                            return <Ionicons name={iconName} size={size}
                                color={color} />;
                        },
                        tabBarActiveTintColor: "tomato",
                        tabBarInactiveTintColor: "gray",
                        headerShown: false,
                    })}
                >
                    <Tab.Screen name="HOME"component={Homepage} />
                    <Tab.Screen name="Like" component={Like} />
                    <Tab.Screen name="Profile" component={Profile} />
                </Tab.Navigator>
            </NavigationContainer>
            <ExpoStatusBar style="auto" />
        </>

    );
}



