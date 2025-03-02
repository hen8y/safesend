import { useColors } from "@/zich/hooks";
import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { Iconify } from "react-native-iconify";

import { ToggleInput } from "../../inputs";

interface ProfileTabProps {
    name: string;
    details?: any;
    icon: JSX.Element;
    type: "link" | "action" | "toggle" | "";
    action?: () => void;
    trueWhen?: boolean;
    textClassName?: string;
}

export default function ProfileTab({
    name,
    details,
    icon,
    type,
    action,
    trueWhen,
    textClassName,
}: ProfileTabProps): JSX.Element {
    const colors = useColors();
    const DetailsContainer = () => {
        if (type === "link") {
            return (
                <Iconify
                    icon="icon-park-outline:right"
                    size={28}
                    color={colors.icon}
                />
            );
        } else if (type === "toggle") {
            return action ? (
                <ToggleInput handleToggle={action} trueWhen={trueWhen} />
            ) : null;
        }
    };

    const handlePress = () => {
        type === "link" && router.push(details);
        action && action();
    };

    return (
        <Pressable onPress={handlePress} className="flex-row gap-x-2 space">
            <View className="flex-row gap-x-4 items-center">
                {icon}
                <Text className={`${textClassName || "text-theme"}`}>
                    {name}
                </Text>
            </View>
            {DetailsContainer()}
        </Pressable>
    );
}
