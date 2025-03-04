import { LoanComparison } from "@/components/home/loan-comparison";
import CreateLoanSheet from "@/components/sheets/create-loan";
import { ThemedText, ThemedView } from "@/zich/components/theme";
import { ZichButton } from "@/zich/components/ui";
import { useRef } from "react";
import { ScrollView, View } from "react-native";
import { ActionSheetRef } from "react-native-actions-sheet";
import { Iconify } from "react-native-iconify";

const HomeScreen = () => {
    const createLoanSheetRef = useRef<ActionSheetRef>(null);
    return (
        <ThemedView className="p-4" theme="mild">
            <ScrollView className="flex-1">
                <View className="gap-y-5">
                    <View className="bg-white p-4 gap-y-5 rounded-xl border border-gray-200 overflow-hidden">
                        <View>
                            <View className="flex-row gap-x-2 items-start">
                                <View className="bg-primary-color/10 size-9 mt-1 center rounded-lg">
                                    <Iconify
                                        icon="fa6-solid:dollar-sign"
                                        size={16}
                                        color="#2563eb"
                                    />
                                </View>
                                <View>
                                    <ThemedText
                                        content="Save 29% on Average"
                                        className="text-xl font-bold text-white"
                                    />
                                    <ThemedText
                                        content="Smart loans designed for the digital age"
                                        className="text-primary-color/10"
                                    />
                                </View>
                            </View>
                        </View>
                        <View className="flex-row items-center mt-3 justify-between gap-x-2">
                            <ZichButton
                                content="Get Started"
                                roundedFull
                                className="flex-1"
                                textClassName="text-white"
                                onPress={() =>
                                    createLoanSheetRef.current?.show()
                                }
                            />
                            <ZichButton
                                content="View Applications"
                                roundedFull
                                className="flex-1"
                                theme="bg-gray-300"
                                onPress={() =>
                                    createLoanSheetRef.current?.show()
                                }
                            />
                        </View>
                    </View>

                    <LoanComparison />

                    <View className="bg-white rounded-xl border border-gray-200 p-4">
                        <View className="flex-row items-center justify-between mb-4">
                            <View className="flex-row items-center">
                                <Iconify
                                    icon="duo-icons:message-2"
                                    size={34}
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

                        <View className="bg-yellow-50 border border-yellow-700/30 p-4 rounded-lg">
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
                                content="I was always hesitant to lend money to family and friends because I never knew if they'd actually pay me back. With SafeSend, I can set up automatic payments and even add interest. Now, I don’t have to worry about chasing anyone down. It's secure, transparent, and has made lending money feel a lot less stressful."
                                className="mb-3 text-base"
                                color="text-gray-700"
                            />
                            <ThemedText
                                content="Jessica, 32, Atlanta, GA"
                                className="font-medium"
                                color="text-gray-700"
                            />
                        </View>
                    </View>
                    <View className="h-10" />
                </View>
            </ScrollView>

            <CreateLoanSheet actionSheetRef={createLoanSheetRef} />
        </ThemedView>
    );
};

export default HomeScreen;
