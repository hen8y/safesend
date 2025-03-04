import { ZichTextInput } from "@/zich/components/inputs";
import { ThemedText } from "@/zich/components/theme";
import { useColors } from "@/zich/hooks";
import Slider from "@react-native-community/slider";
import { RefObject, useEffect, useState } from "react";
import { Dimensions, Platform, Switch, View } from "react-native";
import ActionSheet, { ActionSheetRef } from "react-native-actions-sheet";
import { Iconify } from "react-native-iconify";

export default function CreateLoanSheet({
    actionSheetRef,
}: {
    actionSheetRef: RefObject<ActionSheetRef>;
}) {
    const colors = useColors();
    const { height } = Dimensions.get("window");
    const handleOnComplete = () => {
        actionSheetRef.current?.hide();
    };

    const [loanAmount, setLoanAmount] = useState(10000);
    const [loanTerm, setLoanTerm] = useState(36);
    const [interestRate, setInterestRate] = useState(5);
    const [autoPayment, setAutoPayment] = useState<boolean>(false);
    const [monthlyPayment, setMonthlyPayment] = useState(0);
    const [totalInterest, setTotalInterest] = useState(0);

    // const highlightAnimation = new Animated.Value(0);

    useEffect(() => {
        const principal = loanAmount;
        const termMonths = loanTerm;
        const annualRate = interestRate / 100;
        const monthlyRate = annualRate / 12;

        const payment =
            (principal * monthlyRate * Math.pow(1 + monthlyRate, termMonths)) /
            (Math.pow(1 + monthlyRate, termMonths) - 1);

        const totalPayment = payment * termMonths;
        const interest = totalPayment - principal;

        setMonthlyPayment(isNaN(payment) ? 0 : payment);
        setTotalInterest(isNaN(interest) ? 0 : interest);

        //     Animated.sequence([
        //         Animated.timing(highlightAnimation, {
        //             toValue: 1,
        //             duration: 200,
        //             useNativeDriver: false,
        //         }),
        //         Animated.timing(highlightAnimation, {
        //             toValue: 0,
        //             duration: 800,
        //             useNativeDriver: false,
        //         }),
        //     ]).start();
        // }, [loanAmount, loanTerm, interestRate]);
    });
    const formatCurrency = (value: Number) => {
        return "$" + value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
    };

    // const highlightBackgroundColor = highlightAnimation.interpolate({
    //     inputRange: [0, 1],
    //     outputRange: ["rgba(94, 114, 228, 0.05)", "rgba(94, 114, 228, 0.2)"],
    // });
    return (
        <ActionSheet
            containerStyle={{
                backgroundColor: colors.background,
                paddingBottom: Platform.OS === "ios" ? 20 : 0,
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
                height: "100%",
            }}
            initialSnapIndex={0}
            snapPoints={[60, 95]}
            ref={actionSheetRef}
            gestureEnabled={true}
            closable={true}
            closeOnTouchBackdrop={true}
            statusBarTranslucent={true}
        >
            <View className="bg-white rounded-lg shadow-sm mb-4 overflow-hidden">
                <View className="flex-row items-center p-4 border-b border-gray-200">
                    <View className="w-10 h-10 bg-blue-100 rounded-full items-center justify-center mr-3">
                        <Iconify
                            icon="solar:money-bag-bold-duotone"
                            size={24}
                            color="#5E72E4"
                        />
                    </View>
                    <ThemedText content="Loan Details" />
                </View>
                <View className="p-4">
                    <View className="mb-6">
                        <ThemedText content="Loan Amount" />
                        <ZichTextInput
                            label="Loan Amount"
                            value={loanAmount.toString()}
                            onChangeText={(text) =>
                                setLoanAmount(
                                    Number(text.replace(/[^0-9]/g, ""))
                                )
                            }
                            placeholder="Enter loan amount"
                        />
                        <ThemedText content="Enter an amount between $1,000 and $100,000" />
                    </View>

                    <View className="mb-6">
                        <ThemedText content="Loan Term" />
                        <View className="py-2">
                            <View className="flex-row justify-start mb-2">
                                <ThemedText content={`${loanTerm} months`} />
                            </View>
                            <Slider
                                className="w-full h-10"
                                minimumValue={12}
                                maximumValue={60}
                                step={12}
                                value={loanTerm}
                                onValueChange={setLoanTerm}
                                minimumTrackTintColor="#5E72E4"
                                maximumTrackTintColor="#DEE2E6"
                                thumbTintColor="#5E72E4"
                            />
                            <View className="flex-row justify-between px-1">
                                <ThemedText content="12 mo" />
                                <ThemedText content="36 mo" />
                                <ThemedText content="60 mo" />
                            </View>
                        </View>
                    </View>

                    {/* Interest Rate Slider */}
                    <View className="mb-6">
                        <ThemedText content="Interest Rate" />
                        <View className="py-2">
                            <View className="flex-row justify-start mb-2">
                                <ThemedText
                                    content={`${interestRate.toFixed(2)}%`}
                                />
                            </View>
                            <Slider
                                className="w-full h-10"
                                minimumValue={2}
                                maximumValue={15}
                                step={0.25}
                                value={interestRate}
                                onValueChange={setInterestRate}
                                minimumTrackTintColor="#5E72E4"
                                maximumTrackTintColor="#DEE2E6"
                                thumbTintColor="#5E72E4"
                            />
                            <View className="flex-row justify-between px-1">
                                <ThemedText content="2%" />
                                <ThemedText content="8.5%" />
                                <ThemedText content="15%" />
                            </View>
                        </View>
                    </View>

                    <View className="mb-6">
                        <View className="flex-row items-center gap-3">
                            <Switch
                                value={autoPayment}
                                onValueChange={setAutoPayment}
                                trackColor={{
                                    false: "#DEE2E6",
                                    true: "#2DCE89",
                                }}
                                thumbColor={autoPayment ? "#FFFFFF" : "#FFFFFF"}
                                ios_backgroundColor="#DEE2E6"
                            />
                            <ThemedText content="Enable Automatic Payments" />
                        </View>
                    </View>
                </View>
            </View>

            <View className="bg-white rounded-lg shadow-sm mb-4 overflow-hidden">
                <View className="flex-row items-center p-4 border-b border-gray-200">
                    <View className="w-10 h-10 bg-blue-100 rounded-full items-center justify-center mr-3">
                        <Iconify
                            icon="duo-icons:chart-pie"
                            size={24}
                            color="#5E72E4"
                        />
                    </View>
                    <ThemedText content="Loan Preview" />
                </View>
                <View className="p-4">
                    <View className="flex-row flex-wrap">
                        <View className="w-1/2 p-2">
                            <ThemedText content="Loan Amount" />
                            <ThemedText content={formatCurrency(loanAmount)} />
                        </View>
                        <View className="w-1/2 p-2">
                            <ThemedText content="Loan Term" />
                            <ThemedText content={`${loanTerm} months`} />
                        </View>
                        <View className="w-1/2 p-2">
                            <ThemedText content="Interest Rate" />
                            <ThemedText
                                content={`${interestRate.toFixed(2)}%`}
                            />
                        </View>
                        <View className="w-1/2 p-2">
                            <ThemedText content="Total Interest" />
                            <ThemedText
                                content={formatCurrency(totalInterest)}
                            />
                        </View>
                    </View>

                    {/* <AnimatedView className="p-4 rounded-lg mt-4 border border-dashed border-gray-300">
                            <ThemedText content="Monthly Payment" />
                            <ThemedText
                                content={formatCurrency(monthlyPayment)}
                            />
                        </AnimatedView> */}
                </View>
            </View>
        </ActionSheet>
    );
}
