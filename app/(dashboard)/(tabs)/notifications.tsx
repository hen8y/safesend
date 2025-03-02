import { router } from 'expo-router';
import { Pressable, ScrollView, Text, View } from 'react-native';

interface Notification {
  id: number;
  type: 'upcoming' | 'overdue' | 'info';
  title: string;
  message: string;
  date: string;
  isRead: boolean;
  actionLink?: string;
}

const NotificationsScreen = () => {
  // Mock notifications data - in real app, this would come from your backend
  const notifications: Notification[] = [
    {
      id: 1,
      type: 'upcoming',
      title: 'Upcoming Payment',
      message: 'Your loan payment of $856.07 is due in 3 days',
      date: '2024-03-15',
      isRead: false,
      actionLink: '/loan-details',
    },
    {
      id: 2,
      type: 'overdue',
      title: 'Payment Overdue',
      message: 'Your payment of $500 is overdue by 5 days',
      date: '2024-03-10',
      isRead: true,
      actionLink: '/loan-details',
    },
    {
      id: 3,
      type: 'info',
      title: 'Auto-Payment Enabled',
      message: 'Your auto-payment has been successfully set up',
      date: '2024-03-01',
      isRead: true,
    },
  ];

  const getNotificationStyle = (type: Notification['type']) => {
    switch (type) {
      case 'upcoming':
        return 'bg-blue-50 border-blue-200';
      case 'overdue':
        return 'bg-red-50 border-red-200';
      case 'info':
        return 'bg-gray-50 border-gray-200';
      default:
        return 'bg-white border-gray-200';
    }
  };

  const getNotificationIcon = (type: Notification['type']) => {
    switch (type) {
      case 'upcoming':
        return '🔔';
      case 'overdue':
        return '⚠️';
      case 'info':
        return 'ℹ️';
      default:
        return '📌';
    }
  };

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="p-4">
        <Text className="text-2xl font-bold mb-4">Notifications</Text>

        <View className="space-y-4">
          {notifications.map((notification) => (
            <Pressable
              key={notification.id}
              onPress={() => {
                if (notification.actionLink) {
                  router.push(notification.actionLink as any);
                }
              }}
              className={`p-4 rounded-lg border ${getNotificationStyle(
                notification.type
              )} ${!notification.isRead ? 'border-l-4' : ''}`}
            >
              <View className="flex-row items-start">
                <Text className="text-2xl mr-3">
                  {getNotificationIcon(notification.type)}
                </Text>
                <View className="flex-1">
                  <View className="flex-row justify-between items-center mb-1">
                    <Text className="font-semibold">{notification.title}</Text>
                    {!notification.isRead && (
                      <View className="bg-blue-600 rounded-full h-2 w-2" />
                    )}
                  </View>
                  <Text className="text-gray-600 mb-2">{notification.message}</Text>
                  <Text className="text-gray-500 text-sm">{notification.date}</Text>
                </View>
              </View>
            </Pressable>
          ))}
        </View>

        {notifications.length === 0 && (
          <View className="py-8">
            <Text className="text-center text-gray-500">
              No new notifications
            </Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default NotificationsScreen; 