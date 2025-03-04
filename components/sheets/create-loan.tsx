import { ThemedText } from "@/zich/components/theme";
import { useColors } from "@/zich/hooks";
import { RefObject } from "react";
import { Dimensions, Platform, View } from "react-native";
import ActionSheet, { ActionSheetRef } from "react-native-actions-sheet";

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
            <View>
                <ThemedText content="Create Loan" />
            </View>
        </ActionSheet>
    );
}
