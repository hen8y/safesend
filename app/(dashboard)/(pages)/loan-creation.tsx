import Slider from "@react-native-community/slider";
import Checkbox from "expo-checkbox";
import { router } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";

const LoanCreationScreen = () => {
    const [loanAmount, setLoanAmount] = useState("1000");
    const [termMonths, setTermMonths] = useState(12);
    const [interestRate, setInterestRate] = useState(5);
    const [autoPayment, setAutoPayment] = useState(false);

    const calculateMonthlyPayment = () => {
        const principal = parseFloat(loanAmount);
        const monthlyRate = interestRate / 100 / 12;
        const payment =
            (principal * monthlyRate * Math.pow(1 + monthlyRate, termMonths)) /
            (Math.pow(1 + monthlyRate, termMonths) - 1);
        return isNaN(payment) ? 0 : payment;
    };

    const monthlyPayment = calculateMonthlyPayment();
    const totalPayment = monthlyPayment * termMonths;

    return (
        <ScrollView className="flex-1 bg-white">
            <View className="p-6">
                <Text className="text-2xl font-bold mb-6">
                    Create Your Loan
                </Text>

                {/* Loan Amount Input */}
                <View className="mb-6">
                    <Text className="text-gray-700 mb-2">Loan Amount ($)</Text>
                    <TextInput
                        className="border border-gray-300 rounded-lg p-4 text-lg"
                        keyboardType="numeric"
                        value={loanAmount}
                        onChangeText={setLoanAmount}
                        placeholder="Enter loan amount"
                    />
                </View>

                {/* Term Length Slider */}
                <View className="mb-6">
                    <Text className="text-gray-700 mb-2">
                        Term Length: {termMonths} months
                    </Text>
                    <Slider
                        minimumValue={3}
                        maximumValue={36}
                        step={1}
                        value={termMonths}
                        onValueChange={setTermMonths}
                        minimumTrackTintColor="#3B82F6"
                        maximumTrackTintColor="#E5E7EB"
                    />
                </View>

                {/* Interest Rate Slider */}
                <View className="mb-6">
                    <Text className="text-gray-700 mb-2">
                        Interest Rate: {interestRate}%
                    </Text>
                    <Slider
                        minimumValue={1}
                        maximumValue={15}
                        step={0.1}
                        value={interestRate}
                        onValueChange={setInterestRate}
                        minimumTrackTintColor="#3B82F6"
                        maximumTrackTintColor="#E5E7EB"
                    />
                </View>

                {/* Auto Payment Checkbox */}
                <View className="flex-row items-center mb-6">
                    <Checkbox
                        value={autoPayment}
                        onValueChange={setAutoPayment}
                        color={autoPayment ? "#3B82F6" : undefined}
                    />
                    <Text className="ml-2 text-gray-700">
                        Enable Automatic Payments
                    </Text>
                </View>

                {/* Loan Preview Section */}
                <View className="bg-blue-50 rounded-lg p-4 mb-6">
                    <Text className="text-xl font-semibold mb-4">
                        Loan Preview
                    </Text>
                    <View className="space-y-2">
                        <Text className="text-gray-700">
                            Monthly Payment: ${monthlyPayment.toFixed(2)}
                        </Text>
                        <Text className="text-gray-700">
                            Total Payment: ${totalPayment.toFixed(2)}
                        </Text>
                        <Text className="text-gray-700">
                            Total Interest: $
                            {(totalPayment - parseFloat(loanAmount)).toFixed(2)}
                        </Text>
                    </View>
                </View>

                {/* Submit Button */}
                <Pressable
                    onPress={() => router.push("/loan-details")}
                    className="bg-blue-600 rounded-lg py-4"
                >
                    <Text className="text-white text-center font-semibold text-lg">
                        Submit Loan Application
                    </Text>
                </Pressable>
            </View>
        </ScrollView>
    );
};

export default LoanCreationScreen;
