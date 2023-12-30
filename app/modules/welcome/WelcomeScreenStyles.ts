import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  themeColors,
  verticalScale,
} from '../../theme';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  appTitleView: {
    marginTop: '75%',
    alignSelf: 'center',
  },
  appTitle1: {
    fontFamily: 'actionis',
    color: themeColors.ultraRed,
    alignSelf: 'center',
    fontSize: moderateScale(42),
  },
  appTitle2: {
    fontFamily: 'budmo-jiggler',
    alignSelf: 'center',
    fontSize: moderateScale(37),
    color: themeColors.darkYellow,
  },
  sliderContainer: {
    marginTop: verticalScale(75),
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    alignSelf: 'center',
  },
  sliderImage: {
    width: moderateScale(95),
    height: moderateScale(95),
    marginBottom: verticalScale(25),
    marginHorizontal: horizontalScale(-5),
  },
  sliderText: {
    fontFamily: 'budmo-jiggler',
    color: themeColors.blue,
    alignSelf: 'center',
    fontSize: moderateScale(20),
  },
  yellowSliderText: {color: themeColors.darkYellow},
  pinkSliderText: {color: themeColors.ultraRed},
});
