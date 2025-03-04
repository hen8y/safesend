import { setColorScheme } from "@/zich/scripts/utils";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
    configureReanimatedLogger,
    ReanimatedLogLevel,
} from "react-native-reanimated";

import "@/global.css";
import "react-native-get-random-values";
import "react-native-reanimated";

SplashScreen.preventAutoHideAsync();
configureReanimatedLogger({
    level: ReanimatedLogLevel.warn,
    strict: false,
});

export default function RootLayout(): JSX.Element | null {
    const [loaded, error] = useFonts({
        SpaceMono: require("@/assets/fonts/SpaceMono-Regular.ttf"),
    });
    useEffect(() => {
        if (error) throw error;
        if (loaded) {
            setColorScheme("light");
            SplashScreen.hideAsync();
        }
    }, [error, loaded]);

    if (!loaded || error) return null;

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Stack>
                <Stack.Screen name="index" options={{ headerShown: false }} />
                <Stack.Screen name="(auth)" options={{ headerShown: false }} />
                <Stack.Screen
                    name="(dashboard)"
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="+not-found"
                    options={{ headerShown: false }}
                />
            </Stack>
        </GestureHandlerRootView>
    );
}
