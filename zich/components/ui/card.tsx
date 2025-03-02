import { View, ViewProps } from "react-native";

interface CardProps extends ViewProps {
    className?: string;
}
export default function Card({ className, ...props }: CardProps): JSX.Element {
    return (
        <View
            className={`border-theme dark:shadow-none bg-overlay p-5 gap-y-4 rounded-2xl ${className}`}
            {...props}
        />
    );
}
