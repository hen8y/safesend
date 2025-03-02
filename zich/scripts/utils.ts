import AsyncStorage from "@react-native-async-storage/async-storage";
import { colorScheme } from "nativewind";

export const setColorScheme = (scheme: "light" | "dark" | "system") => {
    colorScheme.set(scheme);
    AsyncStorage.setItem("colorScheme", scheme);
};

export const checkColorScheme = async () => {
    const scheme = (await AsyncStorage.getItem("colorScheme")) ?? "light";
    setColorScheme(scheme as "light" | "dark" | "system");
};
