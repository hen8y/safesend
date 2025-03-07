import { RegisterFormProps } from "@/utils/interfaces";
import { EmailForm, PasswordForm, VerificationForm } from "@/zich/components/forms";
import { AuthThemedView } from "@/zich/components/theme";
import { router } from "expo-router";
import { useRef, useState } from "react";
import Swiper from "react-native-swiper";

export default function Register(): JSX.Element {
    const [step, setStep] = useState<number>(1);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const swiperRef = useRef<Swiper>(null);
    const [form, setForm] = useState<RegisterFormProps>({
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
        role: "borrower",
    });
    const handleSignUp = async () => {
        router.replace("/home");
    };
    return (
        <AuthThemedView isLoading={isLoading} className="items-center">
            <Swiper
                ref={swiperRef}
                loop={false}
                showsPagination={false}
                scrollEnabled={false}
            >
                <EmailForm
                    form={form}
                    setForm={setForm}
                    isLoading={isLoading}
                    onComplete={() => swiperRef.current?.scrollTo(1)}
                />
                <VerificationForm
                    isLoading={isLoading}
                    handleVerificationForm={() => swiperRef.current?.scrollTo(2)}
                    handleGoBack={() => swiperRef.current?.scrollTo(0)}
                />
                <PasswordForm
                    form={form}
                    setForm={setForm}
                    isLoading={isLoading}
                    onComplete={handleSignUp}
                />
            </Swiper>
        </AuthThemedView>
    );
}
