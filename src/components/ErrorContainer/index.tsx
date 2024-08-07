// src/components/ErrorMessage.tsx
import React, { useEffect } from 'react';
import {Text} from 'react-native';
import Animated, { Easing, useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { styles } from './styles';

interface ErrorMessageProps {
  message: string;
  visible: boolean;
}

export function ErrorMessage({ message, visible }: ErrorMessageProps) {
  const opacity = useSharedValue(0);

  useEffect(() => {
    if (visible) {
      opacity.value = withTiming(1, { duration: 300, easing: Easing.inOut(Easing.ease) });
      setTimeout(() => {
        opacity.value = withTiming(0, { duration: 300, easing: Easing.inOut(Easing.ease) });
      }, 3000);
    }
  }, [visible]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  }, []);

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
        <MaterialIcons name="error-outline" size={24} color="#A02334" />
        <Text style={styles.text}>{message}</Text>
    </Animated.View>
  );
}

