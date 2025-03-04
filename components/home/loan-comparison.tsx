import { ThemedText } from "@/zich/components/theme";
import { View } from "react-native";
import { Iconify } from "react-native-iconify";

export function LoanComparison() {
    return (
        <View className="bg-white rounded-xl border border-gray-200 p-4">
            <View className="flex-row items-center justify-between mb-6">
                <View className="flex-row items-center">
                    <View className="bg-primary-color/10 size-9 center rounded-lg">
                        <Iconify
                            icon="tabler:chart-line"
                            size={24}
                            color="#2563eb"
                        />
                    </View>
                    <ThemedText
                        content="Loan Comparison"
                        className="text-xl font-bold ml-3"
                    />
                </View>
            </View>

            <View className="gap-y-4">
                <View className="bg-gray-50 border border-gray-200 overflow-hidden  rounded-xl">
                    <View className="p-4">
                        <View className="flex-row justify-between items-center mb-4">
                            <View className="flex-row items-center">
                                <View className="bg-gray-200 p-2 rounded-lg mr-3">
                                    <Iconify
                                        icon="fa6-solid:building-columns"
                                        size={20}
                                        color="#4B5563"
                                    />
                                </View>
                                <ThemedText
                                    content="Traditional Bank"
                                    className="text-lg font-semibold"
                                    color="text-gray-700"
                                />
                            </View>
                            <View className="bg-gray-200 px-3 py-1 rounded-full">
                                <ThemedText
                                    content="3-5 days approval"
                                    className="text-sm font-medium"
                                    color="text-gray-600"
                                />
                            </View>
                        </View>
                        <View className="flex-row items-baseline mb-4">
                            <View className="flex-row items-baseline">
                                <ThemedText
                                    content="$"
                                    className="font-bold text-2xl"
                                    color="text-gray-800"
                                />
                                <ThemedText
                                    content="4,000"
                                    className="font-bold text-3xl"
                                    color="text-gray-800"
                                />
                            </View>
                            <ThemedText
                                content=" loan amount"
                                className="text-sm"
                                color="text-gray-500"
                            />
                        </View>
                    </View>
                    <View className="bg-white border-t border-gray-200">
                        <View className="flex-row border-b border-gray-200 space p-3">
                            <View className="flex-row items-center">
                                <View className="bg-gray-100 p-2 rounded-lg mr-3">
                                    <Iconify
                                        icon="fa6-solid:money-bill"
                                        size={16}
                                        color="#4B5563"
                                    />
                                </View>
                                <ThemedText
                                    content="Fee"
                                    color="text-gray-500"
                                />
                            </View>
                            <View className="flex-row items-baseline">
                                <ThemedText
                                    content="$"
                                    className="font-medium"
                                    color="text-gray-700"
                                />
                                <ThemedText
                                    content="600"
                                    className="font-bold text-lg"
                                    color="text-gray-800"
                                />
                            </View>
                        </View>

                        <View className="flex-row space border-b border-gray-200 p-3">
                            <View className="flex-row items-center">
                                <View className="bg-gray-100 p-2 rounded-lg mr-3">
                                    <Iconify
                                        icon="fa6-solid:calendar-check"
                                        size={16}
                                        color="#4B5563"
                                    />
                                </View>
                                <ThemedText
                                    content="Monthly payment"
                                    color="text-gray-500"
                                />
                            </View>
                            <View className="flex-row items-baseline">
                                <ThemedText
                                    content="$"
                                    className="font-medium"
                                    color="text-gray-700"
                                />
                                <ThemedText
                                    content="144"
                                    className="font-bold text-lg"
                                    color="text-gray-800"
                                />
                            </View>
                        </View>

                        <View className="flex-row space border-b border-gray-200 p-3">
                            <View className="flex-row items-center">
                                <View className="bg-gray-100 p-2 rounded-lg mr-3">
                                    <Iconify
                                        icon="fa6-solid:clock"
                                        size={16}
                                        color="#4B5563"
                                    />
                                </View>
                                <ThemedText
                                    content="Term"
                                    color="text-gray-500"
                                />
                            </View>
                            <ThemedText
                                content="60 months"
                                className="font-bold text-lg"
                                color="text-gray-800"
                            />
                        </View>

                        <View className="flex-row space p-3">
                            <View className="flex-row items-center">
                                <View className="bg-gray-100 p-2 rounded-lg mr-3">
                                    <Iconify
                                        icon="fa6-solid:circle-dollar-to-slot"
                                        size={16}
                                        color="#4B5563"
                                    />
                                </View>
                                <ThemedText
                                    content="Total amount"
                                    color="text-gray-500"
                                />
                            </View>
                            <View className="flex-row items-baseline">
                                <ThemedText
                                    content="$"
                                    className="font-medium"
                                    color="text-gray-700"
                                />
                                <ThemedText
                                    content="8,640"
                                    className="font-bold text-xl"
                                    color="text-gray-800"
                                />
                            </View>
                        </View>
                    </View>
                </View>

                <View className="bg-primary-color/5 rounded-xl overflow-hidden border-2 border-primary-color/20">
                    <View className="p-4">
                        <View className="flex-row justify-between items-center mb-4">
                            <View className="flex-row items-center">
                                <View className="bg-primary-color/10 p-2 rounded-lg mr-3">
                                    <Iconify
                                        icon="fa6-solid:bolt"
                                        size={20}
                                        color="#2563eb"
                                    />
                                </View>
                                <ThemedText
                                    content="SafeSend"
                                    className="text-lg font-semibold"
                                    color="text-primary-color"
                                />
                            </View>
                            <View className="bg-primary-color px-3 py-1 rounded-full">
                                <ThemedText
                                    content="24hr approval"
                                    className="text-sm font-medium"
                                    color="text-white"
                                />
                            </View>
                        </View>
                        <View className="flex-row items-baseline mb-4">
                            <View className="flex-row items-baseline">
                                <ThemedText
                                    content="$"
                                    className="font-bold text-2xl"
                                    color="text-primary-color"
                                />
                                <ThemedText
                                    content="4,000"
                                    className="font-bold text-3xl"
                                    color="text-primary-color"
                                />
                            </View>
                            <ThemedText
                                content=" loan amount"
                                className="text-sm"
                                color="text-primary-color/70"
                            />
                        </View>
                    </View>
                    <View className="bg-white border-t border-gray-200">
                        <View className="flex-row space border-b border-gray-200 p-3">
                            <View className="flex-row items-center">
                                <View className="bg-primary-color/10 p-2 rounded-lg mr-3">
                                    <Iconify
                                        icon="fa6-solid:money-bill"
                                        size={16}
                                        color="#2563eb"
                                    />
                                </View>
                                <ThemedText
                                    content="Fee"
                                    color="text-gray-500"
                                />
                            </View>
                            <View className="flex-row items-baseline">
                                <ThemedText
                                    content="$"
                                    className="font-medium"
                                    color="text-primary-color"
                                />
                                <ThemedText
                                    content="200"
                                    className="font-bold text-lg"
                                    color="text-primary-color"
                                />
                            </View>
                        </View>

                        <View className="flex-row space border-b border-gray-200 p-3">
                            <View className="flex-row items-center">
                                <View className="bg-primary-color/10 p-2 rounded-lg mr-3">
                                    <Iconify
                                        icon="fa6-solid:calendar-check"
                                        size={16}
                                        color="#2563eb"
                                    />
                                </View>
                                <ThemedText
                                    content="Monthly payment"
                                    color="text-gray-500"
                                />
                            </View>
                            <View className="flex-row items-baseline">
                                <ThemedText
                                    content="$"
                                    className="font-medium"
                                    color="text-primary-color"
                                />
                                <ThemedText
                                    content="70-89"
                                    className="font-bold text-lg"
                                    color="text-primary-color"
                                />
                            </View>
                        </View>

                        <View className="flex-row space border-b border-gray-200 p-3">
                            <View className="flex-row items-center">
                                <View className="bg-primary-color/10 p-2 rounded-lg mr-3">
                                    <Iconify
                                        icon="fa6-solid:clock"
                                        size={16}
                                        color="#2563eb"
                                    />
                                </View>
                                <ThemedText
                                    content="Term"
                                    color="text-gray-500"
                                />
                            </View>
                            <ThemedText
                                content="6-60 months"
                                className="font-bold text-lg"
                                color="text-primary-color"
                            />
                        </View>

                        <View className="flex-row space p-3">
                            <View className="flex-row items-center">
                                <View className="bg-primary-color/10 p-2 rounded-lg mr-3">
                                    <Iconify
                                        icon="fa6-solid:circle-dollar-to-slot"
                                        size={16}
                                        color="#2563eb"
                                    />
                                </View>
                                <ThemedText
                                    content="Total amount"
                                    color="text-gray-500"
                                />
                            </View>
                            <View className="flex-row items-baseline">
                                <ThemedText
                                    content="$"
                                    className="font-medium"
                                    color="text-primary-color"
                                />
                                <ThemedText
                                    content="4,200-5,354"
                                    className="font-bold text-xl"
                                    color="text-primary-color"
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}
