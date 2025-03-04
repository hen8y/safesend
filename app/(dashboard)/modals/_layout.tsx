import { Stack } from "expo-router";

export default function ModalsLayout() {
    return (
        <Stack>
            <Stack.Screen
                name="create-loan"
                options={{
                    presentation: "modal",
                    headerShown: true,
                    title: "Create Loan",
                }}
            />
        </Stack>
    );
}
