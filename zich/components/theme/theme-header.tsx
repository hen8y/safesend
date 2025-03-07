import { ThemeHeaderProps } from "@/utils/interfaces";
import { useColors } from "@/zich/hooks";
import { Platform, StatusBar, Text, useColorScheme, View } from "react-native";

export function ThemedHeader({
    showTitle = true,
    title,
    rightIcon,
    leftIcon,
    backgroundColor = "bg-theme",
}: ThemeHeaderProps): JSX.Element {
    const colors = useColors();
    return (
        <>
            <StatusBar
                barStyle={
                    useColorScheme() === "dark"
                        ? "light-content"
                        : "dark-content"
                }
                backgroundColor={colors.theme}
            />
            <View
                className={`relative justify-between flex-row items-center px-4 pb-2 ${Platform.OS === "ios" ? "pt-16 min-h-20 pb-3" : "h-20 pt-2"
                    } ${backgroundColor}`}
            >
                {leftIcon && leftIcon}

                <View
                    className={`${leftIcon &&
                        `absolute left-0 right-0 
                        ${Platform.OS === "ios" && "top-20"}`
                        } items-center`}
                >
                    {showTitle && (
                        <Text className="text-2xl font-semibold text-theme">
                            {title}
                        </Text>
                    )}
                </View>

                <View>{rightIcon && rightIcon}</View>
            </View>
        </>
    );
}
