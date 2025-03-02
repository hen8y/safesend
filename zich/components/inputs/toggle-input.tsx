import { useState } from "react";
import { Switch } from "react-native";

export default function ToggleInput({
    handleToggle,
    trueWhen,
}: {
    handleToggle: () => void;
    trueWhen?: boolean;
}): JSX.Element {
    const [isEnabled, setIsEnabled] = useState(trueWhen);

    const toggleSwitch = () => {
        setIsEnabled((previousState) => !previousState);
        handleToggle();
    };

    return (
        <Switch
            trackColor={{ false: "#e5e7eb", true: "#3b82f6" }}
            thumbColor="#fff"
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
    );
}
