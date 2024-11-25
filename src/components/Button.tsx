import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React, {FC} from 'react';
import {PRIMARY_COLOR} from '../constants';

interface ButtonProps {
  onPress?: () => void;
  text?: string;
  RightIcon?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  ctnStyle?: StyleProp<ViewStyle>;
  txtStyle?: StyleProp<TextStyle>;
}

const Button: FC<ButtonProps> = ({
  onPress,
  style,
  ctnStyle,
  txtStyle,
  RightIcon,
  text = 'Button',
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[styles.buttonCtn, ctnStyle]}>
      <View style={[styles.button, style]}>
        <Text style={[styles.buttonText, txtStyle]}>{text}</Text>
        {RightIcon && RightIcon}
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonCtn: {},
  button: {
    backgroundColor: PRIMARY_COLOR,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 60,
    justifyContent: 'center',
    width: '100%',
    minWidth: 150,
    maxWidth: 294,
    minHeight: 60,
  },
  buttonText: {
    color: '#FFFFFF',
    fontFamily: 'Poppins',
    marginRight: 4,
    fontSize: 18,
    lineHeight: 24,
    textAlign: 'left',
  },
});
