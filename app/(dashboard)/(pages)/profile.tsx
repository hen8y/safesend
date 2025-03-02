import { router } from 'expo-router';
import React from 'react';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';

interface UserProfile {
  name: string;
  email: string;
  phone: string;
  avatar: string;
  verificationStatus: 'verified' | 'pending' | 'unverified';
  memberSince: string;
  creditScore: number;
}

const ProfileScreen = () => {
  // Mock user data - in real app, this would come from your backend
  const userProfile: UserProfile = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    avatar: 'https://ui-avatars.com/api/?name=John+Doe&background=0D8ABC&color=fff',
    verificationStatus: 'verified',
    memberSince: 'March 2024',
    creditScore: 750,
  };

  const getVerificationBadge = (status: UserProfile['verificationStatus']) => {
    switch (status) {
      case 'verified':
        return {
          icon: '✓',
          color: 'bg-green-100',
          textColor: 'text-green-700',
          text: 'Verified',
        };
      case 'pending':
        return {
          icon: '⌛',
          color: 'bg-yellow-100',
          textColor: 'text-yellow-700',
          text: 'Pending',
        };
      default:
        return {
          icon: '!',
          color: 'bg-gray-100',
          textColor: 'text-gray-700',
          text: 'Unverified',
        };
    }
  };

  const badge = getVerificationBadge(userProfile.verificationStatus);

  return (
    <ScrollView className="flex-1 bg-white">
      {/* Profile Header */}
      <View className="bg-blue-600 p-6 items-center">
        <View className="relative">
          <Image
            source={{ uri: userProfile.avatar }}
            className="w-24 h-24 rounded-full"
          />
          <View className={`absolute bottom-0 right-0 ${badge.color} p-1 rounded-full border-2 border-white`}>
            <Text>{badge.icon}</Text>
          </View>
        </View>
        <Text className="text-white text-xl font-bold mt-4">{userProfile.name}</Text>
        <View className={`mt-2 px-3 py-1 rounded-full ${badge.color}`}>
          <Text className={`${badge.textColor} font-medium`}>{badge.text}</Text>
        </View>
      </View>

      {/* Profile Details */}
      <View className="p-6">
        <View className="space-y-6">
          {/* Contact Information */}
          <View>
            <Text className="text-lg font-semibold mb-3">Contact Information</Text>
            <View className="space-y-3">
              <View>
                <Text className="text-gray-500">Email</Text>
                <Text className="font-medium">{userProfile.email}</Text>
              </View>
              <View>
                <Text className="text-gray-500">Phone</Text>
                <Text className="font-medium">{userProfile.phone}</Text>
              </View>
            </View>
          </View>

          {/* Account Information */}
          <View>
            <Text className="text-lg font-semibold mb-3">Account Information</Text>
            <View className="space-y-3">
              <View>
                <Text className="text-gray-500">Member Since</Text>
                <Text className="font-medium">{userProfile.memberSince}</Text>
              </View>
              <View>
                <Text className="text-gray-500">Credit Score</Text>
                <Text className="font-medium">{userProfile.creditScore}</Text>
              </View>
            </View>
          </View>

          {/* Actions */}
          <View className="space-y-3">
            <Pressable
              onPress={() => router.push('/profile')}
              className="bg-blue-600 rounded-lg p-4"
            >
              <Text className="text-white text-center font-semibold">
                Edit Profile
              </Text>
            </Pressable>

            <Pressable
              onPress={() => router.push('/profile')}
              className="bg-gray-100 rounded-lg p-4"
            >
              <Text className="text-gray-700 text-center font-semibold">
                Verification Status
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen; 