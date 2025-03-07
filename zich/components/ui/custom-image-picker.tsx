import { ProfileFormProps } from "@/utils/interfaces";
import * as ImagePicker from "expo-image-picker";
import { Dispatch, SetStateAction, useState } from "react";
import { Alert, Image, TouchableOpacity, View } from "react-native";

export default function CustomImagePicker({
    defaultImage,
    onUpdate,
}: {
    defaultImage: any;
    onUpdate: Dispatch<SetStateAction<ProfileFormProps>>;
}): JSX.Element {
    const [image, setImage] = useState<string>(defaultImage);

    const selectImage = async () => {
        const permissionResult =
            await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (!permissionResult.granted) {
            Alert.alert(
                "Permission Required",
                "You need to allow access to the photo library."
            );
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ["images"],
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0.8,
        });

        if (!result.canceled && result.assets && result.assets.length > 0) {
            const selectedImage = result.assets[0].uri;
            setImage(selectedImage);
            onUpdate((prevState) => ({
                ...prevState,
                avi: selectedImage,
            }));
        }
    };

    return (
        <View className="center mt-5">
            <TouchableOpacity onPress={selectImage}>
                <Image
                    source={typeof image === "string" ? { uri: image } : image}
                    className="size-16 rounded-full border-theme"
                />
            </TouchableOpacity>
        </View>
    );
}
