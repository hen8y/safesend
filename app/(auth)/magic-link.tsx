import ApplicationLogo from "@/zich/components/application-logo";
import { ZichTextInput } from "@/zich/components/inputs";
import { AuthThemedView, ThemedText } from "@/zich/components/theme";
import { ZichButton } from "@/zich/components/ui";
import { useKeyboard } from "@/zich/hooks";
import { useState } from "react";
import { ScrollView, View } from "react-native";

export default function MagicLink(): JSX.Element {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [email, setEmail] = useState<string>("");
    const [emailError, setEmailError] = useState<string>("");
    const isKeyboardVisible = useKeyboard();

    const handleSendMagicLink = async () => {
        alert("Magic link sent to your email");
    };

    return (
        <AuthThemedView isLoading={isLoading} className="items-center pt-10">
            <ScrollView contentContainerClassName="flex-grow">
                <ApplicationLogo />
                <View className="px-3 w-full mt-14">
                    <ThemedText
                        content="Login with Magic Link"
                        className="title"
                    />
                    <ThemedText
                        content="Enter your email address and we would send you an email containing a link to login"
                        className="sub-title mt-2"
                    />
                    <ZichTextInput
                        onChangeText={(e) => setEmail(e)}
                        label="Email Address"
                        containerClassName="mt-7"
                        placeholder="Your email"
                        autoFocus
                        value={email}
                        error={emailError}
                        onDone={handleSendMagicLink}
                    />
                </View>
            </ScrollView>
            {!isKeyboardVisible && (
                <View className="w-full px-3 gap-y-4 mb-10">
                    <ZichButton
                        onPress={handleSendMagicLink}
                        content="Send Magic Link"
                        textClassName="text-white"
                        isLoading={isLoading}
                        roundedFull
                    />
                </View>
            )}
        </AuthThemedView>
    );
}
