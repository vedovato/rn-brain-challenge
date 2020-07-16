import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components';
import tinycolor from 'tinycolor2';

import { colors } from '../utils/theme';

const DICT = {
  ADD: { color: colors.greenish, icon: 'md-add-circle-outline' },
  REMOVE: { color: colors.redish, icon: 'md-remove-circle-outline' },
  INCREMENT: { color: colors.grey, icon: 'caret-up-circle-outline' },
  DECREMENT: { color: colors.grey, icon: 'caret-down-circle-outline' },
  RESET: { color: colors.goldish, icon: 'md-refresh-circle-outline' },
};

const Button = ({ type, onPress, disabled = false }) => {
  const [pressed, setPress] = useState(false);
  return (
    <ButtonWrapper
      color={DICT[type].color}
      activeOpacity={0.8}
      disabled={disabled}
      onPress={onPress}
      onPressIn={() => setPress(true)}
      onPressOut={() => setPress(false)}
      pressed={pressed}>
      <Icon name={DICT[type].icon} color={DICT[type].color} />
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled(TouchableOpacity)`
  flex-direction: row;
  align-self: flex-start;
  justify-content: center;
  border-radius: 7px;
  margin: ${(props) => (props.pressed ? '10px 6px 6px' : '6px')};
  padding: ${(props) => (props.pressed ? '2px 3px 3px' : '3px 3px 6px')};
  background: ${(props) => tinycolor(props.color).darken(15).toString()};
`;

const Icon = styled(Ionicon)`
  font-size: 50px;
  text-align: center;
  padding: 5px 8px 3px;
  background: ${(props) => props.color};
  justify-content: center;
  color: white;
  border: 2px solid;
  border-radius: 5px;
  border-color: ${(props) => tinycolor(props.color).lighten(15).toString()};
`;

export default React.memo(Button);
