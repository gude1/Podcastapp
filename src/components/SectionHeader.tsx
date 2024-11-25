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
import {PRIMARY_COLOR} from '../constants';

interface SectionHeaderProps {
  title?: string;
  subTitle?: string;
  actionText?: string;
  style?: StyleProp<ViewStyle>;
}

const SectionHeader: FC<SectionHeaderProps> = ({
  title = 'Kids',
  style,
  subTitle,
  actionText = 'View more',
}) => {
  return (
    <View style={[styles.ctn, style]}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={styles.sectionTitle}>{title}</Text>
        {subTitle && <Text style={styles.subtitle}>{subTitle}</Text>}
      </View>
      <TouchableOpacity activeOpacity={0.8}>
        <Text style={styles.sectionBtn}>{actionText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SectionHeader;

const styles = StyleSheet.create({
  ctn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sectionTitle: {
    fontFamily: 'Poppins',
    color: '#000',
    fontWeight: 600,
    fontSize: 20,
    lineHeight: 24,
  },
  sectionBtn: {
    fontFamily: 'Poppins',
    fontWeight: 500,
    marginLeft: 5,
    color: '#5E626C',
    fontSize: 14,
    lineHeight: 24,
  },
  subtitle: {
    fontFamily: 'Poppins',
    fontWeight: 500,
    color: PRIMARY_COLOR,
    fontSize: 12,
    lineHeight: 18,
  },
});
