import settings from "@/settings/index.json";
import { AuthButton, ThemedText, ThemedView } from "@/zich/components/theme";
import { Redirect } from "expo-router";
import { colorScheme } from "nativewind";
import { useEffect, useState } from "react";
import { ActivityIndicator, Image, StatusBar, View } from "react-native";

export default function Index(): JSX.Element | null {
    const [isChecking, setIsChecking] = useState<boolean>(true);
    const isDark = colorScheme.get() === "dark";
    const appName = settings.app.name;

    useEffect(() => {
        setTimeout(() => {
            setIsChecking(false);
        }, 1000);
    }, []);

    if (isChecking) {
        return (
            <View className="flex-1 justify-center bg-theme items-center">
                <ActivityIndicator
                    size="large"
                    color={isDark ? "#fff" : "#000"}
                />
            </View>
        );
    }
    return (
        <ThemedView className="px-8 flex-1">
            <StatusBar
                barStyle={isDark ? "light-content" : "dark-content"}
                backgroundColor={isDark ? "#111" : "#fff"}
            />
            <View className="h-screen">
                <View className="items-center w-full absolute bottom-20">
                    <Image
                        source={require("@/assets/images/logo.png")}
                        style={{ width: 70, height: 70 }}
                    />
                    <ThemedText content={appName} className="logo" />
                    <View className="mt-4 gap-y-4 w-full">
                        <AuthButton />
                    </View>
                </View>
            </View>
        </ThemedView>
    );
    // return <Redirect href="/home" />;
}
