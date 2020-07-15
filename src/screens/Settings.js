import React from 'react';
import { useSelector } from 'react-redux';
import { SafeAreaView, Text } from 'react-native';

const Settings = () => {
  const { value } = useSelector((state) => state.counter);

  return (
    <SafeAreaView>
      <Text style={{ color: 'red', fontSize: 80 }}>{value}</Text>
    </SafeAreaView>
  );
};

export default Settings;
