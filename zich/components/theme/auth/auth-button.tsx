import { router } from "expo-router";

import ZichButton from "../../ui/zich-button";

export default function AuthButton() {
    return (
        <>
            <ZichButton
                content="Sign In"
                roundedFull
                textClassName="text-white"
                onPress={() => router.replace("/login")}
            />

            <ZichButton
                content="Sign Up"
                roundedFull
                textClassName="text-primary"
                theme="bg-secondary"
                onPress={() => router.replace("/register")}
            />
        </>
    );
}
