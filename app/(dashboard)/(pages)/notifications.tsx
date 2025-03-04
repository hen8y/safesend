import { ThemedText, ThemedView } from "@/zich/components/theme";
import NotificationTab from "@/zich/components/ui/notification-tab";
import { Image, View } from "react-native";

export default function Notification(): JSX.Element {
    const handleMarkAsRead = () => {
        alert("Mark as read");
    };

    const notifications = [
        {
            title: "Test",
            time: "12:00",
            message: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            isRead: false,
        },
        {
            title: "Test",
            time: "02:00",
            message: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            isRead: false,
        },
        {
            title: "Test",
            time: "03:00",
            message: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            isRead: false,
        },
        {
            title: "Test",
            time: "04:00",
            message: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            isRead: true,
        },
        {
            title: "Test",
            time: "05:00",
            message: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            isRead: true,
        },
        {
            title: "Test",
            time: "06:00",
            message: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            isRead: true,
        },
    ];
    return (
        <ThemedView>
            {notifications.map((notification, index) => (
                <NotificationTab
                    key={index}
                    title={notification.title}
                    time={notification.time}
                    message={notification.message}
                    isRead={notification.isRead}
                    onPress={handleMarkAsRead}
                />
            ))}

            {notifications.length === 0 && (
                <View className="center h-screen">
                    <Image
                        source={require("@/assets/images/no_notification.png")}
                        className="size-60 absolute top-40"
                    />
                    <View className="w-4/6 mx-auto center">
                        <ThemedText content="No notifications yet." />
                    </View>
                </View>
            )}
        </ThemedView>
    );
}
