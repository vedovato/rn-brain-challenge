import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';

import { decrement, increment, incrementByAmount } from '../redux/slice';

const Counters = () => {
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <SafeAreaView>
      <Text style={{ color: 'blue', fontSize: 60 }}>{value}</Text>

      <TouchableOpacity
        onPress={() => dispatch(increment())}
        style={{ backgroundColor: 'green' }}>
        <Text>INCREMENT</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => dispatch(decrement())}
        style={{ backgroundColor: 'red' }}>
        <Text>DECREMENT</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => dispatch(incrementByAmount(5))}
        style={{ backgroundColor: 'cyan' }}>
        <Text>INCREMENT +5</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Counters;
