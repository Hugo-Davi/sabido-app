import { View } from 'react-native';
import { Tabs } from "expo-router";

import { MaterialCommunityIcons } from "@expo/vector-icons"
import { Ionicons } from '@expo/vector-icons';
import { selectedTheme } from '@/constants/Themes';

export default function TabRoutesLayout() {
    return(
        <Tabs
            screenOptions={{
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    left: 0,
                    height: 60,
                    elevation: 0,
                }
            }}>
            <Tabs.Screen
                name= "index"
                options= {{
                    title: "Home",
                    tabBarIcon: ({color, size}) => <MaterialCommunityIcons name="cards-outline"
                    color={color} size={size * 1.75} />
                    }
                }
            />
            <Tabs.Screen
                name="profile"
                options= {{
                    title: "Profile",
                    tabBarIcon: ({color, size}) => <Ionicons name="ios-person-circle"
                    color={color} size={size * 1.75} />
                }}
            />
        </Tabs>
    )
}