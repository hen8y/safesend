import { Pressable, Text, View } from "react-native";
import { ThemedText } from "../theme";

interface NotificationTabProps {
    title: string;
    time: string;
    message: string;
    isRead?: boolean;
    onPress?: () => void;
}

export default function NotificationTab({
    title,
    time,
    message,
    isRead = false,
    onPress,
}: NotificationTabProps): JSX.Element {
    return (
        <View
            className={`w-full flex-row gap-x-3 border-b border-neutral-300 dark:border-neutral-700 p-3 ${
                !isRead && "bg-blue-600/10"
            }`}
        >
            {!isRead && (
                <Text className="text-red-500 text-sm dark:text-red-600/90">
                    ●
                </Text>
            )}
            {isRead && <Text className="w-3"></Text>}
            <View className="rounded-md bg-neutral-600 size-10" />
            <View className="flex-1">
                <View className="flex-row space">
                    <ThemedText content={title} className="font-semibold" />
                    <ThemedText content={time} className="text-sm opacity-70" />
                </View>
                <ThemedText content={message} className="mt-2 opacity-70" />
                {!isRead && (
                    <Pressable onPress={onPress}>
                        <ThemedText
                            content="Mark as read"
                            className="text-primary font-semibold mt-3"
                        />
                    </Pressable>
                )}
            </View>
        </View>
    );
}
