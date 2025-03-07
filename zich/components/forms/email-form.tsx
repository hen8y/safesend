import { RegisterFormType } from "@/app/(auth)/register";
import { useKeyboard } from "@/zich/hooks";
import Checkbox from "expo-checkbox";
import { router } from "expo-router";
import { Dispatch, SetStateAction, useState } from "react";
import { SafeAreaView, ScrollView, TouchableOpacity, View } from "react-native";
import { Iconify } from "react-native-iconify";

import ApplicationLogo from "../application-logo";
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
    const [formError, setFormError] = useState<{
        email: string;
        username: string;
        role: string;
    }>({
        email: "",
        username: "",
        role: "",
    });
    return (
        <SafeAreaView className="flex-1">
            <View className="p-5 w-full flex-1">
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

                    <ThemedText
                        content="Borrower Or Lender?"
                        className="font-bold text-2xl mt-4"
                    />
                    <ThemedText
                        content="Choose your role to continue"
                        className="sub-title mt-2"
                    />

                    <View className="flex-row gap-x-4 mt-5">
                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={() => {
                                setForm({ ...form, role: "borrower" })
                            }}
                            className={`flex-1 border center pt-7 
                                ${form.role === "borrower" ? "border-primary" : "border-neutral-300"} 
                                rounded-xl p-3`
                            }>
                            <RoundedCheckbox
                                checked={form.role === "borrower"}
                                className="justify-end absolute right-3 top-3"
                            />
                            <Iconify
                                icon="mdi:user-outline"
                                size={24}
                                color="#000"
                            />
                            <ThemedText
                                content="Borrower"
                                className="text-center font-bold"
                                color="text-neutral-600 "
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={() => {
                                setForm({ ...form, role: "lender" })
                            }}
                            className={`flex-1 border center pt-7 
                                ${form.role === "lender" ? "border-primary" : "border-neutral-300"} 
                                rounded-xl p-3`
                            }>
                            <RoundedCheckbox
                                checked={form.role === "lender"}
                                className="justify-end absolute right-3 top-3"
                            />
                            <Iconify
                                icon="mdi:user-outline"
                                size={24}
                                color="#000"
                            />
                            <ThemedText
                                content="Lender"
                                className="text-center font-bold"
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <ZichTextInput
                    onChangeText={(e) => setForm({ ...form, username: e })}
                    label="Username"
                    placeholder="Choose username"
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
            </View>

            {!isKeyboardVisible ? (
                <View className="w-full p-5 gap-y-4 mt-10">
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

        </SafeAreaView>
    );
}
