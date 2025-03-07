import { ThemedView } from "@/zich/components/theme";
import { Card, ProfileContainer, ProfileTab } from "@/zich/components/ui";
import { useColors } from "@/zich/hooks";
import { Iconify } from "react-native-iconify";

export default function Profile() {
    const colors = useColors();

    const icons = {
        account: (
            <Iconify icon="codicon:account" size={26} color={colors.icon} />
        ),
        darkMode: <Iconify icon="tdesign:moon" size={26} color={colors.icon} />,
    };

    return (
        <ThemedView className="px-4">
            <ProfileContainer>
                <Card>
                    <ProfileTab
                        name="Account"
                        details="./account"
                        icon={icons.account}
                        type="link"
                    />
                </Card>
            </ProfileContainer>
        </ThemedView>
    );
}
