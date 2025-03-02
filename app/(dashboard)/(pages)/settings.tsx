import { router } from 'expo-router';
import React, { useState } from 'react';
import { Pressable, ScrollView, Switch, Text, View } from 'react-native';

interface NotificationSetting {
  id: string;
  title: string;
  description: string;
  enabled: boolean;
}

const SettingsScreen = () => {
  const [notificationSettings, setNotificationSettings] = useState<NotificationSetting[]>([
    {
      id: 'payment_due',
      title: 'Payment Due Alerts',
      description: 'Receive notifications when payments are due',
      enabled: true,
    },
    {
      id: 'payment_confirmation',
      title: 'Payment Confirmations',
      description: 'Get notified when payments are processed',
      enabled: true,
    },
    {
      id: 'loan_updates',
      title: 'Loan Updates',
      description: 'Updates about your loan status and changes',
      enabled: true,
    },
    {
      id: 'marketing',
      title: 'Marketing Communications',
      description: 'Receive special offers and promotions',
      enabled: false,
    },
  ]);

  const toggleNotification = (id: string) => {
    setNotificationSettings(prev =>
      prev.map(setting =>
        setting.id === id ? { ...setting, enabled: !setting.enabled } : setting
      )
    );
  };

  const settingSections = [
    {
      title: 'Account',
      items: [
        {
          icon: '👤',
          title: 'Edit Profile',
          route: '/edit-profile',
        },
        {
          icon: '🔒',
          title: 'Security Settings',
          route: '/security',
        },
        {
          icon: '💳',
          title: 'Payment Methods',
          route: '/payment-methods',
        },
      ],
    },
    {
      title: 'Support',
      items: [
        {
          icon: '❓',
          title: 'Help Center',
          route: '/help',
        },
        {
          icon: '📜',
          title: 'Terms & Privacy',
          route: '/terms',
        },
        {
          icon: '📞',
          title: 'Contact Support',
          route: '/support',
        },
      ],
    },
  ];

  return (
    <ScrollView className="flex-1 bg-white">
      {/* Settings Sections */}
      {settingSections.map((section) => (
        <View key={section.title} className="mb-6">
          <Text className="px-4 py-2 text-lg font-semibold bg-gray-50">
            {section.title}
          </Text>
          {section.items.map((item) => (
            <Pressable
              key={item.title}
              onPress={() => router.push(item.route as any)}
              className="flex-row items-center px-4 py-3 border-b border-gray-100"
            >
              <Text className="text-xl mr-3">{item.icon}</Text>
              <Text className="flex-1 text-gray-800">{item.title}</Text>
              <Text className="text-gray-400">›</Text>
            </Pressable>
          ))}
        </View>
      ))}

      {/* Notification Settings */}
      <View className="mb-6">
        <Text className="px-4 py-2 text-lg font-semibold bg-gray-50">
          Notifications
        </Text>
        {notificationSettings.map((setting) => (
          <View
            key={setting.id}
            className="flex-row items-center justify-between px-4 py-3 border-b border-gray-100"
          >
            <View className="flex-1 mr-4">
              <Text className="font-medium">{setting.title}</Text>
              <Text className="text-gray-500 text-sm">{setting.description}</Text>
            </View>
            <Switch
              value={setting.enabled}
              onValueChange={() => toggleNotification(setting.id)}
            />
          </View>
        ))}
      </View>

      {/* App Info */}
      <View className="p-4">
        <Text className="text-center text-gray-500">Version 1.0.0</Text>
      </View>
    </ScrollView>
  );
};

export default SettingsScreen; 