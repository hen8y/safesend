import { router } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';

interface PaymentMethod {
  id: string;
  type: 'bank' | 'card' | 'wallet';
  name: string;
  details: string;
  isDefault: boolean;
  lastUsed?: string;
}

const PaymentMethodsScreen = () => {
  const [paymentMethods] = useState<PaymentMethod[]>([
    {
      id: 'bank1',
      type: 'bank',
      name: 'Chase Bank',
      details: '****6789',
      isDefault: true,
      lastUsed: '2024-03-15',
    },
    {
      id: 'card1',
      type: 'card',
      name: 'Visa Credit Card',
      details: '****4321',
      isDefault: false,
      lastUsed: '2024-03-10',
    },
    {
      id: 'wallet1',
      type: 'wallet',
      name: 'PayPal',
      details: 'user@example.com',
      isDefault: false,
    },
  ]);

  const getMethodIcon = (type: PaymentMethod['type']) => {
    switch (type) {
      case 'bank':
        return '🏦';
      case 'card':
        return '💳';
      case 'wallet':
        return '👛';
      default:
        return '💰';
    }
  };

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="p-4">
        <Text className="text-2xl font-bold mb-4">Payment Methods</Text>

        {/* Add New Payment Method Button */}
        <Pressable
          onPress={() => router.push('/payment-methods')}
          className="bg-blue-600 rounded-lg p-4 mb-6"
        >
          <Text className="text-white text-center font-semibold">
            + Add New Payment Method
          </Text>
        </Pressable>

        {/* Payment Methods List */}
        <View className="space-y-4">
          {paymentMethods.map((method) => (
            <Pressable
              key={method.id}
              onPress={() => router.push(`/payment-methods`)}
              className="flex-row items-center p-4 bg-white rounded-lg border border-gray-200"
            >
              <Text className="text-2xl mr-3">{getMethodIcon(method.type)}</Text>
              <View className="flex-1">
                <View className="flex-row items-center">
                  <Text className="font-semibold">{method.name}</Text>
                  {method.isDefault && (
                    <View className="ml-2 px-2 py-1 bg-blue-100 rounded">
                      <Text className="text-blue-600 text-xs">Default</Text>
                    </View>
                  )}
                </View>
                <Text className="text-gray-600">{method.details}</Text>
                {method.lastUsed && (
                  <Text className="text-gray-500 text-xs">
                    Last used: {method.lastUsed}
                  </Text>
                )}
              </View>
              <Text className="text-gray-400">›</Text>
            </Pressable>
          ))}
        </View>

        {/* Info Section */}
        <View className="mt-6 p-4 bg-gray-50 rounded-lg">
          <Text className="text-sm text-gray-600">
            Your payment information is securely stored and encrypted. We never
            store complete card numbers or bank account details.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default PaymentMethodsScreen; 