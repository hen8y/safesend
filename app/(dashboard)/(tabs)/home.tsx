import CreateLoanSheet from "@/components/sheets/create-loan";
import { ThemedText, ThemedView } from "@/zich/components/theme";
import { ZichButton } from "@/zich/components/ui";
import { useRef } from "react";
import { View } from "react-native";
import { ActionSheetRef } from "react-native-actions-sheet";

const DashboardScreen = () => {
    const createLoanSheetRef = useRef<ActionSheetRef>(null);
    return (
        <ThemedView className="p-5">
            <View className="h-32 rounded-3xl shadow shadow-gray-200 p-5 justify-center bg-blue-600">
                <ThemedText
                    content="Loan Balance"
                    className="text-xl font-semibold"
                    color="text-white/80"
                />
                <ThemedText
                    content="$ 10,000"
                    className="text-4xl font-bold mt-4"
                    color="text-white"
                />
            </View>

            <View className="bg-gray-100 border border-gray-200 rounded-3xl mt-5 p-5">
                <ThemedText
                    content="Make a Loan"
                    className="text-4xl font-semibold"
                />
                <ThemedText
                    content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi libero itaque"
                    color="text-gray-500"
                    className="mt-4 text-xl"
                />

                <ZichButton
                    customPadding="max-w-52 w-full"
                    content="Create Application"
                    className="mt-5 center py-4"
                    onPress={() => createLoanSheetRef.current?.show()}
                    roundedFull
                    theme="bg-black"
                    textClassName="text-white"
                />
            </View>

            <CreateLoanSheet actionSheetRef={createLoanSheetRef} />
        </ThemedView>
    );
};

export default DashboardScreen;
