import { ProfileFormType } from "@/app/(dashboard)/(tabs)/settings";
import { useColors } from "@/zich/hooks";
import { router } from "expo-router";
import { useRef, useState } from "react";
import { Alert, Image, TouchableOpacity, View, ViewProps } from "react-native";
import { ActionSheetRef } from "react-native-actions-sheet";
import { Iconify } from "react-native-iconify";

import { ThemedText } from "../../theme/themed-text";
import Card from "../card";
import HR from "../hr";
import ProfileEditSheet from "./profile-edit-sheet";
import ProfileTab from "./profile-tab";

export default function ProfileContainer({ ...props }: ViewProps) {
    const colors = useColors();
    const actionSheetRef = useRef<ActionSheetRef>(null);
    const [profileForm, setProfileForm] = useState<ProfileFormType>({
        username: "John Doe",
        email: "john.doe@example.com",
        avi: require("@/assets/images/avatars/2.png"),
    });

    const imageSource =
        typeof profileForm.avi === "string"
            ? { uri: profileForm.avi }
            : profileForm.avi;

    const icons = {
        logout: (
            <Iconify icon="solar:logout-outline" size={22} color="#f43f5e" />
        ),
        delete: (
            <Iconify
                icon="solar:trash-bin-trash-outline"
                size={22}
                color="#f43f5e"
            />
        ),
    };

    const handleDeleteAccount = () => {
        Alert.alert(
            "Confirm Delete",
            "Are you sure you want to delete your account?",
            [
                {
                    text: "Cancel",
                    style: "cancel",
                },
                {
                    text: "OK",
                    onPress: () => {
                        router.replace("/");
                    },
                },
            ]
        );
        router.replace("/");
    };
    const handleLogout = () => {
        router.replace("/");
    };
    return (
        <>
            <Card className="h-28">
                <View className="flex-row space">
                    <View className="flex-row gap-2 items-center">
                        <Image
                            source={imageSource}
                            className="size-16 rounded-full"
                        />
                        <View>
                            <ThemedText
                                content={profileForm.username}
                                className="text-2xl font-semibold"
                            />
                            <ThemedText
                                content={profileForm.email}
                                className="mt-1 sub-title"
                            />
                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={() => actionSheetRef.current?.show()}
                        className="rounded-full size-12 center bg-theme"
                    >
                        <Iconify
                            icon="fa-solid:user-edit"
                            size={20}
                            color={colors.primary}
                        />
                    </TouchableOpacity>
                </View>
            </Card>
            <View className="mt-5" {...props} />
            <Card className="my-5">
                <View className="gap-y-4">
                    <ProfileTab
                        name="Log out"
                        icon={icons.logout}
                        textClassName="text-danger"
                        type="action"
                        action={handleLogout}
                    />
                    <HR />
                    <ProfileTab
                        name="Delete Account"
                        icon={icons.delete}
                        textClassName="text-danger"
                        type="action"
                        action={handleDeleteAccount}
                    />
                </View>
            </Card>
            <ProfileEditSheet
                profileForm={profileForm}
                actionSheetRef={actionSheetRef}
                setProfileForm={setProfileForm}
            />
        </>
    );
}
