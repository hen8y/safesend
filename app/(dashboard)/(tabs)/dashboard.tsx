import { ThemedText, ThemedView } from "@/zich/components/theme";
import { router } from "expo-router";
import { Pressable, View } from "react-native";
import { Iconify } from "react-native-iconify";

const DashboardScreen = () => {
    return (
        <ThemedView className="p-4 pt-20" theme="mild">
            <View className="rounded-2xl p-6 border border-gray-200 bg-white">
                <View className="mb-6">
                    <ThemedText
                        content="SafeSend"
                        className="text-4xl font-bold leading-tight tracking-tight"
                    />
                    <ThemedText
                        content="Your premium lending solutions"
                        color="text-gray-700"
                        className="mt-2 leading-relaxed"
                    />
                </View>

                <View className="p-5 border border-gray-200 bg-gray-50 rounded-2xl mb-6">
                    <ThemedText
                        content="Total Available"
                        color="text-gray-700"
                        className="text-base font-medium"
                    />
                    <ThemedText
                        content="$26,589.12"
                        className="text-3xl font-semibold mt-1"
                    />
                    <View className="flex-row items-center mt-1">
                        <ThemedText
                            content="+$231.62"
                            color="text-emerald-400"
                            className="text-base font-medium"
                        />
                        <ThemedText
                            content="this week"
                            color="text-gray-700"
                            className="text-base ml-1"
                        />
                    </View>
                </View>

                <View className="flex-row justify-between mt-2">
                    <View className="bg-gray-50 px-4 py-3 rounded-xl border border-gray-200">
                        <ThemedText
                            content="5.2%"
                            className="text-xl font-semibold"
                        />
                        <ThemedText
                            content="Interest Rate"
                            color="text-gray-700"
                            className="text-base mt-1"
                        />
                    </View>
                    <View className="bg-gray-50 px-4 py-3 rounded-xl border border-gray-200">
                        <ThemedText
                            content="24h"
                            className="text-xl font-semibold"
                        />
                        <ThemedText
                            content="Approval Time"
                            color="text-gray-700"
                            className="text-base mt-1"
                        />
                    </View>
                    <View className="bg-gray-50 px-4 py-3 rounded-xl border border-gray-200">
                        <ThemedText
                            content="A+"
                            className="text-xl font-semibold"
                        />
                        <ThemedText
                            content="Credit Score"
                            color="text-gray-700"
                            className="text-base mt-1"
                        />
                    </View>
                </View>
            </View>

            <View className="mt-8">
                <ThemedText
                    content="Financial Services"
                    color="text-gray-800"
                    className="text-lg font-semibold tracking-tight mb-4"
                />
                <View className="flex-row gap-x-4 mb-6">
                    <Pressable className="flex-1 bg-white rounded-2xl p-4 border border-gray-200">
                        <View className="w-10 h-10 rounded-full bg-indigo-50 items-center justify-center mb-3">
                            <Iconify icon="uim:bag" size={24} color="#6366f1" />
                        </View>
                        <ThemedText
                            content="Loans"
                            color="text-gray-800"
                            className="font-medium"
                        />
                        <ThemedText
                            content="From 5.2%"
                            color="text-gray-400"
                            className="text-base mt-1"
                        />
                    </Pressable>

                    <Pressable className="flex-1 bg-white rounded-2xl p-4 border border-gray-200">
                        <View className="w-10 h-10 rounded-full bg-blue-50 items-center justify-center mb-3">
                            <ThemedText className="text-lg" content="💳" />
                        </View>
                        <ThemedText
                            content="Cards"
                            color="text-gray-800"
                            className="font-medium"
                        />
                        <ThemedText
                            content="Manage all"
                            color="text-gray-400"
                            className="text-base mt-1"
                        />
                    </Pressable>

                    <Pressable className="flex-1 bg-white rounded-2xl p-4 border border-gray-200">
                        <View className="w-10 h-10 rounded-full bg-green-50 items-center justify-center mb-3">
                            <ThemedText className="text-lg" content="💰" />
                        </View>
                        <ThemedText
                            content="Savings"
                            color="text-gray-800"
                            className="font-medium"
                        />
                        <ThemedText
                            content="Up to 3.5%"
                            color="text-gray-400"
                            className="text-base mt-1"
                        />
                    </Pressable>
                </View>
            </View>

            <View className="pb-10">
                <View className="bg-blue-50 border border-blue-200 rounded-2xl p-5 mb-6">
                    <ThemedText
                        content="Need extra funds?"
                        color="text-blue-900"
                        className="text-xl font-semibold mb-2"
                    />
                    <ThemedText
                        content="Get approved quickly with our premium loan options tailored to your needs."
                        color="text-blue-700"
                        className="opacity-80 mb-4"
                    />
                    <Pressable
                        onPress={() => router.push("/loan-creation")}
                        className="bg-blue-600 rounded-xl py-3 shadow-sm"
                    >
                        <ThemedText
                            content="Apply for a Loan"
                            color="text-white"
                            className="text-center font-medium text-sm"
                        />
                    </Pressable>
                </View>
            </View>
        </ThemedView>
    );
};

export default DashboardScreen;
