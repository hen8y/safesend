import { router } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, Text, TextInput, View } from 'react-native';

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const HelpSupportScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

  const faqs: FAQ[] = [
    {
      id: '1',
      category: 'Loans',
      question: 'How do I apply for a loan?',
      answer: 'To apply for a loan, navigate to the dashboard and click on "Get Started". Fill in the required information about your loan amount and terms. Once submitted, we\'ll review your application and provide a decision quickly.',
    },
    {
      id: '2',
      category: 'Payments',
      question: 'How do I make a payment?',
      answer: 'You can make payments through the app using your linked bank account or card. Go to your loan details and click "Make Payment". You can also set up automatic payments for convenience.',
    },
    {
      id: '3',
      category: 'Account',
      question: 'How do I update my personal information?',
      answer: 'You can update your personal information in the Profile section. Click on "Edit Profile" to modify your contact details, address, or other information.',
    },
    {
      id: '4',
      category: 'Payments',
      question: 'What happens if I miss a payment?',
      answer: 'If you miss a payment, you may be charged a late fee. We recommend contacting support immediately to discuss your options. We\'re here to help find a solution that works for you.',
    },
    {
      id: '5',
      category: 'Security',
      question: 'How is my data protected?',
      answer: 'We use industry-standard encryption and security measures to protect your data. Your financial information is encrypted and we never store complete card numbers or bank details.',
    },
  ];

  const supportOptions = [
    {
      icon: '📞',
      title: 'Call Us',
      description: 'Speak with a support representative',
      action: 'tel:1-800-123-4567',
    },
    {
      icon: '✉️',
      title: 'Email Support',
      description: 'Send us an email',
      action: 'mailto:support@example.com',
    },
    {
      icon: '💬',
      title: 'Live Chat',
      description: 'Chat with us in real-time',
      action: '/live-chat',
    },
  ];

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="p-4">
        <Text className="text-2xl font-bold mb-6">Help & Support</Text>

        {/* Search Bar */}
        <View className="mb-6">
          <TextInput
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholder="Search FAQs..."
            className="border border-gray-200 rounded-lg p-3 bg-gray-50"
          />
        </View>

        {/* Support Options */}
        <View className="mb-6">
          <Text className="text-lg font-semibold mb-3">Contact Us</Text>
          <View className="space-y-3">
            {supportOptions.map((option) => (
              <Pressable
                key={option.title}
                onPress={() => {
                  if (option.action.startsWith('/')) {
                    router.push(option.action as any);
                  } else {
                    // Handle external links (tel: or mailto:)
                    console.log('Opening external link:', option.action);
                  }
                }}
                className="flex-row items-center p-4 bg-white rounded-lg border border-gray-200"
              >
                <Text className="text-2xl mr-3">{option.icon}</Text>
                <View className="flex-1">
                  <Text className="font-semibold">{option.title}</Text>
                  <Text className="text-gray-500">{option.description}</Text>
                </View>
                <Text className="text-gray-400">›</Text>
              </Pressable>
            ))}
          </View>
        </View>

        {/* FAQs */}
        <View>
          <Text className="text-lg font-semibold mb-3">
            Frequently Asked Questions
          </Text>
          <View className="space-y-3">
            {filteredFaqs.map((faq) => (
              <Pressable
                key={faq.id}
                onPress={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden"
              >
                <View className="p-4">
                  <View className="flex-row justify-between items-center">
                    <View className="flex-1">
                      <Text className="text-sm text-blue-600 mb-1">
                        {faq.category}
                      </Text>
                      <Text className="font-medium">{faq.question}</Text>
                    </View>
                    <Text className="text-gray-400 ml-2">
                      {expandedFaq === faq.id ? '−' : '+'}
                    </Text>
                  </View>
                  {expandedFaq === faq.id && (
                    <Text className="text-gray-600 mt-2">{faq.answer}</Text>
                  )}
                </View>
              </Pressable>
            ))}
          </View>
        </View>

        {/* No Results */}
        {searchQuery && filteredFaqs.length === 0 && (
          <View className="py-8">
            <Text className="text-center text-gray-500">
              No matching questions found
            </Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default HelpSupportScreen; 