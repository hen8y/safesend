import React, { useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';

interface Section {
  title: string;
  content: string[];
}

const TermsPrivacyScreen = () => {
  const [activeTab, setActiveTab] = useState<'terms' | 'privacy'>('terms');

  const termsOfService: Section[] = [
    {
      title: 'Acceptance of Terms',
      content: [
        'By accessing and using this application, you accept and agree to be bound by the terms and provision of this agreement.',
        'Please read these terms carefully before using the service.',
      ],
    },
    {
      title: 'User Eligibility',
      content: [
        'You must be at least 18 years old to use this service.',
        'You must have the legal capacity to enter into binding contracts.',
        'You must be a resident of an eligible jurisdiction.',
      ],
    },
    {
      title: 'Loan Terms',
      content: [
        'All loans are subject to approval and credit verification.',
        'Interest rates and terms are determined based on creditworthiness.',
        'Early repayment options are available without additional fees.',
      ],
    },
  ];

  const privacyPolicy: Section[] = [
    {
      title: 'Information Collection',
      content: [
        'We collect personal information that you provide directly to us.',
        'This includes contact information, financial information, and identification documents.',
        'We also collect data about your usage of the application.',
      ],
    },
    {
      title: 'Data Usage',
      content: [
        'Your information is used to provide and improve our services.',
        'We use data to assess loan applications and prevent fraud.',
        'We may use your contact information to send important updates.',
      ],
    },
    {
      title: 'Data Protection',
      content: [
        'We implement appropriate security measures to protect your data.',
        'Your financial information is encrypted using industry-standard protocols.',
        'We do not sell your personal information to third parties.',
      ],
    },
  ];

  return (
    <View className="flex-1 bg-white">
      {/* Tab Navigation */}
      <View className="flex-row border-b border-gray-200">
        <Pressable
          onPress={() => setActiveTab('terms')}
          className={`flex-1 py-4 ${
            activeTab === 'terms' ? 'border-b-2 border-blue-600' : ''
          }`}
        >
          <Text
            className={`text-center font-semibold ${
              activeTab === 'terms' ? 'text-blue-600' : 'text-gray-600'
            }`}
          >
            Terms of Service
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setActiveTab('privacy')}
          className={`flex-1 py-4 ${
            activeTab === 'privacy' ? 'border-b-2 border-blue-600' : ''
          }`}
        >
          <Text
            className={`text-center font-semibold ${
              activeTab === 'privacy' ? 'text-blue-600' : 'text-gray-600'
            }`}
          >
            Privacy Policy
          </Text>
        </Pressable>
      </View>

      {/* Content */}
      <ScrollView className="flex-1 p-4">
        {(activeTab === 'terms' ? termsOfService : privacyPolicy).map(
          (section, index) => (
            <View
              key={section.title}
              className={`mb-6 ${index !== 0 ? 'border-t border-gray-100 pt-6' : ''}`}
            >
              <Text className="text-xl font-semibold mb-3">{section.title}</Text>
              {section.content.map((paragraph, pIndex) => (
                <Text key={pIndex} className="text-gray-600 mb-2">
                  • {paragraph}
                </Text>
              ))}
            </View>
          )
        )}

        {/* Last Updated */}
        <View className="mt-6 pb-6">
          <Text className="text-center text-gray-500">
            Last updated: March 2024
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default TermsPrivacyScreen; 