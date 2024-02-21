import {StyleSheet} from 'react-native';
import {moderateScale, themeColors, verticalScale} from '../../theme';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  backArrow: {
    width: moderateScale(70),
    height: moderateScale(70),
    marginBottom: verticalScale(5),
  },
  backArrowIcon: {
    width: '100%',
    height: '100%',
  },
  learnCard: {
    flex: 1,
    backgroundColor: themeColors.red,
    marginVertical: verticalScale(10),
    padding: moderateScale(5),
    marginHorizontal: '3.5%',
    borderRadius: moderateScale(30),
  },
  learnCardText: {
    fontSize: moderateScale(120),
    textAlign: 'center',
    fontFamily: 'strenuous-bl',
    color: themeColors.white,
  },
  modal: {
    flex: 1,
    backgroundColor: themeColors.transparentGrayishWhite,
    justifyContent: 'center',
  },
  modalContentContainer: {
    width: '80%',
    alignSelf: 'center',
    borderRadius: moderateScale(40),
    paddingBottom: verticalScale(60),
    backgroundColor: themeColors.white,
    borderWidth: moderateScale(10),
  },
  closeModalButton: {
    width: moderateScale(60),
    height: moderateScale(60),
    alignSelf: 'flex-end',
    marginTop: moderateScale(20),
    marginRight: moderateScale(20),
  },
  closeModalIcon: {
    width: '100%',
    height: '100%',
  },
  modalTitle: {
    fontSize: moderateScale(120),
    textAlign: 'center',
    fontFamily: 'strenuous-bl',
    color: themeColors.white,
  },
  modalText: {
    fontSize: moderateScale(35),
    textAlign: 'center',
    fontFamily: 'strenuous-bl',
    color: themeColors.white,
  },
  modalPlayButton: {
    width: moderateScale(60),
    height: moderateScale(60),
    alignSelf: 'center',
    marginTop: verticalScale(5),
  },
  modalPlayIcon: {
    width: '100%',
    height: '100%',
  },
});
