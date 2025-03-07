import { OTPInputProps } from "@/utils/interfaces";
import * as Clipboard from "expo-clipboard";
import { useRef, useState } from "react";
import { Keyboard, Pressable, TextInput, View } from "react-native";

import { ThemedText } from "../theme";

export default function OTPInput({
    length = 4,
    error = "",
    onComplete,
}: OTPInputProps): JSX.Element {
    const [otp, setOtp] = useState<string[]>(new Array(length).fill(""));
    const [focusedIndex, setFocusedIndex] = useState<number>(-1);
    const inputRefs = useRef<TextInput[]>([]);

    const handlePaste = async () => {
        try {
            const content = await Clipboard.getStringAsync();
            const numericContent = content.replace(/[^0-9]/g, "");

            if (numericContent.length >= length) {
                const otpArray = numericContent.slice(0, length).split("");
                setOtp(otpArray);
                onComplete?.(otpArray.join(""));
                inputRefs.current[length - 1].focus();
                Keyboard.dismiss();
            }
        } catch (error) {
            console.error("Failed to paste OTP:", error);
        }
    };

    const handleChange = (text: string, index: number) => {
        const newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);

        if (text && index < length - 1) {
            inputRefs.current[index + 1].focus();
        }

        if (newOtp.every((digit) => digit !== "")) {
            onComplete?.(newOtp.join(""));
            Keyboard.dismiss();
        }
    };

    const handleKeyPress = (event: any, index: number) => {
        if (event.nativeEvent.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };
    const borderClass = (digit: string, index: number) => {
        return focusedIndex === index
            ? "border-primary"
            : error && !digit
                ? "border-danger"
                : "border-secondary dark:border-neutral-700";
    };
    return (
        <View>
            <View className="flex-row mt-6 items-center gap-2">
                {otp.map((digit, index) => (
                    <TextInput
                        key={index}
                        ref={(ref) => {
                            if (ref) inputRefs.current[index] = ref;
                        }}
                        className={`size-16 border-theme rounded-lg text-center text-3xl font-semibold text-primary bg-white dark:bg-neutral-800
                            ${borderClass(digit, index)}
                        `}
                        maxLength={1}
                        keyboardType="number-pad"
                        value={digit}
                        onChangeText={(text) => handleChange(text, index)}
                        onKeyPress={(e) => handleKeyPress(e, index)}
                        onFocus={() => setFocusedIndex(index)}
                        onBlur={() => setFocusedIndex(-1)}
                        autoComplete="off"
                        selectTextOnFocus
                    />
                ))}
            </View>
            <Pressable onPress={handlePaste} className="mt-1">
                <ThemedText
                    className="text-primary text-sm font-semibold"
                    content="Paste code"
                />
            </Pressable>
        </View>
    );
}
