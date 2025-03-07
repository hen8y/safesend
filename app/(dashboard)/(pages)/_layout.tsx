import { BackHeader } from "@/zich/components/ui";
import { useColors } from "@/zich/hooks";
import { Stack } from "expo-router";

export default function PagesLayout(): JSX.Element {
    const colors = useColors();

    return (
        <Stack
            screenOptions={{
                animation: "none"
            }}
        >
            <Stack.Screen
                name="notifications"
                options={{
                    title: "Notifications",
                    headerShadowVisible: true,
                }}
            />
            <Stack.Screen
                name="loan-details"
                options={{
                    title: "Loan Details",
                    headerLeft: () => <BackHeader />,
                    headerShadowVisible: false,
                }}
            />
            <Stack.Screen
                name="transaction-history"
                options={{
                    title: "Transaction History",
                    headerLeft: () => <BackHeader />,
                    headerShadowVisible: false,
                }}
            />
            <Stack.Screen
                name="payment-methods"
                options={{
                    title: "Payment Methods",
                    headerLeft: () => <BackHeader />,
                    headerShadowVisible: false,
                }}
            />
            <Stack.Screen
                name="report-issue"
                options={{
                    title: "Report Issue",
                    headerLeft: () => <BackHeader />,
                    headerShadowVisible: false,
                }}
            />
            <Stack.Screen
                name="terms-privacy"
                options={{
                    title: "Terms & Privacy",
                    headerLeft: () => <BackHeader />,
                    headerShadowVisible: false,
                }}
            />
            <Stack.Screen
                name="help-support"
                options={{
                    title: "Help & Support",
                    headerLeft: () => <BackHeader />,
                    headerShadowVisible: false,
                }}
            />
            <Stack.Screen
                name="settings"
                options={{
                    title: "Settings",
                    headerLeft: () => <BackHeader />,
                    headerShadowVisible: false,
                }}
            />
            <Stack.Screen
                name="profile"
                options={{
                    title: "Profile",
                    headerLeft: () => <BackHeader />,
                    headerShadowVisible: false,
                }}
            />
        </Stack>
    );
}
