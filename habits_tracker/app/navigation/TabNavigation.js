import React, { useState, useEffect } from "react";
import { CommonActions } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/Home/HomeScreen";
import StatisticsScreen from "../screens/Statistics/StatisticsScreen";
import CategoryListScreen from "../screens/Habits/CategoryList/CategoryList";
import { Settings } from "../screens/Settings/settings.js";
import { BottomTabBar } from "../components/BottomTabBar.js";
import { getUserInfo } from "../services/users.js";
import ProfileScreen from "../screens/Profile/ProfileScreen.js";

const Tab = createBottomTabNavigator();

export default function TabNavigation({ navigation }) {

  const [user, setUser] = useState({});
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const userInfo = await getUserInfo();
        setUser(userInfo);
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    };

    fetchUserInfo();
  }, []);

  return (
    <>
      {
        (user.userId) ? (
          <Tab.Navigator
            screenOptions={{
              tabBarStyle: {
                borderTopWidth: 0,
                elevation: 0,
              },
              headerShown: false,
            }}
            tabBar={props => <BottomTabBar {...props} />}
          >
            <Tab.Screen name="Home" component={HomeScreen} initialParams={{ user }} />
            <Tab.Screen name="Catégories" component={CategoryListScreen} initialParams={{ user }} />
            <Tab.Screen name="Profile" component={ProfileScreen} initialParams={{ user }} />
            <Tab.Screen name="Settings" component={Settings} initialParams={{ user }} />
            <Tab.Screen name="Statistics" component={StatisticsScreen} initialParams={{ user }} />
          </Tab.Navigator>
        ): <></>
      } 
    </>
  );
}
