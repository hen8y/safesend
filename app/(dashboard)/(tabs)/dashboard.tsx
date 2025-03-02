import { ThemedText } from '@/zich/components/theme';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from "expo-router";
import { Image, Pressable, ScrollView, Text, View } from "react-native";

const DashboardScreen = () => {
    return (
        <ScrollView className="flex-1 bg-[#F8F9FC] p-4">
            <LinearGradient
                colors={["#1E293B", "#334155"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={{
                    padding: 16,
                    borderRadius: 16,
                }}
            >
                <View className="mb-6">
                    <ThemedText 
                        content="Financial Dashboard"
                        color="text-white"
                        className="text-[32px] font-bold leading-tight tracking-tight"
                    />
                    <ThemedText
                        content="Your premium lending solutions"
                        color="text-gray-300"
                        className="text-sm mt-2 leading-relaxed"
                    />
                </View>

                <View className="bg-white/10 backdrop-blur-lg p-5 rounded-2xl mt-4 mb-6">
                    <ThemedText
                        content="Total Available"
                        color="text-gray-300"
                        className="text-xs font-medium"
                    />
                    <ThemedText
                        content="$26,589.12"
                        color="text-white"
                        className="text-3xl font-semibold mt-1"
                    />
                    <View className="flex-row items-center mt-1">
                        <ThemedText
                            content="+$231.62"
                            color="text-emerald-400"
                            className="text-xs font-medium"
                        />
                        <ThemedText
                            content="this week"
                            color="text-gray-300"
                            className="text-xs ml-1"
                        />
                    </View>
                </View>

                <View className="flex-row justify-between mt-2">
                    <View className="bg-white/10 px-4 py-3 rounded-xl backdrop-blur-lg">
                        <ThemedText
                            content="5.2%"
                            color="text-white"
                            className="text-xl font-semibold"
                        />
                        <ThemedText
                            content="Interest Rate"
                            color="text-gray-300"
                            className="text-xs mt-1"
                        />
                    </View>
                    <View className="bg-white/10 px-4 py-3 rounded-xl backdrop-blur-lg">
                        <ThemedText
                            content="24h"
                            color="text-white"
                            className="text-xl font-semibold"
                        />
                        <ThemedText
                            content="Approval Time"
                            color="text-gray-300"
                            className="text-xs mt-1"
                        />
                    </View>
                    <View className="bg-white/10 px-4 py-3 rounded-xl backdrop-blur-lg">
                        <ThemedText
                            content="A+"
                            color="text-white"
                            className="text-xl font-semibold"
                        />
                        <ThemedText
                            content="Credit Score"
                            color="text-gray-300"
                            className="text-xs mt-1"
                        />
                    </View>
                </View>
            </LinearGradient>

            {/* Services Section */}
            <View className="px-6 mt-8">
                <ThemedText
                    content="Financial Services"
                    color="text-gray-800"
                    className="text-lg font-semibold tracking-tight mb-4"
                />
                <View className="flex-row space-x-4 mb-6">
                    <Pressable className="flex-1 bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                        <View className="w-10 h-10 rounded-full bg-indigo-50 items-center justify-center mb-3">
                            <ThemedText className="text-lg" content="💼" />
                        </View>
                        <ThemedText
                            content="Loans"
                            color="text-gray-800"
                            className="text-sm font-medium"
                        />
                        <ThemedText
                            content="From 5.2%"
                            color="text-gray-400"
                            className="text-xs mt-1"
                        />
                    </Pressable>
                    
                    <Pressable className="flex-1 bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                        <View className="w-10 h-10 rounded-full bg-blue-50 items-center justify-center mb-3">
                            <ThemedText className="text-lg" content="💳" />
                        </View>
                        <ThemedText
                            content="Cards"
                            color="text-gray-800"
                            className="text-sm font-medium"
                        />
                        <ThemedText
                            content="Manage all"
                            color="text-gray-400"
                            className="text-xs mt-1"
                        />
                    </Pressable>

                    <Pressable className="flex-1 bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                        <View className="w-10 h-10 rounded-full bg-green-50 items-center justify-center mb-3">
                            <ThemedText className="text-lg" content="💰" />
                        </View>
                        <ThemedText
                            content="Savings"
                            color="text-gray-800"
                            className="text-sm font-medium"
                        />
                        <ThemedText
                            content="Up to 3.5%"
                            color="text-gray-400"
                            className="text-xs mt-1"
                        />
                    </Pressable>
                </View>
            </View>

            {/* Recent Transactions */}
            <View className="px-6 mb-6">
                <View className="flex-row justify-between items-center mb-4">
                    <ThemedText
                        content="Recent Transactions"
                        color="text-gray-800"
                        className="text-lg font-semibold"
                    />
                    <ThemedText
                        content="See all"
                        color="text-indigo-600"
                        className="text-xs font-medium"
                    />
                </View>
                
                <View className="bg-white rounded-2xl p-4 shadow-sm mb-3 border border-gray-100">
                    <View className="flex-row items-center justify-between">
                        <View className="flex-row items-center">
                            <View className="w-10 h-10 rounded-full bg-red-50 items-center justify-center mr-3">
                                <ThemedText className="text-base" content="🏠" />
                            </View>
                            <View>
                                <ThemedText
                                    content="Monthly Rent"
                                    color="text-gray-800"
                                    className="text-sm font-medium"
                                />
                                <ThemedText
                                    content="Today, 10:34 AM"
                                    color="text-gray-400"
                                    className="text-xs"
                                />
                            </View>
                        </View>
                        <ThemedText
                            content="$4,344.89"
                            color="text-red-500"
                            className="font-medium"
                        />
                    </View>
                </View>

                <View className="bg-white rounded-2xl p-4 shadow-sm mb-3 border border-gray-100">
                    <View className="flex-row items-center justify-between">
                        <View className="flex-row items-center">
                            <View className="w-10 h-10 rounded-full bg-green-50 items-center justify-center mr-3">
                                <ThemedText className="text-base" content="💻" />
                            </View>
                            <View>
                                <ThemedText
                                    content="Website Design"
                                    color="text-gray-800"
                                    className="text-sm font-medium"
                                />
                                <ThemedText
                                    content="January 5, 10:34 AM"
                                    color="text-gray-400"
                                    className="text-xs"
                                />
                            </View>
                        </View>
                        <ThemedText
                            content="$2,411.21"
                            color="text-green-500"
                            className="font-medium"
                        />
                    </View>
                </View>
            </View>

            <View className="px-6 pb-10">
                <View className="bg-indigo-50 rounded-2xl p-5 mb-6">
                    <ThemedText
                        content="Need extra funds?"
                        color="text-indigo-900"
                        className="text-lg font-semibold mb-2"
                    />
                    <ThemedText
                        content="Get approved quickly with our premium loan options tailored to your needs."
                        color="text-indigo-700"
                        className="text-sm opacity-80 mb-4"
                    />
                    <Pressable
                        onPress={() => router.push("/loan-creation")}
                        className="bg-indigo-600 rounded-xl py-3 shadow-sm"
                    >
                        <ThemedText
                            content="Apply for a Loan"
                            color="text-white"
                            className="text-center font-medium text-sm"
                        />
                    </Pressable>
                </View>
            </View>
        </ScrollView>
    );
};

export default DashboardScreen;