import { useColors } from "@/zich/hooks";
import { useState } from "react";
import { Pressable, TextInput, useColorScheme, View } from "react-native";
import { Iconify } from "react-native-iconify";

import { ThemedText } from "../theme";
import { ZichTextInputProps } from "./zich-text-input";

export default function PasswordInput({
    label,
    value,
    placeholder,
    onChangeText,
    containerClassName,
    inputClassName,
    hideLabel = false,
    error = "",
    autoFocus = false,
    onDone,
}: ZichTextInputProps): JSX.Element {
    const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true);
    const isDark = useColorScheme() === "dark";

    const colors = useColors();
    const borderClass = error
        ? "border-danger focus:border-primary/50"
        : "border-theme focus:border-primary/50";

    const icon = secureTextEntry ? (
        <Iconify icon="weui:eyes-on-filled" size={18} color={colors.icon} />
    ) : (
        <Iconify icon="weui:eyes-off-filled" size={18} color={colors.icon} />
    );
    return (
        <View className={`w-full ${containerClassName}`}>
            <ThemedText className={`${hideLabel ? "hidden" : ""} input-label`}>
                {label}
            </ThemedText>
            <View className="flex-row items-center">
                <TextInput
                    onChangeText={onChangeText}
                    placeholder={placeholder || ""}
                    value={value}
                    placeholderTextColor={"#aaa"}
                    autoCapitalize="none"
                    className={`
                        input rounded-r-none flex-1 
                        ${inputClassName || ""}
                        ${borderClass}
                    `}
                    secureTextEntry={secureTextEntry}
                    autoFocus={autoFocus}
                    keyboardAppearance={isDark ? "dark" : "light"}
                    returnKeyType="done"
                    onSubmitEditing={onDone}
                />
                <View className="size-16 mt-2 border-theme rounded-r-lg center  border-l-0 border">
                    <Pressable
                        onPress={() => setSecureTextEntry(!secureTextEntry)}
                    >
                        {icon}
                    </Pressable>
                </View>
            </View>
            {error && <ThemedText className="text-danger" content={error} />}
        </View>
    );
}
