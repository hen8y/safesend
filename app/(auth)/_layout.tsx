import { useColors } from "@/zich/hooks";
import { Stack } from "expo-router";
import { View } from "react-native";

export default function AuthLayout(): JSX.Element {
    const colors = useColors();
    return (
        <Stack>
            <Stack.Screen name="login" options={{ headerShown: false }} />
            <Stack.Screen name="register" options={{ headerShown: false }} />
            <Stack.Screen
                name="forgot-password"
                options={{
                    title: "",
                    headerBackground: () => (
                        <View className="bg-theme size-full" />
                    ),
                    headerTintColor: colors.icon,
                }}
            />
            <Stack.Screen
                name="magic-link"
                options={{
                    title: "",
                    headerBackground: () => (
                        <View className="bg-theme size-full" />
                    ),
                    headerTintColor: colors.icon,
                }}
            />
        </Stack>
    );
}
