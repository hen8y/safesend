import { ProfileFormType } from "@/app/(dashboard)/(tabs)/settings";
import { useColors } from "@/zich/hooks";
import {
    Dispatch,
    RefObject,
    SetStateAction,
    useEffect,
    useState,
} from "react";
import { View } from "react-native";
import ActionSheet, { ActionSheetRef } from "react-native-actions-sheet";

import { ZichTextInput } from "../../inputs";
import { FormThemedView } from "../../theme/form-theme-view";
import { ThemedText } from "../../theme/themed-text";
import ActionSheetHeader from "../action-sheet-header";
import CustomImagePicker from "../custom-image-picker";

interface ProfileTabProps {
    actionSheetRef: RefObject<ActionSheetRef>;
    profileForm: ProfileFormType;
    setProfileForm: Dispatch<SetStateAction<ProfileFormType>>;
}

export default function ProfileEditSheet({
    actionSheetRef,
    profileForm,
    setProfileForm,
}: ProfileTabProps): JSX.Element {
    const colors = useColors();
    const [form, setForm] = useState<ProfileFormType>(profileForm);

    useEffect(() => {
        setForm(profileForm);
    }, [profileForm]);

    const [formError, setFormError] = useState<{
        email: string;
        username: string;
    }>({
        email: "",
        username: "",
    });

    const handleTextChange = (type: string, text: string) => {
        const error = text.trim() === "" ? `Please enter your ${type}` : "";
        if (type === "email") {
            setForm({ ...form, email: text });
            setFormError({ ...formError, email: error });
        } else {
            setForm({ ...form, username: text });
            setFormError({ ...formError, username: error });
        }
    };

    const handleOnComplete = () => {
        actionSheetRef.current?.hide();
    };

    return (
        <ActionSheet
            containerStyle={{
                height: "80%",
                backgroundColor: colors.background,
                paddingBottom: 20,
                borderTopLeftRadius: 40,
                borderTopRightRadius: 40,
            }}
            ref={actionSheetRef}
            closable
            closeOnTouchBackdrop
        >
            <ActionSheetHeader
                onCancel={() => actionSheetRef.current?.hide()}
                onComplete={handleOnComplete}
                title="Edit Profile"
            />

            <FormThemedView>
                <View className="p-5 mt-5">
                    <View className="w-full rounded-2xl border-theme bg-white dark:bg-neutral-800 p-4">
                        <View className="flex-row w-full gap-x-5 space">
                            <ZichTextInput
                                onChangeText={(e) =>
                                    handleTextChange("username", e)
                                }
                                label="Username"
                                containerClassName="flex-1"
                                placeholder="Your username"
                                borderBottom
                                value={form.username}
                                error={formError.username}
                            />
                            <CustomImagePicker
                                defaultImage={profileForm.avi}
                                onUpdate={setProfileForm}
                            />
                        </View>

                        <ZichTextInput
                            onChangeText={(e) => handleTextChange("email", e)}
                            label="Email"
                            placeholder="Your email"
                            borderBottom
                            value={form.email}
                            containerClassName="mt-7"
                            error={formError.email}
                        />
                        <ThemedText
                            content="Update your profile details"
                            className="mt-5 opacity-50"
                        />
                    </View>
                </View>
            </FormThemedView>
        </ActionSheet>
    );
}
