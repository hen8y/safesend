import { ZichTextInputProps } from "@/utils/interfaces";
import { TextInput, View } from "react-native";
import { Iconify } from "react-native-iconify";

export default function SearchInput({
    value,
    placeholder = "Search",
    onChangeText,
    containerClassName,
    autoFocus = false,
}: ZichTextInputProps): JSX.Element {
    return (
        <View
            className={`w-full ${containerClassName} relative input-search flex-row items-center`}
        >
            <Iconify
                icon="mdi:search"
                size={20}
                color="#aaa"
                className="absolute left-0"
            />
            <TextInput
                onChangeText={onChangeText}
                placeholder={placeholder || ""}
                value={value}
                placeholderTextColor={"#aaa"}
                autoCapitalize="none"
                className="h-12 flex-1"
                autoFocus={autoFocus}
                inputMode="search"
            />
        </View>
    );
}
