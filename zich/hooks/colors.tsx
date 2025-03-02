import settings from "@/settings/index.json";
import { useColorScheme } from "react-native";

export function useColors() {
    const isDark = useColorScheme() === "dark";
    const themeColors = settings.colors[isDark ? "dark" : "light"];
    return themeColors;
}
