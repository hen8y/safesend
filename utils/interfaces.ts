import { Dispatch, RefObject, SetStateAction } from "react";
import { TextProps, ViewProps } from "react-native";
import { ActionSheetRef } from "react-native-actions-sheet";

interface VerificationFormProps {
    handleVerificationForm: () => void;
    handleGoBack: () => void;
    isLoading: boolean;
}

interface PasswordFormProps {
    onComplete: () => void;
    isLoading: boolean;
    form: RegisterFormProps;
    setForm: Dispatch<SetStateAction<RegisterFormProps>>;
}

interface RegisterFormProps {
    email: string;
    username: string;
    password: string;
    confirmPassword?: string;
    role: "borrower" | "lender";
};

interface ProfileFormProps {
    username: string;
    email: string;
    avi: any;
};

interface AuthThemedViewProps extends ViewProps {
    className?: string;
    isLoading?: boolean;
    setIsLoading?: Dispatch<SetStateAction<boolean>>;
};

interface FormThemedViewProps extends ViewProps {
    className?: string;
};

interface ThemeHeaderProps {
    title?: string;
    showTitle?: boolean;
    rightIcon?: JSX.Element | null;
    leftIcon?: JSX.Element | null;
    backgroundColor?: string;
}

interface BackHeaderProps extends ThemeHeaderProps {
    onBack?: () => void;
}


interface CardProps extends ViewProps {
    className?: string;
}

interface ProfileEditSheetProps {
    actionSheetRef: RefObject<ActionSheetRef>;
    profileForm: ProfileFormProps;
    setProfileForm: Dispatch<SetStateAction<ProfileFormProps>>;
}
interface ProfileTabProps {
    name: string;
    details?: any;
    icon: JSX.Element;
    type: "link" | "action" | "toggle" | "";
    action?: () => void;
    trueWhen?: boolean;
    textClassName?: string;
}

interface ThemedTextProps extends TextProps {
    className?: string;
    color?: string;
    content?: string | null | number;
};

interface ThemedViewProps extends ViewProps {
    className?: string;
    isLoading?: boolean;
    setIsLoading?: Dispatch<SetStateAction<boolean>>;
    theme?: "mild" | "normal";
    scrollEnabled?: boolean;
};

interface ActionSheetHeaderProps {
    title: string;
    onCancel: () => void;
    onComplete: () => void;
    cancelLabel?: string | React.ReactNode;
    completeLabel?: string | React.ReactNode;
}

interface NotificationTabProps {
    title: string;
    time: string;
    message: string;
    isRead?: boolean;
    onPress?: () => void;
}

interface ZichButtonProps {
    content: string;
    isLoading?: boolean;
    onPress: () => void;
    className?: string;
    roundedFull?: boolean;
    theme?: string;
    textClassName?: string;
    customPadding?: string;
}

interface EmailFormProps {
    onComplete: () => void;
    isLoading: boolean;
    form: RegisterFormProps;
    setForm: Dispatch<SetStateAction<RegisterFormProps>>;
}

interface OTPInputProps {
    length?: number;
    error: string;
    onComplete?: (otp: string) => void;
}

interface RoundedCheckboxProps {
    checked?: boolean;
    label?: string;
    error?: string;
    onChange?: (checked: boolean) => void;
    className?: string;
}

interface ZichTextInputProps {
    label: string;
    onChangeText: (text: string) => void;
    value: string;
    placeholder?: string;
    containerClassName?: string;
    hideLabel?: boolean;
    inputClassName?: string;
    borderBottom?: boolean;
    error?: string | null;
    autoFocus?: boolean;
    inputMode?: "text" | "email" | "numeric" | "tel" | "search";
    onDone?: () => void;
}


export type {
    VerificationFormProps,
    PasswordFormProps,
    FormThemedViewProps,
    RegisterFormProps,
    ProfileFormProps,
    AuthThemedViewProps,
    ThemeHeaderProps,
    BackHeaderProps,
    CardProps,
    ProfileEditSheetProps,
    ProfileTabProps,
    ThemedTextProps,
    ThemedViewProps,
    ActionSheetHeaderProps,
    NotificationTabProps,
    ZichButtonProps,
    EmailFormProps,
    OTPInputProps,
    RoundedCheckboxProps,
    ZichTextInputProps,
};
