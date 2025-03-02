import { ThemedText, ThemedView } from "@/zich/components/theme";
import { ZichButton } from "@/zich/components/ui";
import { router } from "expo-router";
import { Image, View } from "react-native";

export default function NotFoundScreen(): JSX.Element {
    return (
        <ThemedView className="pt-10">
            <View className="center h-screen">
                <Image
                    source={require("@/assets/images/error/404.png")}
                    className="size-60 absolute top-40"
                />
                <View className="mt-32 w-4/6 mx-auto center">
                    <ThemedText content="This screen doesn't exist." />
                    <ThemedText content="Go to home screen!" />
                    <ZichButton
                        onPress={() => router.replace("./")}
                        content="Go Home"
                        isLoading={false}
                        textClassName="text-white"
                        className="mt-7"
                        roundedFull
                    />
                </View>
            </View>
        </ThemedView>
    );
}
