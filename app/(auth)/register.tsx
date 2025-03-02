import ApplicationLogo from "@/zich/components/application-logo";
import { EmailForm, PasswordForm, VerificationForm } from "@/zich/components/forms";
import { AuthThemedView, ThemedText } from "@/zich/components/theme";
import { router } from "expo-router";
import { useState } from "react";
import { View } from "react-native";

export type RegisterFormType = {
    email: string;
    username: string;
    password: string;
    confirmPassword?: string;
};

export default function Register(): JSX.Element {
    const [step, setStep] = useState<number>(1);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [form, setForm] = useState<RegisterFormType>({
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
    });
    const handleSignUp = async () => {
        router.replace("/home");
    };

    const handleVerificationForm = () => {
        setStep(3);
    };

    const handleGoBack = () => {
        setStep(2);
    };
    return (
        <AuthThemedView isLoading={isLoading} className="items-center pt-20">
            <ApplicationLogo />
            <View className="px-5 w-full mt-14">
                <ThemedText
                    content="Create an Account"
                    className="text-3xl font-semibold"
                />

                <View className="flex-row mt-7 gap-2 w-full">
                    {[1, 2, 3].map((i) => (
                        <View
                            key={i}
                            className={`h-1 ${
                                step === i
                                    ? "bg-primary rounded-full"
                                    : "bg-neutral-300 dark:bg-neutral-700"
                            } w-12`}
                        ></View>
                    ))}
                </View>
            </View>
            {step === 1 ? (
                <EmailForm
                    form={form}
                    setForm={setForm}
                    isLoading={isLoading}
                    onComplete={() => setStep(2)}
                />
            ) : step === 2 ? (
                <VerificationForm
                    isLoading={isLoading}
                    handleVerificationForm={handleVerificationForm}
                    handleGoBack={handleGoBack}
                />
            ) : (
                <PasswordForm
                    form={form}
                    setForm={setForm}
                    isLoading={isLoading}
                    onComplete={handleSignUp}
                />
            )}
        </AuthThemedView>
    );
}
