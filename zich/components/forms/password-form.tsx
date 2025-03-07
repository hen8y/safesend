import { RegisterFormType } from "@/app/(auth)/register";
import { useKeyboard } from "@/zich/hooks";
import { router } from "expo-router";
import { Dispatch, SetStateAction, useState } from "react";
import { SafeAreaView, ScrollView, TouchableOpacity, View } from "react-native";

import ApplicationLogo from "../application-logo";
import { PasswordInput } from "../inputs";
import { ThemedText } from "../theme";
import { ZichButton } from "../ui";

interface PasswordFormProps {
    onComplete: () => void;
    isLoading: boolean;
    form: RegisterFormType;
    setForm: Dispatch<SetStateAction<RegisterFormType>>;
}

export default function PasswordForm({
    onComplete,
    isLoading,
    form,
    setForm,
}: PasswordFormProps): JSX.Element {
    const isKeyboardVisible = useKeyboard();
    const [formError, setFormError] = useState<{
        password: string;
        confirmPassword: string;
    }>({
        password: "",
        confirmPassword: "",
    });

    return (
        <SafeAreaView className="flex-1">
            <View className="px-5 w-full flex-1">
                <ApplicationLogo />
                <View className="w-full mt-10 mb-4">
                    <ThemedText
                        content="Create an Account"
                        className="text-3xl font-semibold"
                    />

                    <View className="flex-row mt-7 gap-2 w-full">
                        {[1, 2, 3].map((i) => (
                            <View
                                key={i}
                                className={`h-1 ${1 === i
                                    ? "bg-primary rounded-full"
                                    : "bg-neutral-300 dark:bg-neutral-700"
                                    } w-12`}
                            ></View>
                        ))}
                    </View>
                </View>
                <ThemedText
                    content="Create password"
                    className="font-bold text-2xl"
                />
                <ThemedText
                    content="Use a strong password with a mix of numbers, uppercase alphabets and special characters"
                    className="sub-title mt-2"
                />

                <PasswordInput
                    onChangeText={(e) => setForm({ ...form, password: e })}
                    label="Password"
                    containerClassName="mt-5"
                    placeholder="Enter your password"
                    autoFocus
                    value={form.password}
                    error={formError.password}
                />

                <PasswordInput
                    onChangeText={(e) =>
                        setForm({ ...form, confirmPassword: e })
                    }
                    label="Confirm Password"
                    containerClassName="mt-5"
                    placeholder="Confirm your password"
                    value={form.confirmPassword || ""}
                    error={formError.confirmPassword}
                    onDone={onComplete}
                />
            </View>

            {!isKeyboardVisible ? (
                <View className="w-full p-5 gap-y-4">
                    <ZichButton
                        onPress={onComplete}
                        content="Proceed"
                        textClassName="text-white"
                        isLoading={isLoading}
                        roundedFull
                    />
                    <View className="center flex-row gap-x-1">
                        <ThemedText content="Already have an account?" />
                        <TouchableOpacity
                            onPress={() => router.replace("./login")}
                        >
                            <ThemedText
                                content="Log in"
                                className="text-link"
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            ) : (
                <View className="h-40" />
            )}
        </SafeAreaView>
    );
}
