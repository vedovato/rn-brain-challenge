import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Navigation } from 'react-native-navigation';
import * as Animatable from 'react-native-animatable';
import { colors } from '../utils/theme';

const DICT = {
  add: { color: colors.greenish, text: '🙋 Contador Adicionado!' },
  delete: { color: colors.redish, text: '🙅 Removido!' },
  reset: { color: colors.goldish, text: '👌 Resetado!' },
  increment: { color: colors.greyish, text: '👆 +1' },
  decrement: { color: colors.greyish, text: '👇 -1' },
};

const Toast = ({ componentId, type, delay = 800 }) => {
  const btnRef = React.useRef(null);
  const STYLE = [styles.root, { backgroundColor: DICT[type].color }];

  setTimeout(() => {
    btnRef.current.fadeOutDown(300);
  }, delay);

  setTimeout(() => {
    Navigation.dismissOverlay(componentId);
  }, delay + 200);

  return (
    <Animatable.View ref={btnRef} style={STYLE} useNativeDriver>
      <Text style={styles.text}>{DICT[type].text}</Text>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: '80%',
    elevation: 2,
    borderRadius: 100,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 35,
  },

  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default Toast;
