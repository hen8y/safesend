import { Pressable, View } from "react-native";

import { ThemedText } from "../theme/themed-text";

interface ActionSheetHeaderProps {
    title: string;
    onCancel: () => void;
    onComplete: () => void;
}

export default function ActionSheetHeader({
    title,
    onCancel,
    onComplete,
}: ActionSheetHeaderProps): JSX.Element {
    return (
        <View className="flex-row space p-4 h-14 rounded-t-3xl border-b bg-overlay border-theme">
            <Pressable onPress={onCancel}>
                <ThemedText content="Cancel" />
            </Pressable>
            <ThemedText content={title} className="text-xl font-bold" />
            <Pressable onPress={onComplete}>
                <ThemedText content="Done" className="font-semibold" />
            </Pressable>
        </View>
    );
}
