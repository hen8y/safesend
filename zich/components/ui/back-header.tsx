import { router } from "expo-router";
import {
    Platform,
    Pressable,
    StatusBar,
    Text,
    useColorScheme,
    View,
} from "react-native";
import { Iconify } from "react-native-iconify";
import { HeaderProps } from "../theme/theme-header";

export interface BackHeaderProps extends HeaderProps {
    onBack?: () => void;
}

export function BackHeader({
    showTitle = true,
    title,
    onBack,
}: BackHeaderProps): JSX.Element {
    const handleBack = () => {
        if (onBack) {
            onBack();
        } else {
            if (router.canGoBack()) {
                router.back();
            } else {
                router.replace("/home");
            }
        }
    };

    return (
        <>
            <StatusBar
                barStyle={
                    useColorScheme() === "dark"
                        ? "light-content"
                        : "dark-content"
                }
            />
            <View
                className={`relative flex-row items-center justify-between pb-2 bg-theme border-b border-b-theme ${
                    Platform.OS === "ios" && "pt-5"
                }`}
            >
                <Pressable onPress={handleBack}>
                    <Iconify icon="mdi:chevron-left" size={30} />
                </Pressable>

                <View
                    className={`absolute left-0 right-0 items-center ${
                        Platform.OS === "ios" && "top-6"
                    }`}
                >
                    {showTitle && (
                        <Text className="text-lg font-semibold text-theme">
                            {title}
                        </Text>
                    )}
                </View>
            </View>
        </>
    );
}
