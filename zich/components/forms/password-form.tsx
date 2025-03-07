import { PasswordFormProps, RegisterFormProps } from "@/utils/interfaces";
import { useKeyboard } from "@/zich/hooks";
import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
import { Dispatch, SetStateAction } from "react";
import { Controller, useForm } from "react-hook-form";
import { SafeAreaView, TouchableOpacity, View } from "react-native";
import * as z from "zod";

import ApplicationLogo from "../application-logo";
import { PasswordInput } from "../inputs";
import { ThemedText } from "../theme";
import { ZichButton } from "../ui";

const passwordFormSchema = z.object({
    password: z.string()
        .min(8, "Password must be at least 8 characters")
        .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
        .regex(/[0-9]/, "Password must contain at least one number")
        .regex(/[^A-Za-z0-9]/, "Password must contain at least one special character"),
    confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"]
});

type PasswordFormSchema = z.infer<typeof passwordFormSchema>;

export default function PasswordForm({
    onComplete,
    isLoading,
    form,
    setForm,
}: PasswordFormProps): JSX.Element {
    const isKeyboardVisible = useKeyboard();

    const { control, handleSubmit, formState: { errors } } = useForm<PasswordFormSchema>({
        resolver: zodResolver(passwordFormSchema),
        defaultValues: {
            password: form.password,
            confirmPassword: form.confirmPassword
        }
    });

    const onSubmit = (data: PasswordFormSchema) => {
        setForm((prev: RegisterFormProps) => ({
            ...prev,
            ...data
        }));
        onComplete();
    };

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

                <Controller
                    control={control}
                    name="password"
                    render={({ field: { onChange, value } }: { field: { onChange: (value: string) => void; value: string } }) => (
                        <PasswordInput
                            onChangeText={onChange}
                            label="Password"
                            containerClassName="mt-5"
                            placeholder="Enter your password"
                            autoFocus
                            value={value}
                            error={errors.password?.message}
                        />
                    )}
                />

                <Controller
                    control={control}
                    name="confirmPassword"
                    render={({ field: { onChange, value } }: { field: { onChange: (value: string) => void; value: string } }) => (
                        <PasswordInput
                            onChangeText={onChange}
                            label="Confirm Password"
                            containerClassName="mt-5"
                            placeholder="Confirm your password"
                            value={value}
                            error={errors.confirmPassword?.message}
                            onDone={handleSubmit(onSubmit)}
                        />
                    )}
                />
            </View>

            {!isKeyboardVisible ? (
                <View className="w-full p-5 gap-y-4">
                    <ZichButton
                        onPress={handleSubmit(onSubmit)}
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
