import { router } from 'expo-router';
import { Pressable, ScrollView, Text, View } from 'react-native';

const LoanDetailsScreen = () => {
  // Mock data - in real app, this would come from your backend
  const loanDetails = {
    amount: 10000,
    term: 12,
    interestRate: 5,
    monthlyPayment: 856.07,
    remainingBalance: 8500,
    nextPaymentDate: '2024-03-15',
    autoPayment: true,
  };

  const paymentSchedule = Array.from({ length: loanDetails.term }, (_, index) => ({
    paymentNumber: index + 1,
    dueDate: new Date(2024, 2 + index, 15).toISOString().split('T')[0],
    amount: loanDetails.monthlyPayment,
    status: index === 0 ? 'Upcoming' : 'Scheduled',
  }));

  return (
    <ScrollView className="flex-1 bg-white">
      {/* Loan Breakdown Section */}
      <View className="p-6 bg-blue-50">
        <Text className="text-2xl font-bold mb-4">Loan Details</Text>
        <View className="space-y-3">
          <View className="flex-row justify-between">
            <Text className="text-gray-600">Loan Amount</Text>
            <Text className="font-semibold">${loanDetails.amount}</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray-600">Term Length</Text>
            <Text className="font-semibold">{loanDetails.term} months</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray-600">Interest Rate</Text>
            <Text className="font-semibold">{loanDetails.interestRate}%</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray-600">Monthly Payment</Text>
            <Text className="font-semibold">${loanDetails.monthlyPayment}</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray-600">Remaining Balance</Text>
            <Text className="font-semibold">${loanDetails.remainingBalance}</Text>
          </View>
        </View>
      </View>

      {/* Auto-Payment Status */}
      <View className="p-6 border-b border-gray-200">
        <View className="flex-row justify-between items-center">
          <Text className="text-lg">Auto-Payment Status</Text>
          <View className="flex-row items-center">
            <View className={`h-3 w-3 rounded-full mr-2 ${loanDetails.autoPayment ? 'bg-green-500' : 'bg-red-500'}`} />
            <Text>{loanDetails.autoPayment ? 'Enabled' : 'Disabled'}</Text>
          </View>
        </View>
      </View>

      {/* Payment Schedule */}
      <View className="p-6">
        <Text className="text-xl font-semibold mb-4">Payment Schedule</Text>
        {paymentSchedule.map((payment) => (
          <View key={payment.paymentNumber} className="flex-row justify-between py-3 border-b border-gray-100">
            <View>
              <Text className="font-medium">Payment #{payment.paymentNumber}</Text>
              <Text className="text-gray-500">{payment.dueDate}</Text>
            </View>
            <View className="items-end">
              <Text className="font-medium">${payment.amount}</Text>
              <Text className={`${
                payment.status === 'Upcoming' ? 'text-blue-600' : 'text-gray-500'
              }`}>
                {payment.status}
              </Text>
            </View>
          </View>
        ))}
      </View>

      {/* Action Buttons */}
      <View className="p-6 space-y-4">
        <Pressable
          onPress={() => router.push('/loan-details')}
          className="bg-blue-600 rounded-lg py-4"
        >
          <Text className="text-white text-center font-semibold">Settle Early</Text>
        </Pressable>

        <Pressable
          onPress={() => router.push('/report-issue')}
          className="bg-gray-200 rounded-lg py-4"
        >
          <Text className="text-gray-700 text-center font-semibold">Report an Issue</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default LoanDetailsScreen; 