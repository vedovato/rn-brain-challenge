import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';
import { colors } from '../utils/theme';

const EmptyState = () => (
  <Wrapper>
    <Text style={{ fontSize: 60 }}>🥺</Text>
    <Heading>Ops, nenhum contador encontrado...</Heading>
    <Text style={{ color: colors.greyish }}>
      Toque na aba ao lado para começar!
    </Text>
  </Wrapper>
);

const Wrapper = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin: 30px;
`;

const Heading = styled(Text)`
  color: ${colors.greyish};
  margin-vertical: 10px;
  text-align: center;
  font-weight: 700;
  font-size: 20px;
`;

export default EmptyState;
