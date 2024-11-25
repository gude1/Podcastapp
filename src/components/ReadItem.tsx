/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
  StyleProp,
  ViewStyle,
} from 'react-native';
import React, {FC} from 'react';
import {PRIMARY_COLOR} from '../constants';

interface ReadItemProps {
  img?: ImageSourcePropType;
  style?: StyleProp<ViewStyle>;
  topic?: string;
  subTopic?: string;
  totalSession?: string;
}
const ReadItem: FC<ReadItemProps> = ({
  img = require('../assets/images/moses.png'),
  style,
  topic = 'Moises',
  totalSession = '43',
  subTopic = 'the story of',
}) => {
  return (
    <View style={[styles.ctn, style]}>
      <View style={styles.imgCtn}>
        <Image source={img} style={styles.img} />
      </View>

      {/*  */}
      <View style={[styles.detailsSection]}>
        <Text style={styles.topic} numberOfLines={1} ellipsizeMode="tail">
          {topic}
        </Text>
        <Text numberOfLines={1} ellipsizeMode="tail">
          {subTopic}
        </Text>
        <View style={styles.infoCtn}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../assets/icons/bookmark.png')}
              style={{width: 10, height: 15}}
            />
            <Text style={styles.session}>{totalSession} session</Text>
          </View>

          <TouchableOpacity activeOpacity={0.8}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.readBtn}>Read</Text>
              <Image
                source={require('../assets/icons/arrow_right_color.png')}
                style={{width: 20, height: 10, tintColor: PRIMARY_COLOR}}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ReadItem;

const styles = StyleSheet.create({
  ctn: {
    flexDirection: 'row',
  },
  imgCtn: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    // iOS Shadow
    shadowColor: '#C0C4EA', // Adjust for the desired shadow color
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.45, // Opacity value from hex #C0C4EA73
    shadowRadius: 30, // The blur radius
    // Android Shadow
    elevation: 10, // Approximate depth for Android
  },
  img: {
    width: 81.01,
    height: 80,
  },

  detailsSection: {
    marginLeft: 20,
    flex: 1,
    // borderWidth: 2,
    paddingTop: 10,
  },

  topic: {
    fontFamily: 'Poppins',
    fontWeight: 500,
    color: '#000',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.43,
  },
  subtopic: {
    fontFamily: 'Poppins',
    fontWeight: 500,
    color: '#5E626C',
    marginTop: 5,
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: -0.43,
  },
  infoCtn: {
    marginTop: 10,
    // borderWidth: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  session: {
    fontFamily: 'Poppins',
    fontWeight: 500,
    color: '#5E626C',
    fontSize: 14,
    marginLeft: 10,
    lineHeight: 21,
    letterSpacing: -0.43,
  },
  readBtn: {
    fontFamily: 'Poppins',
    fontWeight: 500,
    color: PRIMARY_COLOR,
    marginRight: 10,
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: -0.43,
  },
});
