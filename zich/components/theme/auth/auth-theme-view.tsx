import { useColors } from "@/zich/hooks";
import { Dispatch, SetStateAction } from "react";
import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StatusBar,
    TouchableWithoutFeedback,
    useColorScheme,
    View,
    ViewProps,
} from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
type AuthThemedViewProps = ViewProps & {
    className?: string;
    isLoading?: boolean;
    setIsLoading?: Dispatch<SetStateAction<boolean>>;
};

export function AuthThemedView({
    className,
    isLoading,
    setIsLoading,
    ...props
}: AuthThemedViewProps): JSX.Element {
    const colors = useColors();
    return (
        <>
            <StatusBar
                barStyle={
                    useColorScheme() === "dark"
                        ? "light-content"
                        : "dark-content"
                }
                backgroundColor={colors.theme}
            />
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{ flex: 1 }}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <ScrollView
                        contentContainerClassName="flex-grow"
                        keyboardShouldPersistTaps="handled"
                    >
                        <View className="container justify-center items-center">
                            <Spinner
                                visible={isLoading}
                                textStyle={{ color: "#fff" }}
                                overlayColor="rgba(0, 0, 0, 0.5)"
                            />
                            <View
                                className={`container ${className}`}
                                {...props}
                            />
                        </View>
                    </ScrollView>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </>
    );
}
