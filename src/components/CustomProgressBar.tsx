import React from 'react';
import {View, StyleSheet, StyleProp, ViewStyle} from 'react-native';

const CustomProgressBar = ({
  progress,
  style,
}: {
  progress: number;
  style?: StyleProp<ViewStyle>;
}) => {
  return (
    <View style={[styles.progressBarContainer, style]}>
      <View style={[styles.progressBarFill, {width: `${progress}%`}]} />
    </View>
  );
};

const styles = StyleSheet.create({
  progressBarContainer: {
    width: '100%', // Flexible width, set parent width for control
    height: 6,
    maxWidth: 119,
    backgroundColor: 'rgba(235, 240, 241, 0.4)', // Unfilled color
    borderRadius: 3,
    // opacity: 0.4,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    opacity: 0.4,
    backgroundColor: '#FFFFFF', // Filled color
  },
});

export default CustomProgressBar;
