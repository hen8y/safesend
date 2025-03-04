import { TextInput, useColorScheme, View } from "react-native";

import { ThemedText } from "../theme/themed-text";

export interface ZichTextInputProps {
    label: string;
    onChangeText: (text: string) => void;
    value: string;
    placeholder?: string;
    containerClassName?: string;
    hideLabel?: boolean;
    inputClassName?: string;
    borderBottom?: boolean;
    error?: string | null;
    autoFocus?: boolean;
    inputMode?: "text" | "email" | "numeric" | "tel" | "search";
    onDone?: () => void;
}

export default function ZichTextInput({
    label,
    value,
    placeholder,
    onChangeText,
    containerClassName,
    inputClassName,
    hideLabel = false,
    borderBottom = false,
    error,
    autoFocus = false,
    inputMode = "text",
    onDone,
}: ZichTextInputProps): JSX.Element {
    const isDark = useColorScheme() === "dark";
    const borderClass = error
        ? "border-danger focus:border-primary/50"
        : borderBottom
            ? "border-b-theme focus:border-primary/50"
            : "border-theme focus:border-primary/50";

    return (
        <View className={`w-full ${containerClassName}`}>
            <ThemedText className={`${hideLabel ? "hidden" : ""} input-label`}>
                {label}
            </ThemedText>
            <TextInput
                onChangeText={onChangeText}
                placeholder={placeholder || ""}
                value={value}
                placeholderTextColor={"#aaa"}
                autoCapitalize="none"
                className={`
                    ${borderBottom ? "ghost-input" : "input"}
                    ${inputClassName || ""}
                    ${borderClass}
                `}
                autoFocus={autoFocus}
                inputMode={inputMode}
                returnKeyType="done"
                onSubmitEditing={onDone}
            />
            {error && <ThemedText className="text-danger" content={error} />}
        </View>
    );
}
