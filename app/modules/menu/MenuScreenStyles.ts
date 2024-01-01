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
    justifyContent: 'center',
  },
  menuCard: {
    width: '85%',
    alignSelf: 'center',
    backgroundColor: themeColors.ultraRed,
    marginVertical: verticalScale(25),
    paddingVertical: verticalScale(15),
    paddingHorizontal: horizontalScale(15),
    borderRadius: moderateScale(20),
    elevation: moderateScale(60),
  },
  menuCardImage: {
    width: moderateScale(180),
    height: moderateScale(180),
    alignSelf: 'center',
  },
  menuCardTextView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: verticalScale(17.5),
  },
  menuCardText: {
    color: themeColors.accentBlue,
    fontSize: moderateScale(30),
    fontFamily: 'budmo-jiggler',
    marginRight: horizontalScale(5),
  },
  rightArrow: {
    width: moderateScale(40),
    height: moderateScale(40),
  },
});
