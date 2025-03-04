import { ZichTextInput } from "@/zich/components/inputs";
import { ThemedText } from "@/zich/components/theme";
import { ActionSheetHeader } from "@/zich/components/ui";
import { useColors } from "@/zich/hooks";
import Slider from "@react-native-community/slider";
import { RefObject, useEffect, useState } from "react";
import { Dimensions, Pressable, ScrollView, Switch, View } from "react-native";
import ActionSheet, { ActionSheetRef } from "react-native-actions-sheet";
import { Iconify } from "react-native-iconify";
import Animated, { useAnimatedStyle, useSharedValue, withSequence, withTiming } from 'react-native-reanimated';

export default function CreateLoanSheet({
    actionSheetRef,
}: {
    actionSheetRef: RefObject<ActionSheetRef>;
}) {
    const colors = useColors();
    const handleOnComplete = () => {
        actionSheetRef.current?.hide();
    };

    const [loanAmount, setLoanAmount] = useState(10000);
    const [loanTerm, setLoanTerm] = useState(36);
    const [interestRate, setInterestRate] = useState(5);
    const [autoPayment, setAutoPayment] = useState<boolean>(false);
    const [monthlyPayment, setMonthlyPayment] = useState(0);
    const [totalInterest, setTotalInterest] = useState(0);

    const highlightAnimation = useSharedValue(0);

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

        highlightAnimation.value = withSequence(
            withTiming(1, { duration: 200 }),
            withTiming(0, { duration: 800 })
        );
    }, [loanAmount, loanTerm, interestRate]);

    const animatedStyle = useAnimatedStyle(() => ({
        backgroundColor: `rgba(94, 114, 228, ${0.05 + highlightAnimation.value * 0.15})`,
    }));

    const formatCurrency = (value: Number) => {
        return "$" + value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
    };

    return (
        <ActionSheet
            containerStyle={{
                backgroundColor: colors.background,
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
                height: "98%",
                overflow: "hidden",
            }}
            ref={actionSheetRef}
            statusBarTranslucent={true}
        >
            <ActionSheetHeader
                title="Create Loan"
                onCancel={() => actionSheetRef.current?.hide()}
                onComplete={handleOnComplete}
                completeLabel={
                    <Pressable onPress={handleOnComplete} className="bg-primary-color rounded-full p-1.5 px-4">
                        <ThemedText content="Apply" color="text-white" />
                    </Pressable>
                }
            />
            <ScrollView
                contentContainerStyle={{
                    padding: 16,
                    gap: 16,
                }}
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={true}
                bounces={false}
                overScrollMode="never"
            >
                <View className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                    <View className="flex-row bg-gray-100 items-center p-4 border-b border-gray-200">
                        <View className="w-10 h-10 bg-blue-100 rounded-full items-center justify-center mr-3">
                            <Iconify
                                icon="solar:money-bag-bold-duotone"
                                size={24}
                                color={colors.primary}
                            />
                        </View>
                        <ThemedText content="Loan Details" className="text-xl font-bold" />
                    </View>
                    <View className="p-5">
                        <View className="mb-6">
                            <ZichTextInput
                                label="Loan Amount"
                                value={loanAmount.toString()}
                                onChangeText={(text) =>
                                    setLoanAmount(
                                        Number(text.replace(/[^0-9]/g, ""))
                                    )
                                }
                                placeholder="Enter loan amount"
                                inputMode="numeric"
                            />
                            <ThemedText 
                                content="Enter an amount between $1,000 and $100,000" 
                                color="text-gray-500"
                                className="text-base mt-1"
                            />
                        </View>

                        <View className="mb-6">
                            <ThemedText content="Loan Term" className="input-label" />
                            <View className="p-3 mt-2 border border-gray-200 rounded-lg">
                                <View className="flex-row justify-start mb-2">
                                    <ThemedText
                                        content={`${loanTerm} months`}
                                    />
                                </View>
                                <Slider
                                    className="w-full h-10"
                                    minimumValue={12}
                                    maximumValue={60}
                                    step={12}
                                    value={loanTerm}
                                    onValueChange={setLoanTerm}
                                    minimumTrackTintColor={colors.primary}
                                    maximumTrackTintColor="#DEE2E6"
                                    thumbTintColor={colors.primary}
                                />
                                <View className="flex-row justify-between px-1">
                                    <ThemedText content="12 mo" />
                                    <ThemedText content="36 mo" />
                                    <ThemedText content="60 mo" />
                                </View>
                            </View>
                        </View>

                        <View className="mb-6">
                            <ThemedText content="Interest Rate" className="input-label" />
                            <View className="p-3 mt-2 border border-gray-200 rounded-lg">
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
                                    minimumTrackTintColor={colors.primary}
                                    maximumTrackTintColor="#DEE2E6"
                                    thumbTintColor={colors.primary}
                                />
                                <View className="flex-row justify-between px-1">
                                    <ThemedText content="2%" />
                                    <ThemedText content="8.5%" />
                                    <ThemedText content="15%" />
                                </View>
                            </View>
                        </View>

                        <View className="flex-row items-center gap-3">
                            <Switch
                                value={autoPayment}
                                onValueChange={setAutoPayment}
                                trackColor={{
                                    false: "#DEE2E6",
                                    true: "#2DCE89",
                                }}
                                thumbColor={
                                    autoPayment ? "#FFFFFF" : "#FFFFFF"
                                }
                                ios_backgroundColor="#DEE2E6"
                            />
                            <ThemedText content="Enable Automatic Payments"/>
                        </View>
                    </View>
                </View>

                <View className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                    <View className="flex-row bg-gray-100 items-center p-4 border-b border-gray-200">
                        <View className="w-10 h-10 bg-blue-100 rounded-full items-center justify-center mr-3">
                            <Iconify
                                icon="duo-icons:chart-pie"
                                size={24}
                                color={colors.primary}
                            />
                        </View>
                        <ThemedText content="Loan Preview" />
                    </View>
                    <View className="p-5">
                        <View className="flex-row flex-wrap">
                            <View className="w-1/2 p-2">
                                <ThemedText content="Loan Amount" className="input-label" />
                                <ThemedText
                                    content={formatCurrency(loanAmount)}
                                />
                            </View>
                            <View className="w-1/2 p-2">
                                <ThemedText content="Loan Term" className="input-label" />
                                <ThemedText content={`${loanTerm} months`} />
                            </View>
                            <View className="w-1/2 p-2">
                                <ThemedText content="Interest Rate" className="input-label" />
                                <ThemedText
                                    content={`${interestRate.toFixed(2)}%`}
                                />
                            </View>
                            <View className="w-1/2 p-2">
                                <ThemedText content="Total Interest" className="input-label" />
                                <ThemedText
                                    content={formatCurrency(totalInterest)}
                                />
                            </View>
                        </View>

                        <Animated.View 
                            style={[{
                                padding: 16,
                                borderRadius: 8,
                                marginTop: 16,
                                borderWidth: 1,
                                borderStyle: 'dashed',
                                borderColor: '#E5E7EB'
                            }, animatedStyle]}
                        >
                            <ThemedText content="Monthly Payment" />
                            <ThemedText content={formatCurrency(monthlyPayment)} />
                        </Animated.View>
                    </View>
                </View>
                <View className="h-20" />
            </ScrollView>
        </ActionSheet>
    );
}
