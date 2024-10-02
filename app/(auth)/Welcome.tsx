import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useRef, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import Swiper from 'react-native-swiper';
import { onboarding } from '@/constants';
import CustomButton from '@/components/CustomButton';
const Welcome = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isLastSlide = activeIndex === onboarding.length - 1;
  const swiperRef = useRef<Swiper>(null);
  return (
    <SafeAreaView className=' flex h-full items-center bg-white'>
      <TouchableOpacity
        onPress={() => {
          router.replace('/(auth)/Sign-up');
        }}
        className=' w-full flex items-end p-5'
      >
        <Text className=' text-black text-md font-JakartaBold'>Skip</Text>
      </TouchableOpacity>
      <Swiper
        ref={swiperRef}
        loop={false}
        dot={
          <View className=' w-[32px] h-[4px] mx-1 bg-[#E2E8F0] rounded-full' />
        }
        activeDot={
          <View className=' w-[32px] h-[4px] mx-1 bg-[#0286FF] rounded-full' />
        }
        onIndexChanged={(index) => setActiveIndex(index)}
      >
        {onboarding.map((field) => {
          return (
            <View
              key={field.id}
              className=' flex items-center justify-center p-5'
            >
              <Image
                source={field.image}
                className={` w-full h-[300px]`}
                resizeMode='contain'
              />
              <View
                className={`flex flex-row items-center justify-center mt-10`}
              >
                <Text className=' text-black text-3xl font-bold mx-10 text-center'>
                  {field.title}
                </Text>
              </View>
              <Text className=' text-lg font-JakartaSemiBold text-center text-[#858585] mx-10 mt-3'>
                {field.description}
              </Text>
            </View>
          );
        })}
      </Swiper>
      <CustomButton
        title={isLastSlide ? 'Get Started' : 'Next'}
        onPress={() => {
          isLastSlide
            ? router.replace('/(auth)/Sign-up')
            : swiperRef.current?.scrollBy(1);
        }}
        className={'w-11/12 mt-10'}
      />
    </SafeAreaView>
  );
};

export default Welcome;
