import { ThemedHeader } from "@/zich/components/theme";
import { useColors } from "@/zich/hooks";
import { PlatformPressable } from "@react-navigation/elements";
import { router, Tabs } from "expo-router";
import { colorScheme } from "nativewind";
import { View, Platform, Pressable } from "react-native";
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
                name="home"
                options={{
                    headerShown: true,
                    header: () => {
                        return (
                            <ThemedHeader
                                backgroundColor="bg-theme-mild"
                                title="Welcome Back"
                                rightIcon={
                                    <Pressable
                                        className="rounded-full center size-9 border border-gray-200 bg-white"
                                        onPress={() => {
                                            router.push("/notifications");
                                        }}
                                    >
                                        <Iconify
                                            icon="lucide:bell"
                                            size={20}
                                            color={colors.icon}
                                        />
                                    </Pressable>
                                }
                            />
                        );
                    },

                    title: "Home",
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Iconify
                                icon="lets-icons:home-duotone"
                                size={30}
                                color={focused ? "#3b82f6" : colors.icon}
                            />
                        );
                    },
                }}
            />
            <Tabs.Screen
                name="settings"
                options={{
                    headerShown: true,
                    header: () => {
                        return <ThemedHeader title="Settings" showTitle />;
                    },
                    title: "Settings",
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Iconify
                                icon="duo-icons:settings"
                                size={30}
                                color={focused ? "#3b82f6" : colors.icon}
                            />
                        );
                    },
                }}
            />
        </Tabs>
    );
}
