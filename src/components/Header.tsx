import {
  View,
  StyleSheet,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from 'react-native';
import React, {FC} from 'react';

interface HeaderProps {
  LeftIcon: React.ReactNode;
  RightIcon: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  leftIconPress?: () => void;
  rightIconPress?: () => void;
}

const Header: FC<HeaderProps> = ({
  LeftIcon,
  RightIcon,
  style,
  leftIconPress,
  rightIconPress,
}) => {
  return (
    <View style={[styles.header, style]}>
      <TouchableOpacity activeOpacity={0.8} onPress={leftIconPress}>
        {LeftIcon}
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.8} onPress={rightIconPress}>
        {RightIcon}
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    width: '100%',
    justifyContent: 'space-between',
  },
});
