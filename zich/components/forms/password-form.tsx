import { RegisterFormType } from "@/app/(auth)/register";
import { useKeyboard } from "@/zich/hooks";
import { router } from "expo-router";
import { Dispatch, SetStateAction, useState } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";

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
        <>
            <ScrollView
                contentContainerClassName="flex-grow"
                className="px-5 w-full mt-10"
            >
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
            </ScrollView>

            {!isKeyboardVisible ? (
                <View className="mb-10 w-full px-5 gap-y-4">
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
        </>
    );
}
