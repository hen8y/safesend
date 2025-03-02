import { ThemedHeader } from "@/zich/components/theme";
import { useColors } from "@/zich/hooks";
import { PlatformPressable } from "@react-navigation/elements";
import { Tabs } from "expo-router";
import { colorScheme } from "nativewind";
import { Platform } from "react-native";
import { Iconify } from "react-native-iconify";

export default function TabsLayout(): JSX.Element {
    const colors = useColors();
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarButton: (props) => (
                    <PlatformPressable
                        {...props}
                        android_ripple={{ color: "transparent" }}
                    />
                ),
                tabBarStyle: {
                    backgroundColor:
                        colorScheme.get() === "dark" ? "#18181b" : "#fff",
                    width: "100%",
                    margin: "auto",
                    alignItems: "center",
                    paddingTop: 10,
                    height: Platform.OS == "ios" ? 80 : 60,
                    justifyContent: "center",
                    borderTopColor: "#888",
                },
            }}
        >
            <Tabs.Screen
                name="dashboard"
                options={{
                    headerShown: false
                }}
            />
            <Tabs.Screen
                name="loan-creation"
                options={{
                    headerShown: true,
                    header: () => {
                        return <ThemedHeader title="Loan Creation" showTitle={true} />;
                    },
                    title: "Loan Creation",
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Iconify
                                icon="solar:home-angle-outline"
                                size={25}
                                color={focused ? "#3b82f6" : colors.icon}
                            />
                        );
                    },
                }}
            />
            <Tabs.Screen
                name="notifications"
                options={{
                    headerShown: true,
                    header: () => {
                        return <ThemedHeader title="Notifications" showTitle={true} />;
                    },
                    title: "Notifications",
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Iconify
                                icon="solar:home-angle-outline"
                                size={25}
                                color={focused ? "#3b82f6" : colors.icon}
                            />
                        );
                    },
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    headerShown: true,
                    header: () => {
                        return <ThemedHeader title="Profile" showTitle />;
                    },
                    title: "Profile",
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Iconify
                                icon="solar:user-outline"
                                size={25}
                                color={focused ? "#3b82f6" : colors.icon}
                            />
                        );
                    },
                }}
            />
        </Tabs>
    );
}
