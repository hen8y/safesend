import { View } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";

export default function LoadingOverlay({ isLoading }: { isLoading?: boolean }) {
    return (
        <View className="container justify-center items-center">
            <Spinner
                visible={isLoading}
                textStyle={{ color: "#fff" }}
                overlayColor="rgba(0, 0, 0, 0.5)"
            />
        </View>
    );
}
