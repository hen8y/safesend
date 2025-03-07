import { VerificationFormProps } from "@/utils/interfaces";
import { useKeyboard } from "@/zich/hooks";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { SafeAreaView, TouchableOpacity, View } from "react-native";
import * as z from "zod";

import ApplicationLogo from "../application-logo";
import { OTPInput } from "../inputs";
import { ThemedText } from "../theme";
import { ZichButton } from "../ui";

const verificationFormSchema = z.object({
    otp: z.string().length(4, "Please enter a valid verification code")
});

type VerificationFormSchema = z.infer<typeof verificationFormSchema>;

export default function VerificationForm({
    handleVerificationForm,
    handleGoBack,
    isLoading,
}: VerificationFormProps): JSX.Element {
    const isKeyboardVisible = useKeyboard();

    const { handleSubmit, setValue, formState: { errors } } = useForm<VerificationFormSchema>({
        resolver: zodResolver(verificationFormSchema),
        defaultValues: {
            otp: ""
        }
    });

    const onSubmit = (data: VerificationFormSchema) => {
        handleVerificationForm();
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
                </View>
                <ThemedText
                    content="Enter confirmation code"
                    className="font-bold text-2xl"
                />
                <ThemedText
                    content="We sent a code to your email"
                    className="text-neutral-400 mt-2"
                />
                <OTPInput
                    error={errors.otp?.message || ""}
                    onComplete={(otp) => {
                        setValue("otp", otp);
                        handleSubmit(onSubmit)();
                    }}
                />
                <View className="flex-row gap-x-1 mt-5">
                    <ThemedText content="Didn't get the code?" />
                    <TouchableOpacity>
                        <ThemedText
                            content="Resend it"
                            className="text-black underline font-semibold"
                        />
                    </TouchableOpacity>
                </View>
            </View>
            {!isKeyboardVisible ? (
                <View className="p-5 pb-8 flex-row gap-x-4">
                    <ZichButton
                        onPress={handleGoBack}
                        content="Go back"
                        textClassName="text-primary"
                        theme="bg-secondary border border-neutral-300"
                        roundedFull
                        className="p-4 flex-1 max-w-32"
                    />
                    <ZichButton
                        onPress={handleSubmit(onSubmit)}
                        content="Proceed"
                        textClassName="text-white"
                        isLoading={isLoading}
                        roundedFull
                        className="p-4 flex-1"
                    />
                </View>
            ) : (
                <View className="h-60" />
            )}
        </SafeAreaView>
    );
}