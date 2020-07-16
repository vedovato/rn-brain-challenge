import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';

const ActionBoxWrapper = ({ label, children, style }) => (
  <Wrapper style={style}>
    <Label>{label}</Label>
    <ButtonGroup>{children}</ButtonGroup>
  </Wrapper>
);

const Wrapper = styled(View)`
  margin: 20px;
`;

const Label = styled(Text)`
  margin: 0 5px 5px;
  font-weight: 700;
`;

const ButtonGroup = styled(View)`
  flex-direction: row;
  justify-content: space-around;
  border: 2px solid #ccc;
  border-radius: 10px;
  background: white;
  padding: 10px 5px;
`;

export default ActionBoxWrapper;
