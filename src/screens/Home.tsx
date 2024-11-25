/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  ImageBackground,
  View,
  Text,
  StyleSheet,
  ScrollView,
  NativeSyntheticEvent,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import PaginationDot from 'react-native-animated-pagination-dot';
import PagerView from 'react-native-pager-view';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../components/Header';
import {Double} from 'react-native/Libraries/Types/CodegenTypes';
import Tab from '../components/Tab';
import {PRIMARY_COLOR} from '../constants';
import Button from '../components/Button';
import SectionHeader from '../components/SectionHeader';
import ReadItem from '../components/ReadItem';
import PodcastCard from '../components/PodcastCard';

const Home = () => {
  const [pagerIndex, setPagerIndex] = useState(0);
  const TAB_ITEMS = [
    {
      name: 'Download',
      icon: (
        <Image
          source={require('../assets/icons/download.png')}
          style={{width: 30, height: 25}}
        />
      ),
    },
    {
      name: 'Routine',
      icon: (
        <Image
          source={require('../assets/icons/bell.png')}
          style={{width: 19, height: 25}}
        />
      ),
    },
    {
      name: 'Favourites',
      icon: (
        <Image
          source={require('../assets/icons/star.png')}
          style={{width: 26, height: 25}}
        />
      ),
    },
    {
      name: 'Recents',
      icon: (
        <Image
          source={require('../assets/icons/clock.png')}
          style={{width: 26, height: 26}}
        />
      ),
    },
  ];

  const onPageSelected = (
    event: NativeSyntheticEvent<Readonly<{position: Double}>>,
  ) => {
    setPagerIndex(event.nativeEvent.position);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        LeftIcon={
          <Image
            style={styles.headerImg1}
            source={require('../assets/images/tabs/Icon1.png')}
          />
        }
        RightIcon={
          <Image
            style={styles.headerImg2}
            source={require('../assets/images/hamburger.png')}
          />
        }
        style={styles.header}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{paddingBottom: 100}}>
          <View style={styles.pagerCtn}>
            <PagerView
              onPageSelected={onPageSelected}
              initialPage={pagerIndex}
              style={styles.pager}
              pageMargin={5}>
              <View key={0}>
                <ImageBackground
                  style={styles.sliderImg}
                  source={require('../assets/images/slider.png')}>
                  <Text style={styles.sliderImgTopic}>Morning prayer</Text>
                  <Text style={styles.sliderImgDate}>20.10.2022</Text>
                  <Text style={styles.sliderImgDesc}>
                    יום שבת, ה׳ בסיוון תשפ״ב
                  </Text>
                </ImageBackground>
              </View>

              <View key={1}>
                <ImageBackground
                  style={styles.sliderImg}
                  source={require('../assets/images/slider.png')}>
                  <Text style={styles.sliderImgTopic}>Afternoon prayer</Text>
                  <Text style={styles.sliderImgDate}>20.10.2022</Text>
                  <Text style={styles.sliderImgDesc}>
                    יום שבת, ה׳ בסיוון תשפ״ב
                  </Text>
                </ImageBackground>
              </View>

              <View key={2}>
                <ImageBackground
                  style={styles.sliderImg}
                  source={require('../assets/images/slider.png')}>
                  <Text style={styles.sliderImgTopic}>Evening prayer</Text>
                  <Text style={styles.sliderImgDate}>20.10.2022</Text>
                  <Text style={styles.sliderImgDesc}>
                    יום שבת, ה׳ בסיוון תשפ״ב
                  </Text>
                </ImageBackground>
              </View>
            </PagerView>
          </View>

          <View style={styles.pagerIndicatorCtn}>
            <PaginationDot
              activeDotColor={PRIMARY_COLOR}
              inactiveDotColor="#99ADD6"
              curPage={pagerIndex}
              sizeRatio={1.1}
              maxPage={3}
            />
          </View>

          <Tab
            items={TAB_ITEMS}
            style={{marginTop: 40, paddingHorizontal: 20}}
          />

          <View
            style={{
              ...styles.padding,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              flexWrap: 'wrap',
              columnGap: 10,
              marginTop: 10,
            }}>
            <SectionHeader
              title="Shiurim"
              subTitle="(+50 Learn today)"
              actionText="View more"
              style={{width: '100%', marginTop: 60}}
            />
            <PodcastCard />
            <PodcastCard
              img={require('../assets/images/cards/card2.png')}
              name="Tania"
              progress={25}
              duration="10 min"
            />

            <PodcastCard
              img={require('../assets/images/cards/card3.png')}
              name="Rambam"
              progress={78}
              duration="2hrs 30 min"
            />

            <PodcastCard
              img={require('../assets/images/cards/card4.png')}
              name="Hayom Iom"
              progress={100}
              duration="1hr 55min"
            />
          </View>

          <View style={styles.quoteCtn}>
            <View style={styles.quoteCard}>
              <View
                style={{
                  width: 30,
                  height: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: PRIMARY_COLOR,
                  marginTop: 20,
                  borderRadius: 10,
                }}>
                <Image
                  source={require('../assets/icons/quote.png')}
                  style={{width: 17, height: 15, tintColor: 'white'}}
                />
              </View>

              <Text style={styles.quote}>
                In that era, there will be neither famine or war, envy or
                competition, for good will flow in abundance and all the
                delightswill be freely available as dust. The occupation of the
                entire world will be solerly to know G-d.
              </Text>
              <Image
                style={{
                  width: 127,
                  height: 103,
                  position: 'absolute',
                  bottom: 15,
                  right: 15,
                  zIndex: -10,
                }}
                source={require('../assets/icons/quote_down.png')}
              />
              <Text style={styles.quoteAuthor}>- Mishneh Tarah</Text>
            </View>
          </View>

          <View style={styles.padding}>
            <SectionHeader style={{marginTop: 60}} />
            <ReadItem style={{marginTop: 40}} />
            <ReadItem
              topic="Exodus"
              subTopic="the Exodus from Egypt"
              img={require('../assets/images/exodus.png')}
              style={{marginTop: 30}}
              totalSession="21"
            />
          </View>
          <View
            style={{
              paddingHorizontal: 20,
              marginTop: 60,
              alignItems: 'center',
            }}>
            <ImageBackground
              style={{height: 382, width: 335, paddingHorizontal: 20}}
              source={require('../assets/images/banner.png')}>
              <Text style={styles.bannerText}>
                Help other Jews illuminate their lives by studying the Torah
              </Text>

              <Button text="Share Shiurim" style={{marginTop: 40}} />
              <Button
                text="Donation"
                style={{
                  marginTop: 40,
                  backgroundColor: 'transparent',
                  borderWidth: 1,
                  borderColor: 'white',
                }}
              />
            </ImageBackground>
          </View>

          <View style={styles.centerPadding}>
            <View style={styles.appreciationCard}>
              <Text style={styles.appreciationTitle}>Special thanks</Text>
              <Text style={styles.appreciationSubTitle}>
                to Yossi Mandy Lerman
              </Text>
              <Text style={styles.appreciationDesc}>
                thanks to his generous donation, we can stydy in “Shiurim”
                today.
              </Text>

              <Button
                text="Read More"
                RightIcon={
                  <Image
                    source={require('../assets/icons/arrowright.png')}
                    style={{width: 20, height: 20}}
                  />
                }
                style={{width: 150, minWidth: 113, height: 40, minHeight: 30}}
                txtStyle={{fontWeight: 500, fontSize: 14}}
                ctnStyle={{marginTop: 15}}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {},
  centerPadding: {
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  padding: {
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 10,
  },
  headerImg1: {
    width: 27,
    height: 34,
  },
  headerImg2: {
    width: 35,
    height: 34,
  },
  sliderImg: {
    height: 193.5,
    paddingHorizontal: 30,
    justifyContent: 'center',
    marginTop: 30.68,
    maxWidth: 335,
  },
  sliderImgTopic: {
    fontFamily: 'Poppins',
    fontWeight: 500,
    color: 'white',
    lineHeight: 26,
    fontSize: 22,
  },
  sliderImgDate: {
    fontFamily: 'Poppins',
    fontWeight: 400,
    marginTop: 10,
    color: 'white',
    fontSize: 16,
    lineHeight: 26,
  },
  sliderImgDesc: {
    fontFamily: 'Poppins',
    fontWeight: 400,
    color: 'white',
    marginTop: 5,
    fontSize: 16,
    lineHeight: 26,
  },
  pagerCtn: {
    width: '100%',
    alignItems: 'center',
    paddingLeft: 20,
  },
  pager: {
    width: 360,
    height: 200,
  },
  pagerIndicatorCtn: {
    flexDirection: 'row',
    marginTop: 20.25,
    justifyContent: 'center',
  },
  quoteCtn: {
    backgroundColor: '#EBF0F1',
    paddingHorizontal: 20,
    minHeight: 345,
    marginTop: 18,
    width: '100%',
  },
  quoteCard: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingBottom: 40,
    marginVertical: 40,
    minHeight: 270,
    borderRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: '#C0C4EA',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.45,
        shadowRadius: 30,
      },
      android: {
        elevation: 10, // Adjust as needed for shadow depth on Android
      },
    }),
  },
  quote: {
    marginTop: 20,
    fontFamily: 'Prata',
    fontSize: 14,
    color: '#000',
    lineHeight: 26,
  },
  quoteAuthor: {
    fontFamily: 'Prata',
    fontWeight: 400,
    position: 'relative',
    color: '#000000',
    fontSize: 16,
    marginTop: 20,
    lineHeight: 24,
  },
  card: {
    width: 335,
    height: 382,
    backgroundColor: '#001245', // Dark blue background
    borderRadius: 20,
    padding: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    transform: [{rotate: '-3deg'}], // Slight skew
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5, // Shadow for Android
  },
  bannerText: {
    marginTop: 60,
    fontFamily: 'Poppins',
    fontWeight: 600,
    fontSize: 18,
    lineHeight: 26,
    textAlign: 'center',
    color: 'white',
  },
  appreciationCard: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    paddingVertical: 30,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#fff',
    marginTop: 60,
    borderRadius: 20,
    // Shadow for iOS
    shadowColor: '#C0C4EA',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.45, // Adjust based on your needs
    shadowRadius: 30, // The blur radius
    // Shadow for Android
    elevation: 10, // Adjust to approximate the shadow depth
  },
  appreciationTitle: {
    fontFamily: 'Poppins',
    marginTop: 30,
    fontWeight: 600,
    fontSize: 20,
    color: PRIMARY_COLOR,
    lineHeight: 24,
    textAlign: 'center',
  },
  appreciationSubTitle: {
    fontFamily: 'Poppins',
    fontWeight: 600,
    marginTop: 10,
    fontSize: 20,
    color: '#000',
    lineHeight: 24,
    textAlign: 'center',
  },
  appreciationDesc: {
    fontFamily: 'Poppins',
    fontWeight: 400,
    marginTop: 10,
    width: '95%',
    fontSize: 14,
    lineHeight: 22,
    textAlign: 'center',
  },
});
