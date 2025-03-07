import { RoundedCheckboxProps } from "@/utils/interfaces";
import { useEffect, useState } from "react";
import { Animated, TouchableOpacity, View } from "react-native";
import { Iconify } from "react-native-iconify";

import { ThemedText } from "../theme/themed-text";

export default function RoundedCheckbox({
    checked: controlledChecked,
    onChange,
    label = "",
    error,
    className,
}: RoundedCheckboxProps): JSX.Element {
    const [internalChecked, setInternalChecked] = useState(false);
    const [scaleAnim] = useState(new Animated.Value(controlledChecked ? 1 : 0));

    const isControlled = controlledChecked !== undefined;
    const isChecked = isControlled ? controlledChecked : internalChecked;

    useEffect(() => {
        if (controlledChecked !== undefined) {
            Animated.spring(scaleAnim, {
                toValue: controlledChecked ? 1 : 0,
                useNativeDriver: true,
                tension: 50,
                friction: 7,
            }).start();
        }
    }, [controlledChecked]);

    const handlePress = () => {
        const newValue = isControlled ? !controlledChecked : !internalChecked;

        Animated.spring(scaleAnim, {
            toValue: newValue ? 1 : 0,
            useNativeDriver: true,
            tension: 50,
            friction: 7,
        }).start();

        if (isControlled) {
            onChange?.(!controlledChecked);
        } else {
            setInternalChecked(!internalChecked);
            onChange?.(!internalChecked);
        }
    };
    const bgBorderClass = isChecked
        ? "bg-primary border-primary"
        : `bg-white ${error ? "border-danger" : "border-theme"}`;

    return (
        <TouchableOpacity
            onPress={handlePress}
            className={`flex-row items-center gap-x-2 ${className}`}
            activeOpacity={0.7}
        >
            <View
                className={`size-6 rounded-full bg-overlay border border-theme items-center justify-center ${bgBorderClass}`}
            >
                <Animated.View
                    className="absolute items-center justify-center"
                    style={{ transform: [{ scale: scaleAnim }] }}
                >
                    <Iconify icon="mdi:check-bold" size={12} color="white" />
                </Animated.View>
            </View>
            {label && <ThemedText content={label} className="text-black font-semibold" />}
        </TouchableOpacity>
    );
}
