/* eslint-disable react-native/no-inline-styles */
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Text,
  ImageSourcePropType,
  StyleProp,
  ViewStyle,
} from 'react-native';
import React, {FC} from 'react';
import CustomProgressBar from './CustomProgressBar';

interface PodcastCardProps {
  img?: ImageSourcePropType;
  progress?: number;
  duration?: string;
  style?: StyleProp<ViewStyle>;
  name?: string;
}

const PodcastCard: FC<PodcastCardProps> = ({
  img = require('../assets/images/cards/card1.png'),
  progress = 8,
  style,
  duration = '4m',
  name = 'Jumash',
}) => {
  return (
    <View style={[styles.cardCtn, style]}>
      <ImageBackground source={img} style={styles.card}>
        <CustomProgressBar progress={progress} />
        <View style={styles.bottom}>
          <Text style={styles.progress}>{progress}%</Text>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={require('../assets/icons/clock.png')}
              style={{width: 10, height: 10, tintColor: 'white'}}
            />
            <Text style={styles.min}>{duration}</Text>
          </View>
        </View>
      </ImageBackground>
      <Text style={styles.name}>{name}</Text>

      <View style={styles.ctaCtn}>
        <View style={[styles.ctaBtn, {marginRight: 10}]}>
          <Image
            source={require('../assets/icons/headset.png')}
            style={{width: 10.67, height: 10}}
          />
          <Text style={styles.ctaBtnTxt}>Audio</Text>
        </View>

        <View style={styles.ctaBtn}>
          <Image
            source={require('../assets/icons/video.png')}
            style={{width: 16, height: 10}}
          />
          <Text style={styles.ctaBtnTxt}>Video</Text>
        </View>
      </View>
    </View>
  );
};

export default PodcastCard;

const styles = StyleSheet.create({
  cardCtn: {
    marginTop: 30,
  },
  card: {
    width: 155,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingBottom: 10,
    height: 225,
  },
  bottom: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 10,
    justifyContent: 'space-between',
  },
  progress: {
    fontFamily: 'Poppins',
    fontWeight: 500,
    color: 'white',
    fontSize: 12,
  },
  min: {
    fontFamily: 'Poppins',
    fontWeight: 400,
    color: 'white',
    fontSize: 12,
    marginLeft: 4,
  },
  name: {
    fontFamily: 'Poppins',
    fontWeight: 400,
    color: '#00000',
    marginTop: 10,
    fontSize: 18,
    letterSpacing: -0.49,
  },
  ctaCtn: {
    marginTop: 15,
    flexDirection: 'row',
  },
  ctaBtn: {
    backgroundColor: '#EBF0F1',
    flex: 1,
    padding: 2,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ctaBtnTxt: {
    color: '#5E626C',
    fontFamily: 'Poppins',
    marginLeft: 5,
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 18,
  },
});
