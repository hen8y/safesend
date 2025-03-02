import { ThemedText } from "@/zich/components/theme/themed-text";
import { View } from "react-native";
import { ViewProps } from "react-native-svg/lib/typescript/fabric/utils";

interface DisplayProps extends ViewProps {
    title: string;
    textOnChange?: string;
}

export default function Display({
    title,
    textOnChange,
    ...props
}: DisplayProps) {
    return (
        <View className="w-full mt-8 border-b-theme pb-8">
            <ThemedText
                content={title}
                className="mb-2 font-semibold text-xl"
            />
            <View {...props} />
            {textOnChange && (
                <ThemedText
                    className="mt-1 opacity-70"
                    content={textOnChange}
                />
            )}
        </View>
    );
}
