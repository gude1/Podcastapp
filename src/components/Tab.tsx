/* eslint-disable react-native/no-inline-styles */
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import React, {FC, useState} from 'react';
import IconButton from './IconButton';

type TabItem = {
  name: string;
  icon?: React.ReactNode;
  onPress?: () => void;
};
interface TabProps {
  items: TabItem[];
  style?: StyleProp<ViewStyle>;
}

const Tab: FC<TabProps> = ({items, style}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const renderTabItems = () => {
    return items?.map((item, index) => {
      return (
        <IconButton
          key={item.name}
          text={item.name}
          icon={item.icon}
          style={{flex: 1}}
          focused={currentIndex === index}
          onPress={() => {
            setCurrentIndex(index);
            item.onPress && item?.onPress();
          }}
        />
      );
    });
  };

  return <View style={[styles.tabCtn, style]}>{renderTabItems()}</View>;
};

export default Tab;

const styles = StyleSheet.create({
  tabCtn: {
    flexDirection: 'row',
    columnGap: 4,
    flexWrap: 'wrap',
  },
});
