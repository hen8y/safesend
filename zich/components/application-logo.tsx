import { Image } from "expo-image";
import { View } from "react-native";

export default function ApplicationLogo() {
    return (
        <View className="size-20 mx-auto rounded-full p-3 bg-neutral-200 center">
            <Image
                source={require("@/assets/images/logo.png")}
                cachePolicy="memory-disk"
                transition={1000}
                style={{ width: 50, height: 50 }}
            />
        </View>
    );
}
