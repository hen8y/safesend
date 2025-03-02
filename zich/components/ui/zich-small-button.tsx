import { Text, TouchableOpacity, View } from "react-native";

import { ZichButtonProps } from "./zich-button";

export default function ZichSmallButton({
    content,
    isLoading,
    onPress,
    className,
    roundedFull,
}: ZichButtonProps): JSX.Element {
    return (
        <View className="flex-row">
            <TouchableOpacity
                onPress={onPress}
                className={`${
                    isLoading
                        ? "bg-neutral-400 border border-neutral-500"
                        : "bg-primary"
                } px-5 w-auto shadow shadow-neutral-300 dark:shadow-none max-w-fit py-3 btn ${
                    roundedFull ? "rounded-full" : "rounded-lg"
                } ${className}`}
            >
                <Text
                    className={`${
                        isLoading ? "text-neutral-700" : "text-white"
                    }`}
                >
                    {content}
                </Text>
            </TouchableOpacity>
        </View>
    );
}
