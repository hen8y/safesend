import { DefaultTheme, Theme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { useColorScheme } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
    configureReanimatedLogger,
    ReanimatedLogLevel,
} from "react-native-reanimated";

import "@/global.css";
import "react-native-get-random-values";
import "react-native-reanimated";

SplashScreen.preventAutoHideAsync();
const DarkTheme: Theme = {
    dark: true,
    colors: DefaultTheme.colors,
    fonts: {
        ...DefaultTheme.fonts,
    },
};

configureReanimatedLogger({
    level: ReanimatedLogLevel.warn,
    strict: false,
});

export default function RootLayout(): JSX.Element | null {
    const [loaded, error] = useFonts({
        SpaceMono: require("@/assets/fonts/SpaceMono-Regular.ttf"),
    });
    const colorScheme = useColorScheme();
    useEffect(() => {
        if (error) throw error;
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [error, loaded]);

    if (!loaded || error) return null;

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <ThemeProvider
                value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
            >
                <Stack>
                    <Stack.Screen
                        name="index"
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="(auth)"
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="(dashboard)"
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="+not-found"
                        options={{ headerShown: false }}
                    />
                </Stack>
            </ThemeProvider>
        </GestureHandlerRootView>
    );
}
