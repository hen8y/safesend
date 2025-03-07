import { FormThemedViewProps } from "@/utils/interfaces";
import { Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, View } from "react-native";

export function FormThemedView({
    className,
    ...props
}: FormThemedViewProps): JSX.Element {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View {...props} />
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}
