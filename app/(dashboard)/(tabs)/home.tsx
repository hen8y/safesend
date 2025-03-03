import CreateLoanSheet from "@/components/sheets/create-loan";
import { ThemedText, ThemedView } from "@/zich/components/theme";
import { ZichButton } from "@/zich/components/ui";
import { useRef } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { ActionSheetRef } from "react-native-actions-sheet";
import { Iconify } from "react-native-iconify";

const DashboardScreen = () => {
    const createLoanSheetRef = useRef<ActionSheetRef>(null);
    return (
        <ThemedView className="p-4" theme="mild">
            <ScrollView className="flex-1">
                <View className="gap-y-5">
                    <View className="bg-white p-5 gap-y-5 rounded-xl border border-gray-200 overflow-hidden">
                        <View>
                            <ThemedText
                                content="Save 32% on Average"
                                className="text-xl font-bold mb-2 text-white"
                            />
                            <ThemedText
                                content="Smart loans designed for the digital age"
                                className="text-primary-color/10"
                            />
                        </View>
                        {/* <View className="p-5">
                            <View className="flex-row items-start gap-x-3">
                                <View className="size-7 center bg-primary-color/10 rounded-full">
                                    <Iconify
                                        icon="fa6-solid:dollar-sign"
                                        size={16}
                                        color="#2563eb"
                                    />
                                </View>
                                <View>
                                    <ThemedText
                                        content="Better Rates, Faster Approval"
                                        className="font-semibold"
                                    />
                                </View>
                            </View>
                        </View> */}
                        <ZichButton
                            content="Apply Now"
                            roundedFull
                            textClassName="text-white"
                            onPress={() => createLoanSheetRef.current?.show()}
                        />
                    </View>

                    <View className="bg-white rounded-xl border border-gray-200 p-5">
                        <View className="flex-row items-center justify-between mb-4">
                            <View className="flex-row items-center">
                                <Iconify
                                    icon="tabler:chart-line"
                                    size={20}
                                    color="#2563eb"
                                />
                                <ThemedText
                                    content="Loan Comparison"
                                    className="text-lg font-bold ml-2"
                                />
                            </View>
                            <ThemedText
                                content="See details"
                                className="text-base text-primary-color font-medium"
                            />
                        </View>

                        <View className="gap-y-4">
                            <View className="bg-gray-50 border border-gray-200 p-4 rounded-lg">
                                <View className="flex-row justify-between items-center mb-2">
                                    <ThemedText
                                        content="Traditional Bank"
                                        className="text-gray-500"
                                    />
                                    <ThemedText
                                        content="3-5 days approval"
                                        className="font-medium"
                                    />
                                </View>
                                <View className="flex-row items-center">
                                    <ThemedText
                                        content="12.5%"
                                        className="font-bold text-2xl"
                                    />
                                </View>
                            </View>

                            <View className="bg-primary-color/10 p-4 rounded-lg border border-primary-color/20">
                                <View className="flex-row justify-between items-center mb-2">
                                    <ThemedText
                                        content="SafeSend"
                                        className="font-medium"
                                        color="text-primary-color"
                                    />
                                    <View className="bg-primary-color px-2 py-1 rounded-full">
                                        <ThemedText
                                            content="24hr approval"
                                            className="text-base"
                                            color="text-white"
                                        />
                                    </View>
                                </View>
                                <View className="flex-row items-center">
                                    <ThemedText
                                        content="8.2%"
                                        className="font-bold text-2xl text-primary-color"
                                    />
                                </View>
                            </View>
                        </View>
                    </View>

                    <View className="bg-white rounded-xl border border-gray-200 p-5">
                        <View className="flex-row items-center justify-between mb-4">
                            <View className="flex-row items-center">
                                <Iconify
                                    icon="duo-icons:message-2"
                                    size={20}
                                    color="#2563eb"
                                />
                                <ThemedText
                                    content="User Feedback"
                                    className="text-lg font-bold ml-2"
                                />
                            </View>
                            <ThemedText
                                content="View all"
                                className="text-base font-medium"
                                color="text-primary-color"
                            />
                        </View>

                        <View className="bg-primary-color/10 p-4 rounded-lg">
                            <View className="flex-row mb-2">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Iconify
                                        key={star}
                                        icon="fa6-solid:star"
                                        size={16}
                                        color="#EAB308"
                                        fill="#EAB308"
                                    />
                                ))}
                            </View>
                            <ThemedText
                                content="I saved over $3,000 on my home renovation loan.
                                The entire process from application to approval
                                took less than a day!"
                                className="text-gray-700 mb-3"
                            />
                            <View className="flex-row items-center">
                                <View className="w-8 h-8 bg-primary-color/20 rounded-full items-center justify-center mr-2">
                                    <ThemedText
                                        content="ST"
                                        className="text-primary-color text-base font-bold"
                                    />
                                </View>
                                <View>
                                    <ThemedText
                                        content="Sarah T."
                                        className="text-gray-800 font-medium text-base"
                                    />
                                    <ThemedText
                                        content="Home renovation loan"
                                        className="text-gray-500 text-base"
                                    />
                                </View>
                            </View>
                        </View>
                    </View>

                    {/* Add space at bottom for floating button */}
                    <View className="h-20" />
                </View>
            </ScrollView>

            {/* Get Started Button - Modern Floating CTA */}
            <View className="p-4 absolute bottom-0 left-0 right-0">
                <TouchableOpacity
                    className="w-full bg-primary-color py-4 px-4 rounded-xl flex-row items-center justify-center"
                    activeOpacity={0.8}
                >
                    <ThemedText
                        content="Get Started Now"
                        className="text-white font-bold mr-2"
                    />
                    <View className="bg-white bg-opacity-30 rounded-full p-1">
                        <Iconify
                            icon="fa6-solid:arrow-right"
                            size={16}
                            color="white"
                        />
                    </View>
                </TouchableOpacity>
            </View>

            <CreateLoanSheet actionSheetRef={createLoanSheetRef} />
        </ThemedView>
    );
};

export default DashboardScreen;
