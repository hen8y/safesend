import { RegisterFormType } from "@/app/(auth)/register";
import { useKeyboard } from "@/zich/hooks";
import { router } from "expo-router";
import { Dispatch, SetStateAction, useState } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";

import { RoundedCheckbox, ZichTextInput } from "../inputs";
import { ThemedText } from "../theme";
import { ZichButton } from "../ui";

interface EmailFormProps {
    onComplete: () => void;
    isLoading: boolean;
    form: RegisterFormType;
    setForm: Dispatch<SetStateAction<RegisterFormType>>;
}

export default function EmailForm({
    onComplete,
    isLoading,
    form,
    setForm,
}: EmailFormProps): JSX.Element {
    const isKeyboardVisible = useKeyboard();
    const [termsIsChecked, setTermsIsChecked] = useState<boolean>(false);
    const [formError, setFormError] = useState<{
        email: string;
        username: string;
        checkbox: string;
    }>({
        email: "",
        username: "",
        checkbox: "",
    });
    return (
        <>
            <ScrollView
                contentContainerClassName="flex-grow"
                className="px-5 mt-10 w-full"
            >
                <ZichTextInput
                    onChangeText={(e) => setForm({ ...form, username: e })}
                    label="Username"
                    placeholder="Choose username"
                    autoFocus
                    value={form.username}
                    error={formError.username}
                />

                <ZichTextInput
                    onChangeText={(e) => setForm({ ...form, email: e })}
                    label="Email Address"
                    containerClassName="mt-5"
                    placeholder="Your email"
                    value={form.email}
                    error={formError.email}
                    inputMode="email"
                    onDone={onComplete}
                />
            </ScrollView>

            {!isKeyboardVisible ? (
                <View className="mb-10 w-full px-5 gap-y-4">
                    {formError.checkbox && (
                        <ThemedText
                            content={formError.checkbox}
                            className="text-danger text-sm"
                        />
                    )}
                    <RoundedCheckbox
                        error={formError.checkbox}
                        onChange={(e) => setTermsIsChecked(e)}
                        label="I accept the terms and privacy policy"
                    />
                    <ZichButton
                        onPress={onComplete}
                        content="Proceed"
                        isLoading={isLoading}
                        textClassName="text-white"
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
                <View className="h-60" />
            )}
        </>
    );
}
