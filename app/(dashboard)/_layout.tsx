import { BackHeader } from "@/zich/components/ui";
import { Stack } from "expo-router";

export default function NavigationLayout(): JSX.Element {
    return (
        <Stack
            screenOptions={{
                animation: "none"
            }}
        >
            <Stack.Screen
                name="(tabs)"
                options={{ headerShown: false, title: "Home" }}
            />

            <Stack.Screen
                name="(pages)"
                options={{
                    headerLeft: () => <BackHeader />,
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="modals"
                options={{
                    presentation: "modal",
                    headerShown: false,
                }}
            />
        </Stack>
    );
}
