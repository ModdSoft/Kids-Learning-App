import {useFocusEffect} from '@react-navigation/native';
import {useCallback, useEffect} from 'react';
import {AppState, AppStateStatus} from 'react-native';
import Sound from 'react-native-sound';

const useBackgroundMusic = () => {
  Sound.setCategory('Playback');
  const backgroundMusic = new Sound(
    'background_music.mp3',
    Sound.MAIN_BUNDLE,
    error => {
      if (error) {
        console.log('failed to load sound', error);
        return;
      }
      backgroundMusic.setVolume(0.15);
      backgroundMusic.setNumberOfLoops(-1);
      backgroundMusic.play(success => {
        if (success) {
          console.log('successfully finished playing');
        } else {
          console.log('playback failed due to audio decoding errors');
        }
      });
    },
  );

  useEffect(() => {
    const handleAppStateChange = (nextAppState: AppStateStatus) => {
      if (nextAppState === 'background') {
        console.log('background');
        backgroundMusic.pause();
      } else if (nextAppState === 'active' && backgroundMusic.isPlaying()) {
        console.log('active');
        backgroundMusic.play();
      }
    };

    const subscription = AppState.addEventListener(
      'change',
      handleAppStateChange,
    );

    return () => {
      subscription.remove();
    };
  }, []);

  useFocusEffect(
    useCallback(() => {
      backgroundMusic.play();

      return () => {
        backgroundMusic.pause();
      };
    }, []),
  );
};

export default useBackgroundMusic;
