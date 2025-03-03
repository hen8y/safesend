import { useColors } from "@/zich/hooks";
import { RefObject } from "react";
import { Platform } from "react-native";
import ActionSheet, { ActionSheetRef } from "react-native-actions-sheet";

export default function CreateLoanSheet({
    actionSheetRef,
}: {
    actionSheetRef: RefObject<ActionSheetRef>;
}) {
    const colors = useColors();

    const handleOnComplete = () => {
        actionSheetRef.current?.hide();
    };

    return (
        <ActionSheet
            containerStyle={{
                height: "60%",
                backgroundColor: colors.background,
                paddingBottom: Platform.OS === "ios" ? 20 : 0,
                borderTopLeftRadius: 40,
                borderTopRightRadius: 40,
            }}
            ref={actionSheetRef}
            closable
            closeOnTouchBackdrop
        ></ActionSheet>
    );
}
