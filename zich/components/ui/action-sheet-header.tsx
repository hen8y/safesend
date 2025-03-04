import { Pressable, View } from "react-native";

import { ThemedText } from "../theme/themed-text";

interface ActionSheetHeaderProps {
    title: string;
    onCancel: () => void;
    onComplete: () => void;
    cancelLabel?: string | React.ReactNode;
    completeLabel?: string | React.ReactNode;
}

export default function ActionSheetHeader({
    title,
    onCancel,
    onComplete,
    completeLabel = "Done",
    cancelLabel = "Cancel",
}: ActionSheetHeaderProps): JSX.Element {
    return (
        <View className="flex-row space p-4 min-h-14 rounded-t-3xl border-b bg-overlay border-theme">
            <Pressable onPress={onCancel}>
                {typeof cancelLabel === "string" ? (
                    <ThemedText content={cancelLabel} color="text-primary-color" />
                ) : (
                    cancelLabel
                )}
            </Pressable>
            <ThemedText content={title} className="text-xl font-bold" />
            <Pressable onPress={onComplete}>
                {typeof completeLabel === "string" ? (
                    <ThemedText content={completeLabel} className="font-semibold" />
                ) : (
                    completeLabel
                )}
            </Pressable>
        </View>
    );
}
