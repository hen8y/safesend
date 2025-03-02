import ApplicationLogo from "@/zich/components/application-logo";
import { ZichTextInput } from "@/zich/components/inputs";
import { AuthThemedView, ThemedText } from "@/zich/components/theme";
import { ZichButton } from "@/zich/components/ui";
import { useKeyboard } from "@/zich/hooks";
import { useState } from "react";
import { Alert, ScrollView, View } from "react-native";

export default function ForgotPassword(): JSX.Element {
    const [isLoading] = useState<boolean>(false);
    const [email, setEmail] = useState<string>("");
    const isKeyboardVisible = useKeyboard();

    const handlePasswordRequest = () => {
        Alert.alert("Password Reset Email Sent", "Please check your email");
    };

    return (
        <AuthThemedView isLoading={isLoading} className="items-center pt-10">
            <ScrollView contentContainerClassName="flex-grow">
                <ApplicationLogo />
                <View className="px-3 w-full mt-14">
                    <ThemedText content="Forgot Password" className="title" />
                    <ThemedText
                        content="Enter your email address and we would send you an email containing a link to reset your password"
                        className="sub-title"
                    />
                    <ZichTextInput
                        onChangeText={(e) => setEmail(e)}
                        label="Email Address"
                        containerClassName="mt-7"
                        placeholder="Your email"
                        autoFocus
                        value={email}
                        onDone={handlePasswordRequest}
                    />
                </View>
            </ScrollView>
            {!isKeyboardVisible && (
                <View className="w-full px-3 gap-y-4 mb-10">
                    <ZichButton
                        onPress={handlePasswordRequest}
                        content="Proceed"
                        textClassName="text-white"
                        isLoading={isLoading}
                        roundedFull
                    />
                </View>
            )}
        </AuthThemedView>
    );
}
