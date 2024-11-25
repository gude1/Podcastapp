/* eslint-disable react-native/no-inline-styles */
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React, {FC} from 'react';

interface IconButtonProps {
  icon?: React.ReactNode;
  focused?: boolean;
  text?: string;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}
const IconButton: FC<IconButtonProps> = ({
  style,
  focused = false,
  onPress,
  icon,
  text = 'Download',
}) => {
  return (
    <View style={[styles.buttonCtn, style]}>
      <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        <View style={styles.button}>{icon}</View>
      </TouchableOpacity>

      <Text style={[styles.btnText, !focused && {color: '#5E626C'}]}>
        {text}
      </Text>
    </View>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  buttonCtn: {
    alignItems: 'center',
    width: 'auto',
  },
  button: {
    width: 72,
    height: 72,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff', // Adjust background as needed
    shadowColor: '#C0C4EA',
    shadowOffset: {width: 0, height: 4}, // 4px vertical offset
    shadowOpacity: 0.45, // Convert alpha (73 in hex) to decimal
    shadowRadius: 30, // 30px blur
    elevation: 10, // Android equivalent for shadow depth
  },
  btnText: {
    fontFamily: 'Poppins',
    fontWeight: 500,
    marginTop: 5,
    fontSize: 14,
    color: '#081638',
    lineHeight: 28,
  },
});
