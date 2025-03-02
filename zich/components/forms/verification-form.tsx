import { TouchableOpacity, View } from "react-native";

import { OTPInput } from "../inputs";
import { ThemedText } from "../theme";
import { ZichButton } from "../ui";

interface VerificationFormProps {
    handleVerificationForm: () => void;
    handleGoBack: () => void;
    isLoading: boolean;
}

export default function VerificationForm({
    handleVerificationForm,
    handleGoBack,
    isLoading,
}: VerificationFormProps): JSX.Element {
    return (
        <>
            <View className="px-5 w-full mt-10">
                <ThemedText
                    content="Enter confirmation code"
                    className="font-bold text-2xl"
                />
                <ThemedText
                    content="We sent a code to your email"
                    className="text-neutral-400 mt-2"
                />
                <OTPInput error="" onComplete={
                    (otp) => {
                        console.log(otp);
                    }
                } />
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

            <View className="flex-1 flex-row absolute bottom-20 w-full px-5 gap-x-4">

                <ZichButton
                    onPress={handleGoBack}
                    content="Go back"
                    textClassName="text-primary"
                    theme="bg-secondary"
                    roundedFull
                    className="p-4 flex-1"
                
                />
                <ZichButton
                    onPress={handleVerificationForm}
                    content="Proceed"
                    textClassName="text-white"
                    isLoading={isLoading}
                    roundedFull
                    className="p-4 flex-1"
                />
            </View>
        </>
    );
}