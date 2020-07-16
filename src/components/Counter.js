import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components';

import { colors } from '../utils/theme';

const Counter = ({ onPress, count, active }) => {
  const COLOR = active ? 'white' : colors.greyish;
  return (
    <CounterItem onPress={onPress} active={active}>
      <Label color={COLOR}>Counter #{count + 1}</Label>
      <Count color={COLOR}>{String(count).padStart(4, '0')}</Count>
    </CounterItem>
  );
};

const CounterItem = styled(TouchableOpacity)`
  background: ${(props) => (props.active ? colors.blueish : 'white')};
  border-radius: 20px;
  border-width: 2px;
  elevation: 2;
  margin: 20px;
  padding: 20px;
`;

const Label = styled(Text)`
  ${(props) => 'color:' + props.color};
  text-align: center;
  font-weight: 700;
`;

const Count = styled(Text)`
  ${(props) => 'color:' + props.color};
  text-align: center;
  font-size: 40px;
`;

export default Counter;
