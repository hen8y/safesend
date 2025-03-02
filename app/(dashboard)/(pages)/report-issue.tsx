import { router } from 'expo-router';
import React, { useState } from 'react';
import { Pressable, ScrollView, Text, TextInput, View } from 'react-native';

interface Transaction {
  id: string;
  type: string;
  amount: number;
  date: string;
  description: string;
}

interface IssueCategory {
  id: string;
  title: string;
  description: string;
}

const ReportIssueScreen = () => {
  const [selectedTransaction, setSelectedTransaction] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [description, setDescription] = useState('');

  // Mock transactions data
  const transactions: Transaction[] = [
    {
      id: 'loan1',
      type: 'Loan',
      amount: 10000,
      date: '2024-03-01',
      description: 'Personal Loan',
    },
    {
      id: 'payment1',
      type: 'Payment',
      amount: 856.07,
      date: '2024-03-15',
      description: 'Monthly Payment',
    },
  ];

  // Issue categories
  const categories: IssueCategory[] = [
    {
      id: 'payment',
      title: 'Payment Issue',
      description: 'Problems with making or receiving payments',
    },
    {
      id: 'loan',
      title: 'Loan Terms',
      description: 'Questions about loan terms or conditions',
    },
    {
      id: 'technical',
      title: 'Technical Problem',
      description: 'App or website technical difficulties',
    },
    {
      id: 'other',
      title: 'Other',
      description: 'Other issues not listed above',
    },
  ];

  const handleSubmit = () => {
    if (!selectedTransaction || !selectedCategory || !description.trim()) {
      // Show error message
      return;
    }
    
    // Submit the issue report
    console.log({
      transactionId: selectedTransaction,
      categoryId: selectedCategory,
      description,
    });
    
    // Navigate back to dashboard
    router.back();
  };

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="p-4">
        <Text className="text-2xl font-bold mb-6">Report an Issue</Text>

        {/* Transaction Selection */}
        <View className="mb-6">
          <Text className="text-lg font-semibold mb-3">Select Transaction</Text>
          <View className="space-y-2">
            {transactions.map((transaction) => (
              <Pressable
                key={transaction.id}
                onPress={() => setSelectedTransaction(transaction.id)}
                className={`p-4 rounded-lg border ${
                  selectedTransaction === transaction.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200'
                }`}
              >
                <View className="flex-row justify-between items-center">
                  <View>
                    <Text className="font-medium">{transaction.description}</Text>
                    <Text className="text-gray-500">{transaction.date}</Text>
                  </View>
                  <Text className="font-semibold">
                    ${transaction.amount.toFixed(2)}
                  </Text>
                </View>
              </Pressable>
            ))}
          </View>
        </View>

        {/* Issue Category */}
        <View className="mb-6">
          <Text className="text-lg font-semibold mb-3">Issue Category</Text>
          <View className="space-y-2">
            {categories.map((category) => (
              <Pressable
                key={category.id}
                onPress={() => setSelectedCategory(category.id)}
                className={`p-4 rounded-lg border ${
                  selectedCategory === category.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200'
                }`}
              >
                <Text className="font-medium">{category.title}</Text>
                <Text className="text-gray-500 text-sm">
                  {category.description}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>

        {/* Description */}
        <View className="mb-6">
          <Text className="text-lg font-semibold mb-3">Description</Text>
          <TextInput
            multiline
            numberOfLines={4}
            value={description}
            onChangeText={setDescription}
            placeholder="Please describe your issue in detail..."
            className="border border-gray-200 rounded-lg p-3 text-gray-700"
            textAlignVertical="top"
          />
        </View>

        {/* Submit Button */}
        <Pressable
          onPress={handleSubmit}
          className={`rounded-lg p-4 ${
            !selectedTransaction || !selectedCategory || !description.trim()
              ? 'bg-gray-300'
              : 'bg-blue-600'
          }`}
          disabled={!selectedTransaction || !selectedCategory || !description.trim()}
        >
          <Text className="text-white text-center font-semibold">
            Submit Report
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default ReportIssueScreen; 