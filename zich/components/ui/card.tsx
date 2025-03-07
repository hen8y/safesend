import { CardProps } from "@/utils/interfaces";
import { View } from "react-native";

export default function Card({ className, ...props }: CardProps): JSX.Element {
    return (
        <View
            className={`border-theme dark:shadow-none bg-overlay p-5 gap-y-4 rounded-2xl ${className}`}
            {...props}
        />
    );
}
