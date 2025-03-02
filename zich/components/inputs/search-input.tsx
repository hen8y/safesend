import { TextInput, View } from "react-native";
import { Iconify } from "react-native-iconify";

interface ZichTextInputProps {
    label: string;
    onChangeText: (text: string) => void;
    value: string;
    placeholder?: string;
    containerClassName?: string;
    borderBottom?: boolean;
    autoFocus?: boolean;
}

export default function SearchInput({
    label,
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
