import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    View,
    ViewProps,
} from "react-native";
type FormThemedViewProps = ViewProps & {
    className?: string;
};

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
