import { EmailFormProps, RegisterFormProps } from "@/utils/interfaces";
import { useKeyboard } from "@/zich/hooks";
import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { SafeAreaView, TouchableOpacity, View } from "react-native";
import { Iconify } from "react-native-iconify";
import * as z from "zod";

import ApplicationLogo from "../application-logo";
import { RoundedCheckbox, ZichTextInput } from "../inputs";
import { ThemedText } from "../theme";
import { ZichButton } from "../ui";

const emailFormSchema = z.object({
    username: z.string().min(3, "Username must be at least 3 characters"),
    email: z.string().email("Please enter a valid email address"),
    role: z.enum(["borrower", "lender"], { required_error: "Please select a role" })
});

type EmailFormSchema = z.infer<typeof emailFormSchema>;



export default function EmailForm({
    onComplete,
    isLoading,
    form,
    setForm,
}: EmailFormProps): JSX.Element {
    const isKeyboardVisible = useKeyboard();

    const { control, handleSubmit, formState: { errors } } = useForm<EmailFormSchema>({
        resolver: zodResolver(emailFormSchema),
        defaultValues: {
            username: form.username,
            email: form.email,
            role: form.role
        }
    });

    const onSubmit = (data: EmailFormSchema) => {
        setForm((prev: RegisterFormProps) => ({
            ...prev,
            ...data
        }));
        onComplete();
    };

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

                    <Controller
                        control={control}
                        name="role"
                        render={({ field: { onChange, value } }: { field: { onChange: (value: "borrower" | "lender") => void; value: "borrower" | "lender" } }) => (
                            <View className="flex-row gap-x-4 mt-5">
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    onPress={() => onChange("borrower")}
                                    className={`flex-1 border center pt-7 
                                        ${value === "borrower" ? "border-primary" : "border-neutral-300"} 
                                        rounded-xl p-3`}
                                >
                                    <RoundedCheckbox
                                        checked={value === "borrower"}
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
                                        color="text-neutral-600"
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    onPress={() => onChange("lender")}
                                    className={`flex-1 border center pt-7 
                                        ${value === "lender" ? "border-primary" : "border-neutral-300"} 
                                        rounded-xl p-3`}
                                >
                                    <RoundedCheckbox
                                        checked={value === "lender"}
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
                        )}
                    />
                    {errors.role && (
                        <ThemedText
                            content={errors.role.message}
                            className="text-danger mt-2"
                        />
                    )}
                </View>

                <Controller
                    control={control}
                    name="username"
                    render={({ field: { onChange, value } }: { field: { onChange: (value: string) => void; value: string } }) => (
                        <ZichTextInput
                            onChangeText={onChange}
                            label="Username"
                            placeholder="Choose username"
                            value={value}
                            error={errors.username?.message}
                        />
                    )}
                />

                <Controller
                    control={control}
                    name="email"
                    render={({ field: { onChange, value } }: { field: { onChange: (value: string) => void; value: string } }) => (
                        <ZichTextInput
                            onChangeText={onChange}
                            label="Email Address"
                            containerClassName="mt-5"
                            placeholder="Your email"
                            value={value}
                            error={errors.email?.message}
                            inputMode="email"
                            onDone={handleSubmit(onSubmit)}
                        />
                    )}
                />
            </View>

            {!isKeyboardVisible ? (
                <View className="w-full p-5 gap-y-4 mt-10">
                    <ZichButton
                        onPress={handleSubmit(onSubmit)}
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
