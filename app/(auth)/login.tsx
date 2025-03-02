import ApplicationLogo from "@/zich/components/application-logo";
import { PasswordInput, ZichTextInput } from "@/zich/components/inputs";
import { AuthThemedView, ThemedText } from "@/zich/components/theme";
import { ZichButton } from "@/zich/components/ui";
import { useColors } from "@/zich/hooks";
import { Link, router } from "expo-router";
import { useState } from "react";
import { TouchableOpacity, View } from "react-native";

export default function Login(): JSX.Element {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [form, setForm] = useState<{ email: string; password: string }>({
        email: "",
        password: "",
    });
    const [formError, setFormError] = useState<{
        email: string;
        password: string;
    }>({
        email: "",
        password: "",
    });
    const colors = useColors();
    const handleTextChange = (type: string, text: string) => {
        const error = text.trim() === "" ? `Please enter your ${type}` : "";

        if (type === "email") {
            setForm({ ...form, email: text });
            setFormError({ ...formError, email: error });
        } else {
            setForm({ ...form, password: text });
            setFormError({ ...formError, password: error });
        }
    };

    const handleLogin = async () => {
        router.replace("/dashboard");
    };

    return (
        <AuthThemedView isLoading={isLoading} className="items-center pt-20">
            <ApplicationLogo />
            <View className="px-5 w-full mt-14">
                <ThemedText content="Welcome Back" className="title" />

                <View className="mt-10">
                    <ZichTextInput
                        onChangeText={(e) => handleTextChange("email", e)}
                        label="Email"
                        placeholder="Your email"
                        autoFocus
                        value={form.email}
                        error={formError.email}
                        inputMode="email"
                    />
                    <PasswordInput
                        onChangeText={(e) => handleTextChange("password", e)}
                        label="Password"
                        containerClassName="mt-5"
                        placeholder="Enter your password"
                        value={form.password}
                        error={formError.password}
                        onDone={handleLogin}
                    />
                    <Link
                        href={"/forgot-password"}
                        className="mt-2 mb-10 ml-auto"
                    >
                        <ThemedText
                            className="text-primary font-semibold"
                            content="Forgot Password?"
                        />
                    </Link>
                    <ZichButton
                        onPress={handleLogin}
                        content="Sign in"
                        textClassName="text-white"
                        isLoading={isLoading}
                        roundedFull
                    />
                    <View className="gap-2 my-8 flex-row items-center justify-center">
                        <View className="h-[1px] flex-1 bg-overlay-2" />
                        <ThemedText content="Or continue using" />
                        <View className="h-[1px] flex-1 bg-overlay-2" />
                    </View>

                    <ZichButton
                        onPress={() => router.push("/(auth)/magic-link")}
                        content="Sign in with Magic Link"
                        roundedFull
                        textClassName="text-theme"
                        theme="bg-secondary"
                    />
                </View>
            </View>
            <View className="center flex-row gap-x-1 flex-1">
                <ThemedText content="Don't have an account?" />
                <TouchableOpacity onPress={() => router.replace("./register")}>
                    <ThemedText content="Sign up" className="text-link" />
                </TouchableOpacity>
            </View>
        </AuthThemedView>
    );
}
