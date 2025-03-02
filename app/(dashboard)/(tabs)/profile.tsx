import { ThemedView } from "@/zich/components/theme";
import { Card, HR, ProfileContainer, ProfileTab } from "@/zich/components/ui";
import { useColors } from "@/zich/hooks";
import { setColorScheme } from "@/zich/scripts/utils";
import { colorScheme } from "nativewind";
import { View } from "react-native";
import { Iconify } from "react-native-iconify";

export type ProfileFormType = {
    username: string;
    email: string;
    avi: any;
};

export default function Profile() {
    const colors = useColors();

    const icons = {
        account: (
            <Iconify icon="codicon:account" size={26} color={colors.icon} />
        ),
        darkMode: <Iconify icon="tdesign:moon" size={26} color={colors.icon} />,
    };

    return (
        <ThemedView className="pt-10 px-4">
            <ProfileContainer>
                <Card className="mt-5">
                    <View className="gap-y-6">
                        <ProfileTab
                            name="Account"
                            details="./account"
                            icon={icons.account}
                            type="link"
                        />
                    </View>
                </Card>
            </ProfileContainer>
        </ThemedView>
    );
}
