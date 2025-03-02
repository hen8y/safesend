import React, { useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';

type TransactionType = 'loan' | 'repayment' | 'transfer';
type TransactionStatus = 'completed' | 'pending' | 'failed';

interface Transaction {
  id: number;
  type: TransactionType;
  amount: number;
  date: string;
  status: TransactionStatus;
  description: string;
}

interface FilterButton {
  label: string;
  value: TransactionType | 'all';
}

interface DateFilter {
  label: string;
  value: 'all' | 'month' | '3months' | 'year';
}

const TransactionHistoryScreen = () => {
  const [activeFilter, setActiveFilter] = useState<TransactionType | 'all'>('all');
  const [dateFilter, setDateFilter] = useState<DateFilter['value']>('all');

  // Mock transaction data - in real app, this would come from your backend
  const transactions: Transaction[] = [
    {
      id: 1,
      type: 'loan',
      amount: 10000,
      date: '2024-03-01',
      status: 'completed',
      description: 'Loan Disbursement',
    },
    {
      id: 2,
      type: 'repayment',
      amount: 856.07,
      date: '2024-03-15',
      status: 'completed',
      description: 'Monthly Payment',
    },
    {
      id: 3,
      type: 'transfer',
      amount: 500,
      date: '2024-03-20',
      status: 'pending',
      description: 'Extra Payment',
    },
  ];

  const filterButtons: FilterButton[] = [
    { label: 'All', value: 'all' },
    { label: 'Loans', value: 'loan' },
    { label: 'Repayments', value: 'repayment' },
    { label: 'Transfers', value: 'transfer' },
  ];

  const dateFilters: DateFilter[] = [
    { label: 'All Time', value: 'all' },
    { label: 'This Month', value: 'month' },
    { label: 'Last 3 Months', value: '3months' },
    { label: 'This Year', value: 'year' },
  ];

  const getStatusColor = (status: TransactionStatus): string => {
    switch (status) {
      case 'completed':
        return 'text-green-600';
      case 'pending':
        return 'text-yellow-600';
      case 'failed':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  const filteredTransactions = transactions.filter((transaction) => {
    if (activeFilter !== 'all' && transaction.type !== activeFilter) {
      return false;
    }
    // Add date filtering logic here based on dateFilter
    return true;
  });

  return (
    <ScrollView className="flex-1 bg-white">
      {/* Filter Section */}
      <View className="p-4">
        <Text className="text-xl font-bold mb-4">Transaction History</Text>
        
        {/* Type Filters */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          className="mb-4"
        >
          {filterButtons.map((button) => (
            <Pressable
              key={button.value}
              onPress={() => setActiveFilter(button.value)}
              className={`mr-2 px-4 py-2 rounded-full ${
                activeFilter === button.value
                  ? 'bg-blue-600'
                  : 'bg-gray-200'
              }`}
            >
              <Text
                className={`${
                  activeFilter === button.value
                    ? 'text-white'
                    : 'text-gray-700'
                }`}
              >
                {button.label}
              </Text>
            </Pressable>
          ))}
        </ScrollView>

        {/* Date Filters */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          className="mb-4"
        >
          {dateFilters.map((filter) => (
            <Pressable
              key={filter.value}
              onPress={() => setDateFilter(filter.value)}
              className={`mr-2 px-4 py-2 rounded-full ${
                dateFilter === filter.value
                  ? 'bg-blue-600'
                  : 'bg-gray-200'
              }`}
            >
              <Text
                className={`${
                  dateFilter === filter.value
                    ? 'text-white'
                    : 'text-gray-700'
                }`}
              >
                {filter.label}
              </Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>

      {/* Transactions List */}
      <View className="px-4">
        {filteredTransactions.map((transaction) => (
          <View
            key={transaction.id}
            className="flex-row justify-between items-center py-4 border-b border-gray-200"
          >
            <View>
              <Text className="font-medium">{transaction.description}</Text>
              <Text className="text-gray-500">{transaction.date}</Text>
            </View>
            <View className="items-end">
              <Text className="font-medium">
                {transaction.type === 'repayment' ? '-' : '+'}$
                {transaction.amount}
              </Text>
              <Text className={getStatusColor(transaction.status)}>
                {transaction.status.charAt(0).toUpperCase() + 
                 transaction.status.slice(1)}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default TransactionHistoryScreen; 